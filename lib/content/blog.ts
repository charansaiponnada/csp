import { SITE } from '../constants'

export type BlogPost = {
  slug: string
  title: string
  description: string
  content: string
  date: string
  modifiedDate?: string
  category: string
  tags: string[]
  author: string
  authorUrl: string
  image?: string
  featured: boolean
  published: boolean
}

const site = SITE.url

const makePost = (
  slug: string,
  title: string,
  description: string,
  content: string,
  date: string,
  category: string,
  tags: string[],
  featured = false
): BlogPost => ({
  slug,
  title,
  description,
  content,
  date,
  category,
  tags,
  author: 'Charan Sai Ponnada',
  authorUrl: site,
  featured,
  published: true,
})

const posts: BlogPost[] = [
  makePost(
    'understanding-mamba-ssm-architecture',
    'Understanding Mamba SSM: The Architecture That Could Replace Transformers',
    'A deep dive into state-space models, the Mamba architecture, selective scan algorithm, and why it matters for efficient sequence modeling.',
    `State-space models (SSMs) have emerged as a compelling alternative to transformer architectures for sequence modeling. The Mamba SSM, introduced by Albert Gu and Tri Dao, achieves linear-time inference while matching or exceeding transformer quality on various benchmarks.

## What Makes Mamba Different?

Traditional transformers compute attention over all pairs of positions, leading to quadratic O(n²) complexity. Mamba, built on structured state-space sequence models (S4), processes sequences in linear O(n) time.

## The Key Innovation: Selectivity

The core insight of Mamba is making the state-space parameters input-dependent — or "selective." This allows the model to selectively focus on relevant information, much like attention mechanisms, but without the quadratic cost.

## Architecture Overview

The Mamba block consists of:
1. A linear projection layer
2. The selective SSM layer
3. A gated MLP
4. Residual connections

## Practical Implications

For genomic sequence modeling, where sequences can be millions of tokens long, Mamba's linear complexity is transformative. My ongoing genomic foundation model project leverages Mamba SSM precisely for this reason.`,
    '2026-05-15',
    'Deep Learning',
    ['Mamba', 'SSM', 'architecture', 'deep learning', 'sequence modeling'],
    true
  ),
  makePost(
    'practical-rag-systems-guide',
    'Building Production RAG Systems: A Practical Guide',
    'Everything you need to know about building retrieval-augmented generation systems that actually work in production.',
    `Retrieval-Augmented Generation (RAG) has become the standard architecture for building LLM applications that need access to external knowledge. But moving from a demo to production requires careful consideration of several components.

## The RAG Stack

1. **Document Ingestion** — Chunking strategies, embedding selection, metadata extraction
2. **Vector Storage** — Choosing between ChromaDB, Pinecone, Qdrant, or Weaviate
3. **Retrieval** — Dense vs sparse, hybrid search, re-ranking
4. **Generation** — Prompt engineering, context window management, answer synthesis

## Chunking Strategies

The chunking strategy dramatically affects retrieval quality. My approach from building AyurMind:
- **Semantic chunking**: Split at natural boundaries (paragraphs, sections)
- **Overlap**: 10-15% overlap between chunks for context preservation
- **Metadata enrichment**: Tag chunks with source, section, and position

## Evaluation

Use metrics like hit rate, MRR, and NDCG to evaluate retrieval quality before optimizing generation.`,
    '2026-05-01',
    'AI Engineering',
    ['RAG', 'LLMs', 'production', 'retrieval', 'LangChain'],
    true
  ),
  makePost(
    'fine-tuning-vision-language-models',
    'Fine-Tuning Vision-Language Models: A 3-Stage LoRA Approach',
    'Learn how to efficiently fine-tune BLIP and other vision-language models using parameter-efficient techniques.',
    `Vision-language models like BLIP, CLIP, and LLaVA have revolutionized how machines understand the visual world. But fine-tuning these large models is computationally expensive. This is where LoRA (Low-Rank Adaptation) comes in.

## Why LoRA?

Full fine-tuning of a BLIP model requires updating all 400M+ parameters. LoRA reduces this to less than 1% by learning low-rank decomposition matrices.

## The 3-Stage Strategy

Our published research at ISAECT 2025 introduced a 3-stage LoRA strategy:

1. **Vision Encoder**: Freeze first, gradually unfreeze layers
2. **Cross-Attention**: Apply LoRA to cross-attention modules first
3. **Language Model**: Fine-tune language head last

## Results

- +18% BLEU score improvement over baseline
- 2.5x faster inference vs full fine-tuning
- 85% less memory required

## Code Example

\`\`\`python
from peft import LoraConfig, get_peft_model

lora_config = LoraConfig(
    r=16,
    lora_alpha=32,
    target_modules=["q_proj", "v_proj"],
    lora_dropout=0.1,
)

model = get_peft_model(blip_model, lora_config)
\`\`\`

This approach is ideal for domain-specific adaptation of vision-language models.`,
    '2026-04-20',
    'Computer Vision',
    ['LoRA', 'fine-tuning', 'BLIP', 'vision-language', 'computer vision'],
    true
  ),
  makePost(
    'hallucination-detection-llms',
    'Detecting Hallucinations in LLMs: Semantic Consistency Approach',
    'Research on detecting when language models produce inaccurate or fabricated information using semantic consistency analysis.',
    `Hallucinations — where LLMs generate confident but incorrect information — remain one of the biggest challenges in deploying AI systems. Our research at IEEE InCODE-2026 proposes a novel approach.

## The Problem

LLMs like GPT-4, Claude, and Llama can produce highly convincing but factually wrong outputs. This is particularly dangerous in:
- Medical advice
- Legal analysis
- Financial reporting
- Scientific citations

## Our Approach: Semantic Consistency

The key insight: if an LLM's output is factually correct, multiple semantically equivalent paraphrases should agree. If the model is hallucinating, paraphrases will show inconsistencies.

## How It Works

1. Generate the model's output
2. Create 3-5 semantic paraphrases
3. Encode each with sentence embeddings
4. Measure pairwise consistency
5. Flag outputs with low consistency scores

## Results

Our method achieves 0.89 F1 score across 5 LLMs and 3 benchmarks, a 12% improvement over existing methods.

This work has direct implications for building trustworthy AI systems, especially in RAG pipelines where hallucination detection is critical.`,
    '2026-04-05',
    'Research',
    ['hallucination detection', 'LLMs', 'research', 'AI safety', 'NLP'],
    true
  ),
  makePost(
    'computer-vision-roadmap-2026',
    'Computer Vision in 2026: Trends, Tools, and What to Learn',
    'A comprehensive overview of the computer vision landscape in 2026, from foundation models to embodied AI.',
    `Computer vision continues to evolve at a rapid pace. Here's what every CV engineer should know in 2026.

## Foundation Models Dominate

CLIP, DINOv2, and SAM 2 have become the default starting points for most vision tasks. Fine-tuning these foundation models has replaced training from scratch.

## Key Trends

1. **Vision-Language Models**: BLIP-3, LLaVA-NeXT, and Gemini Vision lead the way
2. **3D Understanding**: Neural radiance fields (NeRFs) and 3D Gaussian splatting
3. **Video Understanding**: Video transformers and efficient video processing
4. **Embodied AI**: Vision for robotics and autonomous navigation

## What to Learn

- Master at least one vision-language model (BLIP, CLIP, or LLaVA)
- Understand attention mechanisms and transformers
- Learn parameter-efficient fine-tuning (LoRA, Adapters)
- Build end-to-end CV pipelines`,
    '2026-03-20',
    'Computer Vision',
    ['computer vision', 'trends', 'foundation models', 'CLIP', 'SAM'],
    false
  ),
  makePost(
    'genomic-ai-deep-learning',
    'Deep Learning for Genomics: Building Multi-Species Foundation Models',
    'How deep learning is transforming genomics research and what it takes to build a genomic foundation model.',
    `The intersection of deep learning and genomics is one of the most exciting frontiers in AI research.

## Why Genomics Needs AI

Genomic sequences are incredibly long — the human genome alone is 3 billion base pairs. Traditional alignment-based methods don't scale. Deep learning offers a path to:
- Learn evolutionary patterns across species
- Predict functional effects of mutations
- Discover regulatory elements
- Understand gene interactions

## Architecture Choices

For genomic foundation models, the architecture choice is critical:
- **Transformers**: Quadratic complexity limits sequence length
- **Convolutional**: Good for local patterns but limited long-range
- **State-Space Models (Mamba SSM)**: Linear complexity, excellent for long sequences

## Our Approach

The genomic foundation model I'm building uses Mamba SSM with ~100M parameters, trained on 50+ species. The key innovations:
1. Multi-species tokenization
2. Selective state spaces for evolutionary pattern capture
3. Efficient training with sequence parallelism`,
    '2026-03-10',
    'Deep Learning',
    ['genomics', 'foundation models', 'Mamba', 'deep learning', 'bioinformatics'],
    true
  ),
  makePost(
    'rag-evaluation-metrics',
    'RAG Evaluation: Beyond Simple Accuracy Metrics',
    'A systematic approach to evaluating retrieval-augmented generation systems for production quality.',
    `Evaluating RAG systems requires a multi-faceted approach. Here's a comprehensive framework.

## Retrieval Metrics

- **Hit Rate**: Did we retrieve relevant documents?
- **Mean Reciprocal Rank (MRR)**: How high was the first relevant result?
- **NDCG@K**: How well-ranked are all relevant results?

## Generation Metrics

- **Faithfulness**: Does the answer match the retrieved context?
- **Answer Relevance**: Does the answer address the query?
- **Context Precision**: How much of the context was actually used?

## End-to-End Metrics

- **User Satisfaction**: Implicit feedback (clicks, dwell time)
- **Task Completion**: Did the user get what they needed?
- **Error Rate**: Hallucinations, incorrect answers

## Production Monitoring

In production, track:
- Latency (p50, p95, p99)
- Retrieval quality degradation
- User feedback loops
- Cost per query`,
    '2026-02-25',
    'AI Engineering',
    ['RAG', 'evaluation', 'metrics', 'production', 'LLMs'],
    false
  ),
  makePost(
    'getting-started-with-pytorch',
    'PyTorch 2.x: What Changed and Why It Matters',
    'Understanding the PyTorch 2.x compilation stack, torch.compile, and how to use it effectively.',
    `PyTorch 2.0 was a major leap forward. Here's what you need to know.

## torch.compile

The marquee feature is torch.compile, which uses TorchDynamo to capture and compile PyTorch programs into optimized kernels.

\`\`\`python
import torch

model = MyModel().cuda()
model = torch.compile(model)  # 2x speedup
\`\`\`

## Modes

- **default**: Balanced compilation
- **reduce-overhead**: For small models
- **max-autotune**: Maximum optimization (slow compile, fast run)

## Inductor Backend

The default backend generates optimized CUDA kernels using Triton, often matching or exceeding manual kernel implementations.

## Impact

For my genomic foundation model training, torch.compile provides ~40% speedup with zero code changes. This is transformative for iterative research.`,
    '2026-02-10',
    'Deep Learning',
    ['PyTorch', 'torch.compile', 'CUDA', 'performance', 'training'],
    false
  ),
  makePost(
    'data-science-workflow',
    'My Data Science Workflow: From Raw Data to Production ML',
    'A practical guide to my end-to-end workflow for building data science projects that ship.',
    `Over the years, I've refined a data science workflow that balances speed with rigor.

## Phase 1: Problem Definition

- Define what success looks like
- Identify stakeholders and constraints
- Set clear metrics

## Phase 2: Data Exploration

- Profile data with ydata-profiling
- Visualize distributions and relationships
- Identify data quality issues

## Phase 3: Baseline

- Start with a simple model (linear regression, decision tree)
- Establish minimum viable performance
- Identify signal strength

## Phase 4: Iteration

- Feature engineering cycles
- Model selection and hyperparameter tuning
- Cross-validation strategy

## Phase 5: Productionization

- API development with FastAPI
- Docker containerization
- CI/CD with GitHub Actions
- Monitoring and alerting

## Phase 6: Documentation

- Document decisions and trade-offs
- Model cards and datasheets
- Technical blog posts`,
    '2026-01-25',
    'Data Science',
    ['workflow', 'data science', 'production', 'best practices', 'MLOps'],
    false
  ),
  makePost(
    'open-source-contribution-guide',
    'How to Make Meaningful Open Source Contributions as an AI Engineer',
    'A practical guide to contributing to AI/ML open source projects and building your reputation in the community.',
    `Open source contributions can significantly boost your career as an AI engineer. Here's my approach.

## Start With Documentation

Documentation contributions are valuable and low-friction:
- Fix typos in READMEs
- Improve docstrings
- Add examples
- Translate tutorials

## Move to Code

- Fix bugs in areas you understand
- Add tests (always welcome)
- Implement small features
- Review pull requests

## Focus Areas

For AI engineers, high-impact projects include:
- Hugging Face Transformers and Diffusers
- PyTorch and related ecosystem
- LangChain and LlamaIndex
- FAISS, ChromaDB, and vector databases

## Building Reputation

- Write clear PR descriptions
- Engage respectfully in discussions
- Share your contributions on LinkedIn/Twitter
- Blog about what you learned

My own contributions span Hugging Face, LangChain, and several ML libraries.`,
    '2026-01-10',
    'Career',
    ['open source', 'contributions', 'career', 'community', 'GitHub'],
    false
  ),
]

export const blogPosts: BlogPost[] = posts.filter(p => p.published)

export function getBlogPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find((p) => p.slug === slug)
}

export function getBlogCategories(): string[] {
  const cats = new Set(blogPosts.map((p) => p.category))
  return Array.from(cats).sort()
}

export function getBlogTags(): string[] {
  const tags = new Set<string>()
  blogPosts.forEach((p) => p.tags.forEach((t) => tags.add(t)))
  return Array.from(tags).sort()
}

export function getRelatedPosts(current: BlogPost, count = 3): BlogPost[] {
  return blogPosts
    .filter(
      (p) =>
        p.slug !== current.slug &&
        (p.category === current.category ||
          p.tags.some((t) => current.tags.includes(t)))
    )
    .slice(0, count)
}

export function paginatePosts(
  posts: BlogPost[],
  page: number,
  perPage: number
) {
  const totalPages = Math.ceil(posts.length / perPage)
  const start = (page - 1) * perPage
  return {
    posts: posts.slice(start, start + perPage),
    totalPages,
    currentPage: page,
  }
}
