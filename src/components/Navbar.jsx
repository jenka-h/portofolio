import { motion, MotionConfig } from 'framer-motion';
import { navigation } from '../data/portfolio';

export default function Navbar({ activePage, onNavigate }) {
  return (
    <MotionConfig reducedMotion="user">
      <header className="site-nav">
        <div className="site-nav__inner">
          <button
            type="button"
            className="site-nav__brand"
            onClick={() => onNavigate('about')}
            aria-label="Go to introduction"
          >
            Jennifer Khang<span>.</span>
          </button>

          <nav className="site-nav__links" aria-label="Main navigation">
            {navigation.map((item) => {
              const isActive = activePage === item.id;

              return (
                <button
                  key={item.id}
                  type="button"
                  className={`site-nav__link ${isActive ? 'site-nav__link--active' : ''}`}
                  onClick={() => onNavigate(item.id)}
                  aria-current={isActive ? 'location' : undefined}
                >
                  {isActive && (
                    <motion.span
                      layoutId="nav-active-pill"
                      className="site-nav__pill"
                      transition={{ type: 'spring', stiffness: 300, damping: 28, mass: 0.85 }}
                      aria-hidden="true"
                    />
                  )}
                  <span className="site-nav__label">{item.label}</span>
                </button>
              );
            })}
          </nav>
        </div>
      </header>
    </MotionConfig>
  );
}
