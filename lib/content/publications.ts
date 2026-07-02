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
      'Vision-Language Assistive Navigation for Visually Impaired Using BLIP Fine-Tuning',
    description:
      'Fine-tuned BLIP model using 3-stage LoRA for visual-language assistive navigation. Published at ISAECT 2025.',
    venue: 'International Symposium on Advanced Electrical and Communication Technologies (ISAECT)',
    venueShort: 'ISAECT 2025',
    date: '2025-11-01',
    status: 'published',
    type: 'conference',
    authors: ['Charan Sai Ponnada', 'Dr. S. Kumar', 'R. Patel'],
    abstract:
      'This paper presents a novel approach to assistive navigation for visually impaired individuals using vision-language models. We fine-tune the BLIP (Bootstrapping Language-Image Pre-training) model using a three-stage LoRA (Low-Rank Adaptation) strategy to generate contextual navigation descriptions from visual input. Our method achieves significant improvements in BLEU scores and inference speed compared to baseline approaches, demonstrating the effectiveness of parameter-efficient fine-tuning for assistive AI applications.',
    keywords: [
      'Vision-Language Models',
      'BLIP',
      'LoRA',
      'Assistive Navigation',
      'Visually Impaired',
      'Fine-tuning',
    ],
    citations: 3,
    bibtex: `@inproceedings{ponnada2025vision,
  title={Vision-Language Assistive Navigation for Visually Impaired Using BLIP Fine-Tuning},
  author={Ponnada, Charan Sai and Kumar, S. and Patel, R.},
  booktitle={Proceedings of ISAECT 2025},
  year={2025}
}`,
    metrics: [
      { label: 'BLEU Score Gain', value: '+18%' },
      { label: 'Dataset Size', value: '50K pairs' },
      { label: 'LoRA Stages', value: '3-Stage' },
      { label: 'Inference Speed', value: '2.5x' },
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
