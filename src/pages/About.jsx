import { useEffect, useRef, useState } from 'react';
import { ArrowUpRight, Github, Linkedin, Mail } from 'lucide-react';
import portrait from '../assets/me.jpeg';
import { profile } from '../data/portfolio';

export default function About() {
  const skillsAnchorRef = useRef(null);
  const [skillsLoaded, setSkillsLoaded] = useState(false);

  useEffect(() => {
    const anchor = skillsAnchorRef.current;
    if (!anchor) return undefined;

    const revealSkillsOnApproach = () => {
      if (anchor.getBoundingClientRect().top <= window.innerHeight - 80) {
        setSkillsLoaded(true);
        window.removeEventListener('scroll', revealSkillsOnApproach);
      }
    };

    window.addEventListener('scroll', revealSkillsOnApproach, { passive: true });
    return () => window.removeEventListener('scroll', revealSkillsOnApproach);
  }, []);

  return (
    <div className="page page--about">
      <div className="hero-layout">
        <div className="hero-copy">
          <p className="hero-eyebrow">{profile.location}</p>
          <h1 className="hero-title">Hi, I’m Jennifer.</h1>
          <p className="hero-intro">
            I'm an Informatics Engineering student at Institut Teknologi Bandung (ITB), driven by curiosity about how technology works and how it can be made better.
            My interests are software engineering, system designs, and machine learning, where I enjoy exploring ideas and turning them into functional, meaningful solutions.
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

      <div ref={skillsAnchorRef} className="skills-lazy-trigger" />
      {skillsLoaded && (
        <section className="skills-summary" aria-labelledby="skills-title">
          <h2 id="skills-title">Technical Skills</h2>
          <div className="skill-groups">
            {profile.skillGroups.map((group) => (
              <div className="skill-group" key={group.name}>
                <h3>{group.name}</h3>
                <ul>
                  {group.skills.map((skill) => <li key={skill}>{skill}</li>)}
                </ul>
              </div>
            ))}
          </div>
        </section>
      )}
    </div>
  );
}
