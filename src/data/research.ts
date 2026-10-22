import type { Experiment, Paper, ResearchInterest, TechNote, Thesis } from './types';

export const researchInterests: ResearchInterest[] = [
  {
    title: 'Intelligent transportation',
    description:
      'Modelling road networks as graphs to simulate traffic, understand congestion and support smarter cities.',
  },
  {
    title: 'Geospatial analytics',
    description: 'Working with location data to find spatial patterns and make them visible.',
  },
    {
    title: 'Spatio-temporal forecasting',
    description:
      'Predicting how systems change across space and time, from congestion on road networks to correcting weather forecasts with neural networks.',
  },
  {
    title: 'Medical image segmentation',
    description:
      'Using deep learning, especially the self-configuring nnU-Net framework, to detect and segment brain aneurysms in angiography images.',
  },
  {
    title: 'LLM systems & agents',
    description:
      'How structured, multi-agent pipelines can make language models more reliable than a single prompt.',
  },
  {
    title: 'Sensing meets machine learning',
    description:
      'Bringing signals from physical sensors, such as radar, together with neural networks.',
  },
];

/**
 * Your MSc thesis. Areas marked "proposed" are shown as proposed directions,
 * not results. Change a state to "confirmed" once agreed with your supervisor.
 */
export const thesis: Thesis = {
  title:
    'Traffic Simulation and Analysis for Smart Cities: Leveraging Graph-Based Stochastic Simulation and Geospatial Analytics for Real-Time Traffic Analysis and Congestion Prediction',
  degree: 'MSc Data Science — thesis',
  institution: 'University of Debrecen',
  status: 'ongoing',
  period: '2026 – present',
  summary:
    'Studying traffic flow on road networks using graph-based stochastic simulation and geospatial analytics, with the goal of analysing traffic and predicting congestion.',
  areas: [
    { label: 'Road-network modelling as graphs', state: 'proposed' },
    { label: 'Graph-based routing', state: 'proposed' },
    { label: 'Stochastic traffic simulation', state: 'proposed' },
    { label: 'Congestion analysis & prediction', state: 'proposed' },
    { label: 'Geospatial visualisation', state: 'proposed' },
  ],
  supervisor: null,
  links: [{ label: 'Thesis repository', href: null }],
};

/**
 * Publications. Only add real, published (or clearly labelled in-preparation) work.
 * Example:
 * {
 *   title: 'Paper title',
 *   authors: ['M. H. Rana', 'Co-author'],
 *   date: '2027-03',
 *   venue: 'Journal or conference name',
 *   doi: '10.xxxx/xxxxx',
 *   url: null,
 *   abstract: 'Short abstract…',
 *   notes: null,
 *   kind: 'journal',
 * }
 */
export const papers: Paper[] = [];

export const experiments: Experiment[] = [
  {
    title: 'Radar-based posture and fall detection',
    description:
      'Research-assistant work at the Radar Lab (SINES, NUST): pre-processing mm-wave radar data, feature extraction, and training and evaluating neural networks for human-activity recognition.',
    status: 'completed',
    date: '2022 – 2023',
    relatedProject: 'posture-recognition-fall-detection',
    links: [],
  },
  {
    title: 'Multi-agent LLM pipeline vs. single prompt',
    description:
      'Benchmarking a cross-validating multi-agent pipeline on Llama 3.1 (8B) against a single-prompt baseline.',
    status: 'completed',
    date: 'Spring 2026',
    relatedProject: 'nlp-multi-agent-synthesizer',
    links: [],
  },
];

/** Short write-ups, blog posts or notebooks. Add entries as you publish them. */
export const techNotes: TechNote[] = [];
