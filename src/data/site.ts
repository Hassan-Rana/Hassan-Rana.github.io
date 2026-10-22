/**
 * Who you are, how to reach you, and the navigation.
 * Edit the values below — the whole site updates automatically.
 */

export const profile = {
  fullName: 'Muhammad Hassan',
  shortName: 'Hassan',
  monogram: 'ℌ',
  roles: ['Data Science MSc student', 'AI / ML practitioner', 'Aspiring researcher'],
  location: 'Debrecen, Hungary',
  headline: 'Curious by nature. Driven to build.',
  intro:
    'I explore intelligent systems and how they can solve real-world problems — turning ideas into practical, working solutions. Currently studying Data Science at the University of Debrecen, with a background in electrical engineering.',
  /**
   * Profile photo. Put your image in /public/images/ (e.g. profile.jpg)
   * and set src to "/images/profile.jpg". Leave null to show the monogram instead.
   */
  photo: { src: '/images/profile.jpeg', alt: 'Portrait of Muhammad Hassan' },
  /** What you're focused on right now — shown in the hero panel. */
  currently: [
    { label: 'Studying', value: 'MSc Data Science, University of Debrecen' },
    { label: 'Thesis', value: 'Traffic simulation for smart cities (ongoing)' },
    { label: 'Based in', value: 'Debrecen, Hungary' },
  ],
};

/**
 * Contact & social links.
 * Use null for anything you don't want shown — it will be hidden automatically.
 */
export const contact = {
  email: 'hassan853247@gmail.com',
  /** e.g. "https://www.linkedin.com/in/your-handle/" */
  linkedin: 'https://www.linkedin.com/in/iamhassanrana/',
  /** e.g. "https://github.com/your-username" */
  github: 'https://github.com/Hassan-Rana',
  /** Phone is hidden unless you fill it in, e.g. "+36 30 000 0000". */
  phone: '+36 563 0611',
  /** Path to your CV inside /public. Replace the file to update it. */
  cv: '/cv/Muhammad_Hassan_Rana_CV.pdf',
};

export const navItems = [
  { id: 'about', label: 'About' },
  { id: 'education', label: 'Education' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'research', label: 'Research' },
  { id: 'experience', label: 'Experience' },
  { id: 'beyond', label: 'Beyond' },
  { id: 'contact', label: 'Contact' },
] as const;

export type SectionId = (typeof navItems)[number]['id'];
