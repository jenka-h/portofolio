/**
 * ProfilePanel.jsx - About Me panel
 *
 * Displays basic profile information.
 * TODO: Add your actual profile data here.
 */

import BasePanel from './BasePanel'

function ProfilePanel() {
  const contentStyle = {
    lineHeight: '1.5',
  }

  return (
    <BasePanel title="PROFILE">
      <div style={contentStyle}>
        <div style={{ color: '#ffcc00', marginBottom: '6px' }}>
          JENNIFER KHANG
        </div>
        <div style={{ marginBottom: '8px', color: '#33ff33' }}>
          Full Stack Developer
        </div>
        <div style={{ fontSize: '9px', color: '#1a8c1a', lineHeight: '1.6' }}>
          Passionate about building
          <br />
          web applications and
          <br />
          creative experiences.
          <br />
          <br />
          [TODO: Add your bio]
        </div>
      </div>
    </BasePanel>
  )
}

export default ProfilePanel