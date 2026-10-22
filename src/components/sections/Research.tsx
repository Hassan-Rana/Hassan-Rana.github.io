import { ArrowUpRight, BookOpen, FlaskConical, NotebookPen, Route } from 'lucide-react';
import type { ReactNode } from 'react';
import { experiments, papers, researchInterests, techNotes, thesis } from '../../data/research';
import { projects } from '../../data/projects';
import { Section } from '../ui/Section';
import { Reveal } from '../ui/Reveal';
import { StatusBadge } from '../ui/Badges';
import { LinkList } from '../ui/Links';

function SubHeading({ icon, children }: { icon: ReactNode; children: ReactNode }) {
  return (
    <h3 className="flex items-center gap-2 font-mono text-xs uppercase tracking-[0.2em] text-paper-faint">
      <span className="text-lime">{icon}</span>
      {children}
    </h3>
  );
}

function EmptyState({ children }: { children: ReactNode }) {
  return (
    <p className="rounded-xl border border-dashed border-ink-700 px-5 py-6 text-sm text-paper-faint">{children}</p>
  );
}

const kindLabel = {
  journal: 'Journal article',
  conference: 'Conference paper',
  preprint: 'Preprint',
  thesis: 'Thesis',
  'in-preparation': 'In preparation',
} as const;

export function Research() {
  return (
    <Section
      id="research"
      index="05"
      eyebrow="Research"
      title={
        <>
          Questions I’m <span className="italic text-paper-muted">working on.</span>
        </>
      }
      intro="Ongoing and planned work is labelled as such. Results and publications appear here only once they exist."
    >
      {/* Thesis */}
      <Reveal>
        <article
          aria-labelledby="thesis-title"
          className="relative overflow-hidden rounded-2xl border border-ink-700 bg-ink-900/60 p-6 sm:p-10"
        >
          <div aria-hidden="true" className="bg-grid mask-fade-b pointer-events-none absolute inset-0 opacity-60" />
          <div className="relative">
            <div className="flex flex-wrap items-center gap-3">
              <span className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.2em] text-paper-faint">
                <Route aria-hidden="true" className="h-4 w-4 text-lime" />
                {thesis.degree}
              </span>
              <StatusBadge status={thesis.status} />
            </div>
            <h3 id="thesis-title" className="mt-5 max-w-4xl font-display text-2xl leading-snug text-paper sm:text-3xl">
              {thesis.title}
            </h3>
            <p className="mt-3 text-sm text-paper-faint">
              {thesis.institution}
              {thesis.period ? ` · ${thesis.period}` : ''}
              {thesis.supervisor ? ` · Supervisor: ${thesis.supervisor}` : ''}
            </p>
            <p className="mt-6 max-w-2xl leading-relaxed text-paper-muted">{thesis.summary}</p>

            <div className="mt-8">
              <p className="font-mono text-[11px] uppercase tracking-wider text-paper-faint">Areas of investigation</p>
              <ul className="mt-3 flex flex-wrap gap-2">
                {thesis.areas.map((a) => (
                  <li
                    key={a.label}
                    className={`inline-flex items-center gap-2 rounded-full border px-3 py-1.5 text-sm ${
                      a.state === 'confirmed'
                        ? 'border-lime/40 text-paper'
                        : 'border-dashed border-ink-600 text-paper-muted'
                    }`}
                  >
                    {a.label}
                    <span className="font-mono text-[10px] uppercase tracking-wider text-paper-faint">
                      {a.state}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-8">
              <LinkList links={thesis.links} />
            </div>
          </div>
        </article>
      </Reveal>

      {/* Interests */}
      <Reveal className="mt-16">
        <SubHeading icon={<ArrowUpRight aria-hidden="true" className="h-4 w-4" />}>Research interests</SubHeading>
        <ul className="mt-6 grid gap-px overflow-hidden rounded-2xl border border-ink-700 bg-ink-700 sm:grid-cols-2">
          {researchInterests.map((r) => (
            <li key={r.title} className="bg-ink-900 p-6">
              <p className="font-medium text-paper">{r.title}</p>
              <p className="mt-2 text-sm leading-relaxed text-paper-muted">{r.description}</p>
            </li>
          ))}
        </ul>
      </Reveal>

      <div className="mt-16 grid gap-12 lg:grid-cols-3">
        {/* Papers */}
        <Reveal>
          <SubHeading icon={<BookOpen aria-hidden="true" className="h-4 w-4" />}>Selected papers</SubHeading>
          <div className="mt-6">
            {papers.length === 0 ? (
              <EmptyState>No publications yet — papers will be listed here once published.</EmptyState>
            ) : (
              <ul className="space-y-5">
                {papers.map((p) => {
                  const href = p.doi ? `https://doi.org/${p.doi}` : p.url;
                  return (
                    <li key={p.title} className="rounded-xl border border-ink-700 bg-ink-900/60 p-5">
                      <p className="font-mono text-[11px] uppercase tracking-wider text-paper-faint">
                        {kindLabel[p.kind]} · <time>{p.date}</time>
                      </p>
                      <p className="mt-2 font-medium leading-snug text-paper">
                        {href ? (
                          <a
                            href={href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="underline decoration-ink-600 underline-offset-4 hover:decoration-lime"
                          >
                            {p.title}
                            <span className="sr-only"> (opens in a new tab)</span>
                          </a>
                        ) : (
                          p.title
                        )}
                      </p>
                      <p className="mt-1 text-sm text-paper-muted">{p.authors.join(', ')}</p>
                      {p.venue ? <p className="text-sm italic text-paper-faint">{p.venue}</p> : null}
                      {p.doi ? <p className="mt-1 font-mono text-xs text-paper-faint">DOI: {p.doi}</p> : null}
                      {p.abstract ? (
                        <details className="mt-3 text-sm">
                          <summary className="cursor-pointer text-paper-muted hover:text-paper">Abstract</summary>
                          <p className="mt-2 leading-relaxed text-paper-muted">{p.abstract}</p>
                        </details>
                      ) : null}
                      {p.notes ? <p className="mt-2 text-sm text-paper-faint">{p.notes}</p> : null}
                    </li>
                  );
                })}
              </ul>
            )}
          </div>
        </Reveal>

        {/* Experiments */}
        <Reveal delay={80}>
          <SubHeading icon={<FlaskConical aria-hidden="true" className="h-4 w-4" />}>Experiments</SubHeading>
          <div className="mt-6">
            {experiments.length === 0 ? (
              <EmptyState>Experiments will be documented here.</EmptyState>
            ) : (
              <ul className="space-y-4">
                {experiments.map((e) => {
                  const related = e.relatedProject ? projects.find((p) => p.slug === e.relatedProject) : undefined;
                  return (
                    <li key={e.title} className="rounded-xl border border-ink-700 bg-ink-900/60 p-5">
                      <div className="flex flex-wrap items-center gap-2">
                        <StatusBadge status={e.status} />
                        {e.date ? <span className="font-mono text-[11px] text-paper-faint">{e.date}</span> : null}
                      </div>
                      <p className="mt-3 font-medium text-paper">{e.title}</p>
                      <p className="mt-1.5 text-sm leading-relaxed text-paper-muted">{e.description}</p>
                      {related ? (
                        <a
                          href={`#project-${related.slug}`}
                          className="mt-3 inline-flex items-center gap-1 text-sm text-paper underline decoration-ink-600 underline-offset-4 hover:decoration-lime"
                        >
                          See the project: {related.title}
                        </a>
                      ) : null}
                      {e.links.length ? (
                        <div className="mt-3">
                          <LinkList links={e.links} />
                        </div>
                      ) : null}
                    </li>
                  );
                })}
              </ul>
            )}
          </div>
        </Reveal>

        {/* Technical notes */}
        <Reveal delay={160}>
          <SubHeading icon={<NotebookPen aria-hidden="true" className="h-4 w-4" />}>Technical notes</SubHeading>
          <div className="mt-6">
            {techNotes.length === 0 ? (
              <EmptyState>Write-ups and notes from my work will appear here.</EmptyState>
            ) : (
              <ul className="divide-y divide-ink-700 rounded-xl border border-ink-700 bg-ink-900/60">
                {techNotes.map((n) => (
                  <li key={n.title} className="p-5">
                    <p className="font-mono text-[11px] text-paper-faint">
                      <time>{n.date}</time>
                    </p>
                    <p className="mt-1 font-medium text-paper">
                      {n.href ? (
                        <a href={n.href} className="underline decoration-ink-600 underline-offset-4 hover:decoration-lime">
                          {n.title}
                        </a>
                      ) : (
                        n.title
                      )}
                    </p>
                    <p className="mt-1 text-sm text-paper-muted">{n.summary}</p>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </Reveal>
      </div>
    </Section>
  );
}
