import type { Interest, SkillGroup } from './types';

/**
 * Skills, grouped. There are deliberately no percentage bars:
 * use the optional `note` to say where you used a skill instead.
 */
export const skillGroups: SkillGroup[] = [
  {
    id: 'programming',
    title: 'Programming',
    description: 'Languages for scientific computing and data work.',
    items: [
      { name: 'Python' },
      { name: 'R' },
      { name: 'C / C++' },
      { name: 'MATLAB' },
      { name: 'SQL' },
    ],
  },
  {
    id: 'data-ml',
    title: 'Data science & machine learning',
    description: 'From raw data to evaluated models.',
    items: [
      { name: 'Data pre-processing' },
      { name: 'Feature selection & extraction' },
      { name: 'Clustering & classification' },
      { name: 'Model training & evaluation' },
      { name: 'Neural networks', note: 'Radar-based activity recognition' },
    ],
  },
  {
    id: 'ai-llm',
    title: 'AI & LLMs',
    description: 'Foundation models and generative AI.',
    items: [
      { name: 'Multi-agent LLM pipelines', note: 'Llama 3.1 (8B)' },
      { name: 'GPT models' },
      { name: 'Multimodal Llama' },
      { name: 'Retrieval-augmented generation (RAG)' },
      { name: 'AI assistants' },
    ],
  },
  {
    id: 'tools',
    title: 'Frameworks & tools',
    description: 'What I build with.',
    items: [
      { name: 'PyTorch' },
      { name: 'TensorFlow' },
      { name: 'Keras' },
      { name: 'Scikit-learn' },
      { name: 'RapidMiner' },
    ],
  },
  {
    id: 'engineering',
    title: 'Engineering',
    description: 'Electrical-engineering foundations and field work.',
    items: [
      { name: 'DMR communication systems' },
      { name: 'Switching & routing', note: 'CCNA coursework' },
      { name: 'Network troubleshooting & site assessment' },
      { name: 'mm-Wave radar sensing' },
      { name: 'Signals & systems' },
    ],
  },
];

export const interests: Interest[] = [
  {
    title: 'Reading',
    description: 'Books that change how I think — about technology, people and the world.',
    icon: 'book',
  },
  {
    title: 'Hiking',
    description: 'Time outdoors to slow down, clear my head and see new places.',
    icon: 'mountain',
  },
  {
    title: 'Learning',
    description: 'Picking up new subjects and skills, inside and outside the classroom.',
    icon: 'lightbulb',
  },
  {
    title: 'Exploring ideas',
    description: 'Following questions wherever they lead — often into something worth building.',
    icon: 'compass',
  },
];
