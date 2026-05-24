/**
 * Computer.jsx - The 3D Computer Component
 *
 * Shows the PC-9801UX model with a small boot screen.
 * After pressing Z, the FullscreenTerminal appears and 3D scene fades.
 */

import { useRef, Suspense } from 'react'
import { useFrame } from '@react-three/fiber'
import { Html, useGLTF } from '@react-three/drei'
import useSystemState from '../state/useSystemState'
import BootSequence from './BootSequence'
import LogoScreen from './LogoScreen'

// Loading indicator
function LoadingIndicator() {
  return (
    <mesh position={[0, 0, 0]}>
      <boxGeometry args={[2, 1.5, 0.5]} />
      <meshStandardMaterial color="#333333" />
    </mesh>
  )
}

function ComputerWithModel() {
  const { bootStage } = useSystemState()
  const groupRef = useRef()

  // Load the 3D model
  const gltf = useGLTF('/pc-9801ux.glb')

  // Subtle breathing animation (only during boot)
  useFrame((state) => {
    if (groupRef.current && bootStage !== 'booted') {
      const t = state.clock.elapsedTime
      groupRef.current.rotation.y = Math.sin(t * 0.3) * 0.015
      groupRef.current.rotation.x = Math.sin(t * 0.5) * 0.008
    }
  })

  return (
    <group ref={groupRef}>
      {/* The PC-9801UX 3D model */}
      <primitive
        object={gltf.scene}
        scale={0.02}
        position={[0, -1, 0]}
      />

      {/* Screen content - shows logo first, then boot sequence */}
      <Html
        position={[0, 0.85, 0.11]}
        transform
        scale={0.25}
        rotation={[0, 0, 0]}
        occlude={false}
        zIndexRange={[100, 0]}
      >
        {bootStage === 'logo' ? (
          <LogoScreen />
        ) : (
          <BootSequence />
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