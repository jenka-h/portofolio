import { Github, ArrowUpRight } from 'lucide-react';
import SectionHeading from '../components/SectionHeading';
import { profile, projects } from '../data/portfolio';

export default function Work() {
  return (
    <div className="page page--work">
      <SectionHeading>
        Projects
      </SectionHeading>

      <div className="project-list">
        {projects.map((project) => (
          <article className="project-item" key={project.title}>
            <div className="project-item__copy">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              {project.github && (
                <a href={project.github} target="_blank" rel="noopener noreferrer" className="project-github">
                  <Github size={14} aria-hidden="true" /> GitHub <ArrowUpRight size={13} aria-hidden="true" />
                </a>
              )}
            </div>
            <div className="project-placeholder" role="img" aria-label={project.imageLabel}>
              <span>PROJECT IMAGE</span>
            </div>
          </article>
        ))}
      </div>
      <a href={profile.github} target="_blank" rel="noopener noreferrer" className="project-more">
        SEE MORE ON GITHUB <ArrowUpRight size={15} aria-hidden="true" />
      </a>
    </div>
  );
}
