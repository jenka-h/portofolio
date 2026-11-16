import { Github, Linkedin, Mail, MapPin, Phone } from 'lucide-react';
import { profile } from '../data/portfolio';

const socialLinks = [
  { label: 'GitHub', href: profile.github, Icon: Github },
  { label: 'LinkedIn', href: profile.linkedin, Icon: Linkedin },
  { label: 'Email', href: `mailto:${profile.email}`, Icon: Mail },
  { label: 'Phone', href: `tel:${profile.phone.replace(/[^\d+]/g, '')}`, Icon: Phone },
];

export default function Contact() {
  return (
    <footer className="site-footer">
      <div className="site-footer__main">
        <div>
          <p className="site-footer__eyebrow">CONTACT</p>
          <h2>Let’s connect.</h2>
          <p className="site-footer__email">{profile.email}</p>
        </div>

        <nav className="site-footer__socials" aria-label="Social and contact links">
          {socialLinks.map(({ label, href, Icon }) => (
            <a
              key={label}
              href={href}
              aria-label={label}
              title={label}
              target={label === 'GitHub' || label === 'LinkedIn' ? '_blank' : undefined}
              rel={label === 'GitHub' || label === 'LinkedIn' ? 'noopener noreferrer' : undefined}
            >
              <Icon size={20} strokeWidth={1.7} aria-hidden="true" />
            </a>
          ))}
        </nav>
      </div>

      <div className="site-footer__bottom">
        <span>© 2026 Jennifer Khang</span>
        <span className="site-footer__location">
          <MapPin size={12} aria-hidden="true" />
          <span>{profile.location}</span>
        </span>
      </div>
    </footer>
  );
}
