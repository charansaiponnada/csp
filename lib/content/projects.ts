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
    slug: 'genomic-foundation-model',
    title: '3D-Aware Genomic Foundation Model (HopField-Mamba)',
    description:
      'A genomic foundation model trained from scratch that conditions pretraining on 3D chromatin (Hi-C) structure rather than adding it post-hoc.',
    longDescription:
      'An independent research project building a genomic foundation model from scratch on a 2x NVIDIA L40S cluster. The core idea is to condition self-supervised pretraining directly on 3D chromatin (Hi-C) structure, rather than bolting structure on after the fact the way the closest prior work does.',
    category: 'research',
    techStack: ['Python', 'PyTorch', 'Mamba/SSM', 'Hi-C genomic data', '2x NVIDIA L40S'],
    featured: true,
    date: '2026-01-01',
    status: 'in-progress',
    problem:
      'Genomic foundation models read DNA as a linear sequence, but regulation is three-dimensional — enhancers act on promoters through chromatin folding. The closest prior art (Evo2HiC, Noble Lab 2025) adds structure post-hoc via contrastive distillation, and has no variant/ClinVar evaluation in that lineage.',
    solution:
      'A structural-bias mechanism inside the SSM recurrence itself — a per-channel timescale bias plus a permeability penalty on the Caduceus-PH backbone — so 3D structure shapes pretraining directly, at only +0.43% parameter overhead and inside a 5% matched-compute constraint.',
    architecture: [
      'Backbone: Caduceus-PH (Mamba/SSM), from-scratch self-supervised pretraining',
      'Structural bias: per-channel timescale bias + permeability penalty in the SSM recurrence',
      'Data pipeline: Hi-C contact maps, insulation score and compartment PC1 tracks',
      'Validation: independent 4DN reference tracks and CTCF ChIA-PET assay data',
      'Training: 2x NVIDIA L40S, 3 seeds, matched-compute constraint against baseline',
      'Evaluation: GUE benchmark suite',
    ],
    results:
      'The 7.7M-parameter baseline trains to 1.52 bits/nucleotide validation loss across 3 seeds, establishing the floor a structural-vs-baseline comparison must clear. The data pipeline validates against independent reference data (insulation score r=0.997, compartment PC1 r=0.976 vs 4DN tracks), and a predicted regulatory loop was corroborated by independent CTCF ChIA-PET assay data. On the GUE suite it outperforms a pure MambaMAE baseline on 3 of 4 evaluated tasks. A separate finding — a memory-horizon collapse in Mamba default timestep initialization, whose fix raises median effective memory span ~30x with validation loss unchanged within seed noise — is being written up as a standalone transferable result.',
    faqs: [
      {
        question: 'What makes this different from existing genomic foundation models?',
        answer:
          'Structure is part of pretraining rather than a post-hoc addition. The closest prior work distills structure contrastively after the fact; here the 3D signal biases the state-space recurrence during self-supervised training.',
      },
      {
        question: 'Is the memory-horizon fix specific to genomics?',
        answer:
          'No. The degradation comes from Mamba default timestep initialization, so the fix should transfer to any long-context SSM. That is why it is being written up separately.',
      },
    ],
    tags: ['genomics', 'foundation models', 'Mamba', 'SSM', 'Hi-C', 'PyTorch'],
  },
  {
    slug: 'vivirity-intelli-credit',
    title: 'VIVIRITY Intelli-Credit',
    description:
      'Credit risk intelligence system built on a non-embedding RAG pipeline. 2nd place at the IIT Hyderabad AI/ML Hackathon (YUVAAN 2026).',
    longDescription:
      'An end-to-end AI credit intelligence system that reads annual reports and turns them into structured loan risk assessments. Built for YUVAAN 2026 at IIT Hyderabad, where it placed 2nd among the Top 10 finalists out of 7,600+ registrants.',
    category: 'ai-ml',
    techStack: [
      'Python',
      'FastAPI',
      'Google Generative AI Toolkit',
      'Google A2A Toolkit',
      'Gemini API',
      'RAG',
      'Pandas',
      'NumPy',
    ],
    github: 'https://github.com/charansaiponnada/VIVIRITY',
    featured: true,
    date: '2026-02-15',
    status: 'completed',
    problem:
      'Credit analysts read 500+ page annual reports by hand to extract the handful of numbers that actually drive a lending decision. It takes days per document, and vector-based retrieval over that volume is expensive in API calls.',
    solution:
      'A non-embedding RAG pipeline feeding a multi-agent decision pipeline, so retrieval happens without the cost of maintaining and querying an embedding index.',
    architecture: [
      'Ingestion: automated parsing of 500+ page annual reports',
      'Retrieval: non-embedding RAG pipeline, no vector index to maintain',
      'Extraction: 50+ financial risk indicators',
      'Decisioning: multi-agent pipeline (Google A2A toolkit) for end-to-end loan risk assessment',
      'API layer: FastAPI',
    ],
    results:
      '98% lower API overhead than traditional vector-based retrieval, and extraction time down from multiple days of manual work to under 5 minutes. Placed 2nd among the Top 10 finalists at YUVAAN 2026, IIT Hyderabad, out of 7,600+ registrants.',
    faqs: [
      {
        question: 'Why non-embedding retrieval?',
        answer:
          'Embedding every chunk of a 500-page report and querying a vector store was the dominant cost. Skipping the embedding step cut API overhead by 98% without losing the retrieval quality the decision pipeline needed.',
      },
    ],
    tags: ['credit risk', 'RAG', 'fintech', 'multi-agent', 'Gemini'],
  },
  {
    slug: 'labsoft',
    title: 'LabSoft',
    description:
      'Diagnostics platform built end-to-end as sole developer at Aynstyn — schema design through deployment.',
    longDescription:
      'A production Next.js and PostgreSQL platform I designed and built end-to-end as the sole developer, shipping the Patient Management and Reporting modules from schema design through deployment.',
    category: 'full-stack',
    techStack: ['Next.js', 'TypeScript', 'PostgreSQL', 'React', 'CI/CD'],
    featured: true,
    date: '2026-03-01',
    status: 'completed',
    problem:
      'The platform needed patient records and reporting as first-class modules, with no existing schema, API surface or deployment path to build on.',
    solution:
      'Owned the whole vertical: relational schema, API routes, UI, and the deployment pipeline, shipped as two production modules.',
    architecture: [
      'Next.js app router frontend and API routes',
      'PostgreSQL relational schema designed from scratch',
      'Patient Management module',
      'Reporting module',
      'CI/CD deployment pipeline',
    ],
    results: 'Two production modules shipped and running live, built and deployed solo.',
    faqs: [],
    tags: ['Next.js', 'PostgreSQL', 'full-stack', 'production'],
  },
  {
    slug: 'aynstyn-intel',
    title: 'Aynstyn Intel',
    description:
      'Internal analytics platform giving admins real-time learner visibility through Bloom’s Taxonomy tracking and knowledge-gap heatmaps.',
    longDescription:
      'An internal analytics platform I architected at Aynstyn, giving admins real-time visibility into learner performance via Bloom’s Taxonomy distribution tracking, knowledge-gap heatmaps and cohort funnel analytics.',
    category: 'full-stack',
    techStack: ['Next.js', 'TypeScript', 'PostgreSQL', 'Data visualization'],
    featured: true,
    date: '2026-04-01',
    status: 'completed',
    problem:
      'Admins had no way to see where learners were actually struggling — only raw completion numbers, which say nothing about which cognitive level or which topic is failing.',
    solution:
      'An analytics layer that classifies activity by Bloom’s Taxonomy level and surfaces gaps as heatmaps, alongside cohort funnel analytics.',
    architecture: [
      'Bloom’s Taxonomy distribution tracking over learner activity',
      'Knowledge-gap heatmaps by topic and cognitive level',
      'Cohort funnel analytics',
      'Real-time admin dashboard',
    ],
    results: 'Admins get real-time learner visibility instead of completion counts.',
    faqs: [],
    tags: ['analytics', 'edtech', 'dashboards', 'Next.js'],
  },
  {
    slug: 'dtm-drainage-pipeline',
    title: 'DTM — Drone LiDAR to Drainage Network Pipeline',
    description:
      'End-to-end geospatial pipeline turning raw drone LiDAR into a designed drainage network. Built for the MoPR Geospatial Hackathon at IIT Tirupati.',
    longDescription:
      'A full geospatial processing pipeline for the MoPR Geospatial Hackathon at IIT Tirupati: ground classification, DTM interpolation, hydrology modeling and drainage network design, running on real drone LiDAR data.',
    category: 'ai-ml',
    techStack: ['Python', 'pysheds', 'XGBoost', 'networkx', 'Geospatial processing'],
    github: 'https://github.com/charansaiponnada/DTM',
    featured: false,
    date: '2026-01-15',
    status: 'completed',
    problem:
      'Raw drone LiDAR point clouds are not directly usable for drainage planning — the ground surface has to be extracted, interpolated and modeled hydrologically before any network can be designed.',
    solution:
      'A staged pipeline: ground classification, DTM interpolation, hydrological flow modeling with pysheds, and drainage network design over the resulting graph.',
    architecture: [
      'Ground classification from raw drone LiDAR point clouds',
      'DTM interpolation to a continuous terrain surface',
      'Hydrological flow modeling with pysheds',
      'Waterlogging-risk classifier with XGBoost',
      'Drainage network design with networkx',
    ],
    results:
      'A working end-to-end pipeline from raw drone LiDAR to a designed drainage network, with a waterlogging-risk classifier over real terrain data.',
    faqs: [],
    tags: ['geospatial', 'LiDAR', 'hydrology', 'XGBoost'],
  },
  {
    slug: 'collaborative-sync-engine',
    title: 'Collaborative Sync Engine',
    description:
      'Real-time collaborative text editing built from scratch on a CRDT (RGA), with cross-instance sync over Redis Pub/Sub.',
    longDescription:
      'A real-time collaborative text-editing engine being built from scratch using a CRDT (RGA) approach, chosen over operational transforms for provable convergence correctness in a solo build.',
    category: 'full-stack',
    techStack: ['TypeScript', 'Node.js', 'WebSockets', 'Redis Pub/Sub', 'Docker'],
    featured: false,
    date: '2026-06-01',
    status: 'in-progress',
    problem:
      'Operational transforms need a large, carefully tested transform matrix to stay correct. Getting that right alone is a poor bet.',
    solution:
      'An RGA-based CRDT, where convergence is a property of the data structure rather than of the transform functions, plus reconnect and diverged-state recovery via state-vector diffing.',
    architecture: [
      'CRDT (RGA) document model',
      'Real-time sync over WebSockets',
      'Redis Pub/Sub for cross-instance broadcast',
      'Reconnect and diverged-state recovery via state-vector diffing',
      'Dockerized services',
    ],
    results: 'In progress.',
    faqs: [],
    tags: ['CRDT', 'real-time', 'WebSockets', 'distributed systems'],
  },
  {
    slug: 'payment-processing-engine',
    title: 'Payment Processing Engine',
    description:
      'Idempotent charge API backed by a double-entry ledger, with HMAC-signed async webhook delivery.',
    longDescription:
      'A payment processing engine designed around an idempotent charge API backed by a double-entry ledger rather than a mutable balance field, so financial correctness holds under retries and concurrent requests.',
    category: 'full-stack',
    techStack: ['TypeScript', 'Node.js', 'PostgreSQL', 'Redis', 'Docker'],
    featured: false,
    date: '2026-07-01',
    status: 'in-progress',
    problem:
      'A balance column plus a retryable endpoint is how you end up double-charging customers. Correctness has to be structural, not defensive.',
    solution:
      'A double-entry ledger as the source of truth and an idempotency key on every charge, so retries and concurrent requests converge on the same state.',
    architecture: [
      'Idempotent charge API keyed on client-supplied idempotency keys',
      'Double-entry ledger in PostgreSQL as source of truth',
      'Async webhook delivery via a Redis-backed job queue',
      'HMAC-signed webhook payloads with exponential-backoff retries',
    ],
    results: 'In progress.',
    faqs: [],
    tags: ['payments', 'ledger', 'idempotency', 'system design'],
  },
]

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug)
}

export function getFeaturedProjects(): Project[] {
  return projects.filter((p) => p.featured)
}
