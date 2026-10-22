import { BookOpen, Compass, Lightbulb, Mountain, type LucideIcon } from 'lucide-react';
import { interests } from '../../data/skills';
import type { Interest } from '../../data/types';
import { Section } from '../ui/Section';
import { Reveal } from '../ui/Reveal';

const icons: Record<Interest['icon'], LucideIcon> = {
  book: BookOpen,
  mountain: Mountain,
  lightbulb: Lightbulb,
  compass: Compass,
};

export function Beyond() {
  return (
    <Section
      id="beyond"
      index="07"
      eyebrow="Beyond technology"
      title={
        <>
          The things that <span className="italic text-paper-muted">keep me curious.</span>
        </>
      }
    >
      <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {interests.map((item, i) => {
          const Icon = icons[item.icon];
          return (
            <Reveal as="li" key={item.title} delay={i * 70}>
              <div className="group h-full rounded-2xl border border-ink-700 bg-ink-900/60 p-6 transition-colors hover:border-ink-600">
                <Icon
                  aria-hidden="true"
                  className="h-6 w-6 text-paper-faint transition-colors duration-300 group-hover:text-lime"
                  strokeWidth={1.5}
                />
                <h3 className="mt-6 font-display text-2xl text-paper">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-paper-muted">{item.description}</p>
              </div>
            </Reveal>
          );
        })}
      </ul>
    </Section>
  );
}
