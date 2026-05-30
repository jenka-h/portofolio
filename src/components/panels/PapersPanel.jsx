/**
 * PapersPanel.jsx - Research Papers / Publications panel
 * Displays published research papers with cyberpunk OS styling (Green theme)
 */

import BasePanel from './BasePanel'

const papers = [
  {
    title: 'Neural Interface Patterns in Adaptive Web Design',
    journal: 'IEEE Transactions on Human-Computer Systems',
    date: 'MAR 2024',
    status: 'PUBLISHED',
    citations: 47,
    abstract: 'Explores the intersection of neural networks and responsive design patterns, presenting a novel framework for interfaces that adapt to user cognitive patterns in real-time.',
    url: 'https://ieeexplore.ieee.org',
  },
  {
    title: 'Sustainable Computing: Optimizing Web Architecture',
    journal: 'ACM Web Conference 2024',
    date: 'MAY 2024',
    status: 'PUBLISHED',
    citations: 23,
    abstract: 'Research on developing low-carbon web applications through efficient coding practices, smart caching strategies, and green hosting solutions.',
    url: 'https://dl.acm.org',
  },
  {
    title: 'Augmented Reality in Remote Collaboration',
    journal: 'Journal of Computer-Mediated Communication',
    date: 'FEB 2023',
    status: 'PUBLISHED',
    citations: 89,
    abstract: 'Comprehensive study examining the evolution of AR-based remote work tools and their impact on team productivity and collaboration patterns.',
    url: 'https://academic.oup.com',
  },
]

function PapersPanel({ fullscreen = false }) {
  return (
    <BasePanel title="RESEARCH" fullscreen={fullscreen}>
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        gap: fullscreen ? '12px' : '6px',
      }}>
        {papers.map((paper, index) => (
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
            {/* Paper Index & Status */}
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
                href={paper.url}
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
                READ PAPER
              </a>
            </div>

            {/* Journal & Date */}
            <div style={{
              display: 'flex',
              gap: fullscreen ? '16px' : '8px',
              fontSize: fullscreen ? '10px' : '7px',
              marginBottom: fullscreen ? '6px' : '3px',
            }}>
              <span style={{
                fontFamily: "'Courier New', monospace",
                color: '#00ff88',
              }}>
                {paper.journal}
              </span>
              <span style={{ color: '#5a8a5a' }}>{paper.date}</span>
            </div>

            {/* Title */}
            <div style={{
              fontFamily: "'Space Grotesk', monospace",
              fontSize: fullscreen ? '13px' : '9px',
              fontWeight: 600,
              color: '#e3e1e9',
              marginBottom: fullscreen ? '8px' : '4px',
              lineHeight: 1.3,
            }}>
              {paper.title}
            </div>

            {/* Abstract */}
            <div style={{
              fontSize: fullscreen ? '11px' : '8px',
              color: '#5a8a5a',
              lineHeight: 1.5,
              marginBottom: fullscreen ? '10px' : '5px',
            }}>
              {paper.abstract}
            </div>

            {/* Citations */}
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              fontSize: fullscreen ? '11px' : '8px',
              color: '#5a8a5a',
            }}>
              <svg
                width={fullscreen ? 14 : 10}
                height={fullscreen ? 14 : 10}
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V21z"/>
                <path d="M15 21c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2h.75c0 2.25.25 4-2.75 4v3z"/>
              </svg>
              <span>{paper.citations} citations</span>
            </div>
          </div>
        ))}
      </div>
    </BasePanel>
  )
}

export default PapersPanel