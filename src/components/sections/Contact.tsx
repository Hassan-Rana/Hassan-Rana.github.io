import { useState, type ReactNode } from 'react';
import { Check, Copy, FileText, Mail, MapPin, Phone } from 'lucide-react';
import { contact, profile } from '../../data/site';
import { Section } from '../ui/Section';
import { Reveal } from '../ui/Reveal';
import { GitHubIcon, LinkedInIcon } from '../ui/BrandIcons';

/**
 * Contact uses a plain mailto link — no fake form.
 * To add a real form later, see README → "Adding a contact form".
 */
export function Contact() {
  const [copied, setCopied] = useState<'idle' | 'done' | 'failed'>('idle');

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(contact.email);
      setCopied('done');
    } catch {
      setCopied('failed');
    }
    window.setTimeout(() => setCopied('idle'), 2500);
  };

  const socials: { label: string; href: string; icon: ReactNode }[] = [];
  if (contact.linkedin) socials.push({ label: 'LinkedIn', href: contact.linkedin, icon: <LinkedInIcon /> });
  if (contact.github) socials.push({ label: 'GitHub', href: contact.github, icon: <GitHubIcon /> });

  return (
    <Section
      id="contact"
      index="08"
      eyebrow="Contact"
      title={
        <>
          Let’s build something <span className="italic text-lime">worth building.</span>
        </>
      }
      intro="Open to conversations about internships, research collaborations, and projects in data science and AI. Email is the best way to reach me."
    >
      <Reveal className="grid gap-6 lg:grid-cols-12">
        <div className="rounded-2xl border border-ink-700 bg-ink-900/60 p-6 sm:p-10 lg:col-span-8">
          <p className="font-mono text-[11px] uppercase tracking-wider text-paper-faint">Email</p>
          <a
            href={`mailto:${contact.email}`}
            className="mt-3 block break-all font-display text-3xl text-paper underline decoration-ink-600 decoration-1 underline-offset-8 transition-colors hover:decoration-lime sm:text-4xl"
          >
            {contact.email}
          </a>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href={`mailto:${contact.email}?subject=${encodeURIComponent('Hello Hassan')}`}
              className="inline-flex items-center gap-2 rounded-full bg-lime px-5 py-2.5 text-sm font-medium text-ink-950 transition-colors hover:bg-lime-soft"
            >
              <Mail aria-hidden="true" className="h-4 w-4" />
              Write an email
            </a>
            <button
              type="button"
              onClick={copyEmail}
              className="inline-flex items-center gap-2 rounded-full border border-ink-600 px-5 py-2.5 text-sm text-paper transition-colors hover:border-paper-muted hover:bg-ink-800"
            >
              {copied === 'done' ? (
                <Check aria-hidden="true" className="h-4 w-4 text-lime" />
              ) : (
                <Copy aria-hidden="true" className="h-4 w-4" />
              )}
              Copy email address
            </button>
            <span role="status" aria-live="polite" className="self-center text-sm text-paper-faint">
              {copied === 'done' ? 'Copied to clipboard.' : copied === 'failed' ? 'Could not copy — please select the address above.' : ''}
            </span>
          </div>
        </div>

        <div className="flex flex-col gap-4 lg:col-span-4">
          <ul className="divide-y divide-ink-700 rounded-2xl border border-ink-700 bg-ink-900/60">
            <li className="flex items-center gap-3 px-5 py-4 text-sm text-paper-muted">
              <MapPin aria-hidden="true" className="h-4 w-4 text-paper-faint" />
              {profile.location}
            </li>
            {contact.phone ? (
              <li>
                <a
                  href={`tel:${contact.phone.replace(/\s+/g, '')}`}
                  className="flex items-center gap-3 px-5 py-4 text-sm text-paper-muted hover:text-paper"
                >
                  <Phone aria-hidden="true" className="h-4 w-4 text-paper-faint" />
                  {contact.phone}
                </a>
              </li>
            ) : null}
            {socials.map((s) => (
              <li key={s.label}>
                <a
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 px-5 py-4 text-sm text-paper-muted transition-colors hover:text-paper"
                >
                  <span className="text-paper-faint">{s.icon}</span>
                  {s.label} profile<span className="sr-only"> (opens in a new tab)</span>
                </a>
              </li>
            ))}
            <li>
              <a
                href={contact.cv}
                download
                className="flex items-center gap-3 px-5 py-4 text-sm text-paper-muted transition-colors hover:text-paper"
              >
                <FileText aria-hidden="true" className="h-4 w-4 text-paper-faint" />
                Download CV (PDF)
              </a>
            </li>
          </ul>
        </div>
      </Reveal>
    </Section>
  );
}
