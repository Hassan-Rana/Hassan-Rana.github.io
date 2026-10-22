import { ArrowUp, Mail } from 'lucide-react';
import { contact, navItems, profile } from '../../data/site';
import { GitHubIcon, LinkedInIcon } from '../ui/BrandIcons';
import { Monogram } from './Monogram';

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-ink-700/70 bg-ink-950">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-14 sm:px-8 md:grid-cols-12">
        <div className="md:col-span-5">
          <div className="flex items-center gap-3">
            <Monogram />
            <div>
              <p className="text-sm font-medium text-paper">{profile.fullName}</p>
              <p className="text-sm text-paper-faint">{profile.roles[0]} · {profile.location}</p>
            </div>
          </div>
          <p className="mt-6 max-w-sm text-sm leading-relaxed text-paper-faint">
            This is a personal website. It is not the official site of any university, employer or
            organisation mentioned on it.
          </p>
        </div>

        <nav aria-label="Footer" className="md:col-span-4">
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-paper-faint">Sections</p>
          <ul className="mt-4 grid grid-cols-2 gap-x-6 gap-y-2">
            {navItems.map((item) => (
              <li key={item.id}>
                <a href={`#${item.id}`} className="text-sm text-paper-muted transition-colors hover:text-paper">
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="md:col-span-3">
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-paper-faint">Elsewhere</p>
          <ul className="mt-4 space-y-2">
            <li>
              <a
                href={`mailto:${contact.email}`}
                className="inline-flex items-center gap-2 text-sm text-paper-muted transition-colors hover:text-paper"
              >
                <Mail aria-hidden="true" className="h-4 w-4" />
                Email
              </a>
            </li>
            {contact.linkedin ? (
              <li>
                <a
                  href={contact.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm text-paper-muted transition-colors hover:text-paper"
                >
                  <LinkedInIcon />
                  LinkedIn<span className="sr-only"> (opens in a new tab)</span>
                </a>
              </li>
            ) : null}
            {contact.github ? (
              <li>
                <a
                  href={contact.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm text-paper-muted transition-colors hover:text-paper"
                >
                  <GitHubIcon />
                  GitHub<span className="sr-only"> (opens in a new tab)</span>
                </a>
              </li>
            ) : null}
            <li>
              <a href={contact.cv} download className="text-sm text-paper-muted transition-colors hover:text-paper">
                CV (PDF)
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-ink-800">
        <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-4 px-5 py-6 text-xs text-paper-faint sm:flex-row sm:items-center sm:px-8">
          <p>
            © {year} {profile.fullName}
          </p>
          <a href="#top" className="inline-flex items-center gap-1.5 transition-colors hover:text-paper">
            Back to top <ArrowUp aria-hidden="true" className="h-3.5 w-3.5" />
          </a>
        </div>
      </div>
    </footer>
  );
}
