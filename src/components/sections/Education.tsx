import { Award, GraduationCap } from 'lucide-react';
import { education, honors } from '../../data/education';
import { Section } from '../ui/Section';
import { Reveal } from '../ui/Reveal';
import { Tag } from '../ui/Badges';

export function Education() {
  return (
    <Section
      id="education"
      index="02"
      eyebrow="Education"
      title={
        <>
          Engineering foundations, <span className="italic text-paper-muted">data science focus.</span>
        </>
      }
    >
      <ol className="relative space-y-6 border-l border-ink-700 pl-6 sm:pl-10">
        {education.map((entry, i) => (
          <Reveal as="li" key={entry.degree} delay={i * 80} className="relative">
            <span
              aria-hidden="true"
              className={`absolute top-7 -left-[29px] h-2.5 w-2.5 rounded-full border sm:-left-[45px] ${
                entry.current ? 'border-lime bg-lime' : 'border-paper-faint bg-ink-950'
              }`}
            />
            <article className="rounded-2xl border border-ink-700 bg-ink-900/60 p-6 sm:p-8">
              <div className="flex flex-wrap items-start justify-between gap-4">
                <div>
                  <p className="font-mono text-xs uppercase tracking-wider text-paper-faint">
                    <time>{entry.start}</time> – <time>{entry.end}</time>
                    {entry.current ? <span className="ml-2 text-lime">· current</span> : null}
                  </p>
                  <h3 className="mt-2 flex items-center gap-2.5 text-xl font-medium text-paper">
                    <GraduationCap aria-hidden="true" className="h-5 w-5 shrink-0 text-paper-faint" />
                    {entry.degree}
                  </h3>
                  <p className="mt-1 text-paper-muted">
                    {entry.institution}
                    {entry.location ? <span className="text-paper-faint"> · {entry.location}</span> : null}
                  </p>
                </div>
              </div>

              {entry.capstone ? (
                <p className="mt-5 border-l-2 border-lime/60 pl-4 text-sm leading-relaxed text-paper-muted">
                  <span className="font-mono text-[11px] uppercase tracking-wider text-paper-faint">
                    {entry.capstone.label}
                  </span>
                  <br />
                  <span className="text-paper">{entry.capstone.title}</span>
                </p>
              ) : null}

              {entry.courses.length ? (
                <div className="mt-5">
                  <ul className="flex flex-wrap gap-2" aria-label="Selected courses">
                    {entry.courses.map((c) => (
                      <li key={c}>
                        <Tag>{c}</Tag>
                      </li>
                    ))}
                  </ul>
                </div>
              ) : null}
            </article>
          </Reveal>
        ))}
      </ol>

      <Reveal className="mt-14">
        <h3 className="flex items-center gap-2 font-mono text-xs uppercase tracking-[0.2em] text-paper-faint">
          <Award aria-hidden="true" className="h-4 w-4 text-lime" />
          Scholarships & awards
        </h3>
        <ul className="mt-5 grid gap-4 sm:grid-cols-3">
          {honors.map((h) => (
            <li key={h.title} className="rounded-xl border border-ink-700 bg-ink-900/60 p-5">
              <p className="text-paper">{h.title}</p>
              {h.detail ? <p className="mt-1.5 text-sm text-paper-faint">{h.detail}</p> : null}
            </li>
          ))}
        </ul>
      </Reveal>
    </Section>
  );
}
