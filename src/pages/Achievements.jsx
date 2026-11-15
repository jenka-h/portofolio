import { ArrowUpRight } from 'lucide-react';
import SectionHeading from '../components/SectionHeading';
import { achievements } from '../data/portfolio';
import globalStartupPhoto from '../assets/globalstartup1.webp';
import hackfestAwardPhoto from '../assets/hackfest1.webp';
import hackfestTeamPhoto from '../assets/hackfest2.webp';

export default function Achievements() {
  return (
    <div className="page page--achievements">
      <SectionHeading>
        Awards &amp; Certifications
      </SectionHeading>

      <div className="award-gallery">
        <figure>
          <img src={hackfestAwardPhoto} alt="Hackfest 2026 award ceremony" loading="lazy" />
          <figcaption>Hackfest 2026 · 2nd place</figcaption>
        </figure>
        <figure>
          <img src={hackfestTeamPhoto} alt="Jennifer and her Hackfest teammates" loading="lazy" />
          <figcaption>Hackfest 2026 · Team photo</figcaption>
        </figure>
        <figure>
          <img src={globalStartupPhoto} alt="Global Startup Design Thinking Hackathon bronze award" loading="lazy" />
          <figcaption>Global Startup Design Thinking Hackathon · Bronze award</figcaption>
        </figure>
      </div>

      <div className="timeline">
        {achievements.map((item) => (
          <article className="timeline__item" key={item.title}>
            <span className="timeline__date">{item.date}</span>
            <div>
              <h2>{item.title}</h2>
              <p>{item.description}</p>
              {item.url && (
                <a className="timeline__link" href={item.url} target="_blank" rel="noopener noreferrer">
                  View details <ArrowUpRight size={14} aria-hidden="true" />
                </a>
              )}
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
