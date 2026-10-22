import { useEffect, useRef, useState } from 'react';
import { FileText, Menu, X } from 'lucide-react';
import { contact, navItems, profile } from '../../data/site';
import { useActiveSection } from '../../hooks/useActiveSection';
import { Monogram } from './Monogram';

const sectionIds = navItems.map((item) => item.id);

export function Navbar() {
  const active = useActiveSection(sectionIds);
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const firstLinkRef = useRef<HTMLAnchorElement>(null);

  // Slightly stronger background once the page is scrolled.
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Mobile menu: lock page scroll, close on Escape, move focus sensibly.
  useEffect(() => {
    if (!open) return;
    document.body.style.overflow = 'hidden';
    firstLinkRef.current?.focus();
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setOpen(false);
        menuButtonRef.current?.focus();
      }
    };
    window.addEventListener('keydown', onKey);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', onKey);
    };
  }, [open]);

  // Close the mobile menu if the window grows to desktop size.
  useEffect(() => {
    const mq = window.matchMedia('(min-width: 1024px)');
    const onChange = () => mq.matches && setOpen(false);
    mq.addEventListener('change', onChange);
    return () => mq.removeEventListener('change', onChange);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 border-b transition-colors duration-300 ${
        scrolled || open
          ? 'border-ink-700/80 bg-ink-950/85 backdrop-blur-md'
          : 'border-transparent bg-transparent'
      }`}
    >
      <nav aria-label="Main" className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 sm:px-8">
        <a
          href="#top"
          className="flex items-center gap-3 rounded-lg"
          onClick={() => setOpen(false)}
        >
          <Monogram />
          <span className="text-sm font-medium tracking-tight text-paper">
            {profile.shortName}
            <span className="sr-only"> — back to top</span>
          </span>
        </a>

        {/* Desktop links */}
        <ul className="hidden items-center gap-1 lg:flex">
          {navItems.map((item) => {
            const isActive = active === item.id;
            return (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  aria-current={isActive ? 'location' : undefined}
                  className={`relative rounded-md px-3 py-2 text-[13px] transition-colors ${
                    isActive ? 'text-paper' : 'text-paper-faint hover:text-paper'
                  }`}
                >
                  {item.label}
                  <span
                    aria-hidden="true"
                    className={`absolute inset-x-3 -bottom-px h-px origin-left bg-lime transition-transform duration-300 ${
                      isActive ? 'scale-x-100' : 'scale-x-0'
                    }`}
                  />
                </a>
              </li>
            );
          })}
        </ul>

        <div className="flex items-center gap-2">
          <a
            href={contact.cv}
            download
            className="hidden items-center gap-2 rounded-full border border-ink-600 px-4 py-1.5 text-[13px] text-paper transition-colors hover:border-lime hover:text-lime sm:inline-flex"
          >
            <FileText aria-hidden="true" className="h-3.5 w-3.5" />
            Download CV
          </a>
          <button
            ref={menuButtonRef}
            type="button"
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-ink-600 text-paper lg:hidden"
            aria-expanded={open}
            aria-controls="mobile-menu"
            onClick={() => setOpen((v) => !v)}
          >
            <span className="sr-only">{open ? 'Close menu' : 'Open menu'}</span>
            {open ? <X aria-hidden="true" className="h-5 w-5" /> : <Menu aria-hidden="true" className="h-5 w-5" />}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <div
        id="mobile-menu"
        hidden={!open}
        className="h-[calc(100dvh-4rem)] overflow-y-auto border-t border-ink-700 bg-ink-950 lg:hidden"
      >
        <ul className="mx-auto flex max-w-6xl flex-col px-5 py-6 sm:px-8">
          {navItems.map((item, i) => {
            const isActive = active === item.id;
            return (
              <li key={item.id} className="border-b border-ink-800">
                <a
                  ref={i === 0 ? firstLinkRef : undefined}
                  href={`#${item.id}`}
                  aria-current={isActive ? 'location' : undefined}
                  onClick={() => setOpen(false)}
                  className="flex items-baseline gap-4 py-4"
                >
                  <span className="font-mono text-xs text-paper-faint">{String(i + 1).padStart(2, '0')}</span>
                  <span className={`font-display text-3xl ${isActive ? 'text-lime' : 'text-paper'}`}>
                    {item.label}
                  </span>
                </a>
              </li>
            );
          })}
        </ul>
        <div className="mx-auto max-w-6xl px-5 pb-10 sm:px-8">
          <a
            href={contact.cv}
            download
            className="inline-flex items-center gap-2 rounded-full bg-lime px-5 py-2.5 text-sm font-medium text-ink-950"
          >
            <FileText aria-hidden="true" className="h-4 w-4" />
            Download CV (PDF)
          </a>
        </div>
      </div>
    </header>
  );
}
