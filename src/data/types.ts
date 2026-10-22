/**
 * Shared shapes for all site content.
 * You normally only edit the files next to this one (site.ts, projects.ts, …),
 * not this file.
 */

/** How far along something is. "placeholder" means details still need confirming. */
export type Status = 'completed' | 'ongoing' | 'planned' | 'placeholder';

/** A link that may not exist yet. Use `href: null` while the link is missing. */
export interface LinkRef {
  label: string;
  href: string | null;
}

export interface Outcome {
  text: string;
  /** Set to true only for results you can back up (report, repo, certificate…). */
  verified: boolean;
}

export interface ImageRef {
  /** Path inside /public, e.g. "/images/projects/nlp-agents.png" */
  src: string;
  /** Describe what the image shows, for screen-reader users. */
  alt: string;
}

export interface Project {
  /** Short unique id, used for anchors now and for /projects/<slug> pages later. */
  slug: string;
  title: string;
  period: string | null;
  status: Status;
  /** One or two sentences shown on the card. */
  summary: string;
  problem: string;
  methodology: string;
  technologies: string[];
  outcomes: Outcome[];
  links: LinkRef[];
  image?: ImageRef | null;
  featured?: boolean;
}

export interface ResearchInterest {
  title: string;
  description: string;
}

export interface ThesisArea {
  label: string;
  /** "proposed" until the direction is confirmed with your supervisor. */
  state: 'proposed' | 'confirmed';
}

export interface Thesis {
  title: string;
  degree: string;
  institution: string;
  status: Status;
  period: string | null;
  summary: string;
  areas: ThesisArea[];
  /** Leave null if you prefer not to name your supervisor publicly. */
  supervisor: string | null;
  links: LinkRef[];
}

export interface Paper {
  title: string;
  authors: string[];
  /** e.g. "2026-05" or "May 2026" */
  date: string;
  venue: string | null;
  doi: string | null;
  url: string | null;
  abstract: string | null;
  notes: string | null;
  kind: 'journal' | 'conference' | 'preprint' | 'thesis' | 'in-preparation';
}

export interface Experiment {
  title: string;
  description: string;
  status: Status;
  date: string | null;
  /** slug of a related project in projects.ts, if any */
  relatedProject?: string;
  links: LinkRef[];
}

export interface TechNote {
  title: string;
  date: string;
  summary: string;
  href: string | null;
}

export interface ExperienceEntry {
  kind: 'work' | 'research' | 'leadership';
  role: string | null;
  organization: string;
  location: string | null;
  start: string | null;
  end: string | null;
  description: string;
  highlights: string[];
  url: string | null;
  /** Optional motto, e.g. for nonprofit work. */
  tagline?: string;
  /** Marks entries where dates/role still need confirming. */
  needsDetails?: boolean;
}

export interface EducationEntry {
  degree: string;
  institution: string;
  location: string | null;
  start: string;
  end: string;
  current: boolean;
  courses: string[];
  /** e.g. thesis or final-year project */
  capstone: { label: string; title: string } | null;
}

export interface Honor {
  title: string;
  detail: string | null;
}

export interface SkillItem {
  name: string;
  /** Optional short context, e.g. where you used it. Avoid self-rated percentages. */
  note?: string;
}

export interface SkillGroup {
  id: string;
  title: string;
  description: string;
  items: SkillItem[];
}

export interface Interest {
  title: string;
  description: string;
  icon: 'book' | 'mountain' | 'lightbulb' | 'compass';
}
