import { useState } from 'react';
import { ArrowUpRight, X } from 'lucide-react';
import SectionHeading from '../components/SectionHeading';
import { achievements } from '../data/portfolio';
import globalStartupPhoto from '../assets/globalstartup1.webp';
import hackfestAwardPhoto from '../assets/hackfest1.webp';
import hackfestTeamPhoto from '../assets/hackfest2.webp';

const awardPhotos = [
  {
    src: hackfestAwardPhoto,
    alt: 'Hackfest 2026 award ceremony',
    caption: 'Hackfest 2026 · 2nd place',
  },
  {
    src: hackfestTeamPhoto,
    alt: 'Jennifer and her Hackfest teammates',
    caption: 'Hackfest 2026 · Team photo',
  },
  {
    src: globalStartupPhoto,
    alt: 'Global Startup Design Thinking Hackathon bronze award',
    caption: 'Global Startup Design Thinking Hackathon · Bronze award',
  },
];

export default function Achievements() {
  const [activePhoto, setActivePhoto] = useState(null);

  return (
    <div className="page page--achievements">
      <SectionHeading number="03">
        Awards &amp; Certifications
      </SectionHeading>

      <div className="award-gallery">
        {awardPhotos.map((photo) => (
          <figure key={photo.caption}>
            <button
              type="button"
              className="award-gallery__trigger"
              onClick={() => setActivePhoto(photo)}
              aria-label={`View ${photo.caption}`}
            >
              <img src={photo.src} alt={photo.alt} loading="lazy" />
            </button>
            <figcaption>{photo.caption}</figcaption>
          </figure>
        ))}
      </div>

      {activePhoto && (
        <div
          className="award-lightbox"
          onClick={() => setActivePhoto(null)}
          role="dialog"
          aria-modal="true"
          aria-label={activePhoto.caption}
        >
          <div className="award-lightbox__dialog" onClick={(e) => e.stopPropagation()}>
            <button
              type="button"
              className="award-lightbox__close"
              onClick={() => setActivePhoto(null)}
              aria-label="Close image preview"
            >
              <X size={18} aria-hidden="true" />
            </button>
            <img src={activePhoto.src} alt={activePhoto.alt} />
            <p>{activePhoto.caption}</p>
          </div>
        </div>
      )}

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
