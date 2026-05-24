/**
 * ExperiencesPanel.jsx - Work Experience panel
 *
 * Displays work history and experience.
 * TODO: Add your actual experience here.
 */

import BasePanel from './BasePanel'

function ExperiencesPanel() {
  const experiences = [
    { role: 'Senior Developer', company: 'Tech Corp', period: '2022-Present' },
    { role: 'Web Developer', company: 'Startup Inc', period: '2020-2022' },
    { role: 'Junior Dev', company: 'Agency XYZ', period: '2018-2020' },
  ]

  return (
    <BasePanel title="EXPERIENCES">
      <div>
        {experiences.map((exp, index) => (
          <div
            key={index}
            style={{
              marginBottom: '6px',
              borderLeft: '2px solid #33ff33',
              paddingLeft: '6px',
            }}
          >
            <div style={{ color: '#ffcc00', fontSize: '9px' }}>
              {exp.role}
            </div>
            <div style={{ color: '#33ff33', fontSize: '8px' }}>
              @ {exp.company}
            </div>
            <div style={{ color: '#1a8c1a', fontSize: '7px' }}>
              {exp.period}
            </div>
          </div>
        ))}
        <div style={{ fontSize: '8px', color: '#1a8c1a', marginTop: '4px' }}>
          [TODO: Add your experience]
        </div>
      </div>
    </BasePanel>
  )
}

export default ExperiencesPanel