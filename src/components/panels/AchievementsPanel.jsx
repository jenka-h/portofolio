/**
 * AchievementsPanel.jsx - Achievements & Awards panel
 * Displays achievements with cyberpunk OS styling (Green theme)
 */

import BasePanel from './BasePanel'

const achievements = [
  {
    title: 'BEST INNOVATION AWARD',
    event: 'TechCrunch Disrupt 2024',
    date: 'SEP 2024',
    position: '1ST',
    description: 'Won top honor for developing an AI-driven accessibility tool.',
    url: 'https://techcrunch.com',
  },
  {
    title: 'HACKATHON CHAMPION',
    event: 'Google Cloud Next 2024',
    date: 'JUL 2024',
    position: 'WIN',
    description: 'Built a real-time disaster response platform in 48 hours.',
    url: 'https://cloud.google.com',
  },
  {
    title: 'OPEN SOURCE CONTRIBUTOR',
    event: 'GitHub Stars Program',
    date: 'JAN 2024',
    position: '★',
    description: '100+ merged PRs with 50K+ weekly npm downloads.',
    url: 'https://github.com',
  },
  {
    title: 'DESIGN EXCELLENCE',
    event: 'Awwwards SOTD',
    date: 'DEC 2023',
    position: 'SOTD',
    description: 'Award-winning portfolio design featured for innovative interactions.',
    url: 'https://awwwards.com',
  },
]

function AchievementsPanel({ fullscreen = false }) {
  return (
    <BasePanel title="ACHIEVEMENTS" fullscreen={fullscreen}>
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        gap: fullscreen ? '12px' : '6px',
      }}>
        {achievements.map((achievement, index) => (
          <div
            key={index}
            style={{
              display: 'flex',
              gap: fullscreen ? '16px' : '8px',
              padding: fullscreen ? '16px' : '8px',
              background: '#1a1b21',
              border: '1px solid #2a3a2a',
              borderRadius: '8px',
              transition: 'all 0.2s ease',
            }}
          >
            {/* Position Badge */}
            <div style={{
              width: fullscreen ? 50 : 28,
              height: fullscreen ? 50 : 28,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              background: 'linear-gradient(135deg, #00ff88 0%, #00cc6a 100%)',
              borderRadius: '6px',
              flexShrink: 0,
            }}>
              <span style={{
                fontFamily: "'Space Grotesk', monospace",
                fontSize: fullscreen ? '12px' : '8px',
                fontWeight: 700,
                color: '#0a2e1a',
              }}>
                {achievement.position}
              </span>
            </div>

            {/* Content */}
            <div style={{ flex: 1, minWidth: 0 }}>
              {/* Meta */}
              <div style={{
                display: 'flex',
                gap: fullscreen ? '16px' : '8px',
                fontSize: fullscreen ? '10px' : '7px',
                marginBottom: fullscreen ? '4px' : '2px',
              }}>
                <span style={{
                  fontFamily: "'Courier New', monospace",
                  color: '#00ff88',
                }}>
                  {achievement.event}
                </span>
                <span style={{ color: '#5a8a5a' }}>{achievement.date}</span>
              </div>

              {/* Title */}
              <div style={{
                fontFamily: "'Space Grotesk', monospace",
                fontSize: fullscreen ? '13px' : '9px',
                fontWeight: 600,
                color: '#00ff88',
                marginBottom: fullscreen ? '4px' : '2px',
              }}>
                {achievement.title}
              </div>

              {/* Description */}
              <div style={{
                fontSize: fullscreen ? '11px' : '8px',
                color: '#5a8a5a',
                lineHeight: 1.4,
                marginBottom: fullscreen ? '8px' : '4px',
              }}>
                {achievement.description}
              </div>

              {/* Link */}
              <a
                href={achievement.url}
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
                  padding: fullscreen ? '4px 10px' : '2px 6px',
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
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
                  <polyline points="15 3 21 3 21 9"/>
                  <line x1="10" y1="14" x2="21" y2="3"/>
                </svg>
                VIEW CERTIFICATE
              </a>
            </div>
          </div>
        ))}
      </div>
    </BasePanel>
  )
}

export default AchievementsPanel