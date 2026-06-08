'use client'

import { motion } from 'framer-motion'
import { ArrowUpRight } from '@phosphor-icons/react'

const projects = [
  {
    title: 'VIVIRITY Intelli-Credit',
    role: 'Credit Risk Intelligence System',
    description: 'Reduced financial analysis time from days to minutes by processing 500+ page annual reports in under 5 minutes.',
    achievements: [
      '2nd place at IIT Hyderabad AI/ML Hackathon (YUVAAN 2026).',
      'VectorLess RAG pipeline achieving 98% lower API overhead.',
      'Extracted 50+ financial risk indicators via multi-agent pipeline.'
    ],
    stack: ['Python', 'Gemini', 'RAG', 'Multi-Agent'],
    github: 'https://github.com/charansaiponnada/VIVIRITY',
  },
  {
    title: 'AyurMind',
    role: 'Domain-Specific RAG System',
    description: 'RAG system over 1200+ structured Ayurvedic knowledge entries with 84% Top-3 retrieval accuracy.',
    achievements: [
      'Reduced hallucinated responses by 45% using validation layers.',
      'Improved expert-rated answer quality from 3.1 to 4.4 / 5.',
      'Optimized retrieval pipeline for domain-specific accuracy.'
    ],
    stack: ['Python', 'LangChain', 'ChromaDB', 'Gradio'],
    github: 'https://github.com/charansaiponnada/AyurMind',
  }
]

export default function Projects() {
  return (
    <section id="projects" className="border-t border-black/5">
      <div className="max-w-7xl mx-auto border-x border-black/5">
        
        {/* Full Width Header */}
        <div className="p-6 md:p-12 border-b border-black/5 flex flex-col md:flex-row md:items-end justify-between gap-8 bg-black/[0.01]">
          <div>
            <span className="text-[#0055FF] font-mono text-[9px] tracking-[0.4em] uppercase mb-8 block">02 / Technical Architecture</span>
            <h2 className="font-display text-4xl md:text-5xl font-bold tracking-tight uppercase leading-[0.9]">
              Initiatives
            </h2>
          </div>
          <a href="https://github.com/charansaiponnada" className="group flex items-center gap-3 text-[10px] font-mono text-black/40 hover:text-[#0055FF] transition-colors uppercase tracking-widest">
            Explore Repositories <ArrowUpRight className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </a>
        </div>

        {/* Asymmetrical Project Rows */}
        <div className="flex flex-col">
          {projects.map((project, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              className="flex flex-col lg:flex-row border-b border-black/5 last:border-b-0 group hover:bg-[#0055FF]/[0.01] transition-colors"
            >
              <div className="lg:w-1/3 p-6 md:p-12 border-b lg:border-b-0 lg:border-r border-black/5">
                <h3 className="text-2xl font-bold uppercase tracking-tight mb-2 group-hover:text-[#0055FF] transition-colors">{project.title}</h3>
                <p className="text-black/40 text-[10px] font-mono uppercase tracking-widest mb-6">{project.role}</p>
                <div className="flex flex-wrap gap-2">
                  {project.stack.map((s) => (
                    <span key={s} className="px-2 py-1 bg-black/5 text-[9px] font-mono text-black/50 uppercase tracking-widest">{s}</span>
                  ))}
                </div>
              </div>

              <div className="lg:w-2/3 p-6 md:p-12 flex flex-col">
                <p className="text-black/60 text-sm leading-relaxed font-light mb-8 max-w-2xl">{project.description}</p>
                
                <div className="space-y-4 mb-10 flex-grow">
                  {project.achievements.map((a, j) => (
                    <div key={j} className="flex gap-4 items-start max-w-2xl">
                      <div className="w-1.5 h-1.5 bg-[#0055FF] mt-1.5 shrink-0" />
                      <p className="text-sm text-black/50 leading-relaxed font-light">{a}</p>
                    </div>
                  ))}
                </div>

                <a 
                  href={project.github}
                  target="_blank"
                  className="self-start text-[10px] font-bold font-mono uppercase tracking-widest text-[#0055FF] flex items-center gap-2 hover:opacity-70 transition-opacity"
                >
                  View Source <ArrowUpRight />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
