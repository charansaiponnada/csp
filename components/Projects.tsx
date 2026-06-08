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
    <section id="projects" className="py-[120px] px-6 bg-[#181715]">
      <div className="max-w-[1200px] mx-auto">
        
        <div className="mb-24 flex flex-col md:flex-row md:items-end justify-between border-b border-white/10 pb-8">
          <div>
            <span className="font-mono text-[12px] text-[#cc785c] uppercase tracking-widest mb-4 block">02 / Technical Architecture</span>
            <h2 className="font-display text-[48px] md:text-[64px] tracking-claude-tight text-[#faf9f5] leading-[1]">
              Initiatives
            </h2>
          </div>
          <p className="font-sans text-[16px] text-[#a09d96] max-w-sm leading-[1.6] mt-6 md:mt-0">
            High-stakes systems engineering spanning fintech RAG pipelines to domain-specific intelligence models.
          </p>
        </div>

        <div className="flex flex-col gap-24">
          {projects.map((project, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              className={`flex flex-col lg:flex-row gap-12 lg:gap-24 items-start ${i % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}
            >
              {/* Project Title & Context */}
              <div className="lg:w-5/12 flex flex-col">
                <span className="px-3 py-1 bg-[#252320] text-[#a09d96] text-[12px] font-medium tracking-[1.5px] uppercase rounded-full self-start mb-6">
                  {project.role}
                </span>
                <h3 className="font-display text-[36px] md:text-[48px] tracking-claude-tight text-[#faf9f5] leading-[1.1] mb-6">
                  {project.title}
                </h3>
                <div className="flex flex-wrap gap-3 mb-8">
                  {project.tech.map((t, k) => (
                    <span key={k} className="font-sans text-[13px] font-medium text-[#cc785c]">
                      {t} {k < project.tech.length - 1 && <span className="text-white/20 ml-3">/</span>}
                    </span>
                  ))}
                </div>
                <a 
                  href={project.github}
                  target="_blank"
                  className="inline-flex items-center gap-2 font-sans text-[14px] font-medium text-[#faf9f5] hover:text-[#cc785c] transition-colors border-b border-white/20 pb-1 self-start"
                >
                  View Source &rarr;
                </a>
              </div>

              {/* Project Data & Details */}
              <div className="lg:w-7/12 flex flex-col">
                <p className="font-sans text-[20px] leading-[1.6] text-[#a09d96] mb-12">
                  {project.description}
                </p>
                <div className="grid grid-cols-2 gap-8 border-t border-white/10 pt-8">
                  {project.metrics.map((metric, j) => (
                    <div key={j} className="flex flex-col">
                      <div className="font-display text-[40px] text-[#faf9f5] leading-none tracking-tight mb-2">{metric.value}</div>
                      <div className="font-sans text-[14px] text-[#a09d96] uppercase tracking-[1px]">{metric.label}</div>
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
