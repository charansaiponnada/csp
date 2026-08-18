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
    id: 'aynstyn-swe',
    role: 'AI Engineer Intern → Software Engineer (Full-Time, PPO)',
    organization: 'Aynstyn Technologies Pvt. Ltd.',
    url: 'https://aynstyn.com',
    location: 'Remote',
    type: 'work',
    startDate: '2026-01',
    current: true,
    description:
      'Shipping LLM-powered features and full-stack platform modules end to end, from schema design through CI/CD deployment.',
    highlights: [
      'Designed and built LabSoft (Next.js, PostgreSQL) end-to-end as sole developer, shipping the Patient Management and Reporting modules',
      'Architected Aynstyn Intel, an internal analytics platform with Bloom’s Taxonomy distribution tracking, knowledge-gap heatmaps and cohort funnel analytics',
      'Improved LLM response reliability across 3+ production workflows via systematic black-box test suites',
      'Prompt tuning and evaluation on the in-house AI agent using Amazon’s open-source Strands Agents SDK',
      'Own end-to-end development and CI/CD deployment of the React Native mobile app, shipping 5+ production modules',
    ],
    tags: ['Next.js', 'PostgreSQL', 'React Native', 'LLM evaluation', 'CI/CD'],
  },
  {
    id: 'genomic-foundation-model-research',
    role: 'Independent Researcher — 3D-Chromatin-Aware Pretraining',
    organization: 'Genomic Foundation Model (HopField-Mamba)',
    location: 'Independent research',
    type: 'research',
    startDate: '2026-01',
    current: true,
    description:
      'Building a genomic foundation model from scratch that conditions pretraining on 3D chromatin (Hi-C) structure rather than adding it post-hoc.',
    highlights: [
      'Structural-bias mechanism in the SSM recurrence at +0.43% parameter overhead, under a 5% matched-compute constraint',
      'Fixed a memory-horizon collapse in Mamba’s default timestep initialization, raising median effective memory span ~30x with validation loss unchanged',
      'Pipeline validated against independent reference data (insulation score r=0.997, compartment PC1 r=0.976 vs 4DN tracks)',
      'Trained the 7.7M-parameter baseline across 3 seeds to 1.52 bits/nucleotide validation loss',
      'Benchmarked on the GUE suite, outperforming a pure MambaMAE baseline on 3 of 4 evaluated tasks',
    ],
    tags: ['PyTorch', 'Mamba/SSM', 'Hi-C', 'genomics', 'multi-GPU'],
  },
  {
    id: 'yuvaan-iith-2026',
    role: '2nd Place — YUVAAN 2026 AI/ML Hackathon',
    organization: 'IIT Hyderabad',
    location: 'Hyderabad, India',
    type: 'achievement',
    startDate: '2026-02',
    description:
      'Placed 2nd among the Top 10 finalists, out of 7,600+ registrants, with VIVIRITY Intelli-Credit.',
    highlights: [
      'Non-embedding RAG pipeline at 98% lower API overhead than vector-based retrieval',
      'Automated ingestion of 500+ page annual reports, cutting extraction from days to under 5 minutes',
      'Extracted 50+ financial risk indicators through a multi-agent decision pipeline',
    ],
    tags: ['hackathon', 'RAG', 'fintech', 'award'],
  },
  {
    id: 'research-isaect-2025',
    role: 'Primary Author — IEEE ISAECT 2025',
    organization: 'IEEE ISAECT 2025, Mohali, India',
    location: 'Mohali, India',
    type: 'research',
    startDate: '2025-12',
    description:
      'Vision-language based real-time assistive navigation for visually impaired users, deployed on Raspberry Pi.',
    highlights: [
      'Fine-tuned BLIP via 3-stage LoRA training on a custom 427-scene dataset from Google Street View API imagery',
      '+15.6% across BLEU, METEOR, ROUGE and semantic similarity',
      'Edge-cloud hybrid architecture deployed on Raspberry Pi; model released on HuggingFace, code open-sourced',
    ],
    tags: ['research', 'computer vision', 'BLIP', 'LoRA', 'publication'],
  },
  {
    id: 'oracle-agentic-ai-cert',
    role: 'Agentic AI Foundations Associate (1Z0-1157-26)',
    organization: 'Oracle',
    location: 'Online',
    type: 'achievement',
    startDate: '2026-08',
    endDate: '2028-08',
    description: 'Oracle certification in agentic AI foundations.',
    highlights: [],
    tags: ['certification', 'agentic AI'],
  },
  {
    id: 'btech-vrsec',
    role: 'B.Tech in Artificial Intelligence and Data Science',
    organization: 'Velagapudi Ramakrishna Siddhartha Engineering College (VRSEC)',
    location: 'Vijayawada, India',
    type: 'education',
    startDate: '2023-09',
    endDate: '2027-05',
    description: 'B.Tech in Artificial Intelligence and Data Science. CGPA 8.69 / 10.',
    highlights: [
      'CGPA 8.69 / 10',
      'Published IEEE researcher while an undergraduate',
      'Deep learning, computer vision and NLP',
    ],
    tags: ['artificial intelligence', 'data science', 'bachelor'],
  },
]

export function getCurrentExperience(): Experience | undefined {
  return experiences.find((e) => e.current)
}
