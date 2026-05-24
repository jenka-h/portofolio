/**
 * AchievementsPanel.jsx - Achievements & Awards panel
 *
 * Displays achievements, awards, and certifications.
 * TODO: Add your actual achievements here.
 */

import BasePanel from './BasePanel'

function AchievementsPanel() {
  const achievements = [
    'Best Developer Award 2024',
    'Hackathon Winner',
    'AWS Certified Developer',
    'Open Source Contributor',
  ]

  return (
    <BasePanel title="ACHIEVEMENTS">
      <div>
        {achievements.map((item, index) => (
          <div
            key={index}
            style={{
              marginBottom: '4px',
              color: '#ffcc00',
            }}
          >
            ★ {item}
          </div>
        ))}
        <div style={{ fontSize: '8px', color: '#1a8c1a', marginTop: '8px' }}>
          [TODO: Add your achievements]
        </div>
      </div>
    </BasePanel>
  )
}

export default AchievementsPanel