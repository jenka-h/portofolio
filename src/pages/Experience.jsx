import SectionHeading from '../components/SectionHeading';
import { experiences } from '../data/portfolio';

export default function Experience() {
  return (
    <div className="page page--experience">
      <SectionHeading>
        Experience
      </SectionHeading>

      <div className="timeline">
        {experiences.map((item) => (
          <article className="timeline__item" key={`${item.role}-${item.organization}`}>
            <span className="timeline__date">{item.period}</span>
            <div>
              <h2>{item.role}</h2>
              <span className="timeline__organization">{item.organization}</span>
              <p>{item.description}</p>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
