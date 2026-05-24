/**
 * BootSequence.jsx - Fake Linux boot sequence
 *
 * Displays a series of boot messages with [OK] indicators,
 * then shows "Press Z to Continue" prompt.
 *
 * The HTML content here will be projected onto the 3D computer screen
 * using Drei's <Html> component.
 */

import { useEffect, useState } from 'react'
import useSystemState from '../state/useSystemState'

// Fake boot messages for authentic low-level system feel
const BOOT_MESSAGES = [
  'Initializing kernel v2.4.1...',
  'Loading hardware drivers...',
  'Detecting peripherals...',
  'Mounting root filesystem...',
  'Checking file integrity...',
  'Starting network services...',
  'Loading display manager...',
  'Initializing user environment...',
]

function BootSequence() {
  const { bootStage, setBootStage } = useSystemState()
  const [currentLine, setCurrentLine] = useState(0)
  const [showPrompt, setShowPrompt] = useState(false)

  // Simulate boot messages appearing line by line
  useEffect(() => {
    // Only animate when in booting stage
    if (bootStage !== 'booting') return

    const interval = setInterval(() => {
      setCurrentLine((prev) => {
        if (prev >= BOOT_MESSAGES.length - 1) {
          // All messages shown, transition to waiting
          clearInterval(interval)
          setBootStage('waiting_for_input')
          return prev
        }
        return prev + 1
      })
    }, 350) // New message every 350ms

    // Cleanup: stop interval when component unmounts or stage changes
    return () => clearInterval(interval)
  }, [bootStage, setBootStage])

  // Handle Z key press to continue
  useEffect(() => {
    const handleKeyPress = (e) => {
      if (e.key.toLowerCase() === 'z' && bootStage === 'waiting_for_input') {
        setBootStage('booted')
      }
    }

    window.addEventListener('keydown', handleKeyPress)
    return () => window.removeEventListener('keydown', handleKeyPress)
  }, [bootStage, setBootStage])

  // Show prompt after brief pause when all messages are done
  useEffect(() => {
    if (bootStage === 'waiting_for_input') {
      const timer = setTimeout(() => setShowPrompt(true), 500)
      return () => clearTimeout(timer)
    }
  }, [bootStage])

  // Styles for retro terminal look
  const containerStyle = {
    fontFamily: '"Courier New", Courier, monospace',
    fontSize: '11px',
    color: '#33ff33', // Classic green phosphor
    backgroundColor: '#0a0a0a',
    padding: '12px',
    width: '260px',
    height: '180px',
    overflow: 'hidden',
    lineHeight: '1.4',
    textShadow: '0 0 5px #33ff33', // Glow effect
  }

  return (
    <div style={containerStyle}>
      {/* System header */}
      <div style={{ color: '#ffcc00', marginBottom: '8px', fontSize: '10px' }}>
        ═══════════════════════════════
        <br />
        LINUX 2.4.1 (tty1)
        <br />
        ═══════════════════════════════
      </div>

      {/* Boot messages with OK indicators */}
      {BOOT_MESSAGES.slice(0, currentLine + 1).map((msg, index) => (
        <div key={index} style={{ marginBottom: '2px' }}>
          <span style={{ color: '#00ff00' }}>[  OK  ]</span> {msg}
        </div>
      ))}

      {/* Blinking cursor while booting */}
      {bootStage === 'booting' && currentLine < BOOT_MESSAGES.length - 1 && (
        <span style={{ color: '#33ff33' }}>█</span>
      )}

      {/* Press Z prompt */}
      {bootStage === 'waiting_for_input' && (
        <div style={{ marginTop: '12px' }}>
          {showPrompt ? (
            <span style={{ color: '#ffcc00', fontWeight: 'bold' }}>
              ▶ Press [Z] to Continue...
            </span>
          ) : (
            <span style={{ color: '#33ff33' }}>█</span>
          )}
        </div>
      )}
    </div>
  )
}

export default BootSequence