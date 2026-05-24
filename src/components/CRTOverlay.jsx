/**
 * CRTOverlay.jsx - CRT monitor visual effects
 *
 * Adds authentic retro CRT monitor look with:
 * - Scanlines (horizontal lines)
 * - Vignette (darker corners)
 * - Subtle screen flicker
 * - Curvature simulation
 *
 * This is a DOM overlay on top of the 3D canvas.
 * pointerEvents: none ensures it doesn't block interaction.
 */

import { forwardRef, useMemo } from 'react'

// forwardRef allows parent components to reference this element if needed
const CRTOverlay = forwardRef(function CRTOverlay(props, ref) {
  // Memoize styles to prevent unnecessary recalculations
  const overlayStyle = useMemo(() => ({
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    pointerEvents: 'none', // Allow clicks to pass through
    zIndex: 1000,
    // Scanlines - repeating horizontal lines
    background: `
      repeating-linear-gradient(
        0deg,
        rgba(0, 0, 0, 0.12),
        rgba(0, 0, 0, 0.12) 1px,
        transparent 1px,
        transparent 2px
      )
    `,
    // Vignette - darker edges
    backgroundImage: `
      radial-gradient(
        ellipse at center,
        transparent 0%,
        transparent 60%,
        rgba(0, 0, 0, 0.35) 100%
      )
    `,
  }), [])

  return (
    <>
      {/* Main CRT effect overlay */}
      <div ref={ref} style={overlayStyle} />

      {/* Subtle green tint at edges */}
      <div
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          pointerEvents: 'none',
          zIndex: 999,
          boxShadow: 'inset 0 0 150px rgba(51, 255, 51, 0.04)',
        }}
      />
    </>
  )
})

export default CRTOverlay