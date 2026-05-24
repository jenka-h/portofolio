/**
 * LogoScreen.jsx - Logo splash screen shown before boot
 *
 * Displays the iris scan icon with green color.
 * Auto-transitions to boot sequence after display.
 */

import { useEffect, useState } from 'react'
import useSystemState from '../state/useSystemState'
import IrisScanIcon from '../assets/images/Interface-Essential-Iris-Scan--Streamline-Pixel.svg'

function LogoScreen() {
  const { setBootStage } = useSystemState()
  const [fadeOut, setFadeOut] = useState(false)

  useEffect(() => {
    // After 2.5 seconds, fade out and start boot sequence
    const timer = setTimeout(() => {
      setFadeOut(true)
      setTimeout(() => {
        setBootStage('booting')
      }, 600) // Match CSS transition duration
    }, 2500)

    return () => clearTimeout(timer)
  }, [setBootStage])

  return (
    <div style={{
      width: '220px',
      height: '100px',
      backgroundColor: '#000000',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      opacity: fadeOut ? 0 : 1,
      transition: 'opacity 0.6s ease-in-out',
    }}>
      {/* Iris Scan Icon - Green version */}
      <img
        src={IrisScanIcon}
        alt="Logo"
        style={{
          width: '40px',
          height: '40px',
          filter: 'brightness(0) saturate(100%) invert(33%) sepia(100%) saturate(10000%) hue-rotate(80deg) drop-shadow(0 0 8px #33ff33)',
        }}
      />

      {/* Logo text */}
      <div style={{
        fontFamily: '"Courier New", Courier, monospace',
        fontSize: '8px',
        color: '#33ff33',
        marginTop: '8px',
        textShadow: '0 0 5px #33ff33',
      }}>
        SYSTEM READY
      </div>
    </div>
  )
}

export default LogoScreen