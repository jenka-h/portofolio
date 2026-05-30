/**
 * ContactsPanel.jsx - Contact Information panel
 * Displays contact details and social links with cyberpunk OS styling (Green theme)
 */

import BasePanel from './BasePanel'

const contactInfo = [
  {
    type: 'EMAIL',
    value: 'hello@example.com',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
        <polyline points="22,6 12,13 2,6"/>
      </svg>
    ),
  },
  {
    type: 'LOCATION',
    value: 'San Francisco, CA',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
        <circle cx="12" cy="10" r="3"/>
      </svg>
    ),
  },
  {
    type: 'PHONE',
    value: '+1 (555) 123-4567',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
      </svg>
    ),
  },
]

const socialLinks = [
  { name: 'GitHub', url: 'https://github.com' },
  { name: 'LinkedIn', url: 'https://linkedin.com' },
  { name: 'Twitter', url: 'https://twitter.com' },
  { name: 'Dribbble', url: 'https://dribbble.com' },
]

function ContactsPanel({ fullscreen = false }) {
  return (
    <BasePanel title="CONTACT" fullscreen={fullscreen}>
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        gap: fullscreen ? '16px' : '8px',
      }}>
        {/* Contact Items */}
        {contactInfo.map((contact, index) => (
          <div
            key={index}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: fullscreen ? '16px' : '8px',
              padding: fullscreen ? '12px' : '6px',
              background: '#1a1b21',
              border: '1px solid #2a3a2a',
              borderRadius: '6px',
            }}
          >
            {/* Icon */}
            <div style={{
              width: fullscreen ? 36 : 20,
              height: fullscreen ? 36 : 20,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              background: 'rgba(0, 255, 136, 0.15)',
              borderRadius: '6px',
              color: '#00ff88',
              flexShrink: 0,
            }}>
              <div style={{ width: '60%', height: '60%' }}>
                {contact.icon}
              </div>
            </div>

            {/* Content */}
            <div>
              <div style={{
                fontFamily: "'Courier New', monospace",
                fontSize: fullscreen ? '10px' : '7px',
                color: '#5a8a5a',
                marginBottom: '2px',
              }}>
                {contact.type}
              </div>
              <div style={{
                fontSize: fullscreen ? '12px' : '9px',
                color: '#e3e1e9',
              }}>
                {contact.value}
              </div>
            </div>
          </div>
        ))}

        {/* Social Links */}
        <div style={{ marginTop: fullscreen ? '8px' : '4px' }}>
          <div style={{
            fontFamily: "'Courier New', monospace",
            fontSize: fullscreen ? '11px' : '8px',
            color: '#00ff88',
            marginBottom: fullscreen ? '10px' : '5px',
          }}>
            // SOCIAL
          </div>
          <div style={{
            display: 'flex',
            gap: fullscreen ? '8px' : '4px',
            flexWrap: 'wrap',
          }}>
            {socialLinks.map((social, index) => (
              <a
                key={index}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  padding: fullscreen ? '6px 12px' : '3px 6px',
                  fontFamily: "'Courier New', monospace",
                  fontSize: fullscreen ? '11px' : '8px',
                  color: '#e3e1e9',
                  background: '#2a3a2a',
                  border: '1px solid #3a4a3a',
                  borderRadius: '4px',
                  textDecoration: 'none',
                  transition: 'all 0.2s ease',
                }}
              >
                {social.name}
              </a>
            ))}
          </div>
        </div>
      </div>
    </BasePanel>
  )
}

export default ContactsPanel