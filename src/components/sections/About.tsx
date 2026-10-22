import { profile } from '../../data/site';
import { Monogram } from '../layout/Monogram';
import { Section } from '../ui/Section';
import { Reveal } from '../ui/Reveal';

const facts = [
  { label: 'Background', value: 'Electrical engineering (NUST)' },
  { label: 'Now', value: 'MSc Data Science, Debrecen' },
  { label: 'Drawn to', value: 'Technology with societal impact' },
];

export function About() {
  return (
    <Section
      id="about"
      index="01"
      eyebrow="About"
      title={
        <>
          From signals and networks <span className="italic text-paper-muted">to data and intelligent systems.</span>
        </>
      }
    >
      <div className="grid gap-12 md:grid-cols-12">
        <Reveal className="md:col-span-4">
          <figure className="overflow-hidden rounded-2xl border border-ink-700 bg-ink-900">
            {profile.photo ? (
              <img
                src={profile.photo.src}
                alt={profile.photo.alt}
                loading="lazy"
                decoding="async"
                width={600}
                height={720}
                className="aspect-[5/6] w-full object-cover grayscale-[15%]"
              />
            ) : (
              <div className="bg-grid relative flex aspect-[5/6] w-full items-center justify-center">
                <Monogram className="h-24 w-24 rounded-2xl text-5xl" />
              </div>
            )}
            <figcaption className="border-t border-ink-700 px-4 py-3 font-mono text-[11px] uppercase tracking-wider text-paper-faint">
              {profile.fullName} · {profile.location}
            </figcaption>
          </figure>
        </Reveal>

        <Reveal className="md:col-span-8" delay={80}>
          <div className="max-w-2xl space-y-5 text-lg leading-relaxed text-paper-muted">
            <p>
              I started out in <span className="text-paper">electrical engineering</span> at the National University
              of Sciences and Technology (NUST). Working in a radar lab, I built a system that used mm-wave radar and
              neural networks to recognise posture and detect falls — and found that the part I enjoyed most was
              making sense of the data.
            </p>
            <p>
              After graduating I worked as a system engineer, designing and maintaining communication, switching and
              routing systems. That taught me how real systems behave outside the lab: they need to be reliable,
              understandable and useful to the people who depend on them.
            </p>
            <p>
              Today I am studying for a <span className="text-paper">master’s in Data Science at the University of
              Debrecen</span> in Hungary. My thesis looks at traffic simulation for smart cities, and I am exploring how
              language models can work together in structured pipelines. I learn by being curious, asking questions,
              and building things — and I care most about technology that makes a real difference to society.
            </p>
            <p>
              Away from the screen you will usually find me reading, hiking, or chasing down a new idea.
            </p>
          </div>

          <dl className="mt-10 grid gap-px overflow-hidden rounded-xl border border-ink-700 bg-ink-700 sm:grid-cols-3">
            {facts.map((f) => (
              <div key={f.label} className="bg-ink-900 px-5 py-4">
                <dt className="font-mono text-[11px] uppercase tracking-wider text-paper-faint">{f.label}</dt>
                <dd className="mt-1.5 text-sm text-paper">{f.value}</dd>
              </div>
            ))}
          </dl>
        </Reveal>
      </div>
    </Section>
  );
}
