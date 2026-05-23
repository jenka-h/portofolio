import { Canvas } from "@react-three/fiber"
import RoomScene from "./scenes/RoomScene"

export default function App() {
  return (
    <Canvas camera={{ position: [0, 2, 5], fov: 75 }}>
      <RoomScene />
    </Canvas>
  )
}