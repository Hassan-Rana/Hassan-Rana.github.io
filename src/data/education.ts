import type { EducationEntry, Honor } from './types';

export const education: EducationEntry[] = [
  {
    degree: 'Master of Science in Data Science',
    institution: 'University of Debrecen',
    location: 'Debrecen, Hungary',
    start: 'Sep 2025',
    end: 'Present',
    current: true,
    courses: ['Natural Language Processing', 'Data Mining', 'Optimization Algorithms', 'Machine Learning'],
    capstone: {
      label: 'Thesis (ongoing)',
      title: 'Traffic Simulation and Analysis for Smart Cities',
    },
  },
  {
    degree: 'Bachelor of Electrical Engineering',
    institution: 'National University of Sciences and Technology (NUST)',
    location: null,
    start: 'Sep 2019',
    end: 'Jun 2023',
    current: false,
    courses: ['Calculus', 'Signals & Systems', 'Microwave Devices', 'CCNA'],
    capstone: {
      label: 'Final-year project',
      title: 'Posture Recognition and Fall Detection: fusing mm-wave radar with neural networks',
    },
  },
];

export const honors: Honor[] = [
  { title: 'Stipendium Hungaricum Scholarship', detail: 'MSc studies in Hungary' },
  {
    title: 'Prime Minister’s Undergraduate Scholarship',
    detail: 'Fully funded award for the complete BS degree',
  },
  { title: 'NGIRI Ignite funding — $1,000', detail: 'Awarded for the final-year project' },
];
