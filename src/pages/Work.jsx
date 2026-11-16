import { ArrowUpRight, Github } from 'lucide-react';
import SectionHeading from '../components/SectionHeading';
import { profile, projects } from '../data/portfolio';

export default function Work() {
  return (
    <div className="page page--work">
      <SectionHeading number="01">
        Projects
      </SectionHeading>

      <div className="project-list">
        {projects.map((project) => (
          <article className="project-item" key={project.title}>
            <div className="project-item__copy">
              {project.category && <p className="project-item__category">{project.category}</p>}
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              {project.stack && (
                <ul className="project-card__stack" aria-label="Technologies used">
                  {project.stack.map((tech) => (
                    <li key={tech}>{tech}</li>
                  ))}
                </ul>
              )}
            </div>

            <div className="project-media" role="img" aria-label={`${project.title} preview`}>
              {project.image ? (
                <img src={project.image} alt={`${project.title} preview`} loading="lazy" />
              ) : (
                <span>{project.title.toUpperCase()} PREVIEW</span>
              )}
            </div>
          </article>
        ))}
      </div>

      <a href={profile.github} target="_blank" rel="noopener noreferrer" className="project-more">
        <Github size={15} aria-hidden="true" /> SEE MORE ON GITHUB <ArrowUpRight size={15} aria-hidden="true" />
      </a>
    </div>
  );
}
