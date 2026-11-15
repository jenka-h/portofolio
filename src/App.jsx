import { lazy, Suspense, useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import About from './pages/About';
import Contact from './pages/Contact';

const Work = lazy(() => import('./pages/Work'));
const Experience = lazy(() => import('./pages/Experience'));
const Achievements = lazy(() => import('./pages/Achievements'));
const Papers = lazy(() => import('./pages/Papers'));



const sections = [
  { id: 'about', Component: About },
  { id: 'work', Component: Work },
  { id: 'experience', Component: Experience },
  { id: 'achievements', Component: Achievements },
  { id: 'papers', Component: Papers },
  { id: 'contact', Component: Contact },
];

export default function App() {
  const [activePage, setActivePage] = useState('about');
  const [contactVisible, setContactVisible] = useState(false);
  const [loadedSections, setLoadedSections] = useState(() => new Set(['about', 'contact']));

  useEffect(() => {
    if (window.location.hash) {
      window.history.replaceState(null, '', `${window.location.pathname}${window.location.search}`);
    }
    document.getElementById('about')?.scrollIntoView({ behavior: 'instant' });

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleSections = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

        const contactEntry = entries.find((entry) => entry.target.id === 'contact');
        if (contactEntry) setContactVisible(contactEntry.isIntersecting);

        const newlyVisible = entries.filter((entry) => entry.isIntersecting).map((entry) => entry.target.id);
        if (newlyVisible.length) {
          setLoadedSections((current) => {
            const next = new Set(current);
            newlyVisible.forEach((id) => next.add(id));
            return next;
          });
        }

        if (visibleSections[0]) {
          setActivePage(visibleSections[0].target.id);
        }
      },
      { threshold: [0.15, 0.35, 0.6], rootMargin: '-15% 0px -25% 0px' },
    );

    sections.forEach(({ id }) => {
      const section = document.getElementById(id);
      if (section) observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);


  function navigate(sectionId) {
    const section = document.getElementById(sectionId);
    if (!section) return;

    setActivePage(sectionId);
    setLoadedSections((current) => new Set(current).add(sectionId));

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    section.scrollIntoView({ behavior: prefersReducedMotion ? 'instant' : 'smooth' });
  }

  return (
    <div className="site-shell">
      <div className="site-grain" aria-hidden="true" />
      <Navbar activePage={activePage} onNavigate={navigate} />

      <div className="site-content">
        <main id="main-content" className="page-container">
          {sections.map(({ id, Component }) => (
            <section
              id={id}
              className={`portfolio-section${loadedSections.has(id) ? ' portfolio-section--loaded' : ''}${id === 'contact' && contactVisible ? ' portfolio-section--active' : ''}`}
              key={id}
              aria-busy={!loadedSections.has(id)}
            >
              {loadedSections.has(id) && (
                <Suspense fallback={<div className="section-loading" aria-hidden="true" />}>
                  <Component navigate={navigate} />
                </Suspense>
              )}
            </section>
          ))}
        </main>
      </div>
    </div>
  );
}
