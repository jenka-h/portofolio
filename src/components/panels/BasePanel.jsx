/**
 * BasePanel.jsx - Reusable panel component for all content panels
 *
 * Provides consistent styling and back button for all menu panels.
 * All panels share this structure:
 * - Header with panel name
 * - Content area
 * - Back button
 */

import { useEffect } from 'react'
import useSystemState from '../../state/useSystemState'

function BasePanel({ title, children }) {
  const { goToMenu, bootStage } = useSystemState()

  // Handle Escape key to go back
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
    fontSize: '10px',
    color: '#33ff33',
    backgroundColor: '#0a0a0a',
    padding: '10px',
    width: '240px',
    height: '170px',
    overflow: 'hidden',
    textShadow: '0 0 3px #33ff33',
  }

  const headerStyle = {
    color: '#ffcc00',
    marginBottom: '8px',
    borderBottom: '1px solid #1a8c1a',
    paddingBottom: '4px',
  }

  const backStyle = {
    color: '#1a8c1a',
    fontSize: '8px',
    marginTop: '8px',
    borderTop: '1px solid #1a8c1a',
    paddingTop: '4px',
  }

  return (
    <div style={containerStyle}>
      <div style={headerStyle}>▶ {title}</div>
      <div style={{ overflow: 'auto', height: '115px' }}>
        {children}
      </div>
      <div style={backStyle}>
        [ESC] Back to Menu
      </div>
    </div>
  )
}

export default BasePanel