/**
 * TerminalMenu.jsx - Interactive terminal-style main menu
 */

import { useEffect, useState } from 'react'
import useSystemState from '../state/useSystemState'
import ProfilePanel from './panels/ProfilePanel'
import ProjectsPanel from './panels/ProjectsPanel'
import AchievementsPanel from './panels/AchievementsPanel'
import ExperiencesPanel from './panels/ExperiencesPanel'
import ContactsPanel from './panels/ContactsPanel'

const MENU_ITEMS = [
  { id: 'profile', label: '1. Profile' },
  { id: 'projects', label: '2. Projects' },
  { id: 'achievements', label: '3. Achievements' },
  { id: 'experiences', label: '4. Experiences' },
  { id: 'contacts', label: '5. Contacts' },
]

const PANEL_COMPONENTS = {
  profile: ProfilePanel,
  projects: ProjectsPanel,
  achievements: AchievementsPanel,
  experiences: ExperiencesPanel,
  contacts: ContactsPanel,
}

function TerminalMenu({ fullscreen = false }) {
  const { selectedIndex, activePanel, moveUp, moveDown, setActivePanel, bootStage } = useSystemState()

  const [menuVisible, setMenuVisible] = useState(true)

  useEffect(() => {
    if (bootStage !== 'fullscreen' && bootStage !== 'in_panel') return

    const handleKeyDown = (e) => {
      if (bootStage === 'in_panel' && e.key === 'Escape') {
        setActivePanel(null)
        setMenuVisible(true)
        return
      }

      if (menuVisible) {
        switch (e.key) {
          case 'ArrowUp':
          case 'w':
          case 'W':
            e.preventDefault()
            moveUp()
            break
          case 'ArrowDown':
          case 's':
          case 'S':
            e.preventDefault()
            moveDown()
            break
          case 'Enter':
          case 'z':
          case 'Z':
            e.preventDefault()
            setActivePanel(MENU_ITEMS[selectedIndex].id)
            setMenuVisible(false)
            break
        }
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [selectedIndex, moveUp, moveDown, setActivePanel, bootStage, menuVisible])

  const containerStyle = {
    fontFamily: '"Courier New", Courier, monospace',
    fontSize: fullscreen ? '16px' : '10px',
    color: '#33ff33',
    backgroundColor: '#000000',
    border: fullscreen ? '2px solid #333333' : 'none',
    padding: fullscreen ? '40px' : '10px',
    width: fullscreen ? '500px' : '240px',
    height: fullscreen ? '400px' : '170px',
    textShadow: '0 0 5px #33ff33',
    boxShadow: fullscreen ? '0 0 30px rgba(51, 255, 51, 0.2)' : 'none',
  }

  const selectedStyle = {
    color: '#ffcc00',
    fontWeight: 'bold',
    textShadow: '0 0 15px #ffcc00',
  }

  if (activePanel && PANEL_COMPONENTS[activePanel]) {
    const PanelComponent = PANEL_COMPONENTS[activePanel]
    return (
      <div style={containerStyle}>
        <PanelComponent fullscreen={fullscreen} />
      </div>
    )
  }

  return (
    <div style={containerStyle}>
      <div style={{ color: '#ffcc00', marginBottom: '15px', fontSize: fullscreen ? '20px' : '12px' }}>
        ═══════════════════════════════
        <br />
        SYSTEM MENU v1.0
        <br />
        ═══════════════════════════════
      </div>

      {MENU_ITEMS.map((item, index) => {
        const isSelected = selectedIndex === index
        return (
          <div
            key={item.id}
            style={{
              marginBottom: fullscreen ? '12px' : '4px',
              ...(isSelected ? selectedStyle : {}),
            }}
          >
            {isSelected ? '>> ' : '    '}
            {item.label}
          </div>
        )
      })}

      <div style={{
        marginTop: fullscreen ? '20px' : '8px',
        color: '#1a8c1a',
        fontSize: fullscreen ? '12px' : '8px',
        borderTop: '1px solid #1a8c1a',
        paddingTop: fullscreen ? '15px' : '4px',
      }}>
        [W/S] Navigate | [Z] Select
      </div>
    </div>
  )
}

export default TerminalMenu