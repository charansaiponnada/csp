'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { GithubLogo, ArrowSquareOut, BookOpen } from '@phosphor-icons/react'

const projects = [
  {
    title: 'VIVIRITY Intelli-Credit',
    role: 'Credit Risk Intelligence System',
    description: 'Reduced financial analysis time from days to minutes by processing 500+ page annual reports in under 5 minutes.',
    achievements: [
      'Built end-to-end AI credit intelligence system; 2nd place at IIT Hyderabad AI/ML Hackathon.',
      'Developed VectorLess RAG pipeline achieving 98% lower API overhead.',
      'Extracted 50+ financial risk indicators via multi-agent decision pipeline.'
    ],
    stack: ['Python', 'Gemini', 'RAG', 'Multi-Agent'],
    github: 'https://github.com/charansaiponnada/VIVIRITY',
    badge: 'YUVAAN 2026'
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
    badge: 'Conference Ready'
  }
]

export default function Projects() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="projects" className="bg-white relative overflow-hidden border-t border-black/5">
      <div className="grid lg:grid-cols-4 w-full">
        {/* Header Cell */}
        <div className="lg:col-span-1 p-12 border-r border-b border-black/5 flex flex-col justify-between min-h-[400px]">
          <div>
            <span className="text-[#0055FF] font-mono text-[10px] tracking-[0.4em] uppercase mb-4 block">02 / INITIATIVES</span>
            <h2 className="font-display text-5xl font-bold tracking-tight uppercase text-black leading-none">TECHNICAL<br/>PROJECTS</h2>
          </div>
          <p className="text-black/30 text-xs font-light leading-relaxed max-w-[200px]">
            High-stakes systems engineering from fintech RAG to domain-specific intelligence.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="lg:col-span-3 grid md:grid-cols-2">
          {projects.map((project, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.1 * i }}
              className="p-12 border-r border-b border-black/5 hover:bg-black/[0.02] transition-all group flex flex-col"
            >
              <div className="mb-8">
                <span className="px-3 py-1 bg-[#0055FF]/10 text-[#0055FF] text-[9px] font-mono tracking-widest uppercase rounded-full border border-[#0055FF]/20 mb-6 inline-block">
                  {project.badge}
                </span>
                <h3 className="text-3xl font-bold text-black mb-2 uppercase group-hover:text-[#0055FF] transition-colors">{project.title}</h3>
                <p className="text-black/40 text-xs font-mono uppercase tracking-widest">{project.role}</p>
              </div>

              <p className="text-black/50 text-sm mb-8 leading-relaxed font-light">
                {project.description}
              </p>

              <div className="space-y-4 mb-10 flex-grow">
                {project.achievements.map((a, j) => (
                  <div key={j} className="flex gap-4 items-start">
                    <div className="w-1 h-1 rounded-full bg-[#0055FF] mt-2 flex-shrink-0" />
                    <p className="text-xs text-black/40 leading-relaxed font-light">{a}</p>
                  </div>
                ))}
              </div>

              <div className="flex items-center justify-between pt-8 border-t border-black/5">
                <div className="flex gap-2">
                  {project.stack.map((s) => (
                    <span key={s} className="px-3 py-1 bg-black/5 border border-black/5 text-[9px] font-mono text-black/30 rounded-full group-hover:text-black transition-colors">{s}</span>
                  ))}
                </div>
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full border border-black/10 flex items-center justify-center text-black/50 hover:bg-[#0055FF] hover:text-white transition-all"
                >
                  <GithubLogo size={20} />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}