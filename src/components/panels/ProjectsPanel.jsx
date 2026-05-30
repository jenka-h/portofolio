/**
 * ProjectsPanel.jsx - Projects showcase panel
 * Displays project cards with cyberpunk OS styling (Green theme)
 */

import BasePanel from './BasePanel'

const projects = [
  {
    name: 'NEXUS DASHBOARD',
    category: 'WEB APPLICATION',
    year: '2024',
    description: 'Real-time analytics platform with AI-powered insights and customizable widgets.',
    tech: ['React', 'Node.js', 'D3.js'],
    status: 'DEPLOYED',
    url: 'https://github.com',
  },
  {
    name: 'SYNTH MARKETS',
    category: 'E-COMMERCE',
    year: '2024',
    description: 'Full-stack marketplace for digital assets with integrated payment processing.',
    tech: ['Next.js', 'Stripe', 'MongoDB'],
    status: 'DEPLOYED',
    url: 'https://github.com',
  },
  {
    name: 'VOID PROTOCOL',
    category: 'MOBILE APP',
    year: '2023',
    description: 'Cross-platform fitness tracker with social features and health analytics.',
    tech: ['React Native', 'Firebase'],
    status: 'BETA',
    url: 'https://github.com',
  },
]

function ProjectsPanel({ fullscreen = false }) {
  return (
    <BasePanel title="PROJECTS" fullscreen={fullscreen}>
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        gap: fullscreen ? '16px' : '8px',
      }}>
        {projects.map((project, index) => (
          <div
            key={index}
            style={{
              padding: fullscreen ? '16px' : '8px',
              background: '#1a1b21',
              border: '1px solid #2a3a2a',
              borderRadius: '8px',
              transition: 'all 0.2s ease',
            }}
          >
            {/* Project Header */}
            <div style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              marginBottom: fullscreen ? '8px' : '4px',
            }}>
              <span style={{
                fontFamily: "'Courier New', monospace",
                fontSize: fullscreen ? '11px' : '8px',
                color: '#00ff88',
              }}>
                {String(index + 1).padStart(2, '0')}
              </span>
              <a
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  fontFamily: "'Courier New', monospace",
                  fontSize: fullscreen ? '10px' : '7px',
                  padding: '2px 8px',
                  background: 'rgba(0, 255, 136, 0.15)',
                  color: '#00ff88',
                  borderRadius: '4px',
                  border: '1px solid rgba(0, 255, 136, 0.3)',
                  textDecoration: 'none',
                  transition: 'all 0.3s ease',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '4px',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = 'rgba(0, 255, 136, 0.25)'
                  e.currentTarget.style.transform = 'translateY(-1px)'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = 'rgba(0, 255, 136, 0.15)'
                  e.currentTarget.style.transform = 'translateY(0)'
                }}
              >
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
                  <polyline points="15 3 21 3 21 9"/>
                  <line x1="10" y1="14" x2="21" y2="3"/>
                </svg>
                VIEW
              </a>
            </div>

            {/* Project Title */}
            <div style={{
              fontFamily: "'Space Grotesk', monospace",
              fontSize: fullscreen ? '14px' : '10px',
              fontWeight: 600,
              color: '#00ff88',
              marginBottom: fullscreen ? '6px' : '3px',
            }}>
              {project.name}
            </div>

            {/* Project Meta */}
            <div style={{
              display: 'flex',
              gap: fullscreen ? '16px' : '8px',
              fontSize: fullscreen ? '11px' : '8px',
              color: '#5a8a5a',
              marginBottom: fullscreen ? '8px' : '4px',
            }}>
              <span style={{ color: '#00ff88' }}>{project.category}</span>
              <span style={{ fontFamily: "'Courier New', monospace" }}>{project.year}</span>
              <span style={{
                padding: '1px 6px',
                background: 'rgba(0, 255, 136, 0.1)',
                borderRadius: '4px',
                fontSize: fullscreen ? '10px' : '7px',
              }}>
                {project.status}
              </span>
            </div>

            {/* Project Description */}
            <div style={{
              fontSize: fullscreen ? '12px' : '8px',
              color: '#e3e1e9',
              lineHeight: 1.5,
              marginBottom: fullscreen ? '12px' : '6px',
            }}>
              {project.description}
            </div>

            {/* Tech Stack */}
            <div style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: fullscreen ? '6px' : '3px',
            }}>
              {project.tech.map((tech, i) => (
                <span
                  key={i}
                  style={{
                    padding: fullscreen ? '3px 8px' : '2px 4px',
                    fontFamily: "'Courier New', monospace",
                    fontSize: fullscreen ? '10px' : '7px',
                    color: '#e3e1e9',
                    background: '#2a3a2a',
                    borderRadius: '3px',
                  }}
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </BasePanel>
  )
}

export default ProjectsPanel