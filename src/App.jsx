import { useEffect, useRef, useState } from 'react';
import Navbar from './components/Navbar';
import About from './pages/About';
import Work from './pages/Work';
import Experience from './pages/Experience';
import Achievements from './pages/Achievements';
import Papers from './pages/Papers';
import Contact from './pages/Contact';

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
  const shellRef = useRef(null);

  useEffect(() => {
    if (window.location.hash) {
      window.history.replaceState(null, '', `${window.location.pathname}${window.location.search}`);
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleSections = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

        if (visibleSections[0]) {
          setActivePage(visibleSections[0].target.id);
        }
      },
      { threshold: [0.15, 0.35, 0.6], rootMargin: '-15% 0px -30% 0px' },
    );

    sections.forEach(({ id }) => {
      const section = document.getElementById(id);
      if (section) observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const shell = shellRef.current;
    if (!shell) return undefined;

    const handlePointerMove = (e) => {
      shell.style.setProperty('--cursor-x', `${e.clientX}px`);
      shell.style.setProperty('--cursor-y', `${e.clientY}px`);
    };

    const handlePointerLeave = () => {
      shell.style.setProperty('--cursor-x', '-1000px');
      shell.style.setProperty('--cursor-y', '-1000px');
    };

    window.addEventListener('pointermove', handlePointerMove, { passive: true });
    document.addEventListener('mouseleave', handlePointerLeave);
    return () => {
      window.removeEventListener('pointermove', handlePointerMove);
      document.removeEventListener('mouseleave', handlePointerLeave);
    };
  }, []);

  function navigate(sectionId) {
    const section = document.getElementById(sectionId);
    if (!section) return;

    setActivePage(sectionId);
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    section.scrollIntoView({ behavior: prefersReducedMotion ? 'instant' : 'smooth' });
  }

  return (
    <div ref={shellRef} className="site-shell">
      <div className="cursor-glow" aria-hidden="true" />
      <Navbar activePage={activePage} onNavigate={navigate} />

      <div className="site-content">
        <main id="main-content" className="page-container">
          {sections.map(({ id, Component }) => (
            <section id={id} className="portfolio-section" key={id}>
              <Component navigate={navigate} />
            </section>
          ))}
        </main>
      </div>
    </div>
  );
}
