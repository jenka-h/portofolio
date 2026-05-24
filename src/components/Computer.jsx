/**
 * Computer.jsx - The 3D Computer Component
 *
 * Uses the PC-9801UX 3D model.
 * During boot: show full computer, small screen
 * After pressing Z: zoom in to focus on the screen
 */

import { useRef, Suspense, useState, useEffect } from 'react'
import { useFrame } from '@react-three/fiber'
import { Html, useGLTF } from '@react-three/drei'
import useSystemState from '../state/useSystemState'
import BootSequence from './BootSequence'
import TerminalMenu from './TerminalMenu'

// Loading indicator
function LoadingIndicator() {
  return (
    <group>
      <mesh position={[0, 0, 0]}>
        <boxGeometry args={[2, 1.5, 0.5]} />
        <meshStandardMaterial color="#333333" />
      </mesh>
    </group>
  )
}

// Main computer component with 3D model
function ComputerWithModel() {
  const { bootStage } = useSystemState()
  const groupRef = useRef()
  const htmlRef = useRef()

  // Load the 3D model
  const gltf = useGLTF('/pc-9801ux.glb')

  // Animation values
  const [isZoomed, setIsZoomed] = useState(false)
  const zoomProgress = useRef(0)

  // Detect when boot stage changes
  useEffect(() => {
    if (bootStage === 'booted') {
      setIsZoomed(true)
    } else if (bootStage === 'booting' || bootStage === 'waiting_for_input') {
      setIsZoomed(false)
      zoomProgress.current = 0
    }
  }, [bootStage])

  // Animate scale and position
  useFrame((state, delta) => {
    // Smoothly animate zoom
    const targetZoom = isZoomed ? 1 : 0
    zoomProgress.current += (targetZoom - zoomProgress.current) * delta * 3

    if (groupRef.current) {
      const t = state.clock.elapsedTime

      // Scale the entire computer
      const baseScale = 0.1
      const zoomedScale = 0.35
      const currentScale = baseScale + (zoomedScale - baseScale) * zoomProgress.current
      groupRef.current.scale.set(currentScale, currentScale, currentScale)

      // Move computer up when zoomed (to center it)
      const baseY = 0
      const zoomedY = 1.5
      groupRef.current.position.y = baseY + (zoomedY - baseY) * zoomProgress.current

      // Subtle breathing (only when not zoomed)
      if (zoomProgress.current < 0.5) {
        groupRef.current.rotation.y = Math.sin(t * 0.3) * 0.015
        groupRef.current.rotation.x = Math.sin(t * 0.5) * 0.008
      } else {
        // Less movement when zoomed
        groupRef.current.rotation.y = Math.sin(t * 0.1) * 0.003
        groupRef.current.rotation.x = 0
      }
    }
  })

  return (
    <group ref={groupRef}>
      {/* The PC-9801UX 3D model */}
      <primitive
        object={gltf.scene}
        scale={0.18}
        position={[0, 0, 0]}
      />

      {/* Screen content - LARGER scale and positioned higher */}
      <Html
        position={[0, 0.22, 0.11]}
        transform
        scale={0.018}
        rotation={[0, 0, 0]}
        occlude={false}
        zIndexRange={[100, 0]}
      >
        {bootStage === 'booting' || bootStage === 'waiting_for_input' ? (
          <BootSequence />
        ) : (
          <TerminalMenu />
        )}
      </Html>
    </group>
  )
}

export default function Computer() {
  return (
    <Suspense fallback={<LoadingIndicator />}>
      <ComputerWithModel />
    </Suspense>
  )
}