/**
 * FullscreenTerminal.jsx - Full screen terminal page
 *
 * A separate terminal page that appears after pressing Z.
 * Uses CSS transitions for smooth fade effect.
 */

import { useEffect, useState } from 'react'
import useSystemState from '../state/useSystemState'
import TerminalMenu from './TerminalMenu'

function FullscreenTerminal() {
  const { showFullscreen, bootStage } = useSystemState()
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    if (showFullscreen) {
      // Small delay for fade-in effect
      const timer = setTimeout(() => setVisible(true), 50)
      return () => clearTimeout(timer)
    } else {
      setVisible(false)
    }
  }, [showFullscreen])

  if (!showFullscreen) return null

  return (
    <div style={{
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100vw',
      height: '100vh',
      backgroundColor: '#000000',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      opacity: visible ? 1 : 0,
      transition: 'opacity 0.5s ease-in-out',
      zIndex: 2000,
    }}>
      <TerminalMenu fullscreen />
    </div>
  )
}

export default FullscreenTerminal