'use client'

import { motion } from 'framer-motion'
import { GithubLogo, ArrowUpRight } from '@phosphor-icons/react'

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
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800'
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
    image: 'https://images.unsplash.com/photo-1505751172107-573957a243b0?auto=format&fit=crop&q=80&w=800'
  }
]

export default function Projects() {
  return (
    <section id="projects" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 flex flex-col md:flex-row md:items-end justify-between gap-8"
        >
          <div>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4 uppercase">Technical <span className="text-purple-500">Initiatives.</span></h2>
            <p className="text-slate-400 font-light">High-stakes systems engineering and neural architectures.</p>
          </div>
          <a href="https://github.com/charansaiponnada" className="group flex items-center gap-3 text-sm font-mono text-slate-400 hover:text-white transition-colors">
            EXPLORE ALL REPOS <ArrowUpRight className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </a>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="spatial-card flex flex-col group"
            >
              {/* Project Image/Visual */}
              <div className="relative h-64 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0c] to-transparent z-10" />
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale hover:grayscale-0"
                />
                <div className="absolute top-6 right-6 z-20">
                  <a 
                    href={project.github}
                    target="_blank"
                    className="w-12 h-12 glass rounded-full flex items-center justify-center text-white hover:bg-white hover:text-black transition-all"
                  >
                    <GithubLogo size={24} />
                  </a>
                </div>
              </div>

              <div className="p-8 flex flex-grow flex-col">
                <div className="mb-6">
                  <h3 className="text-2xl font-bold text-white mb-2 uppercase tracking-tight group-hover:text-purple-400 transition-colors">{project.title}</h3>
                  <p className="text-slate-500 text-xs font-mono uppercase tracking-widest">{project.role}</p>
                </div>

                <p className="text-slate-400 text-sm mb-8 leading-relaxed font-light">{project.description}</p>

                <div className="space-y-3 mb-10 flex-grow">
                  {project.achievements.map((a, j) => (
                    <div key={j} className="flex gap-4 items-start">
                      <div className="w-1 h-1 rounded-full bg-purple-500 mt-2 shrink-0 shadow-[0_0_8px_rgba(168,85,247,0.5)]" />
                      <p className="text-xs text-slate-500 leading-relaxed font-light">{a}</p>
                    </div>
                  ))}
                </div>

                <div className="flex flex-wrap gap-2 pt-6 border-t border-white/5">
                  {project.stack.map((s) => (
                    <span key={s} className="px-3 py-1 bg-white/[0.03] border border-white/5 rounded-full text-[9px] font-mono text-slate-400 uppercase tracking-widest">{s}</span>
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
