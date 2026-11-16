import { ArrowUpRight, BrainCircuit, Code2, Database, Gamepad2, Github, Layers, Linkedin, Mail, MapPin, Wrench } from 'lucide-react';
import portrait from '../assets/me.jpeg';
import { profile } from '../data/portfolio';

const skillGroupIcons = {
  'Programming languages': Code2,
  'Frameworks & libraries': Layers,
  'Databases & ORM': Database,
  'Infrastructure & tools': Wrench,
  'Machine learning & data': BrainCircuit,
  'Game development': Gamepad2,
};

const skillIconSlugs = {
  C: 'c',
  'C++': 'cplusplus',
  Java: 'openjdk',
  Python: 'python',
  Go: 'go',
  'C#': 'dotnet',
  JavaScript: 'javascript',
  TypeScript: 'typescript',
  SQL: 'sqlite',
  Rust: 'rust',
  Prolog: 'swiprolog',
  Haskell: 'haskell',
  'Next.js': 'nextdotjs',
  React: 'react',
  'Node.js': 'nodedotjs',
  Express: 'express',
  FastAPI: 'fastapi',
  'Tailwind CSS': 'tailwindcss',
  'shadcn/ui': 'shadcnui',
  JavaFX: 'openjdk',
  MySQL: 'mysql',
  MariaDB: 'mariadb',
  PostgreSQL: 'postgresql',
  MongoDB: 'mongodb',
  Prisma: 'prisma',
  Docker: 'docker',
  Git: 'git',
  GitHub: 'github',
  Linux: 'linux',
  Vercel: 'vercel',
  Postman: 'postman',
  Vite: 'vite',
  Kubernetes: 'kubernetes',
  Figma: 'figma',
  Keras: 'keras',
  TensorFlow: 'tensorflow',
  'Hugging Face': 'huggingface',
  PyTorch: 'pytorch',
  Pandas: 'pandas',
  Unity: 'unity',
  Godot: 'godotengine',
};

export default function About() {
  return (
    <div className="page page--about">
      <div className="hero-layout">
        <div className="hero-copy">
          <p className="hero-eyebrow">
            <MapPin size={12} aria-hidden="true" />
            <span>{profile.location}</span>
          </p>
          <h1 className="hero-title">Hi, I’m Jennifer.</h1>
          <p className="hero-intro">
            I'm an Informatics Engineering student at Institut Teknologi Bandung (ITB), driven by curiosity about how technology works and how it can be made better.
            Interested in software engineering, system designs, and machine learning.
          </p>
          <p className="hero-education">
            {profile.education.degree} · {profile.education.institution} · {profile.education.period} · GPA {profile.education.gpa}
          </p>
          <div className="hero-actions">
            {profile.resumeUrl ? (
              <a className="primary-button" href={profile.resumeUrl} target="_blank" rel="noopener noreferrer">
                VIEW RESUME <ArrowUpRight size={16} aria-hidden="true" />
              </a>
            ) : (
              <button type="button" className="primary-button" disabled title="Resume link not added yet">
                VIEW RESUME <ArrowUpRight size={16} aria-hidden="true" />
              </button>
            )}
            <nav className="hero-socials" aria-label="Contact and social profiles">
              <a href={`mailto:${profile.email}`} aria-label={`Email ${profile.email}`} title={profile.email}>
                <Mail size={17} aria-hidden="true" />
              </a>
              <a href={profile.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub" title="GitHub">
                <Github size={17} aria-hidden="true" />
              </a>
              <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" title="LinkedIn">
                <Linkedin size={17} aria-hidden="true" />
              </a>
            </nav>
          </div>
        </div>
        <img
          className="hero-photo"
          src={portrait}
          alt="Jennifer Khang reading at a bookstore"
          fetchPriority="high"
        />
      </div>

      <section className="skills-summary" aria-labelledby="skills-title">
        <h2 id="skills-title">Technical Skills</h2>
        <div className="skill-groups">
          {profile.skillGroups.map((group) => {
            const Icon = skillGroupIcons[group.name] || Code2;
            return (
              <div className="skill-group" key={group.name}>
                <h3>
                  <Icon size={14} aria-hidden="true" />
                  <span>{group.name}</span>
                </h3>
                <ul>
                  {group.skills.map((skill) => {
                    const slug = skillIconSlugs[skill];
                    return (
                      <li key={skill}>
                        {slug && (
                          <img
                            src={`https://cdn.simpleicons.org/${slug}/c5cbc3`}
                            alt=""
                            className="skill-icon"
                            width={13}
                            height={13}
                            loading="lazy"
                            onError={(e) => {
                              e.currentTarget.style.display = 'none';
                            }}
                          />
                        )}
                        <span>{skill}</span>
                      </li>
                    );
                  })}
                </ul>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
}
