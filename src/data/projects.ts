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
    slug: 'flat-watch-debrecen',
    title: 'Flat-Watch Debrecen — Rental Matching Platform',
    period: 'Fall 2026',
    status: 'completed',
    summary:
      'A team project started at an agentic AI hackathon: a platform that matches tenants in Debrecen with apartments, private rooms and bed spaces, and explains why each place fits.',
    problem:
      'Students and newcomers in Debrecen search through scattered rental ads, lose time on places that don’t fit and risk rental scams. Landlords get many unsuitable enquiries.',
    methodology:
      'Built an agent pipeline that reads listing text, works out the real monthly cost and the commute to campus, flags scam signs and gives each listing an explained match score, with saved-search alerts and in-app chat between tenants and landlords.',
    technologies: ['Python', 'Streamlit', 'Agentic AI', 'OpenStreetMap', 'SQLite'],
    outcomes: [
      { text: 'Working prototype with tenant, landlord and moderator roles and 50 automated tests.', verified: true },
    ],
    links: [{ label: 'Source code on GitHub', href: 'https://github.com/Pelusharaz/Flat_watch' }],
  },
  {
    slug: 'nlp-multi-agent-synthesizer',
    title: 'NLP Multi-Agent Synthesizer & Reviewer',
    period: 'Spring 2026',
    status: 'completed',
    featured: true,
    summary:
      'A multi-agent NLP pipeline on Llama 3.1 (8B), where specialised agents analyse a text, judge its tone, write a report and check each other’s work.',
    problem:
      'A single prompt to a language model can miss details, make unchecked claims or misread the tone of a text. The question was whether splitting the work across specialised, cross-checking agents gives better results than one prompt.',
    methodology:
      'Built Analyst, Tone, Synthesizer and Reviewer agents running on Llama 3.1 (8B) through Ollama. The Tone agent judges sentiment, formality, politeness, confidence and emotions, and an independent rule-based tone checker cross-validates it. The Reviewer sends drafts back until they are faithful to the source, and the pipeline is benchmarked against a single-prompt baseline on a labelled set of texts.',
    technologies: ['Python', 'Llama 3.1 (8B)', 'Ollama', 'Multi-agent pipeline', 'Tone analysis', 'Streamlit'],
    outcomes: [
      {
        text: 'Benchmark comparison against the single-prompt baseline — results to be added.',
        verified: false,
      },
    ],
    links: [
      { label: 'Source code on GitHub', href: 'https://github.com/Hassan-Rana/nlp-multi-agent-reviewer' },
      { label: 'Project report', href: null },
    ],
  },
  {
    slug: 'air-quality-aqi-rapidminer',
    title: 'Air Quality Assessment & AQI Prediction',
    period: 'Fall 2025',
    status: 'completed',
    summary:
      'Predicts the Air Quality Index for today and the next two days in six cities of the Indian subcontinent from historical and current data, taking into account festivals, events and seasons that add to pollution.',
    problem:
      'Air quality in South Asian cities swings sharply around occasions such as Diwali, New Year and Shab-e-Barat fireworks, Lohri bonfires and the crop-burning and winter smog seasons. The aim was to predict AQI from past and current pollution data while accounting for these events.',
    methodology:
      'Combined more than three years of daily PM2.5, PM10 and other pollutant data with weather and a festival and season calendar, then trained gradient-boosted models to forecast PM2.5 and PM10 and convert them to the national AQI scale. Tested on a held-out final year against persistence and a version without the event features.',
    technologies: ['Python', 'scikit-learn', 'Time-series forecasting', 'Feature engineering', 'Open-Meteo API', 'Streamlit'],
    outcomes: [
      { text: 'Model accuracy and key findings — to be added.', verified: false },
    ],
    links: [
      { label: 'Source code on GitHub', href: 'https://github.com/Hassan-Rana/aqi-forecast-south-asia' },
      { label: 'Project report', href: null },
    ],
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
