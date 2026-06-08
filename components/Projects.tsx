'use client'

import { motion } from 'framer-motion'

const projects = [
  {
    title: 'Intelli-Credit System',
    role: 'VIVIRITY',
    description: 'Reduced financial analysis time from days to minutes by processing 500+ page annual reports in under 5 minutes. Secured 2nd place at IIT Hyderabad AI/ML Hackathon.',
    metrics: [
      { label: 'API Overhead', value: '-98%' },
      { label: 'Indicators', value: '50+' },
    ],
    tech: ['VectorLess RAG', 'Multi-Agent', 'Gemini'],
    github: 'https://github.com/charansaiponnada/VIVIRITY'
  },
  {
    title: 'AyurMind',
    role: 'Domain-Specific RAG',
    description: 'RAG system over 1200+ structured Ayurvedic knowledge entries. Implemented validation layers and filtering mechanisms to drastically reduce hallucination rates.',
    metrics: [
      { label: 'Top-3 Accuracy', value: '84%' },
      { label: 'Hallucination', value: '-45%' },
    ],
    tech: ['LangChain', 'ChromaDB', 'Gradio'],
    github: 'https://github.com/charansaiponnada/AyurMind'
  }
]

export default function Projects() {
  return (
    <section id="projects" className="py-[96px] px-6 bg-[#181715]">
      <div className="max-w-[1200px] mx-auto">
        
        <div className="mb-16">
          <h2 className="font-display text-[36px] md:text-[48px] tracking-claude-tight text-[#faf9f5] mb-4">
            Technical Initiatives
          </h2>
          <p className="font-sans text-[18px] text-[#a09d96] max-w-2xl">
            High-stakes systems engineering from fintech RAG to domain-specific intelligence.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              className="bg-[#1f1e1b] rounded-[12px] p-[32px] border border-white/5 flex flex-col"
            >
              <div className="mb-6">
                <div className="flex items-center gap-3 mb-4">
                  <span className="px-3 py-1 bg-[#252320] text-[#a09d96] text-[12px] font-medium tracking-[1.5px] uppercase rounded-full">
                    {project.role}
                  </span>
                </div>
                <h3 className="font-display text-[28px] tracking-claude-tight text-[#faf9f5] mb-4">
                  {project.title}
                </h3>
                <p className="font-sans text-[16px] leading-[1.55] text-[#a09d96]">
                  {project.description}
                </p>
              </div>

              <div className="grid grid-cols-2 gap-4 mb-8">
                {project.metrics.map((metric, j) => (
                  <div key={j} className="bg-[#252320] rounded-[8px] p-4">
                    <div className="font-sans text-[22px] font-medium text-[#faf9f5] mb-1">{metric.value}</div>
                    <div className="font-sans text-[13px] text-[#a09d96]">{metric.label}</div>
                  </div>
                ))}
              </div>

              <div className="mt-auto pt-6 border-t border-white/5 flex items-center justify-between">
                <div className="flex gap-4">
                  {project.tech.map((t, k) => (
                    <span key={k} className="font-mono text-[12px] text-[#cc785c]">
                      {t}
                    </span>
                  ))}
                </div>
                <a 
                  href={project.github}
                  target="_blank"
                  className="font-sans text-[14px] font-medium text-[#faf9f5] hover:text-[#cc785c] transition-colors"
                >
                  View Source &rarr;
                </a>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  )
}
