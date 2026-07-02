'use client'

import { useState } from 'react'
import Section from '@/components/ui/Section'
import { cn } from '@/lib/utils'
import { publications } from '@/lib/content/publications'
import { projects } from '@/lib/content/projects'

const faqs = [
  {
    question: 'What is your research focus?',
    answer:
      'My research focuses on computer vision, deep learning, and natural language processing. I work on vision-language models, hallucination detection in LLMs, and genomic foundation models using state-space architectures.',
  },
  {
    question: 'Are you available for collaboration?',
    answer:
      'Yes! I am always open to research collaborations, project partnerships, and consulting opportunities. Reach out via email or LinkedIn.',
  },
  {
    question: 'What technologies do you work with?',
    answer:
      'Python, PyTorch, TensorFlow, LangChain, FastAPI, React/Next.js, Docker, AWS, Mamba SSM, Hugging Face, ChromaDB, and more. See my skills section for the full list.',
  },
  {
    question: 'Do you have published research?',
    answer:
      `Yes, I have ${publications.filter(p => p.status === 'published').length} published IEEE conference paper${publications.filter(p => p.status === 'published').length > 1 ? 's' : ''} and ${publications.filter(p => p.status === 'in-review').length} paper${publications.filter(p => p.status === 'in-review').length > 1 ? 's' : ''} currently under review. My research covers vision-language assistive navigation and LLM hallucination detection.`,
  },
  {
    question: 'What is a genomic foundation model?',
    answer:
      'A genomic foundation model is a large-scale AI model trained on DNA sequences from multiple species. It learns evolutionary patterns and can be fine-tuned for downstream tasks like variant effect prediction, gene regulation understanding, and species classification.',
  },
  {
    question: 'Do you write or create content?',
    answer:
      'Yes, I write technical articles on AI, ML, and deep learning. I also run a YouTube channel (@charansimplifies) where I share tutorials and insights about AI engineering.',
  },
]

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <Section
      id="faq"
      eyebrow="// faq"
      title="Frequently Asked Questions"
      subtitle="Quick answers to common questions about my work, research, and collaborations."
    >
      <div className="mx-auto max-w-3xl">
        {faqs.map((faq, i) => {
          const isOpen = openIndex === i

          return (
            <div
              key={i}
              className={cn(
                'border-t border-cream-400 transition-colors',
                i === faqs.length - 1 && 'border-b'
              )}
            >
              <button
                onClick={() => setOpenIndex(isOpen ? null : i)}
                className="flex w-full items-center justify-between py-5 text-left transition-colors hover:text-sienna"
              >
                <span className="text-sm font-medium pr-4">{faq.question}</span>
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 14 14"
                  fill="none"
                  className={cn(
                    'shrink-0 transition-transform duration-300',
                    isOpen && 'rotate-45'
                  )}
                >
                  <path
                    d="M7 1v12M1 7h12"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                  />
                </svg>
              </button>

              <div
                className={cn(
                  'overflow-hidden transition-all duration-300',
                  isOpen ? 'max-h-96 pb-5' : 'max-h-0'
                )}
              >
                <p className="text-sm leading-relaxed text-cream-700">
                  {faq.answer}
                </p>
              </div>
            </div>
          )
        })}
      </div>
    </Section>
  )
}
