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
    <section id="experience" className="py-[96px] px-6">
      <div className="max-w-[1200px] mx-auto">
        
        <div className="mb-12">
          <h2 className="font-display text-[36px] md:text-[48px] tracking-claude-tight text-claude-ink mb-4">
            Professional Trajectory
          </h2>
          <p className="font-sans text-[18px] text-claude-muted max-w-2xl">
            A documented path of systems engineering and evaluation infrastructure, focusing on making AI systems reliable for production.
          </p>
        </div>

        <div className="grid gap-6">
          {experiences.map((exp, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="claude-card"
            >
              <div className="flex flex-col md:flex-row justify-between md:items-center mb-6 border-b border-claude-hairline pb-6">
                <div>
                  <h3 className="font-sans text-[22px] font-medium text-claude-ink mb-1">{exp.role}</h3>
                  <div className="flex items-center gap-3">
                    <span className="font-sans text-[14px] text-claude-primary font-medium">{exp.company}</span>
                    <span className="text-claude-hairline">|</span>
                    <span className="font-sans text-[14px] text-claude-muted">{exp.period}</span>
                  </div>
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <p className="font-sans text-[16px] leading-[1.55] text-claude-body">
                    {exp.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mt-6">
                    {exp.tech.map((t) => (
                      <span key={t} className="px-3 py-1 bg-claude-canvas border border-claude-hairline text-claude-ink text-[12px] font-medium tracking-[1.5px] uppercase rounded-full">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
                
                <ul className="space-y-3">
                  {exp.highlights.map((h, j) => (
                    <li key={j} className="flex gap-3 items-start">
                      <span className="mt-1 w-1.5 h-1.5 rounded-full bg-claude-primary shrink-0" />
                      <span className="font-sans text-[14px] leading-[1.55] text-claude-body">{h}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
        
      </div>
    </section>
  )
}
