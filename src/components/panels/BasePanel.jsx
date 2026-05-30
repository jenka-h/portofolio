/**
 * BasePanel.jsx - Reusable panel component for all content panels
 * Enhanced with smooth animations
 */

import { useEffect } from 'react'
import useSystemState from '../../state/useSystemState'

function BasePanel({ title, children, fullscreen = false }) {
  const { goToMenu, bootStage } = useSystemState()

  useEffect(() => {
    if (bootStage !== 'in_panel') return

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        goToMenu()
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [goToMenu, bootStage])

  const containerStyle = {
    fontFamily: "'Space Grotesk', 'Courier New', monospace",
    color: '#e3e1e9',
    backgroundColor: 'transparent',
    padding: fullscreen ? '24px 20px' : '0',
    width: '100%',
    height: '100%',
  }

  const headerStyle = {
    display: 'flex',
    alignItems: 'center',
    gap: '14px',
    marginBottom: fullscreen ? '28px' : '14px',
    paddingBottom: '14px',
    borderBottom: '1px solid #2a3a2a',
    animation: 'fadeIn 0.5s cubic-bezier(0.16, 1, 0.3, 1) forwards',
  }

  const titleStyle = {
    fontFamily: "'Space Grotesk', monospace",
    fontSize: fullscreen ? 24 : 16,
    fontWeight: 600,
    color: '#00ff88',
    letterSpacing: '0.05em',
    textShadow: '0 0 20px rgba(0, 255, 136, 0.5)',
  }

  const backStyle = {
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
    marginTop: fullscreen ? '28px' : '14px',
    paddingTop: '14px',
    borderTop: '1px solid #2a3a2a',
    fontFamily: "'Courier New', monospace",
    fontSize: fullscreen ? 12 : 9,
    color: '#5a8a5a',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
  }

  return (
    <div style={containerStyle}>
      <div style={headerStyle}>
        <span style={{
          color: '#00ff88',
          fontSize: '12px',
          animation: 'subtlePulse 2s ease-in-out infinite',
        }}>▸</span>
        <span style={titleStyle}>{title}</span>
      </div>
      <div style={{
        overflow: 'auto',
        maxHeight: fullscreen ? 'calc(100vh - 280px)' : '120px',
        paddingRight: fullscreen ? '8px' : '0',
        animation: 'fadeIn 0.5s cubic-bezier(0.16, 1, 0.3, 1) 0.1s forwards',
        opacity: 0,
      }}>
        {children}
      </div>
      <div style={backStyle}>
        <span style={{ color: '#00ff88' }}>[ESC]</span>
        <span>Back to Menu</span>
        <span style={{ marginLeft: 'auto', color: '#3a5a3a', fontSize: '14px' }}>⌫</span>
      </div>
    </div>
  )
}

export default BasePanel