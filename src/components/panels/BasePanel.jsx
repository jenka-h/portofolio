/**
 * BasePanel.jsx - Reusable panel component for all content panels
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
    fontFamily: '"Courier New", Courier, monospace',
    fontSize: fullscreen ? '16px' : '10px',
    color: '#33ff33',
    backgroundColor: '#000000',
    padding: fullscreen ? '30px' : '10px',
    width: '100%',
    height: '100%',
    textShadow: '0 0 5px #33ff33',
  }

  const headerStyle = {
    color: '#ffcc00',
    marginBottom: fullscreen ? '20px' : '8px',
    borderBottom: '1px solid #1a8c1a',
    paddingBottom: fullscreen ? '10px' : '4px',
    fontSize: fullscreen ? '20px' : '12px',
  }

  const backStyle = {
    color: '#1a8c1a',
    fontSize: fullscreen ? '14px' : '8px',
    marginTop: fullscreen ? '30px' : '8px',
    borderTop: '1px solid #1a8c1a',
    paddingTop: fullscreen ? '15px' : '4px',
  }

  return (
    <div style={containerStyle}>
      <div style={headerStyle}>▶ {title}</div>
      <div style={{ overflow: 'auto', height: fullscreen ? '280px' : '115px' }}>
        {children}
      </div>
      <div style={backStyle}>
        [ESC] Back to Menu
      </div>
    </div>
  )
}

export default BasePanel