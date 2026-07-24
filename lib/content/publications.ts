export type Publication = {
  slug: string
  title: string
  description: string
  venue: string
  venueShort: string
  date: string
  status: 'published' | 'in-review' | 'in-progress'
  type: 'conference' | 'journal' | 'preprint'
  doi?: string
  arxiv?: string
  pdf?: string
  authors: string[]
  abstract: string
  keywords: string[]
  citations: number
  bibtex: string
  metrics: { label: string; value: string }[]
}

export const publications: Publication[] = [
  {
    slug: 'vision-language-assistive-navigation',
    title:
      'Vision-Language Based Real-Time Assistive System for Outdoor Navigation of the Visually Impaired in Indian Urban Environments',
    description:
      'Real-time assistive navigation system for visually impaired individuals using vision-language models in Indian urban environments. Published at ISAECT 2025.',
    venue: '2025 7th International Symposium on Advanced Electrical and Communication Technologies (ISAECT)',
    venueShort: 'ISAECT 2025',
    date: '2025-12-18',
    status: 'published',
    type: 'conference',
    doi: '10.1109/isaect68904.2025.11318802',
    authors: ['Charan Sai Ponnada', 'Divya Kothapalli', 'Karthik Goparaju', 'Sanath Pedapudi'],
    abstract:
      'This paper presents a real-time assistive system for outdoor navigation of visually impaired individuals in Indian urban environments. Leveraging vision-language models, the system provides contextual descriptions and navigation guidance to help visually impaired users navigate complex outdoor settings. The approach addresses the unique challenges of Indian urban environments including varied terrain, traffic patterns, and linguistic diversity.',
    keywords: [
      'Vision-Language Models',
      'Assistive Navigation',
      'Visually Impaired',
      'Outdoor Navigation',
      'Indian Urban Environments',
      'Real-Time Systems',
    ],
    citations: 3,
    bibtex: `@inproceedings{ponnada2025vision,
  title={Vision-Language Based Real-Time Assistive System for Outdoor Navigation of the Visually Impaired in Indian Urban Environments},
  author={Ponnada, Charan Sai and Kothapalli, Divya and Goparaju, Karthik and Pedapudi, Sanath},
  booktitle={2025 7th International Symposium on Advanced Electrical and Communication Technologies (ISAECT)},
  year={2025},
  doi={10.1109/isaect68904.2025.11318802}
}`,
    metrics: [
      { label: 'Real-Time', value: 'Yes' },
      { label: 'Environment', value: 'Indian Urban' },
      { label: 'DOI', value: '10.1109/isaect68904.2025.11318802' },
      { label: 'Conference', value: 'ISAECT 2025' },
    ],
  },
  {
    slug: 'semantic-consistency-hallucination-detection',
    title:
      'Semantic Consistency for Hallucination Detection in Large Language Models',
    description:
      'Novel framework for detecting hallucinations in LLMs using semantic consistency checking. Under review at IEEE InCODE-2026.',
    venue: 'IEEE International Conference on Computing, Communication and Intelligent Systems (InCODE)',
    venueShort: 'IEEE InCODE-2026',
    date: '2026-04-01',
    status: 'in-review',
    type: 'conference',
    authors: ['Charan Sai Ponnada', 'Dr. A. Reddy'],
    abstract:
      'We propose a novel framework for detecting hallucinations in large language model outputs using semantic consistency analysis. Our approach generates multiple semantically equivalent paraphrases of model outputs and measures consistency across them using sentence-level embeddings and cross-attention mechanisms. Experimental results on multiple LLM benchmarks demonstrate that our method outperforms existing factuality metrics by a significant margin.',
    keywords: [
      'Hallucination Detection',
      'Large Language Models',
      'Semantic Consistency',
      'Natural Language Processing',
      'AI Safety',
    ],
    citations: 0,
    bibtex: `@inproceedings{ponnada2026semantic,
  title={Semantic Consistency for Hallucination Detection in Large Language Models},
  author={Ponnada, Charan Sai and Reddy, A.},
  booktitle={Proceedings of IEEE InCODE 2026},
  year={2026}
}`,
    metrics: [
      { label: 'Detection F1', value: '0.89' },
      { label: 'Models Evaluated', value: '5 LLMs' },
      { label: 'Benchmarks', value: '3 Datasets' },
      { label: 'Improvement', value: '+12% F1' },
    ],
  },
]

export function getPublicationBySlug(slug: string): Publication | undefined {
  return publications.find((p) => p.slug === slug)
}

export function getPublicationTags(): string[] {
  const tags = new Set<string>()
  publications.forEach((p) => p.keywords.forEach((k) => tags.add(k)))
  return Array.from(tags).sort()
}
