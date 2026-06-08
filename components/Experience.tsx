'use client'

import { motion } from 'framer-motion'

const experiences = [
  {
    role: 'AI Engineer Intern',
    company: 'Aynstyn Technologies Pvt. Ltd.',
    period: 'Jan 2026 – Present',
    description: 'Engineering AI-powered SaaS modules for interview simulation and candidate assessment. Building high-stakes evaluation infrastructure for LLM reliability.',
    highlights: [
      'Built LLM evaluation pipeline validating model performance across 200+ structured test cases.',
      'Optimized prompt architectures and inference workflows, reducing unstable outputs.',
      'Integrated LLM-based components into scalable SaaS infrastructure for real-time inference.'
    ],
    tech: ['FastAPI', 'LangChain', 'PyTorch', 'LLM Eval', 'RAG']
  }
]

export default function Experience() {
  return (
    <section id="experience" className="border-t border-black/5">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row border-x border-black/5">
        
        {/* Section Header Column */}
        <div className="lg:w-1/3 p-6 md:p-12 border-b lg:border-b-0 lg:border-r border-black/5 flex flex-col">
          <span className="text-[#0055FF] font-mono text-[9px] tracking-[0.4em] uppercase mb-12 block">01 / Trajectory</span>
          <h2 className="font-display text-4xl md:text-5xl font-bold tracking-tight uppercase leading-[0.9] mt-auto">
            Professional<br /> Path
          </h2>
        </div>

        {/* Experience Content Column */}
        <div className="lg:w-2/3 flex flex-col">
          {experiences.map((exp, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              className="p-6 md:p-12 hover:bg-black/[0.01] transition-colors"
            >
              <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
                <div>
                  <h3 className="text-2xl font-bold uppercase tracking-tight mb-1">{exp.role}</h3>
                  <p className="text-[#0055FF] font-mono text-[10px] tracking-widest uppercase">{exp.company}</p>
                </div>
                <div className="text-[10px] font-mono text-black/40 uppercase tracking-widest">
                  {exp.period}
                </div>
              </div>
              
              <div className="pl-0 md:pl-8 border-l-0 md:border-l border-black/5">
                <p className="text-black/60 text-sm leading-relaxed font-light mb-8 max-w-2xl">{exp.description}</p>
                
                <ul className="space-y-4 mb-10 max-w-2xl">
                  {exp.highlights.map((h, j) => (
                    <li key={j} className="flex gap-4 items-start text-sm text-black/50 leading-relaxed font-light">
                      <span className="text-black/20 font-mono text-[9px] mt-1 shrink-0">{(j+1).toString().padStart(2, '0')}</span>
                      {h}
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-2">
                  {exp.tech.map((t) => (
                    <span key={t} className="px-3 py-1 bg-black/5 text-[9px] font-mono text-black/40 uppercase tracking-widest">{t}</span>
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
