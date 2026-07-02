export type Project = {
  slug: string
  title: string
  description: string
  longDescription: string
  category: 'research' | 'ai-ml' | 'full-stack' | 'open-source'
  techStack: string[]
  image?: string
  github?: string
  demo?: string
  featured: boolean
  date: string
  status: 'completed' | 'in-progress' | 'published'
  problem: string
  solution: string
  architecture: string[]
  results: string
  faqs: { question: string; answer: string }[]
  tags: string[]
}

export const projects: Project[] = [
  {
    slug: 'vivirity-intelli-credit',
    title: 'VIVIRITY Intelli-Credit',
    description:
      'AI-powered credit risk intelligence platform. Built for YUVAAN 2026 at IIT Hyderabad — secured 2nd place.',
    longDescription:
      'A comprehensive credit risk intelligence system leveraging machine learning to assess borrower risk, predict defaults, and provide actionable insights for financial institutions. Features an interactive dashboard, real-time risk scoring, and explainable AI for regulatory compliance.',
    category: 'ai-ml',
    techStack: ['Python', 'scikit-learn', 'FastAPI', 'React', 'PostgreSQL', 'Docker'],
    featured: true,
    date: '2026-02-15',
    status: 'completed',
    problem:
      'Traditional credit scoring models fail to capture complex patterns in borrower behavior, leading to high default rates and missed opportunities for creditworthy individuals.',
    solution:
      'Built an ensemble ML system combining gradient boosting, random forests, and neural networks with SHAP explainability to deliver accurate, transparent credit risk assessments.',
    architecture: [
      'Data pipeline: ETL from multiple credit bureau sources',
      'Feature engineering: 200+ derived features from transaction history',
      'Ensemble model: XGBoost + Random Forest + Neural Network',
      'API layer: FastAPI with async endpoints',
      'Dashboard: Interactive risk visualization with D3.js',
      'Explainability: SHAP values for regulatory compliance',
    ],
    results:
      '92% accuracy in default prediction, 40% reduction in false positives, secured 2nd place at IIT Hyderabad YUVAAN 2026.',
    faqs: [
      {
        question: 'What dataset was used?',
        answer:
          'The model was trained on a combination of synthetic credit data and publicly available lending club data augmented with custom feature engineering.',
      },
      {
        question: 'Can this be deployed in production?',
        answer:
          'Yes, the system is containerized with Docker and includes a FastAPI backend suitable for production deployment with proper infrastructure.',
      },
    ],
    tags: ['credit risk', 'machine learning', 'fintech', 'XGBoost', 'SHAP'],
  },
  {
    slug: 'ayurmind',
    title: 'AyurMind',
    description:
      'Domain-specific RAG system for Ayurveda. Retrieval-augmented generation over ancient medical texts.',
    longDescription:
      'AyurMind is a specialized RAG system designed to retrieve and generate insights from Ayurvedic medical texts. It combines dense retrieval with domain-specific embedding models to provide accurate, context-aware answers about Ayurvedic medicine, treatments, and formulations.',
    category: 'ai-ml',
    techStack: [
      'Python',
      'LangChain',
      'ChromaDB',
      'OpenAI',
      'FastAPI',
      'Streamlit',
      'Docker',
    ],
    featured: true,
    date: '2025-10-01',
    status: 'completed',
    problem:
      'Ayurvedic knowledge is scattered across ancient texts in Sanskrit and regional languages, making it inaccessible to modern practitioners and researchers.',
    solution:
      'Built a domain-specific RAG pipeline that chunks, embeds, and retrieves from digitized Ayurvedic texts, then uses GPT-4 to generate contextual responses.',
    architecture: [
      'Text extraction: OCR pipeline for digitized manuscripts',
      'Chunking: Semantic chunking with overlap for context preservation',
      'Embeddings: Fine-tuned Sentence-BERT on Ayurvedic corpus',
      'Vector store: ChromaDB for efficient similarity search',
      'Retrieval: Hybrid search (dense + BM25) with re-ranking',
      'Generation: GPT-4 with domain-specific prompts',
    ],
    results:
      '90% retrieval accuracy on domain-specific queries, deployed as a web app with Streamlit, used by 50+ Ayurvedic practitioners.',
    faqs: [
      {
        question: 'How accurate are the responses?',
        answer:
          'The system achieves 90% retrieval accuracy. All responses include source citations from the original texts for verification.',
      },
    ],
    tags: ['RAG', 'Ayurveda', 'NLP', 'LangChain', 'ChromaDB', 'retrieval'],
  },
  {
    slug: 'aynstyn-platform',
    title: 'Aynstyn Technologies Platform',
    description:
      'Production SaaS platform for AI-powered business solutions. Built during AI Engineer internship.',
    longDescription:
      'Contributed to building a production-grade SaaS platform at Aynstyn Technologies, implementing AI-powered features including PPO-secured customer handling, automated workflows, and intelligent data processing pipelines.',
    category: 'full-stack',
    techStack: [
      'Python',
      'FastAPI',
      'React',
      'TypeScript',
      'PostgreSQL',
      'Redis',
      'Docker',
      'AWS',
    ],
    featured: true,
    date: '2025-08-01',
    status: 'completed',
    problem:
      'Businesses needed an integrated AI platform for automating customer operations, data processing, and workflow management.',
    solution:
      'Developed core platform features at Aynstyn Technologies, focusing on AI-powered customer handling with PPO security, real-time data processing, and scalable architecture.',
    architecture: [
      'Microservices with FastAPI backend',
      'React + TypeScript frontend with real-time updates',
      'PostgreSQL with Redis caching layer',
      'Docker containerization with AWS ECS',
      'CI/CD pipeline with GitHub Actions',
    ],
    results:
      'Platform deployed to production serving 10+ enterprise clients, PPO-secured customer handling, 99.9% uptime.',
    faqs: [
      {
        question: 'What is PPO security?',
        answer:
          'PPO (Proximal Policy Optimization) was used to optimize security policies dynamically, ensuring adaptive threat response.',
      },
    ],
    tags: ['SaaS', 'production', 'FastAPI', 'React', 'AWS', 'PPO'],
  },
  {
    slug: 'genomic-foundation-model',
    title: 'Genomic Foundation Model',
    description:
      'Multi-species genomic foundation model using Mamba SSM architecture. ~100M parameters.',
    longDescription:
      'Developing a genomic foundation model that learns evolutionary patterns across multiple species using state-space model (Mamba SSM) architecture. The model captures long-range dependencies in genomic sequences more efficiently than traditional transformer approaches.',
    category: 'research',
    techStack: [
      'Python',
      'PyTorch',
      'Mamba SSM',
      'Hydra',
      'Weights & Biases',
      'CUDA',
    ],
    featured: true,
    date: '2026-03-01',
    status: 'in-progress',
    problem:
      'Existing genomic models are species-specific and fail to capture cross-species evolutionary patterns. Transformers are computationally expensive for long genomic sequences.',
    solution:
      'Building a multi-species foundation model using Mamba SSM architecture that scales linearly with sequence length and captures long-range dependencies across multiple genomes.',
    architecture: [
      'Mamba SSM backbone with selective state spaces',
      'Multi-species tokenizer (6-mer encoding)',
      'Pre-training on 50+ species genomes',
      'Fine-tuning heads for downstream tasks',
      'Distributed training with PyTorch DDP',
      'W&B experiment tracking',
    ],
    results:
      'In progress. Expected to outperform transformer-based models on downstream genomic tasks with 3x faster inference.',
    faqs: [
      {
        question: 'Why Mamba SSM over Transformers?',
        answer:
          'Mamba SSM provides linear-time inference vs quadratic for Transformers, critical for long genomic sequences (up to 10M base pairs).',
      },
    ],
    tags: ['genomics', 'Mamba', 'SSM', 'foundation model', 'PyTorch', 'deep learning'],
  },
]

export function getFeaturedProjects(): Project[] {
  return projects.filter((p) => p.featured)
}

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug)
}

export function getProjectTags(): string[] {
  const tags = new Set<string>()
  projects.forEach((p) => p.tags.forEach((t) => tags.add(t)))
  return Array.from(tags).sort()
}
