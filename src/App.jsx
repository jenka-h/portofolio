/**
 * App.jsx - Main Application
 */

import { useEffect, useState, useRef } from 'react'
import MainScene from './scenes/MainScene'
import FullscreenTerminal from './components/FullscreenTerminal'
import CRTOverlay from './components/CRTOverlay'
import useSystemState from './state/useSystemState'

// Contact Footer Component - Shows on 3D scene
function ContactFooter() {
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
      padding: '20px 40px',
      background: 'linear-gradient(180deg, transparent 0%, rgba(18, 19, 24, 0.95) 30%)',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      gap: '40px',
      zIndex: 100,
      animation: 'fadeIn 1s ease 1s forwards',
      opacity: 0,
    }}>
      {/* Contact Links */}
      <div style={{
        display: 'flex',
        gap: '32px',
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
              flexDirection: 'column',
              alignItems: 'center',
              gap: '4px',
              textDecoration: 'none',
              transition: 'all 0.3s ease',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-4px)'
              e.currentTarget.querySelector('.contact-icon').style.background = 'rgba(0, 255, 136, 0.2)'
              e.currentTarget.querySelector('.contact-icon').style.boxShadow = '0 0 20px rgba(0, 255, 136, 0.3)'
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)'
              e.currentTarget.querySelector('.contact-icon').style.background = 'rgba(0, 255, 136, 0.1)'
              e.currentTarget.querySelector('.contact-icon').style.boxShadow = 'none'
            }}
          >
            <div className="contact-icon" style={{
              width: '40px',
              height: '40px',
              borderRadius: '50%',
              background: 'rgba(0, 255, 136, 0.1)',
              border: '1px solid rgba(0, 255, 136, 0.3)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              transition: 'all 0.3s ease',
            }}>
              {contact.name === 'Email' && (
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#00ff88" strokeWidth="2">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                  <polyline points="22,6 12,13 2,6"/>
                </svg>
              )}
              {contact.name === 'GitHub' && (
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#00ff88" strokeWidth="2">
                  <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/>
                </svg>
              )}
              {contact.name === 'LinkedIn' && (
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#00ff88" strokeWidth="2">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
                  <rect x="2" y="9" width="4" height="12"/>
                  <circle cx="4" cy="4" r="2"/>
                </svg>
              )}
            </div>
            <span style={{
              fontFamily: "'Space Grotesk', monospace",
              fontSize: '11px',
              color: '#5a8a5a',
              letterSpacing: '0.05em',
              transition: 'all 0.3s ease',
            }}>
              {contact.name}
            </span>
          </a>
        ))}
      </div>

      {/* Copyright */}
      <div style={{
        position: 'absolute',
        bottom: '20px',
        right: '40px',
        fontFamily: "'Courier New', monospace",
        fontSize: '10px',
        color: '#3a5a3a',
        letterSpacing: '0.05em',
      }}>
        © JENNIFER KHANG
      </div>
    </div>
  )
}

function App() {
  const { showFullscreen } = useSystemState()
  const [sceneOpacity, setSceneOpacity] = useState(1)
  const [sceneScale, setSceneScale] = useState(1)
  const animationRef = useRef(null)

  useEffect(() => {
    if (showFullscreen) {
      // Animate zoom in + fade out
      let startTime = null
      const duration = 600 // ms

      const animate = (timestamp) => {
        if (!startTime) startTime = timestamp
        const progress = Math.min((timestamp - startTime) / duration, 1)

        // Easing: ease-out for smooth deceleration
        const eased = 1 - Math.pow(1 - progress, 3)

        // Scale from 1 to 1.5 (zoom in)
        setSceneScale(1 + eased * 0.5)

        // Fade from 1 to 0
        setSceneOpacity(1 - eased)

        if (progress < 1) {
          animationRef.current = requestAnimationFrame(animate)
        }
      }

      animationRef.current = requestAnimationFrame(animate)
    } else {
      setSceneOpacity(1)
      setSceneScale(1)
    }

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current)
      }
    }
  }, [showFullscreen])

  return (
    <div style={{ width: '100vw', height: '100vh', overflow: 'hidden' }}>
      {/* 3D Scene with zoom + fade effect */}
      <div style={{
        opacity: sceneOpacity,
        transform: `scale(${sceneScale})`,
        transformOrigin: 'center center',
        width: '100%',
        height: '100%',
        transition: sceneOpacity === 1 ? 'none' : undefined,
      }}>
        <MainScene />
      </div>

      {/* CRT overlay (only when scene is visible) */}
      {sceneOpacity > 0 && <CRTOverlay />}

      {/* Contact Footer - Only shows when not in fullscreen terminal */}
      {!showFullscreen && sceneOpacity > 0 && <ContactFooter />}

      {/* Fullscreen terminal page */}
      <FullscreenTerminal />
    </div>
  )
}

export default App