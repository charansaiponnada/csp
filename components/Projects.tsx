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
    <section id="projects" className="py-32 bg-[#0A0A0A] relative">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="mb-24"
        >
          <span className="text-[#E87E53] font-mono text-[10px] tracking-[0.4em] uppercase mb-4 block">02 / Key Initiatives</span>
          <h2 className="font-display text-5xl md:text-7xl font-medium tracking-tight">Technical <span className="text-white/20">Projects</span></h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 + i * 0.1 }}
              className="glass p-10 rounded-[2.5rem] group hover:border-white/20 transition-all flex flex-col"
            >
              <div className="mb-8">
                <span className="px-3 py-1 bg-[#E87E53]/10 text-[#E87E53] text-[9px] font-mono tracking-widest uppercase rounded-full border border-[#E87E53]/20 mb-6 inline-block">
                  {project.badge}
                </span>
                <h3 className="text-3xl font-medium mb-2 group-hover:text-[#E87E53] transition-colors">{project.title}</h3>
                <p className="text-white/40 text-xs font-mono uppercase tracking-widest">{project.role}</p>
              </div>

              <p className="text-white/50 text-sm mb-8 leading-relaxed font-light">
                {project.description}
              </p>

              <div className="space-y-4 mb-10 flex-grow">
                {project.achievements.map((a, j) => (
                  <div key={j} className="flex gap-4 items-start">
                    <div className="w-1 h-1 rounded-full bg-[#E87E53] mt-2 flex-shrink-0" />
                    <p className="text-xs text-white/40 leading-relaxed font-light">{a}</p>
                  </div>
                ))}
              </div>

              <div className="flex items-center justify-between pt-8 border-t border-white/5">
                <div className="flex gap-2">
                  {project.stack.map((s) => (
                    <span key={s} className="px-3 py-1 bg-white/5 border border-white/5 text-[9px] font-mono text-white/30 rounded-full">{s}</span>
                  ))}
                </div>
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-white/50 hover:bg-white hover:text-black transition-all"
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