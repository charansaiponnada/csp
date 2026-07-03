export type Experience = {
  id: string
  role: string
  organization: string
  url?: string
  location: string
  type: 'work' | 'education' | 'research' | 'achievement'
  startDate: string
  endDate?: string
  current?: boolean
  description: string
  highlights: string[]
  tags: string[]
}

export const experiences: Experience[] = [
  {
    id: 'aynstyn-ai-engineer',
    role: 'AI Engineer',
    organization: 'Aynstyn Technologies',
    url: 'https://aynstyn.com',
    location: 'Hyderabad, India',
    type: 'work',
    startDate: '2025-08',
    current: true,
    description:
      'Building production AI systems and SaaS platform features. Implementing PPO-secured customer handling pipelines and AI-powered automation.',
    highlights: [
      'Developed and deployed PPO-secured AI customer handling pipeline',
      'Built production-grade SaaS features serving 10+ enterprise clients',
      'Implemented real-time data processing with FastAPI and Redis',
      'Containerized microservices with Docker on AWS ECS',
    ],
    tags: ['AI', 'SaaS', 'FastAPI', 'Python', 'AWS', 'PPO'],
  },
  {
    id: 'yuvaan-iith-2nd',
    role: '2nd Place — YUVAAN 2026 Hackathon',
    organization: 'IIT Hyderabad',
    url: 'https://yuvaan.iith.ac.in',
    location: 'Hyderabad, India',
    type: 'achievement',
    startDate: '2026-02',
    description:
      'Secured 2nd place at IIT Hyderabad YUVAAN 2026 with VIVIRITY Intelli-Credit — AI-powered credit risk intelligence platform.',
    highlights: [
      'Built ensemble ML system with 92% default prediction accuracy',
      'Implemented SHAP-based explainability for regulatory compliance',
      'Reduced false positives by 40% compared to traditional models',
    ],
    tags: ['hackathon', 'machine learning', 'fintech', 'award'],
  },
  {
    id: 'research-isaect',
    role: 'Published Researcher',
    organization: 'ISAECT 2025',
    location: 'International',
    type: 'research',
    startDate: '2025-11',
    description:
      'Published research on Vision-Language Assistive Navigation using BLIP fine-tuning with 3-stage LoRA strategy.',
    highlights: [
      'Fine-tuned BLIP model for visual-language assistive navigation',
      'Achieved +18% BLEU score gain with 3-stage LoRA',
      'Published and presented at ISAECT 2025',
    ],
    tags: ['research', 'computer vision', 'BLIP', 'LoRA', 'publication'],
  },
  {
    id: 'btech-artificial-intelligence',
    role: 'B.Tech in Artificial Intelligence & Data Science',
    organization: 'Velagapudi Ramakrishna Siddhartha Engineering College (VRSEC)',
    location: 'Vijayawada, India',
    type: 'education',
    startDate: '2023',
    endDate: '2027',
    description:
      'Pursuing Bachelor of Technology in Artificial Intelligence and Data Science with focus on Deep Learning, Computer Vision, and NLP.',
    highlights: [
      'Specialization in AI and Data Science',
      'Published IEEE research papers at ISAECT 2025',
      'Active in open-source contributions and technical writing',
      'Built production AI systems at Aynstyn Technologies',
    ],
    tags: ['artificial intelligence', 'data science', 'deep learning', 'bachelor'],
  },
]

export function getCurrentExperience(): Experience | undefined {
  return experiences.find((e) => e.current)
}
