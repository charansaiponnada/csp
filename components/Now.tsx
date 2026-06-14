'use client'

import { motion } from 'framer-motion'

const activities = [
  {
    category: 'Building',
    title: 'Genomic Foundation Model',
    details: '~100M param Mamba SSM across 5 species on a university L40S cluster. Phase 2 active.',
    status: 'High Priority'
  },
  {
    category: 'Working',
    title: 'AI Engineer @ Aynstyn',
    details: 'Production AI modules for SaaS assessment platform. PPO in hand.',
    status: 'Active'
  },
  {
    category: 'Researching',
    title: 'LLM Hallucination Detection',
    details: 'IEEE InCODE-2026 paper in review. Unsupervised signal via semantic consistency.',
    status: 'In Review'
  },
  {
    category: 'Learning',
    title: 'Self-improvement & Writing',
    details: 'Running @lone_melodies and building toward charansimplifies on YT.',
    status: 'Ongoing'
  }
]

export default function Now() {
  return (
    <section id="now" className="py-32 px-6 bg-dribbble-surface-1 border-t border-white/5 relative">
      <div className="max-w-[1400px] mx-auto">
        
        <div className="grid lg:grid-cols-12 gap-16 items-start">
          
          <div className="lg:col-span-4 sticky top-32">
            <span className="font-mono text-[10px] text-dribbble-accent uppercase tracking-[0.4em] mb-8 block">Live Feed // Status Log</span>
            <h2 className="font-display text-5xl md:text-7xl font-black uppercase tracking-tighter text-white leading-[0.85] mb-8">
              What I'm <br /> Doing <span className="text-outline-accent">Now.</span>
            </h2>
            <div className="flex items-center gap-3">
              <div className="w-2 h-2 rounded-full bg-dribbble-accent animate-pulse" />
              <span className="font-mono text-[10px] font-bold uppercase tracking-[0.2em] text-dribbble-accent">Operational_Status: ACTIVE</span>
            </div>
          </div>

          <div className="lg:col-span-8 flex flex-col gap-1">
            {activities.map((act, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="group p-10 border border-white/5 bg-white/[0.01] hover:bg-dribbble-accent transition-all flex flex-col md:flex-row md:items-center justify-between gap-8 cursor-default"
              >
                <div className="flex flex-col gap-4">
                  <div className="flex items-center gap-4">
                    <span className="font-mono text-[10px] font-bold uppercase tracking-[0.3em] text-dribbble-accent group-hover:text-black transition-colors">{act.category}</span>
                    <div className="w-1 h-1 bg-white/10 rounded-full group-hover:bg-black/20" />
                    <span className="font-mono text-[9px] uppercase tracking-[0.2em] text-white/20 group-hover:text-black/40 transition-colors">{act.status}</span>
                  </div>
                  <h3 className="font-display text-3xl font-black uppercase tracking-tight text-white group-hover:text-black transition-colors">
                    {act.title}
                  </h3>
                  <p className="font-sans text-lg text-dribbble-muted group-hover:text-black/70 transition-colors font-medium max-w-xl">
                    {act.details}
                  </p>
                </div>
                
                <div className="hidden md:block font-mono text-[60px] font-black text-white/[0.02] group-hover:text-black/5 transition-colors select-none">
                  {act.category.substring(0, 3).toUpperCase()}
                </div>
              </motion.div>
            ))}
          </div>

        </div>

      </div>
    </section>
  )
}