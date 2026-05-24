/**
 * TerminalMenu.jsx - Interactive terminal-style main menu
 *
 * Displays 5 menu items (Profile, Projects, Achievements, Experiences, Contacts)
 * with keyboard navigation (W/S or Arrow keys) and selection (Z or Enter).
 *
 * When a panel is selected, it displays the panel content instead of the menu.
 */

import { useEffect } from 'react'
import useSystemState from '../state/useSystemState'

// Import all panel components
import ProfilePanel from './panels/ProfilePanel'
import ProjectsPanel from './panels/ProjectsPanel'
import AchievementsPanel from './panels/AchievementsPanel'
import ExperiencesPanel from './panels/ExperiencesPanel'
import ContactsPanel from './panels/ContactsPanel'

// Menu configuration - easy to modify or extend
const MENU_ITEMS = [
  { id: 'profile', label: '1. Profile', description: 'About me' },
  { id: 'projects', label: '2. Projects', description: 'My work' },
  { id: 'achievements', label: '3. Achievements', description: 'Awards & certs' },
  { id: 'experiences', label: '4. Experiences', description: 'Work history' },
  { id: 'contacts', label: '5. Contacts', description: 'Get in touch' },
]

// Map panel IDs to their components
const PANEL_COMPONENTS = {
  profile: ProfilePanel,
  projects: ProjectsPanel,
  achievements: AchievementsPanel,
  experiences: ExperiencesPanel,
  contacts: ContactsPanel,
}

function TerminalMenu() {
  const {
    selectedIndex,
    activePanel,
    moveUp,
    moveDown,
    setActivePanel,
    bootStage,
  } = useSystemState()

  // Keyboard navigation (only when showing menu)
  useEffect(() => {
    // Only handle keys when booted and showing menu (not in a panel)
    if (bootStage !== 'booted') return

    const handleKeyDown = (e) => {
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
          // Open the selected panel
          setActivePanel(MENU_ITEMS[selectedIndex].id)
          break
        default:
          break
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [selectedIndex, moveUp, moveDown, setActivePanel, bootStage])

  // Styles
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

  const selectedStyle = {
    color: '#ffcc00',
    fontWeight: 'bold',
    textShadow: '0 0 10px #ffcc00',
  }

  // If we're in a panel, render the panel component
  if (activePanel && PANEL_COMPONENTS[activePanel]) {
    const PanelComponent = PANEL_COMPONENTS[activePanel]
    return <PanelComponent />
  }

  // Otherwise, render the menu
  return (
    <div style={containerStyle}>
      {/* Header */}
      <div style={{ color: '#ffcc00', marginBottom: '8px' }}>
        ══════════════════════
        <br />
        SYSTEM MENU v1.0
        <br />
        ══════════════════════
      </div>

      {/* Menu items */}
      {MENU_ITEMS.map((item, index) => {
        const isSelected = selectedIndex === index
        return (
          <div
            key={item.id}
            style={{
              marginBottom: '4px',
              cursor: 'pointer',
              ...(isSelected ? selectedStyle : {}),
            }}
          >
            {/* Selection indicator */}
            {isSelected ? '>> ' : '    '}
            {/* Item label */}
            <span style={isSelected ? { color: '#ffcc00' } : {}}>
              {item.label}
            </span>
          </div>
        )
      })}

      {/* Controls hint */}
      <div
        style={{
          marginTop: '8px',
          color: '#1a8c1a',
          fontSize: '8px',
          borderTop: '1px solid #1a8c1a',
          paddingTop: '4px',
        }}
      >
        [W/S] Navigate | [Z] Select
      </div>
    </div>
  )
}

export default TerminalMenu