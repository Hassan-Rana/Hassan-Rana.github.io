import type { ReactNode } from 'react';
import { Reveal } from './Reveal';

interface SectionProps {
  id: string;
  /** Small numbered label above the title, e.g. "02" */
  index: string;
  eyebrow: string;
  title: ReactNode;
  intro?: ReactNode;
  children: ReactNode;
  className?: string;
}

/** Consistent wrapper for every homepage section. */
export function Section({ id, index, eyebrow, title, intro, children, className = '' }: SectionProps) {
  const headingId = `${id}-heading`;
  return (
    <section
      id={id}
      aria-labelledby={headingId}
      className={`relative border-t border-ink-700/70 py-20 sm:py-28 ${className}`}
    >
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <Reveal className="mb-12 grid gap-6 md:mb-16 md:grid-cols-12">
          <div className="md:col-span-4">
            <p className="flex items-center gap-3 font-mono text-xs uppercase tracking-[0.2em] text-paper-faint">
              <span className="text-lime">{index}</span>
              <span aria-hidden="true" className="h-px w-8 bg-ink-600" />
              {eyebrow}
            </p>
          </div>
          <div className="md:col-span-8">
            <h2
              id={headingId}
              className="font-display text-4xl leading-[1.05] tracking-tight text-paper sm:text-5xl"
            >
              {title}
            </h2>
            {intro ? <div className="mt-5 max-w-2xl text-base leading-relaxed text-paper-muted">{intro}</div> : null}
          </div>
        </Reveal>
        {children}
      </div>
    </section>
  );
}
