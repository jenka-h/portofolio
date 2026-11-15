import { navigation } from '../data/portfolio';

export default function Navbar({ activePage, onNavigate }) {
  return (
    <header className="site-nav">
      <div className="site-nav__inner">
        <button
          type="button"
          className="site-nav__brand"
          onClick={() => onNavigate('about')}
          aria-label="Go to introduction"
        >
          Jennifer Khang
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
                {item.label}
              </button>
            );
          })}
        </nav>
      </div>
    </header>
  );
}
