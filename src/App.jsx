/**
 * App.jsx - Main Application Component
 *
 * Composes the 3D scene with the CRT overlay effect.
 * Simple and clean - just puts everything together.
 */

import MainScene from './scenes/MainScene'
import CRTOverlay from './components/CRTOverlay'

function App() {
  return (
    <div style={{ width: '100vw', height: '100vh', overflow: 'hidden' }}>
      {/* The 3D scene with the computer */}
      <MainScene />

      {/* CRT effects overlay on top of everything */}
      <CRTOverlay />
    </div>
  )
}

export default App