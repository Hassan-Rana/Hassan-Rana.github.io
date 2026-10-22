import { Briefcase, FlaskConical, HeartHandshake, type LucideIcon } from 'lucide-react';
import { experience } from '../../data/experience';
import type { ExperienceEntry } from '../../data/types';
import { Section } from '../ui/Section';
import { Reveal } from '../ui/Reveal';
import { Unverified } from '../ui/Badges';

const kindMeta: Record<ExperienceEntry['kind'], { label: string; icon: LucideIcon }> = {
  work: { label: 'Work', icon: Briefcase },
  research: { label: 'Research', icon: FlaskConical },
  leadership: { label: 'Leadership & community', icon: HeartHandshake },
};

function formatPeriod(e: ExperienceEntry) {
  if (e.start && e.end) return `${e.start} – ${e.end}`;
  if (e.start) return `${e.start} – present`;
  return null;
}

export function Experience() {
  return (
    <Section
      id="experience"
      index="06"
      eyebrow="Experience & leadership"
      title={
        <>
          Building in the field, <span className="italic text-paper-muted">the lab and the community.</span>
        </>
      }
    >
      <ul className="space-y-4">
        {experience.map((e, i) => {
          const meta = kindMeta[e.kind];
          const Icon = meta.icon;
          const period = formatPeriod(e);
          const isLeadership = e.kind === 'leadership';
          return (
            <Reveal as="li" key={`${e.organization}-${e.role ?? i}`} delay={i * 60}>
              <article
                className={`grid gap-6 rounded-2xl border p-6 sm:p-8 md:grid-cols-12 ${
                  isLeadership ? 'border-lime/25 bg-ink-900' : 'border-ink-700 bg-ink-900/60'
                }`}
              >
                <div className="md:col-span-4">
                  <p className="inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-wider text-paper-faint">
                    <Icon aria-hidden="true" className="h-4 w-4 text-lime" />
                    {meta.label}
                  </p>
                  <p className="mt-3 font-mono text-sm text-paper-muted">
                    {period ?? <span className="text-paper-faint">Dates to be added</span>}
                  </p>
                  {e.location ? <p className="mt-1 text-sm text-paper-faint">{e.location}</p> : null}
                </div>

                <div className="md:col-span-8">
                  <h3 className="text-xl font-medium text-paper">
                    {e.role ?? <span className="text-paper-muted">Role to be confirmed</span>}
                    <span className="text-paper-faint"> · </span>
                    {e.url ? (
                      <a
                        href={e.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="underline decoration-ink-600 underline-offset-4 hover:decoration-lime"
                      >
                        {e.organization}
                        <span className="sr-only"> (official website, opens in a new tab)</span>
                      </a>
                    ) : (
                      e.organization
                    )}
                    {e.needsDetails ? <Unverified>Details to add</Unverified> : null}
                  </h3>
                  {e.tagline ? (
                    <p className="mt-2 font-display text-lg italic text-lime">“{e.tagline}”</p>
                  ) : null}
                  <p className="mt-3 leading-relaxed text-paper-muted">{e.description}</p>
                  {e.highlights.length ? (
                    <ul className="mt-4 space-y-1.5">
                      {e.highlights.map((h) => (
                        <li key={h} className="flex gap-3 text-sm text-paper-muted">
                          <span aria-hidden="true" className="mt-2 h-px w-3 shrink-0 bg-lime" />
                          {h}
                        </li>
                      ))}
                    </ul>
                  ) : null}
                </div>
              </article>
            </Reveal>
          );
        })}
      </ul>
    </Section>
  );
}
