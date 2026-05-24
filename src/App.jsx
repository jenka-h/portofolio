/**
 * App.jsx - Main Application
 */

import { useEffect, useState, useRef } from 'react'
import MainScene from './scenes/MainScene'
import FullscreenTerminal from './components/FullscreenTerminal'
import CRTOverlay from './components/CRTOverlay'
import useSystemState from './state/useSystemState'

function App() {
  const { showFullscreen } = useSystemState()
  const [sceneOpacity, setSceneOpacity] = useState(1)
  const [sceneScale, setSceneScale] = useState(1)
  const animationRef = useRef(null)

  useEffect(() => {
    if (showFullscreen) {
      // Animate zoom in + fade out
      let startTime = null
      const duration = 600 // ms

      const animate = (timestamp) => {
        if (!startTime) startTime = timestamp
        const progress = Math.min((timestamp - startTime) / duration, 1)

        // Easing: ease-out for smooth deceleration
        const eased = 1 - Math.pow(1 - progress, 3)

        // Scale from 1 to 1.5 (zoom in)
        setSceneScale(1 + eased * 0.5)

        // Fade from 1 to 0
        setSceneOpacity(1 - eased)

        if (progress < 1) {
          animationRef.current = requestAnimationFrame(animate)
        }
      }

      animationRef.current = requestAnimationFrame(animate)
    } else {
      setSceneOpacity(1)
      setSceneScale(1)
    }

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current)
      }
    }
  }, [showFullscreen])

  return (
    <div style={{ width: '100vw', height: '100vh', overflow: 'hidden' }}>
      {/* 3D Scene with zoom + fade effect */}
      <div style={{
        opacity: sceneOpacity,
        transform: `scale(${sceneScale})`,
        transformOrigin: 'center center',
        width: '100%',
        height: '100%',
        transition: sceneOpacity === 1 ? 'none' : undefined,
      }}>
        <MainScene />
      </div>

      {/* CRT overlay (only when scene is visible) */}
      {sceneOpacity > 0 && <CRTOverlay />}

      {/* Fullscreen terminal page */}
      <FullscreenTerminal />
    </div>
  )
}

export default App