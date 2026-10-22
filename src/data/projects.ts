import type { Project } from './types';

/**
 * Projects shown in the "Featured projects" section, in this order.
 *
 * Honesty rules used on this site:
 *  - status "placeholder" = the project still needs real details from you;
 *    the card shows a clear "details to confirm" badge.
 *  - outcomes with verified: false are labelled "unverified" on the card.
 *  - links with href: null show as "link coming soon" instead of a broken link.
 *
 * To add a project, copy one block, give it a new unique slug, and edit the text.
 * To add a screenshot, put it in /public/images/projects/ and set
 *   image: { src: '/images/projects/your-file.png', alt: 'What the image shows' }
 */
export const projects: Project[] = [
  {
    slug: 'nlp-multi-agent-synthesizer',
    title: 'NLP Multi-Agent Synthesizer & Reviewer',
    period: 'Spring 2026',
    status: 'completed',
    featured: true,
    summary:
      'A multi-agent NLP pipeline built on Llama 3.1 (8B), where specialised agents analyse text, check each other’s work and refine the result.',
    problem:
      'A single prompt to a language model can miss details or produce unchecked claims. The question was whether splitting the work across specialised, cross-checking agents gives better results than one prompt.',
    methodology:
      'Designed specialised agents for text analysis, added cross-agent validation and an iterative refinement loop, then benchmarked the pipeline against a single-prompt baseline.',
    technologies: ['Python', 'Llama 3.1 (8B)', 'Multi-agent pipeline', 'LLM evaluation'],
    outcomes: [
      {
        text: 'Benchmark comparison against the single-prompt baseline — results to be added.',
        verified: false,
      },
    ],
    links: [
      { label: 'Source code on GitHub', href: null },
      { label: 'Project report', href: null },
    ],
  },
  {
    slug: 'air-quality-aqi-rapidminer',
    title: 'Air Quality Assessment & AQI Prediction',
    period: 'Fall 2025',
    status: 'completed',
    summary:
      'Data mining on pollutant and meteorological data to find pollution patterns and predict Air Quality Index (AQI) categories, built in RapidMiner.',
    problem:
      'Air-quality data is noisy and spread across many pollutant and weather variables. The aim was to uncover pollution patterns and predict AQI categories from them.',
    methodology:
      'Pre-processed the data, applied feature selection, used clustering to find pollution patterns, and trained classification models to predict AQI categories.',
    technologies: ['RapidMiner', 'Feature selection', 'Clustering', 'Classification'],
    outcomes: [
      { text: 'Model accuracy and key findings — to be added.', verified: false },
    ],
    links: [{ label: 'Project report', href: null }],
  },
  /*{
    slug: 'bokeh-air-quality-dashboard',
    title: 'Interactive Air-Quality Dashboard',
    period: null,
    status: 'completed',
    summary:
      'An interactive dashboard built with Bokeh for exploring air-quality measurements. Placeholder entry — description to be confirmed.',
    problem: 'To be added: what question the dashboard helps answer, and for whom.',
    methodology: 'To be added: data source, the views and interactions in the dashboard.',
    technologies: ['Python', 'Bokeh'],
    outcomes: [],
    links: [
      { label: 'Source code on GitHub', href: null },
      { label: 'Live dashboard demo', href: null },
    ],
  },*?
  /*{
    slug: 'student-performance-ml',
    title: 'Student Performance Analysis with Machine Learning',
    period: null,
    status: 'placeholder',
    summary:
      'Machine-learning analysis of factors related to student performance. Placeholder entry — description to be confirmed.',
    problem: 'To be added: the dataset and the question being studied.',
    methodology: 'To be added: models used and how they were evaluated.',
    technologies: ['Python', 'Scikit-learn'],
    outcomes: [],
    links: [{ label: 'Source code on GitHub', href: null }],
  },*/
 /* {
    slug: 'healthcare-data-project',
    title: 'Healthcare Data Project (Sleep Disorders / Medical Fraud)',
    period: null,
    status: 'placeholder',
    summary:
      'A data project on health-related data — either sleep-disorder analysis or medical-fraud detection. Placeholder entry — choose the topic and add details.',
    problem: 'To be added.',
    methodology: 'To be added.',
    technologies: ['Python'],
    outcomes: [],
    links: [{ label: 'Source code on GitHub', href: null }],
  },*/
  {
    slug: 'posture-recognition-fall-detection',
    title: 'Posture Recognition & Fall Detection with mm-Wave Radar',
    period: '2022 – 2023',
    status: 'completed',
    featured: true,
    summary:
      'Undergraduate final-year project and research-assistant work: fusing mm-wave radar sensing with neural networks to tell different postures apart and detect falls.',
    problem:
      'Detecting falls and recognising posture usually relies on cameras or wearables. Radar offers a contact-free alternative, but its signals need careful processing before a model can use them.',
    methodology:
      'Collected and pre-processed mm-wave radar data, extracted features, trained neural-network models and evaluated them for human-activity recognition.',
    technologies: ['mm-Wave radar', 'Neural networks', 'Signal processing', 'Python', 'MATLAB'],
    outcomes: [
      { text: 'Awarded $1,000 NGIRI Ignite funding for the final-year project.', verified: true },
      { text: 'Classification accuracy and evaluation results — to be added.', verified: false },
    ],
    links: [{ label: 'Project report', href: null }],
  },
];
