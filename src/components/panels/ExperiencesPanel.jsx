/**
 * ExperiencesPanel.jsx - Work Experience panel
 * Displays work history with cyberpunk OS styling (Green theme)
 */

import BasePanel from './BasePanel'

const experiences = [
  {
    role: 'SENIOR DEVELOPER',
    company: 'Tech Corp',
    period: '2022 - Present',
    description: 'Leading frontend architecture and mentoring junior developers.',
    url: 'https://github.com',
  },
  {
    role: 'FULL STACK DEVELOPER',
    company: 'Startup Inc',
    period: '2020 - 2022',
    description: 'Built and scaled web applications serving 100K+ users.',
    url: 'https://github.com',
  },
  {
    role: 'WEB DEVELOPER',
    company: 'Agency XYZ',
    period: '2018 - 2020',
    description: 'Delivered client projects across various industries.',
    url: 'https://github.com',
  },
]

function ExperiencesPanel({ fullscreen = false }) {
  return (
    <BasePanel title="EXPERIENCES" fullscreen={fullscreen}>
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        gap: fullscreen ? '12px' : '6px',
      }}>
        {experiences.map((exp, index) => (
          <div
            key={index}
            style={{
              display: 'flex',
              gap: fullscreen ? '16px' : '8px',
              padding: fullscreen ? '16px' : '8px',
              background: '#1a1b21',
              border: '1px solid #2a3a2a',
              borderRadius: '8px',
              borderLeft: fullscreen ? '3px solid #00ff88' : '2px solid #00ff88',
            }}
          >
            {/* Timeline dot */}
            <div style={{
              width: fullscreen ? '10px' : '6px',
              height: fullscreen ? '10px' : '6px',
              background: '#00ff88',
              borderRadius: '50%',
              marginTop: fullscreen ? '6px' : '3px',
              flexShrink: 0,
              boxShadow: '0 0 10px #00ff88',
            }} />

            {/* Content */}
            <div style={{ flex: 1 }}>
              {/* Role & Company */}
              <div style={{
                fontFamily: "'Space Grotesk', monospace",
                fontSize: fullscreen ? '14px' : '9px',
                fontWeight: 600,
                color: '#00ff88',
                marginBottom: fullscreen ? '4px' : '2px',
              }}>
                {exp.role}
              </div>
              <div style={{
                fontFamily: "'Courier New', monospace",
                fontSize: fullscreen ? '11px' : '8px',
                color: '#00ff88',
                marginBottom: fullscreen ? '6px' : '3px',
              }}>
                @ {exp.company}
              </div>

              {/* Description */}
              <div style={{
                fontSize: fullscreen ? '12px' : '8px',
                color: '#5a8a5a',
                lineHeight: 1.4,
                marginBottom: fullscreen ? '8px' : '4px',
              }}>
                {exp.description}
              </div>

              {/* Period & Link */}
              <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}>
                <span style={{
                  fontFamily: "'Courier New', monospace",
                  fontSize: fullscreen ? '10px' : '7px',
                  color: '#3a5a3a',
                }}>
                  {exp.period}
                </span>
                <a
                  href={exp.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    fontFamily: "'Courier New', monospace",
                    fontSize: fullscreen ? '10px' : '7px',
                    color: '#00ff88',
                    textDecoration: 'none',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '4px',
                    padding: fullscreen ? '3px 8px' : '2px 5px',
                    background: 'rgba(0, 255, 136, 0.1)',
                    borderRadius: '4px',
                    border: '1px solid rgba(0, 255, 136, 0.3)',
                    transition: 'all 0.3s ease',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = 'rgba(0, 255, 136, 0.2)'
                    e.currentTarget.style.transform = 'translateY(-1px)'
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = 'rgba(0, 255, 136, 0.1)'
                    e.currentTarget.style.transform = 'translateY(0)'
                  }}
                >
                  <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
                    <polyline points="15 3 21 3 21 9"/>
                    <line x1="10" y1="14" x2="21" y2="3"/>
                  </svg>
                  VIEW
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </BasePanel>
  )
}

export default ExperiencesPanel