'use client'

import { motion } from 'framer-motion'

const papers = [
  {
    journal: 'ISAECT 2025 · Primary Author · Published',
    title: 'Vision-Language Assistive Navigation System',
    desc: 'Built a multimodal assistive navigation system using the BLIP vision-language model for real-time scene understanding. Fine-tuned via 3-stage LoRA training on a 427-scene Indian traffic dataset. Developed the full ML pipeline: dataset design, training workflow, evaluation framework, and model release.',
    stats: [
      { label: 'BLEU / METEOR / ROUGE gain', value: '+15.6%' },
      { label: 'Scene dataset', value: '427' },
      { label: 'LoRA training', value: '3-stage' }
    ],
    accent: 'var(--sienna)'
  },
  {
    journal: 'IEEE InCODE-2026 · Primary Author · In Review',
    title: 'Semantic Consistency as an Unsupervised Hallucination Signal in LLMs',
    desc: 'Using output variance across semantically equivalent paraphrases as a label-free hallucination predictor. Colab-feasible experimental design using Mistral-7B-Instruct and Gemma-2B-IT. A novel unsupervised signal that requires no ground truth labels.',
    stats: [
      { label: 'Ground truth labels needed', value: '0' },
      { label: 'Primary model', value: 'Mistral-7B' }
    ],
    accent: 'var(--slate)'
  }
]

export default function Research() {
  const faders = {
    initial: { opacity: 0, y: 16 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, amount: 0.1 },
    transition: { duration: 0.6, ease: "easeOut" }
  }

  return (
    <>
      <div className="section-rule" />
      <section id="research" className="py-24 bg-portfolio-beige">
        <div className="max-w-[900px] mx-auto px-12">
          <motion.p className="section-eyebrow" {...faders}>// research</motion.p>
          
          <motion.div className="flex flex-col gap-4" {...faders}>
            {papers.map((paper, i) => (
              <div 
                key={i} 
                className="p-8 bg-portfolio-beige-2 border-l-[3px]"
                style={{ borderColor: paper.accent }}
              >
                <div className="font-mono text-[11px] mb-3.5 tracking-[0.06em]" style={{ color: paper.accent }}>
                  {paper.journal}
                </div>
                <div className="font-sans text-[17px] font-medium text-portfolio-ink mb-2 leading-[1.3]">
                  {paper.title}
                </div>
                <div className="text-[14px] text-portfolio-ink-2 leading-[1.7] mb-4">
                  {paper.desc}
                </div>
                <div className="flex flex-wrap gap-8">
                  {paper.stats.map((s, si) => (
                    <div key={si} className="flex flex-col gap-0.5">
                      <span className="font-mono text-[18px] font-medium text-portfolio-ink">{s.value}</span>
                      <span className="font-mono text-[10px] text-portfolio-ink-3 tracking-[0.06em] uppercase">{s.label}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>
    </>
  )
}
