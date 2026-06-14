'use client'

import { motion } from 'framer-motion'

const activities = [
  {
    category: 'Building',
    title: 'Genomic Foundation Model',
    details: '~100M param Mamba SSM across 5 species on a university L40S cluster. Phase 2 active.',
  },
  {
    category: 'Working',
    title: 'AI Engineer @ Aynstyn',
    details: 'Production AI modules for SaaS assessment platform. PPO in hand.',
  },
  {
    category: 'Researching',
    title: 'LLM Hallucination Detection',
    details: 'IEEE InCODE-2026 paper in review. Unsupervised signal via semantic consistency.',
  },
  {
    category: 'Reading / Thinking',
    title: 'Self-improvement · Psychology · Writing',
    details: 'Always. Running @lone_melodies and building toward charansimplifies on YT.',
  }
]

export default function Now() {
  const faders = {
    initial: { opacity: 0, y: 16 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, amount: 0.1 },
    transition: { duration: 0.6, ease: "easeOut" }
  }

  return (
    <>
      <div className="section-rule" />
      <section id="now" className="py-24 bg-portfolio-beige">
        <div className="max-w-[900px] mx-auto px-12">
          <motion.p className="section-eyebrow" {...faders}>// what i&apos;m doing now</motion.p>
          
          <motion.div className="grid md:grid-cols-2 gap-4" {...faders}>
            {activities.map((act, i) => (
              <div key={i} className="p-6 bg-portfolio-beige-2 border border-portfolio-rule">
                <div className="font-mono text-[10px] text-portfolio-slate tracking-[0.1em] uppercase mb-2">
                  {act.category}
                </div>
                <div className="font-sans text-[15px] font-medium text-portfolio-ink mb-1.5 leading-[1.3]">
                  {act.title}
                </div>
                <div className="text-[13px] text-portfolio-ink-3 leading-[1.6]">
                  {act.details}
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>
    </>
  )
}
