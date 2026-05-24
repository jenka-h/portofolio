/**
 * BootSequence.jsx - Fake Linux boot sequence for PC screen
 */

import { useEffect, useState } from 'react'
import useSystemState from '../state/useSystemState'

const BOOT_MESSAGES = [
  'Initializing kernel...',
  'Loading modules...',
  'Mounting filesystems...',
  'Checking integrity...',
  'Starting services...',
  'Ready.',
]

function BootSequence() {
  const { bootStage, setBootStage, setShowFullscreen } = useSystemState()
  const [currentLine, setCurrentLine] = useState(0)

  useEffect(() => {
    if (bootStage !== 'booting') return

    const interval = setInterval(() => {
      setCurrentLine((prev) => {
        if (prev >= BOOT_MESSAGES.length - 1) {
          clearInterval(interval)
          setBootStage('waiting_for_input')
          return prev
        }
        return prev + 1
      })
    }, 300)

    return () => clearInterval(interval)
  }, [bootStage, setBootStage])

  useEffect(() => {
    const handleKeyPress = (e) => {
      if (e.key.toLowerCase() === 'z' && bootStage === 'waiting_for_input') {
        setShowFullscreen(true)
      }
    }

    window.addEventListener('keydown', handleKeyPress)
    return () => window.removeEventListener('keydown', handleKeyPress)
  }, [bootStage, setShowFullscreen])

  return (
    <div style={{
      fontFamily: '"Courier New", Courier, monospace',
      fontSize: '10px',
      color: '#33ff33',
      backgroundColor: '#000000',
      padding: '10px',
      width: '220px',
      height: '100px',
      textShadow: '0 0 3px #33ff33',
      lineHeight: '1.3',
    }}>
      {BOOT_MESSAGES.slice(0, currentLine + 1).map((msg, index) => (
        <div key={index} style={{ marginBottom: '1px' }}>
          <span style={{ color: '#00ff00' }}>[OK]</span> {msg}
        </div>
      ))}

      {bootStage === 'waiting_for_input' && (
        <div style={{ marginTop: '8px', color: '#ffcc00', fontSize: '9px' }}>
          Press [Z] to continue...
        </div>
      )}
    </div>
  )
}

export default BootSequence