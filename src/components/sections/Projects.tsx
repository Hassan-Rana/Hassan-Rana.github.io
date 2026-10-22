import { ChevronDown } from 'lucide-react';
import { projects } from '../../data/projects';
import type { Project } from '../../data/types';
import { Section } from '../ui/Section';
import { Reveal } from '../ui/Reveal';
import { StatusBadge, Tag, Unverified } from '../ui/Badges';
import { LinkList } from '../ui/Links';

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const titleId = `project-${project.slug}-title`;
  const isPlaceholder = project.status === 'placeholder';

  return (
    <article
      id={`project-${project.slug}`}
      aria-labelledby={titleId}
      className={`group flex h-full flex-col rounded-2xl border bg-ink-900/60 p-6 transition-colors duration-300 sm:p-7 ${
        isPlaceholder ? 'border-dashed border-ink-600' : 'border-ink-700 hover:border-ink-600'
      }`}
    >
      {project.image ? (
        <img
          src={project.image.src}
          alt={project.image.alt}
          loading="lazy"
          decoding="async"
          className="mb-6 aspect-video w-full rounded-lg border border-ink-700 object-cover"
        />
      ) : null}

      <div className="flex flex-wrap items-center justify-between gap-3">
        <span className="font-mono text-xs text-paper-faint">
          {String(index + 1).padStart(2, '0')}
          {project.period ? <span> · {project.period}</span> : null}
        </span>
        <StatusBadge status={project.status} />
      </div>

      <h3 id={titleId} className="mt-4 text-xl font-medium leading-snug text-paper">
        {project.title}
      </h3>
      <p className="mt-3 leading-relaxed text-paper-muted">{project.summary}</p>

      <ul className="mt-5 flex flex-wrap gap-2" aria-label="Technologies">
        {project.technologies.map((t) => (
          <li key={t}>
            <Tag>{t}</Tag>
          </li>
        ))}
      </ul>

      <details className="group/details mt-6 border-t border-ink-700 pt-4">
        <summary className="flex cursor-pointer list-none items-center justify-between gap-3 rounded text-sm text-paper-muted transition-colors hover:text-paper [&::-webkit-details-marker]:hidden">
          <span>
            Problem, method & outcomes<span className="sr-only"> for {project.title}</span>
          </span>
          <ChevronDown
            aria-hidden="true"
            className="h-4 w-4 transition-transform duration-200 group-open/details:rotate-180"
          />
        </summary>
        <dl className="mt-4 space-y-4 text-sm leading-relaxed">
          <div>
            <dt className="font-mono text-[11px] uppercase tracking-wider text-paper-faint">Problem</dt>
            <dd className="mt-1 text-paper-muted">{project.problem}</dd>
          </div>
          <div>
            <dt className="font-mono text-[11px] uppercase tracking-wider text-paper-faint">Methodology</dt>
            <dd className="mt-1 text-paper-muted">{project.methodology}</dd>
          </div>
          <div>
            <dt className="font-mono text-[11px] uppercase tracking-wider text-paper-faint">Outcomes</dt>
            <dd className="mt-1 text-paper-muted">
              {project.outcomes.length ? (
                <ul className="space-y-1.5">
                  {project.outcomes.map((o) => (
                    <li key={o.text}>
                      {o.text}
                      {!o.verified ? <Unverified /> : null}
                    </li>
                  ))}
                </ul>
              ) : (
                <span className="text-paper-faint">To be added.</span>
              )}
            </dd>
          </div>
        </dl>
      </details>

      <div className="mt-auto pt-6">
        <LinkList links={project.links} />
      </div>
    </article>
  );
}

export function Projects() {
  return (
    <Section
      id="projects"
      index="04"
      eyebrow="Featured projects"
      title={
        <>
          Ideas taken <span className="italic text-paper-muted">from question to working system.</span>
        </>
      }
      intro={
        <>
          A selection of coursework, research and personal projects. Entries marked{' '}
          <span className="font-mono text-xs uppercase tracking-wider text-amber">placeholder</span> or{' '}
          <span className="font-mono text-xs uppercase tracking-wider text-amber">unverified</span> are still being
          written up.
        </>
      }
    >
      <ul className="grid gap-5 md:grid-cols-2">
        {projects.map((project, i) => (
          <Reveal as="li" key={project.slug} delay={(i % 2) * 80} className={project.featured ? 'md:col-span-2' : ''}>
            <ProjectCard project={project} index={i} />
          </Reveal>
        ))}
      </ul>
    </Section>
  );
}
