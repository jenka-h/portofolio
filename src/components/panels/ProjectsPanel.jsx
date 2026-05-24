/**
 * ProjectsPanel.jsx - Projects showcase panel
 *
 * Displays a list of projects.
 * TODO: Add your actual projects here.
 */

import BasePanel from './BasePanel'

function ProjectsPanel() {
  const projects = [
    { name: 'Project Alpha', tech: 'React/Node' },
    { name: 'Project Beta', tech: 'Python/Django' },
    { name: 'Project Gamma', tech: 'TypeScript' },
  ]

  return (
    <BasePanel title="PROJECTS">
      <div>
        {projects.map((project, index) => (
          <div
            key={index}
            style={{
              marginBottom: '6px',
              padding: '4px',
              border: '1px solid #1a8c1a',
            }}
          >
            <div style={{ color: '#ffcc00' }}>
              {index + 1}. {project.name}
            </div>
            <div style={{ fontSize: '8px', color: '#1a8c1a' }}>
              [{project.tech}]
            </div>
          </div>
        ))}
        <div style={{ fontSize: '8px', color: '#1a8c1a', marginTop: '8px' }}>
          [TODO: Add your projects]
        </div>
      </div>
    </BasePanel>
  )
}

export default ProjectsPanel