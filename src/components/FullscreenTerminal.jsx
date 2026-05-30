/**
 * FullscreenTerminal.jsx - Full screen terminal page
 * Enhanced with smooth animations
 */

import { useEffect, useState } from 'react'
import useSystemState from '../state/useSystemState'
import TerminalMenu from './TerminalMenu'

// Contact Footer for Terminal Page - Fixed at bottom, centered
function ContactFooterTerminal() {
  const contactInfo = [
    { name: 'Email', value: 'hello@example.com', url: 'mailto:hello@example.com' },
    { name: 'GitHub', value: 'github.com/jennifer', url: 'https://github.com' },
    { name: 'LinkedIn', value: 'linkedin.com/in/jennifer', url: 'https://linkedin.com' },
  ]

  return (
    <div style={{
      position: 'fixed',
      bottom: 0,
      left: 0,
      right: 0,
      padding: '24px 40px',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      gap: '56px',
      zIndex: 3,
      opacity: 0,
      animation: 'fadeIn 1s ease 0.5s forwards',
      pointerEvents: 'none',
    }}>
      {/* Contact Links */}
      <div style={{
        display: 'flex',
        gap: '48px',
        alignItems: 'center',
      }}>
        {contactInfo.map((contact, index) => (
          <a
            key={index}
            href={contact.url}
            target={contact.url.startsWith('mailto') ? '_self' : '_blank'}
            rel="noopener noreferrer"
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '10px',
              textDecoration: 'none',
              transition: 'all 0.3s ease',
              pointerEvents: 'auto',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-4px)'
              e.currentTarget.querySelector('.contact-icon').style.background = 'rgba(0, 255, 136, 0.25)'
              e.currentTarget.querySelector('.contact-icon').style.boxShadow = '0 0 20px rgba(0, 255, 136, 0.4)'
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)'
              e.currentTarget.querySelector('.contact-icon').style.background = 'rgba(0, 255, 136, 0.1)'
              e.currentTarget.querySelector('.contact-icon').style.boxShadow = 'none'
            }}
          >
            <div className="contact-icon" style={{
              width: '32px',
              height: '32px',
              borderRadius: '50%',
              background: 'rgba(0, 255, 136, 0.1)',
              border: '1px solid rgba(0, 255, 136, 0.4)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              transition: 'all 0.3s ease',
            }}>
              {contact.name === 'Email' && (
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#00ff88" strokeWidth="2">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                  <polyline points="22,6 12,13 2,6"/>
                </svg>
              )}
              {contact.name === 'GitHub' && (
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#00ff88" strokeWidth="2">
                  <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/>
                </svg>
              )}
              {contact.name === 'LinkedIn' && (
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#00ff88" strokeWidth="2">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
                  <rect x="2" y="9" width="4" height="12"/>
                  <circle cx="4" cy="4" r="2"/>
                </svg>
              )}
            </div>
            <span style={{
              fontFamily: "'Space Grotesk', monospace",
              fontSize: '12px',
              color: '#5a8a5a',
              letterSpacing: '0.05em',
              transition: 'all 0.3s ease',
            }}>
              {contact.name}
            </span>
          </a>
        ))}
      </div>
    </div>
  )
}

function FullscreenTerminal() {
  const { showFullscreen } = useSystemState()
  const [visible, setVisible] = useState(false)
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    if (showFullscreen) {
      const timer1 = setTimeout(() => setLoaded(true), 50)
      const timer2 = setTimeout(() => setVisible(true), 100)
      return () => {
        clearTimeout(timer1)
        clearTimeout(timer2)
      }
    } else {
      setVisible(false)
      setLoaded(false)
    }
  }, [showFullscreen])

  if (!showFullscreen) return null

  return (
    <div style={{
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100vw',
      height: '100vh',
      background: '#121318',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      opacity: visible ? 1 : 0,
      transition: 'opacity 0.6s cubic-bezier(0.16, 1, 0.3, 1)',
      zIndex: 2000,
    }}>
      {/* Subtle scan line effect */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        background: 'repeating-linear-gradient(0deg, rgba(0, 255, 136, 0.015) 0px, rgba(0, 255, 136, 0.015) 1px, transparent 1px, transparent 3px)',
        pointerEvents: 'none',
        zIndex: 1,
      }} />

      {/* Main container with terminal and footer */}
      <div style={{
        width: '90%',
        maxWidth: '680px',
        maxHeight: '90vh',
        display: 'flex',
        flexDirection: 'column',
        zIndex: 2,
        opacity: loaded ? 1 : 0,
        transform: loaded ? 'translateY(0)' : 'translateY(20px)',
        transition: 'all 0.6s cubic-bezier(0.16, 1, 0.3, 1)',
      }}>
        {/* Terminal container */}
        <div style={{
          flex: 1,
          minHeight: 0,
          background: '#1a1b21',
          border: '1px solid #2a3a2a',
          borderRadius: '12px 12px 0 0',
          overflow: 'hidden',
          boxShadow: '0 0 60px rgba(0, 255, 136, 0.1), 0 20px 40px rgba(0, 0, 0, 0.4)',
        }}>
          {/* Terminal title bar */}
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            padding: '12px 16px',
            background: '#1e1f25',
            borderBottom: '1px solid #2a3a2a',
            borderRadius: '12px 12px 0 0',
          }}>
            <div style={{
              display: 'flex',
              gap: '6px',
            }}>
              <div style={{
                width: '12px',
                height: '12px',
                borderRadius: '50%',
                background: '#ff5f57',
              }} />
              <div style={{
                width: '12px',
                height: '12px',
                borderRadius: '50%',
                background: '#00ff88',
              }} />
              <div style={{
                width: '12px',
                height: '12px',
                borderRadius: '50%',
                background: '#28c840',
              }} />
            </div>
            <div style={{ flex: 1 }} />
          </div>

          {/* Terminal content */}
          <div style={{
            flex: 1,
            minHeight: 0,
            overflow: 'hidden',
          }}>
            <TerminalMenu fullscreen />
          </div>
        </div>
      </div>

      {/* FIX 1: Contact Footer moved outside main container, directly inside outer fixed div */}
      <ContactFooterTerminal />

      {/* FIX 2: Corner decorations moved outside main container, now correctly anchored to the outer fixed div */}
      <div style={{
        position: 'absolute',
        top: '20px',
        left: '20px',
        width: '40px',
        height: '40px',
        borderTop: '2px solid rgba(0, 255, 136, 0.3)',
        borderLeft: '2px solid rgba(0, 255, 136, 0.3)',
        opacity: loaded ? 0.5 : 0,
        transition: 'opacity 0.8s cubic-bezier(0.16, 1, 0.3, 1) 0.3s',
        pointerEvents: 'none',
      }} />
      <div style={{
        position: 'absolute',
        top: '20px',
        right: '20px',
        width: '40px',
        height: '40px',
        borderTop: '2px solid rgba(0, 255, 136, 0.3)',
        borderRight: '2px solid rgba(0, 255, 136, 0.3)',
        opacity: loaded ? 0.5 : 0,
        transition: 'opacity 0.8s cubic-bezier(0.16, 1, 0.3, 1) 0.3s',
      }} />
      <div style={{
        position: 'absolute',
        bottom: '20px',
        left: '20px',
        width: '40px',
        height: '40px',
        borderBottom: '2px solid rgba(0, 255, 136, 0.3)',
        borderLeft: '2px solid rgba(0, 255, 136, 0.3)',
        opacity: loaded ? 0.5 : 0,
        transition: 'opacity 0.8s cubic-bezier(0.16, 1, 0.3, 1) 0.3s',
      }} />
      <div style={{
        position: 'absolute',
        bottom: '20px',
        right: '20px',
        width: '40px',
        height: '40px',
        borderBottom: '2px solid rgba(0, 255, 136, 0.3)',
        borderRight: '2px solid rgba(0, 255, 136, 0.3)',
        opacity: loaded ? 0.5 : 0,
        transition: 'opacity 0.8s cubic-bezier(0.16, 1, 0.3, 1) 0.3s',
      }} />
    </div>
  )
}

export default FullscreenTerminal