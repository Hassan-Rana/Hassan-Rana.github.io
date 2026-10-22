import { ArrowDownRight, FileText, FlaskConical, Mail, MapPin } from 'lucide-react';
import { contact, profile } from '../../data/site';
import { ButtonLink } from '../ui/Links';
import { NetworkGraphic } from './NetworkGraphic';

export function Hero() {
  // Split the headline into its two sentences for typographic treatment.
  const [first, ...rest] = profile.headline.split('. ');
  const second = rest.join('. ');

  return (
    <section id="top" aria-labelledby="hero-heading" className="relative overflow-hidden pt-28 pb-20 sm:pt-36 sm:pb-28">
      {/* Background grid */}
      <div aria-hidden="true" className="bg-grid mask-fade-radial pointer-events-none absolute inset-0" />

      <div className="relative mx-auto grid max-w-6xl items-center gap-14 px-5 sm:px-8 lg:grid-cols-12">
        <div className="lg:col-span-7">
          <p className="animate-fade-up flex flex-wrap items-center gap-x-3 gap-y-1 font-mono text-xs uppercase tracking-[0.2em] text-paper-faint">
            <span className="text-paper">{profile.fullName}</span>
            <span aria-hidden="true" className="h-px w-6 bg-ink-600" />
            <span className="inline-flex items-center gap-1.5">
              <MapPin aria-hidden="true" className="h-3.5 w-3.5" />
              {profile.location}
            </span>
          </p>

          <h1
            id="hero-heading"
            className="animate-fade-up mt-7 font-display text-[3.4rem] leading-[0.98] tracking-tight text-paper [animation-delay:80ms] sm:text-7xl lg:text-[5.5rem]"
          >
            {first}.
            <br />
            <span className="italic text-lime">{second}</span>
          </h1>

          <p className="animate-fade-up mt-8 max-w-xl text-lg leading-relaxed text-paper-muted [animation-delay:160ms]">
            {profile.intro}
          </p>

          <ul aria-label="Roles" className="animate-fade-up mt-6 flex flex-wrap gap-2 [animation-delay:220ms]">
            {profile.roles.map((role) => (
              <li
                key={role}
                className="rounded-full border border-ink-700 bg-ink-900/70 px-3 py-1 text-[13px] text-paper-muted"
              >
                {role}
              </li>
            ))}
          </ul>

          <div className="animate-fade-up mt-10 flex flex-wrap gap-3 [animation-delay:280ms]">
            <ButtonLink href="#projects" variant="primary" icon={<ArrowDownRight aria-hidden="true" className="h-4 w-4" />}>
              View projects
            </ButtonLink>
            <ButtonLink href="#research" icon={<FlaskConical aria-hidden="true" className="h-4 w-4" />}>
              Research
            </ButtonLink>
            <ButtonLink href={contact.cv} download icon={<FileText aria-hidden="true" className="h-4 w-4" />}>
              Download CV
            </ButtonLink>
            <ButtonLink href="#contact" variant="ghost" icon={<Mail aria-hidden="true" className="h-4 w-4" />}>
              Get in touch
            </ButtonLink>
          </div>
        </div>

        {/* Right column: network graphic + "currently" panel */}
        <div className="animate-fade-up relative [animation-delay:200ms] lg:col-span-5">
          <div className="relative rounded-2xl border border-ink-700 bg-ink-900/60 p-4">
            <div className="flex items-center justify-between border-b border-ink-700/80 px-1 pb-3 font-mono text-[11px] uppercase tracking-wider text-paper-faint">
              <span>road_network.graph</span>
              <span className="inline-flex items-center gap-1.5">
                <span aria-hidden="true" className="h-1.5 w-1.5 rounded-full bg-lime" />
                simulating
              </span>
            </div>
            <NetworkGraphic className="mx-auto mt-3 h-auto w-full max-w-[420px]" />
          </div>

          <dl className="mt-4 divide-y divide-ink-700/80 rounded-2xl border border-ink-700 bg-ink-900/60">
            {profile.currently.map((item) => (
              <div key={item.label} className="grid grid-cols-[6.5rem_1fr] gap-3 px-5 py-3 text-sm">
                <dt className="font-mono text-[11px] uppercase tracking-wider text-paper-faint pt-0.5">{item.label}</dt>
                <dd className="text-paper">{item.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
