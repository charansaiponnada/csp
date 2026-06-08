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
    <section id="experience" className="py-[120px] px-6 border-t border-claude-hairline">
      <div className="max-w-[1200px] mx-auto grid lg:grid-cols-12 gap-12 lg:gap-24">
        
        {/* Editorial Left Column */}
        <div className="lg:col-span-4 flex flex-col">
          <h2 className="font-display text-[40px] md:text-[52px] tracking-claude-tight text-claude-ink leading-[1.05] mb-6">
            Professional <br /> Trajectory
          </h2>
          <p className="font-sans text-[16px] text-claude-muted leading-[1.6]">
            A documented path of systems engineering, focusing on making AI reliable for production environments.
          </p>
        </div>

        {/* Un-carded Right Column */}
        <div className="lg:col-span-8 flex flex-col gap-16">
          {experiences.map((exp, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-4 mb-6 border-b border-claude-hairline pb-4">
                <h3 className="font-display text-[32px] font-medium tracking-claude-tight text-claude-ink">{exp.role}</h3>
                <div className="font-sans text-[14px] text-claude-muted">{exp.period}</div>
              </div>
              
              <div className="font-sans text-[18px] font-medium text-claude-primary mb-6">
                {exp.company}
              </div>
              
              <p className="font-sans text-[18px] leading-[1.6] text-claude-body mb-8 max-w-2xl">
                {exp.description}
              </p>
              
              <div className="grid md:grid-cols-2 gap-x-12 gap-y-4 mb-8">
                {exp.highlights.map((h, j) => (
                  <div key={j} className="flex gap-4 items-start">
                    <span className="font-sans text-[12px] font-medium text-claude-muted mt-1">{(j+1).toString().padStart(2, '0')}</span>
                    <span className="font-sans text-[15px] leading-[1.6] text-claude-body">{h}</span>
                  </div>
                ))}
              </div>

              <div className="flex flex-wrap gap-x-6 gap-y-2">
                <span className="font-sans text-[12px] font-medium uppercase tracking-[1px] text-claude-muted py-1">Stack</span>
                {exp.tech.map((t) => (
                  <span key={t} className="font-sans text-[14px] text-claude-ink py-1">
                    {t}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
        
      </div>
    </section>
  )
}
