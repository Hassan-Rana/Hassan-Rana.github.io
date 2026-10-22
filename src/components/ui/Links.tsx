import type { ReactNode } from 'react';
import { ArrowUpRight, Clock } from 'lucide-react';
import type { LinkRef } from '../../data/types';

const isExternal = (href: string) => /^https?:\/\//.test(href);

type Variant = 'primary' | 'secondary' | 'ghost';

const variants: Record<Variant, string> = {
  primary:
    'bg-lime text-ink-950 hover:bg-lime-soft border border-lime',
  secondary:
    'border border-ink-600 text-paper hover:border-paper-muted hover:bg-ink-800',
  ghost: 'text-paper-muted hover:text-paper',
};

interface ButtonLinkProps {
  href: string;
  children: ReactNode;
  variant?: Variant;
  icon?: ReactNode;
  download?: boolean;
  className?: string;
  ariaLabel?: string;
}

/** A link styled as a button. External links open in a new tab safely. */
export function ButtonLink({
  href,
  children,
  variant = 'secondary',
  icon,
  download,
  className = '',
  ariaLabel,
}: ButtonLinkProps) {
  const external = isExternal(href);
  return (
    <a
      href={href}
      download={download || undefined}
      target={external ? '_blank' : undefined}
      rel={external ? 'noopener noreferrer' : undefined}
      aria-label={ariaLabel}
      className={`group inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-medium transition-colors duration-200 ${variants[variant]} ${className}`}
    >
      {icon}
      <span>{children}</span>
    </a>
  );
}

/**
 * Renders a list of project/research links.
 * Links with href: null appear as a muted "coming soon" label — never a broken link.
 */
export function LinkList({ links }: { links: LinkRef[] }) {
  if (links.length === 0) return null;
  return (
    <ul className="flex flex-wrap gap-x-5 gap-y-2">
      {links.map((link) =>
        link.href ? (
          <li key={link.label}>
            <a
              href={link.href}
              target={isExternal(link.href) ? '_blank' : undefined}
              rel={isExternal(link.href) ? 'noopener noreferrer' : undefined}
              className="group inline-flex items-center gap-1 text-sm text-paper underline decoration-ink-600 underline-offset-4 transition-colors hover:decoration-lime"
            >
              {link.label}
              <ArrowUpRight
                aria-hidden="true"
                className="h-3.5 w-3.5 text-paper-faint transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-lime"
              />
              {isExternal(link.href) ? <span className="sr-only">(opens in a new tab)</span> : null}
            </a>
          </li>
        ) : (
          <li key={link.label} className="inline-flex items-center gap-1.5 text-sm text-paper-faint">
            <Clock aria-hidden="true" className="h-3.5 w-3.5" />
            {link.label} <span className="font-mono text-[11px] uppercase tracking-wider">— coming soon</span>
          </li>
        ),
      )}
    </ul>
  );
}
