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
      'A real-time BLIP-based assistive navigation system for visually impaired users, fine-tuned with 3-stage LoRA and deployed on Raspberry Pi via an edge-cloud hybrid architecture. Published at IEEE ISAECT 2025.',
    venue:
      '2025 7th International Symposium on Advanced Electrical and Communication Technologies (ISAECT), Mohali, India',
    venueShort: 'IEEE ISAECT 2025',
    date: '2025-12-18',
    status: 'published',
    type: 'conference',
    doi: '10.1109/ISAECT68904.2025.11318802',
    authors: [
      'Charan Sai Ponnada',
      'Divya Kothapalli',
      'Karthik Goparaju',
      'Sanath Pedapudi',
    ],
    abstract:
      'This paper presents a real-time assistive system for outdoor navigation of visually impaired users in complex Indian urban environments. A BLIP vision-language model is fine-tuned through a 3-stage LoRA training strategy on a custom 427-scene dataset built from Google Street View API imagery, yielding a +15.6% improvement across BLEU, METEOR, ROUGE and semantic similarity metrics. The system is deployed on a Raspberry Pi through an edge-cloud hybrid architecture, and covers the full research pipeline: dataset curation, model training, evaluation framework and edge deployment. The trained model is released on HuggingFace and the code is open-sourced.',
    keywords: [
      'Vision-Language Models',
      'BLIP',
      'LoRA',
      'Assistive Navigation',
      'Visually Impaired',
      'Edge Deployment',
      'Raspberry Pi',
    ],
    citations: 0,
    bibtex: `@inproceedings{ponnada2025vision,
  title={Vision-Language Based Real-Time Assistive System for Outdoor Navigation of the Visually Impaired in Indian Urban Environments},
  author={Ponnada, Charan Sai and Kothapalli, Divya and Goparaju, Karthik and Pedapudi, Sanath},
  booktitle={2025 7th International Symposium on Advanced Electrical and Communication Technologies (ISAECT)},
  year={2025},
  doi={10.1109/ISAECT68904.2025.11318802}
}`,
    metrics: [
      { label: 'Dataset', value: '427 custom scenes' },
      { label: 'Gain', value: '+15.6% across BLEU / METEOR / ROUGE / semantic similarity' },
      { label: 'Deployment', value: 'Raspberry Pi, edge-cloud hybrid' },
      { label: 'DOI', value: '10.1109/ISAECT68904.2025.11318802' },
    ],
  },
  {
    slug: 'semantic-consistency-hallucination-detection',
    title:
      'Semantic Consistency as an Unsupervised Hallucination Signal in Large Language Models',
    description:
      'Paraphrase variance across semantic-preserving rewrites as a label-free proxy for LLM hallucination, requiring no ground-truth answers at inference time. IEEE InCODE 2026.',
    venue:
      'IEEE International Conference on Computing, Communication and Intelligent Systems (InCODE) 2026',
    venueShort: 'IEEE InCODE 2026',
    date: '2026-04-01',
    status: 'in-review',
    type: 'conference',
    authors: ['Charan Sai Ponnada'],
    abstract:
      'This work proposes paraphrase variance across K=5 semantic-preserving rewrites as a label-free, unsupervised proxy for hallucination in large language model outputs, requiring no ground-truth answers at inference time. The signal is evaluated using BERTScore, NLI contradiction rate and AUC-ROC on the TriviaQA and Natural Questions benchmarks. Experiments run on Llama-3-8B-Instruct (BF16, FlashAttention-2) on 2x NVIDIA L40S, and extend to Llama-3-70B for a cross-scale validation claim.',
    keywords: [
      'Hallucination Detection',
      'Large Language Models',
      'Semantic Consistency',
      'Unsupervised Evaluation',
      'NLI',
      'BERTScore',
      'AI Safety',
    ],
    citations: 0,
    bibtex: `@inproceedings{ponnada2026semantic,
  title={Semantic Consistency as an Unsupervised Hallucination Signal in Large Language Models},
  author={Ponnada, Charan Sai},
  booktitle={Proceedings of IEEE InCODE 2026},
  year={2026}
}`,
    metrics: [
      { label: 'Paraphrases', value: 'K = 5 semantic-preserving rewrites' },
      { label: 'Benchmarks', value: 'TriviaQA, Natural Questions' },
      { label: 'Models', value: 'Llama-3-8B-Instruct, Llama-3-70B' },
      { label: 'Metrics', value: 'BERTScore, NLI contradiction rate, AUC-ROC' },
    ],
  },
]

export function getPublicationBySlug(slug: string): Publication | undefined {
  return publications.find((p) => p.slug === slug)
}
