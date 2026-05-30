/**
 * TerminalMenu.jsx - Interactive terminal-style main menu
 * Enhanced with smooth animations and greeting animation
 */

import { useEffect, useState, useRef } from 'react'
import useSystemState from '../state/useSystemState'
import ProfilePanel from './panels/ProfilePanel'
import ProjectsPanel from './panels/ProjectsPanel'
import AchievementsPanel from './panels/AchievementsPanel'
import ExperiencesPanel from './panels/ExperiencesPanel'
import PapersPanel from './panels/PapersPanel'
import ContactsPanel from './panels/ContactsPanel'

// User profile avatar section with greeting animation
function UserProfile({ fullscreen = false }) {
  const greetings = ['Hi', 'Hello', 'Hey', 'Greetings', 'Salutations']
  const [greetingIndex, setGreetingIndex] = useState(0)
  const [fading, setFading] = useState(false)

  useEffect(() => {
    const interval = setInterval(() => {
      setFading(true)
      setTimeout(() => {
        setGreetingIndex((prev) => (prev + 1) % greetings.length)
        setFading(false)
      }, 300)
    }, 2000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      marginTop: fullscreen ? 24 : 12,
      marginBottom: fullscreen ? 32 : 24,
      paddingBottom: fullscreen ? 24 : 16,
      animation: 'fadeIn 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards',
    }}>
      {/* Avatar with glow effect */}
      <div style={{
        width: fullscreen ? 100 : 60,
        height: fullscreen ? 100 : 60,
        borderRadius: '50%',
        background: 'linear-gradient(135deg, #00ff88 0%, #00cc6a 100%)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontFamily: "'Space Grotesk', monospace",
        fontSize: fullscreen ? 32 : 18,
        fontWeight: 700,
        color: '#0a2e1a',
        marginBottom: fullscreen ? 16 : 8,
        marginTop: fullscreen ? 20 : 8,
        position: 'relative',
        boxShadow: '0 0 30px rgba(0, 255, 136, 0.4), 0 0 60px rgba(0, 255, 136, 0.2)',
        transition: 'all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1)',
        cursor: 'pointer',
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = 'scale(1.08)'
        e.currentTarget.style.boxShadow = '0 0 50px rgba(0, 255, 136, 0.5), 0 0 80px rgba(0, 255, 136, 0.3)'
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = 'scale(1)'
        e.currentTarget.style.boxShadow = '0 0 30px rgba(0, 255, 136, 0.4), 0 0 60px rgba(0, 255, 136, 0.2)'
      }}
      >
        JK
        {/* Status indicator */}
        <div style={{
          position: 'absolute',
          bottom: fullscreen ? 4 : 2,
          right: fullscreen ? 4 : 2,
          width: fullscreen ? 16 : 10,
          height: fullscreen ? 16 : 10,
          background: '#00ff88',
          borderRadius: '50%',
          border: fullscreen ? '3px solid #1a1b21' : '2px solid #1a1b21',
          boxShadow: '0 0 10px #00ff88, 0 0 20px rgba(0, 255, 136, 0.8)',
          animation: 'statusPulse 2s ease-in-out infinite',
        }} />
      </div>

      {/* Animated Greeting */}
      <div style={{
        position: 'relative',
        width: '100%',
        height: fullscreen ? 44 : 28,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: fullscreen ? 4 : 2,
      }}>
        <span style={{
          fontFamily: "'Space Grotesk', monospace",
          fontSize: fullscreen ? 26 : 16,
          fontWeight: 700,
          color: '#00ff88',
          textShadow: '0 0 25px rgba(0, 255, 136, 0.6)',
          opacity: fading ? 0 : 1,
          transform: fading ? 'translateY(-8px)' : 'translateY(0)',
          transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
        }}>
          {greetings[greetingIndex]}
        </span>
      </div>

      {/* Name */}
      <div style={{
        fontFamily: "'Space Grotesk', monospace",
        fontSize: fullscreen ? 20 : 14,
        fontWeight: 600,
        color: '#e3e1e9',
        marginBottom: fullscreen ? 6 : 3,
        letterSpacing: '0.02em',
        textAlign: 'center',
      }}>
        I'm Jennifer Khang
      </div>

      {/* Description */}
      <div style={{
        fontFamily: "'Courier New', monospace",
        fontSize: fullscreen ? 11 : 8,
        color: '#5a8a5a',
        marginBottom: fullscreen ? 16 : 8,
        letterSpacing: '0.01em',
        textAlign: 'center',
        lineHeight: 1.5,
        width: 'fit-content',
        maxWidth: '50%',
        padding: '0px 10px 20px 10px',
      }}>
        Interested in Machine Learning and Data, Product Developer, and Project Management
      </div>

      {/* Resume Button */}
      <a
        href="https://github.com"
        target="_blank"
        rel="noopener noreferrer"
        style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: '8px',
          padding: fullscreen ? '10px 22px' : '6px 14px',
          fontFamily: "'Space Grotesk', monospace",
          fontSize: fullscreen ? 12 : 9,
          fontWeight: 500,
          color: '#0a2e1a',
          background: 'linear-gradient(135deg, #00ff88 0%, #00cc6a 100%)',
          borderRadius: '8px',
          textDecoration: 'none',
          boxShadow: '0 0 20px rgba(0, 255, 136, 0.3)',
          transition: 'all 0.35s cubic-bezier(0.34, 1.56, 0.64, 1)',
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = 'translateY(-2px) scale(1.02)'
          e.currentTarget.style.boxShadow = '0 0 30px rgba(0, 255, 136, 0.5)'
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = 'translateY(0) scale(1)'
          e.currentTarget.style.boxShadow = '0 0 20px rgba(0, 255, 136, 0.3)'
        }}
      >
        <svg width={fullscreen ? 14 : 10} height={fullscreen ? 14 : 10} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
          <polyline points="14 2 14 8 20 8"/>
          <line x1="12" y1="18" x2="12" y2="12"/>
          <line x1="9" y1="15" x2="15" y2="15"/>
        </svg>
        View Resume
      </a>
    </div>
  )
}

const MENU_ITEMS = [
  {
    id: 'profile',
    label: 'PROFILE',
    desc: 'About me & skills',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
        <circle cx="12" cy="7" r="4"/>
      </svg>
    ),
  },
  {
    id: 'projects',
    label: 'PROJECTS',
    desc: 'My work & portfolio',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <polyline points="16 18 22 12 16 6"/>
        <polyline points="8 6 2 12 8 18"/>
      </svg>
    ),
  },
  {
    id: 'achievements',
    label: 'ACHIEVEMENTS',
    desc: 'Awards & recognition',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
      </svg>
    ),
  },
  {
    id: 'experiences',
    label: 'EXPERIENCES',
    desc: 'Work history',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <rect x="2" y="7" width="20" height="14" rx="2" ry="2"/>
        <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/>
      </svg>
    ),
  },
  {
    id: 'papers',
    label: 'RESEARCH',
    desc: 'Publications & papers',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
        <polyline points="14 2 14 8 20 8"/>
        <line x1="16" y1="13" x2="8" y2="13"/>
        <line x1="16" y1="17" x2="8" y2="17"/>
      </svg>
    ),
  },
  {
    id: 'contacts',
    label: 'CONTACT',
    desc: 'Get in touch',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
        <polyline points="22,6 12,13 2,6"/>
      </svg>
    ),
  },
]

const PANEL_COMPONENTS = {
  profile: ProfilePanel,
  projects: ProjectsPanel,
  achievements: AchievementsPanel,
  experiences: ExperiencesPanel,
  papers: PapersPanel,
  contacts: ContactsPanel,
}

function TerminalMenu({ fullscreen = false }) {
  const { selectedIndex, activePanel, moveUp, moveDown, setActivePanel, bootStage, goToMenu } = useSystemState()

  const [menuVisible, setMenuVisible] = useState(true)
  const [animatingOut, setAnimatingOut] = useState(false)
  const [animatingIn, setAnimatingIn] = useState(false)
  const menuRef = useRef(null)
  const itemRefs = useRef([])

  // Scroll selected item into view
  useEffect(() => {
    if (menuVisible && itemRefs.current[selectedIndex]) {
      itemRefs.current[selectedIndex].scrollIntoView({
        behavior: 'smooth',
        block: 'nearest',
      })
    }
  }, [selectedIndex, menuVisible])

  useEffect(() => {
    if (bootStage !== 'fullscreen' && bootStage !== 'in_panel') return

    const handleKeyDown = (e) => {
      if (e.key === 'ArrowUp' || e.key === 'ArrowDown') {
        e.preventDefault()
      }

      if (bootStage === 'in_panel' && e.key === 'Escape') {
        setAnimatingOut(true)
        setTimeout(() => {
          goToMenu()
          setMenuVisible(true)
          setAnimatingIn(true)
          setTimeout(() => setAnimatingIn(false), 400)
          setAnimatingOut(false)
        }, 200)
        return
      }

      if (menuVisible && !animatingOut) {
        switch (e.key) {
          case 'ArrowUp':
            moveUp()
            break
          case 'ArrowDown':
            moveDown()
            break
          case 'w':
          case 'W':
            moveUp()
            break
          case 's':
          case 'S':
            moveDown()
            break
          case 'Enter':
          case 'z':
          case 'Z':
            setAnimatingOut(true)
            setTimeout(() => {
              setActivePanel(MENU_ITEMS[selectedIndex].id)
              setMenuVisible(false)
              setAnimatingOut(false)
            }, 200)
            break
        }
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [selectedIndex, moveUp, moveDown, setActivePanel, bootStage, menuVisible, goToMenu, animatingOut])

  // Smooth panel view styles
  const panelViewStyle = {
    flex: 1,
    minHeight: 0,
    overflow: 'auto',
    animation: 'fadeIn 0.4s cubic-bezier(0.16, 1, 0.3, 1) forwards',
  }

  const panelHeaderStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '20px 24px',
    borderBottom: '1px solid #2a3a2a',
  }

  const panelBackBtnStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: fullscreen ? 44 : 28,
    height: fullscreen ? 44 : 28,
    fontFamily: "'Courier New', monospace",
    fontSize: fullscreen ? 20 : 12,
    color: '#00ff88',
    background: 'transparent',
    border: '1px solid #2a3a2a',
    borderRadius: '10px',
    cursor: 'pointer',
    transition: 'all 0.35s cubic-bezier(0.34, 1.56, 0.64, 1)',
    position: 'relative',
    overflow: 'hidden',
  }

  // Render panel view with smooth transition
  if (activePanel && PANEL_COMPONENTS[activePanel]) {
    const PanelComponent = PANEL_COMPONENTS[activePanel]
    const currentItem = MENU_ITEMS.find(item => item.id === activePanel)

    return (
      <div style={{
        width: '100%',
        height: '100%',
        background: 'rgba(18, 19, 24, 0.98)',
        display: 'flex',
        flexDirection: 'column',
        animation: animatingOut ? 'fadeOut 0.2s ease forwards' : 'fadeInScale 0.4s cubic-bezier(0.16, 1, 0.3, 1) forwards',
      }}>
        {/* Panel Header */}
        <div style={panelHeaderStyle}>
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '14px',
          }}>
            {/* Icon with rotation on hover */}
            <div style={{
              width: fullscreen ? 44 : 28,
              height: fullscreen ? 44 : 28,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              background: 'rgba(0, 255, 136, 0.15)',
              borderRadius: '10px',
              color: '#00ff88',
              transition: 'all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1)',
            }}>
              <div style={{ width: '60%', height: '60%' }}>
                {currentItem?.icon}
              </div>
            </div>
            <span style={{
              fontFamily: "'Space Grotesk', monospace",
              fontSize: fullscreen ? 20 : 14,
              fontWeight: 600,
              color: '#00ff88',
              letterSpacing: '0.05em',
              textShadow: '0 0 20px rgba(0, 255, 136, 0.5)',
            }}>
              {currentItem?.label}
            </span>
          </div>
          <button
            style={panelBackBtnStyle}
            onClick={() => {
              setAnimatingOut(true)
              setTimeout(() => {
                goToMenu()
                setMenuVisible(true)
                setAnimatingIn(true)
                setTimeout(() => setAnimatingIn(false), 400)
                setAnimatingOut(false)
              }, 200)
            }}
            title="Back to Menu (ESC)"
            onMouseEnter={(e) => {
              e.currentTarget.style.background = 'rgba(0, 255, 136, 0.1)'
              e.currentTarget.style.borderColor = '#00ff88'
              e.currentTarget.style.boxShadow = '0 0 25px rgba(0, 255, 136, 0.3)'
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = 'transparent'
              e.currentTarget.style.borderColor = '#2a3a2a'
              e.currentTarget.style.boxShadow = 'none'
            }}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#00ff88" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M19 12H5M12 19l-7-7 7-7"/>
            </svg>
          </button>
        </div>

        {/* Panel Content */}
        <div style={panelViewStyle}>
          <PanelComponent fullscreen={fullscreen} />
        </div>
      </div>
    )
  }

  // Menu view styles
  const containerStyle = {
    width: '100%',
    height: '100%',
    background: 'rgba(18, 19, 24, 0.98)',
    display: 'flex',
    flexDirection: 'column',
    animation: animatingIn ? 'fadeIn 0.4s cubic-bezier(0.16, 1, 0.3, 1) forwards' :
               animatingOut ? 'fadeOut 0.2s ease forwards' : 'none',
  }

  const headerStyle = {
    textAlign: 'center',
    padding: '24px 20px',
    borderBottom: '1px solid #2a3a2a',
  }

  const titleStyle = {
    fontFamily: "'Space Grotesk', monospace",
    fontSize: fullscreen ? 20 : 14,
    fontWeight: 700,
    color: '#00ff88',
    letterSpacing: '0.2em',
    textTransform: 'uppercase',
    marginBottom: fullscreen ? 6 : 4,
    textShadow: '0 0 25px rgba(0, 255, 136, 0.5)',
  }

  const subtitleStyle = {
    fontFamily: "'Courier New', monospace",
    fontSize: fullscreen ? 11 : 8,
    color: '#5a8a5a',
    letterSpacing: '0.1em',
  }

  // Menu item styles with smooth transitions
  const menuItemBaseStyle = {
    display: 'flex',
    alignItems: 'center',
    gap: fullscreen ? '16px' : '10px',
    padding: fullscreen ? '16px 20px' : '10px 14px',
    background: 'rgba(26, 27, 33, 0.5)',
    border: '1px solid #2a3a2a',
    borderRadius: '12px',
    cursor: 'pointer',
    fontFamily: "'Space Grotesk', monospace",
    color: '#e3e1e9',
    position: 'relative',
    overflow: 'hidden',
    transition: 'all 0.35s cubic-bezier(0.22, 1, 0.36, 1)',
    opacity: 0,
    transform: 'translateX(-20px)',
  }

  const selectedMenuItemStyle = {
    ...menuItemBaseStyle,
    background: 'rgba(0, 255, 136, 0.1)',
    borderColor: '#00ff88',
    boxShadow: '0 0 30px rgba(0, 255, 136, 0.2), 0 10px 30px rgba(0, 0, 0, 0.2)',
    transform: 'translateX(8px)',
  }

  const iconContainerStyle = {
    width: fullscreen ? 40 : 26,
    height: fullscreen ? 40 : 26,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    background: 'rgba(0, 255, 136, 0.1)',
    borderRadius: '10px',
    color: '#00ff88',
    transition: 'all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1)',
  }

  const selectedIconContainerStyle = {
    ...iconContainerStyle,
    background: 'rgba(0, 255, 136, 0.2)',
    boxShadow: '0 0 15px rgba(0, 255, 136, 0.3)',
  }

  const menuItemLabelStyle = {
    fontWeight: 600,
    fontSize: fullscreen ? 15 : 11,
    letterSpacing: '0.05em',
  }

  const menuItemDescStyle = {
    fontFamily: "'Courier New', monospace",
    fontSize: fullscreen ? 11 : 8,
    color: '#5a8a5a',
    marginTop: '3px',
  }

  const footerStyle = {
    marginTop: 'auto',
    padding: fullscreen ? '16px 0' : '10px 0',
    display: 'flex',
    justifyContent: 'center',
    gap: fullscreen ? '28px' : '14px',
    fontFamily: "'Courier New', monospace",
    fontSize: fullscreen ? 11 : 8,
    color: '#5a8a5a',
    borderTop: '1px solid #2a3a2a',
  }

  const footerKeyStyle = {
    color: '#00ff88',
  }

  return (
    <div style={containerStyle}>
      {/* Header */}
      <div style={headerStyle}>
        <div style={titleStyle}>
          Welcome
          <span style={{
            color: '#00ff88',
            animation: 'blink 1s step-end infinite',
          }}>_</span>
        </div>
        <div style={{ ...subtitleStyle }}>
          <span style={{ color: '#00ff88' }}></span> Have a nice time exploring! <span style={{ color: '#00ff88' }}></span>
        </div>
      </div>

      {/* Scrollable Content Container (UserProfile + Menu Items) */}
      <div
        ref={menuRef}
        style={{
          flex: 1,
          overflowY: 'auto',
          padding: '0 24px',
          scrollbarWidth: 'thin',
          scrollbarColor: '#2a3a2a transparent',
        }}
      >
        {/* User Profile Avatar */}
        <UserProfile fullscreen={fullscreen} />

        {/* Menu Items */}
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          gap: fullscreen ? '10px' : '6px',
          maxWidth: fullscreen ? 620 : 320,
          margin: '0 auto',
          width: '100%',
          paddingBottom: fullscreen ? '24px' : '12px',
        }}>
          {MENU_ITEMS.map((item, index) => {
            const isSelected = selectedIndex === index
            const animationDelay = index * 0.08

            return (
              <div
                key={item.id}
                ref={(el) => (itemRefs.current[index] = el)}
                style={{
                  ...(isSelected ? selectedMenuItemStyle : menuItemBaseStyle),
                  animation: `slideInRight 0.5s cubic-bezier(0.16, 1, 0.3, 1) forwards`,
                  animationDelay: `${animationDelay}s`,
                  '--index': index,
                }}
                onClick={() => {
                  setAnimatingOut(true)
                  setTimeout(() => {
                    setActivePanel(item.id)
                    setMenuVisible(false)
                    setAnimatingOut(false)
                  }, 200)
                }}
                onMouseEnter={(e) => {
                  if (!isSelected) {
                    e.currentTarget.style.transform = 'translateX(6px)'
                    e.currentTarget.style.borderColor = 'rgba(0, 255, 136, 0.4)'
                    e.currentTarget.style.background = 'rgba(0, 255, 136, 0.05)'
                  }
                  e.currentTarget.querySelector('.icon-container')?.style.setProperty('transform', 'scale(1.1) rotate(-5deg)')
                }}
                onMouseLeave={(e) => {
                  if (!isSelected) {
                    e.currentTarget.style.transform = 'translateX(0)'
                    e.currentTarget.style.borderColor = '#2a3a2a'
                    e.currentTarget.style.background = 'rgba(26, 27, 33, 0.5)'
                  }
                  e.currentTarget.querySelector('.icon-container')?.style.setProperty('transform', 'scale(1)')
                }}
              >
                {/* Icon */}
                <div className="icon-container" style={isSelected ? selectedIconContainerStyle : iconContainerStyle}>
                  <div style={{ width: '60%', height: '60%' }}>
                    {item.icon}
                  </div>
                </div>

                {/* Content */}
                <div style={{ flex: 1 }}>
                  <div style={menuItemLabelStyle}>{item.label}</div>
                  <div style={menuItemDescStyle}>{item.desc}</div>
                </div>

                {/* Arrow indicator with smooth animation */}
                <div style={{
                  color: isSelected ? '#00ff88' : '#3a5a3a',
                  fontSize: fullscreen ? 18 : 12,
                  transition: 'all 0.35s cubic-bezier(0.22, 1, 0.36, 1)',
                  transform: isSelected ? 'translateX(6px) scale(1.1)' : 'none',
                }}>
                  ▸
                </div>
              </div>
            )
          })}
        </div>
      </div>

      {/* Footer */}
      <div style={footerStyle}>
        <span><span style={footerKeyStyle}>[↑/↓]</span> Navigate</span>
        <span><span style={footerKeyStyle}>[Z]</span> Select</span>
        <span><span style={footerKeyStyle}>[ESC]</span> Back</span>
      </div>
    </div>
  )
}

export default TerminalMenu