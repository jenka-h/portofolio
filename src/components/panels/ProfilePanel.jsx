/**
 * ProfilePanel.jsx - Profile / About Me panel
 * Displays profile information with cyberpunk OS styling (Green theme)
 */

import BasePanel from './BasePanel'

function ProfilePanel({ fullscreen = false }) {
  return (
    <BasePanel title="PROFILE" fullscreen={fullscreen}>
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        gap: fullscreen ? '24px' : '12px',
      }}>
        {/* Profile Header */}
        <div style={{
          display: 'flex',
          gap: fullscreen ? '24px' : '12px',
          alignItems: 'flex-start',
        }}>
          {/* Avatar */}
          <div style={{
            width: fullscreen ? 80 : 40,
            height: fullscreen ? 80 : 40,
            borderRadius: fullscreen ? '12px' : '6px',
            background: 'linear-gradient(135deg, #00ff88 0%, #00cc6a 100%)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontFamily: "'Space Grotesk', monospace",
            fontSize: fullscreen ? '24px' : '14px',
            fontWeight: 700,
            color: '#0a2e1a',
            flexShrink: 0,
            position: 'relative',
            overflow: 'hidden',
          }}>
            JK
            <div style={{
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              height: '2px',
              background: '#fff',
              opacity: 0.5,
            }} />
          </div>

          {/* Profile Info */}
          <div style={{ flex: 1 }}>
            <div style={{
              fontFamily: "'Space Grotesk', monospace",
              fontSize: fullscreen ? '20px' : '12px',
              fontWeight: 600,
              color: '#00ff88',
              marginBottom: '4px',
            }}>
              JENNIFER KHANG
            </div>
            <div style={{
              fontFamily: "'Courier New', monospace",
              fontSize: fullscreen ? '12px' : '8px',
              color: '#5a8a5a',
              marginBottom: fullscreen ? '12px' : '6px',
            }}>
              FULL STACK DEVELOPER
            </div>

            {/* Stats */}
            <div style={{
              display: 'flex',
              gap: fullscreen ? '24px' : '12px',
            }}>
              <div style={{ textAlign: 'center' }}>
                <div style={{
                  fontFamily: "'Space Grotesk', monospace",
                  fontSize: fullscreen ? '18px' : '12px',
                  fontWeight: 700,
                  color: '#00ff88',
                }}>5+</div>
                <div style={{
                  fontFamily: "'Courier New', monospace",
                  fontSize: fullscreen ? '10px' : '7px',
                  color: '#5a8a5a',
                }}>YEARS</div>
              </div>
              <div style={{ textAlign: 'center' }}>
                <div style={{
                  fontFamily: "'Space Grotesk', monospace",
                  fontSize: fullscreen ? '18px' : '12px',
                  fontWeight: 700,
                  color: '#00ff88',
                }}>50+</div>
                <div style={{
                  fontFamily: "'Courier New', monospace",
                  fontSize: fullscreen ? '10px' : '7px',
                  color: '#5a8a5a',
                }}>PROJECTS</div>
              </div>
              <div style={{ textAlign: 'center' }}>
                <div style={{
                  fontFamily: "'Space Grotesk', monospace",
                  fontSize: fullscreen ? '18px' : '12px',
                  fontWeight: 700,
                  color: '#00ff88',
                }}>15+</div>
                <div style={{
                  fontFamily: "'Courier New', monospace",
                  fontSize: fullscreen ? '10px' : '7px',
                  color: '#5a8a5a',
                }}>AWARDS</div>
              </div>
            </div>
          </div>
        </div>

        {/* Description */}
        <div>
          <div style={{
            fontFamily: "'Courier New', monospace",
            fontSize: fullscreen ? '12px' : '8px',
            color: '#00ff88',
            marginBottom: fullscreen ? '8px' : '4px',
          }}>
            # ABOUT
          </div>
          <div style={{
            fontSize: fullscreen ? '13px' : '9px',
            color: '#e3e1e9',
            lineHeight: fullscreen ? '1.6' : '1.4',
          }}>
            Passionate about building web applications and creative experiences.
            Specializing in responsive design, interactive interfaces, and
            cross-platform solutions. Obsessed with clean code and pixel-perfect designs.
          </div>
        </div>

        {/* Tech Tags */}
        <div style={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: fullscreen ? '8px' : '4px',
        }}>
          {['React', 'Node.js', 'Python', 'TypeScript', 'Figma', 'AWS'].map((tech) => (
            <span
              key={tech}
              style={{
                padding: fullscreen ? '4px 10px' : '2px 6px',
                fontFamily: "'Courier New', monospace",
                fontSize: fullscreen ? '11px' : '8px',
                color: '#00ff88',
                background: 'rgba(0, 255, 136, 0.1)',
                border: '1px solid rgba(0, 255, 136, 0.3)',
                borderRadius: '4px',
              }}
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </BasePanel>
  )
}

export default ProfilePanel