/**
 * MainScene.jsx - The Main 3D Scene
 *
 * Sets up the Canvas, camera, lighting, and renders all 3D content.
 * Camera is positioned to frame the PC-9801UX model nicely.
 */

import { Canvas } from '@react-three/fiber'
import { OrbitControls, ContactShadows } from '@react-three/drei'
import Computer from '../components/Computer'

function MainScene() {
  return (
    <Canvas
      camera={{
        position: [0, 0.5, 4],
        fov: 50,
        near: 0.1,
        far: 100,
      }}
      style={{ background: '#0a0a0a' }}
      shadows
    >
      {/* Ambient light */}
      <ambientLight intensity={0.5} color="#ffffff" />

      {/* Key light */}
      <directionalLight
        position={[3, 4, 3]}
        intensity={1}
        color="#ffffff"
        castShadow
        shadow-mapSize={[1024, 1024]}
      />

      {/* Fill light */}
      <pointLight
        position={[-2, 2, 2]}
        intensity={0.3}
        color="#ffffff"
      />

      {/* The PC-9801UX computer */}
      <Computer />

      {/* Ground shadow */}
      <ContactShadows
        position={[0, -0.3, 0]}
        opacity={0.5}
        scale={8}
        blur={2}
        far={3}
      />

      {/* Camera controls */}
      <OrbitControls
        enableZoom={false}
        enablePan={false}
        enableRotate={true}
        maxPolarAngle={Math.PI / 2}
        minPolarAngle={Math.PI / 3}
        rotateSpeed={0.2}
      />
    </Canvas>
  )
}

export default MainScene