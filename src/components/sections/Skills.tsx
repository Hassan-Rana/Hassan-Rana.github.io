import { Bot, Brain, Code, Radio, Wrench, type LucideIcon } from 'lucide-react';
import { skillGroups } from '../../data/skills';
import { Section } from '../ui/Section';
import { Reveal } from '../ui/Reveal';

const icons: Record<string, LucideIcon> = {
  programming: Code,
  'data-ml': Brain,
  'ai-llm': Bot,
  tools: Wrench,
  engineering: Radio,
};

export function Skills() {
  return (
    <Section
      id="skills"
      index="03"
      eyebrow="Skills"
      title={
        <>
          A toolkit built <span className="italic text-paper-muted">across disciplines.</span>
        </>
      }
      intro="Grouped by area rather than scored with percentages — notes show where a skill has been put to work."
    >
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {skillGroups.map((group, i) => {
          const Icon = icons[group.id] ?? Code;
          return (
            <Reveal
              as="article"
              key={group.id}
              delay={(i % 3) * 70}
              className="rounded-2xl border border-ink-700 bg-ink-900/60 p-6"
            >
              <div className="flex items-center gap-3">
                <span className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-ink-700 bg-ink-850 text-lime">
                  <Icon aria-hidden="true" className="h-4.5 w-4.5" />
                </span>
                <h3 className="font-medium text-paper">{group.title}</h3>
              </div>
              <p className="mt-3 text-sm text-paper-faint">{group.description}</p>
              <ul className="mt-5 space-y-2.5">
                {group.items.map((item) => (
                  <li key={item.name} className="flex gap-3 text-[15px] leading-snug text-paper">
                    <span aria-hidden="true" className="mt-[0.55em] h-1 w-1 shrink-0 rounded-full bg-paper-faint" />
                    <span>
                      {item.name}
                      {item.note ? <span className="text-sm text-paper-faint"> — {item.note}</span> : null}
                    </span>
                  </li>
                ))}
              </ul>
            </Reveal>
          );
        })}
      </div>
    </Section>
  );
}
