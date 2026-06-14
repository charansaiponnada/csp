'use client'

import { motion } from 'framer-motion'

const papers = [
  {
    journal: 'ISAECT 2025',
    status: 'Published',
    role: 'Primary Author',
    title: 'Vision-Language Assistive Navigation System',
    desc: 'Built a multimodal assistive navigation system using the BLIP vision-language model for real-time scene understanding. Fine-tuned via 3-stage LoRA training on a 427-scene Indian traffic dataset.',
    metrics: [
      { label: 'BLEU / METEOR gain', value: '+15.6%' },
      { label: 'Scene dataset', value: '427' },
      { label: 'LoRA training', value: '3-stage' }
    ]
  },
  {
    journal: 'IEEE InCODE-2026',
    status: 'In Review',
    role: 'Primary Author',
    title: 'Semantic Consistency as an Unsupervised Hallucination Signal in LLMs',
    desc: 'Using output variance across semantically equivalent paraphrases as a label-free hallucination predictor. A novel unsupervised signal that requires no ground truth labels.',
    metrics: [
      { label: 'Ground truth labels', value: '0' },
      { label: 'Primary model', value: 'Mistral-7B' }
    ]
  }
]

export default function Research() {
  return (
    <section id="research" className="py-32 px-6 bg-dribbble-canvas border-t border-white/5 overflow-hidden">
      <div className="max-w-[1400px] mx-auto">
        
        <div className="flex flex-col mb-32">
          <span className="font-mono text-[10px] text-dribbble-accent uppercase tracking-[0.4em] mb-8">Peer-Reviewed // Scientific Output</span>
          <h2 className="font-display text-[clamp(3.5rem,10vw,10rem)] font-black tracking-[-0.05em] uppercase leading-[0.8]">
            Theoretical <br /> <span className="text-outline-accent">Rigour.</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {papers.map((paper, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="p-12 border border-white/5 bg-white/[0.01] hover:bg-white/[0.03] transition-colors group relative"
            >
              <div className="absolute top-0 right-0 p-8 font-mono text-[10px] text-dribbble-accent uppercase tracking-widest opacity-40 group-hover:opacity-100 transition-opacity">
                {paper.status}
              </div>

              <div className="flex flex-col gap-8">
                <div className="flex items-center gap-4">
                  <span className="font-mono text-[10px] font-bold text-white/40 uppercase tracking-[0.2em]">{paper.journal}</span>
                  <div className="w-1 h-1 bg-white/20 rounded-full" />
                  <span className="font-mono text-[10px] font-bold text-dribbble-accent uppercase tracking-[0.2em]">{paper.role}</span>
                </div>

                <h3 className="font-display text-3xl md:text-4xl font-black uppercase tracking-tight text-white leading-tight">
                  {paper.title}
                </h3>

                <p className="font-sans text-lg text-dribbble-muted leading-relaxed font-medium">
                  {paper.desc}
                </p>

                <div className="grid grid-cols-2 md:grid-cols-3 gap-8 mt-4">
                  {paper.metrics.map((m, mi) => (
                    <div key={mi} className="flex flex-col gap-2">
                      <div className="font-display text-3xl font-black text-white">{m.value}</div>
                      <div className="font-mono text-[9px] uppercase tracking-[0.2em] text-white/30">{m.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  )
}