import { OrbitControls } from "@react-three/drei"

export default function RoomScene() {
  return (
    <>
      <OrbitControls />

      <ambientLight intensity={0.5} />

      <mesh rotation={[-Math.PI / 2, 0, 0]}>
        <planeGeometry args={[20, 20]} />
        <meshStandardMaterial color="gray" />
      </mesh>

      <mesh position={[0, 1, 0]}>
        <boxGeometry />
        <meshStandardMaterial color="orange" />
      </mesh>
    </>
  )
}