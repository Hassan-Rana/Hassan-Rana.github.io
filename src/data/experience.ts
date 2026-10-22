import type { ExperienceEntry } from './types';

/**
 * Work, research and leadership — newest first.
 * Use null for dates or roles you haven't confirmed; set needsDetails: true
 * so the card shows that details are still being added.
 */
export const experience: ExperienceEntry[] = [
  {
    kind: 'work',
    role: 'System Engineer',
    organization: 'HR Mobiles',
    location: 'Karachi',
    start: 'Feb 2024',
    end: 'Jun 2025',
    description:
      'Designed, deployed and maintained DMR communication, switching and routing systems.',
    highlights: [
      'Network troubleshooting and site assessments',
      'Performance optimisation for reliable connectivity',
    ],
    url:'https://hrmobiles.com/',
  },
  {
    kind: 'research',
    role: 'Research Assistant',
    organization: 'Radar Lab, SINES — NUST',
    location: 'Islamabad',
    start: 'Sep 2022',
    end: 'Jun 2023',
    description:
      'Developed a posture-recognition and fall-detection system using mm-wave radar and neural networks.',
    highlights: [
      'Data pre-processing and feature extraction',
      'Model training and evaluation for human-activity recognition',
    ],
    url: null,
  },
  {
    kind: 'leadership',
    role: 'General Secretary',
    organization: 'Aghaaz',
    location: null,
    start: 'Sep 2026',
    end: 'Present',
    description:
      'General Secretary of Aghaaz, a student-led welfare initiative that is currently in its development stage.',
    highlights: [],
    url: 'https://aghaaz.org',
    tagline: 'For a better tomorrow',
    needsDetails: false,
  },
];
