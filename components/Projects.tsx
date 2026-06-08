'use client'

import { motion } from 'framer-motion'
import { GithubLogo, ArrowUpRight } from '@phosphor-icons/react'

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
  return (
    <section id="projects" className="bg-white relative max-w-7xl mx-auto">
      <div className="grid lg:grid-cols-12 w-full border-l border-black/5">
        {/* Section Header */}
        <div className="lg:col-span-4 p-8 md:p-12 border-r border-b border-black/5 flex flex-col min-h-[400px] bg-black/[0.01]">
          <span className="text-[#0055FF] font-mono text-[9px] tracking-[0.4em] uppercase mb-12 block">03 / Initiatives</span>
          <h2 className="font-display text-4xl md:text-5xl font-bold tracking-tight uppercase text-black leading-[0.9] mt-auto">
            Technical<br />
            Projects.
          </h2>
          <p className="text-black/40 text-xs font-light mt-8 leading-relaxed max-w-[250px]">
            High-stakes systems engineering from fintech RAG to domain-specific intelligence.
          </p>
        </div>

        {/* Project Cards */}
        <div className="lg:col-span-8 flex flex-col sm:flex-row border-b border-black/5">
          {projects.map((project, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className={`p-8 md:p-12 border-r border-black/5 flex flex-col w-full sm:w-1/2 group hover:bg-[#0055FF]/[0.02] transition-colors relative overflow-hidden`}
            >
              <div className="absolute top-8 right-8 text-black/10 group-hover:text-[#0055FF] transition-colors">
                <ArrowUpRight size={24} />
              </div>

              <div className="mb-12">
                <span className="px-3 py-1 bg-black border border-black text-[9px] font-mono tracking-widest uppercase rounded-full text-white mb-6 inline-block">
                  {project.badge}
                </span>
                <h3 className="text-2xl md:text-3xl font-bold text-black mb-3 uppercase leading-[1.1] group-hover:text-[#0055FF] transition-colors">
                  {project.title}
                </h3>
                <p className="text-black/40 text-[10px] font-mono uppercase tracking-[0.2em]">{project.role}</p>
              </div>

              <p className="text-black/60 text-sm mb-10 leading-relaxed font-light">
                {project.description}
              </p>

              <div className="space-y-4 flex-grow mb-12">
                {project.achievements.map((a, j) => (
                  <div key={j} className="flex gap-4 items-start">
                    <div className="w-1 h-1 rounded-full bg-black/20 mt-2 flex-shrink-0 group-hover:bg-[#0055FF] transition-colors" />
                    <p className="text-xs text-black/50 leading-relaxed font-light">{a}</p>
                  </div>
                ))}
              </div>

              <div className="flex items-center justify-between pt-6 border-t border-black/10 mt-auto">
                <div className="flex gap-2 flex-wrap max-w-[80%]">
                  {project.stack.map((s) => (
                    <span key={s} className="text-[9px] font-mono tracking-widest uppercase text-black/40">{s}</span>
                  ))}
                </div>
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full border border-black/10 flex items-center justify-center text-black hover:bg-[#0055FF] hover:border-[#0055FF] hover:text-white transition-all shadow-sm shrink-0"
                >
                  <GithubLogo size={18} />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
