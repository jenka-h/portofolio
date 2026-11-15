import { ArrowUpRight } from 'lucide-react';
import SectionHeading from '../components/SectionHeading';
import { researchPapers } from '../data/portfolio';

export default function Papers() {
  return (
    <div className="page">
      <SectionHeading>
        Research Papers
      </SectionHeading>

      <div className="paper-list">
        {researchPapers.map((paper) => (
          <article className="paper-item" key={paper.title}>
            <div className="paper-item__meta">
              <time>{paper.date}</time>
            </div>
            <div className="paper-item__content">
              <h3>{paper.title}</h3>
              <p className="paper-item__topics">{paper.topics}</p>
              {paper.url && (
                <a href={paper.url} target="_blank" rel="noopener noreferrer">
                  Read paper <ArrowUpRight size={15} aria-hidden="true" />
                </a>
              )}
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
