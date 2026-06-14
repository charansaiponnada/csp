'use client'

import { motion } from 'framer-motion'
import { ArrowUpRight } from '@phosphor-icons/react'

const projects = [
  {
    id: '01',
    title: 'VIVIRITY Intelli-Credit',
    tagline: 'Credit Risk Intelligence',
    metric: '98%',
    metricLabel: 'Lower API Overhead',
    desc: 'End-to-end AI credit intelligence system. Processes 500+ page annual reports in under 5 minutes. VectorLess RAG pipeline with multi-agent decision logic.',
    link: 'https://github.com/charansaiponnada/VIVIRITY',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1200',
    tags: ['RAG', 'Multi-agent', 'FinTech'],
    award: '2nd · IIT Hyd'
  },
  {
    id: '02',
    title: 'AyurMind RAG',
    tagline: 'Domain-Specific Knowledge Base',
    metric: '84%',
    metricLabel: 'Top-3 Accuracy',
    desc: 'RAG system over 1200+ structured Ayurvedic knowledge entries. Reduced hallucinated responses by 45% via custom validation layers.',
    link: 'https://github.com/charansaiponnada/AyurMind',
    image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=1200',
    tags: ['RAG', 'Knowledge Base', 'Validation']
  },
  {
    id: '03',
    title: 'Aynstyn AI Modules',
    tagline: 'Production SaaS Intelligence',
    metric: '200+',
    metricLabel: 'Eval Test Cases',
    desc: 'Engineered AI-powered SaaS modules for interview simulation and candidate assessment. Built an LLM evaluation pipeline for production consistency.',
    link: 'https://aynstyn.com',
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=1200',
    tags: ['SaaS', 'LLM Eval', 'Prompt Eng']
  },
  {
    id: '04',
    title: 'Genomic Foundation Model',
    tagline: 'Multi-Species Mamba SSM',
    metric: '~100M',
    metricLabel: 'Parameters',
    desc: 'Building a genomic foundation model from scratch using Mamba SSM architecture. 4,096 bp context window across 5 species.',
    link: '#',
    image: 'https://images.unsplash.com/photo-1532187863486-abf51ad9f69d?auto=format&fit=crop&q=80&w=1200',
    tags: ['Mamba SSM', 'Genomics', 'R&D'],
    status: 'In Progress'
  }
]

export default function Projects() {
  return (
    <section id="work" className="py-32 px-6 bg-dribbble-surface-1 border-t border-white/5 relative">
      <div className="max-w-[1400px] mx-auto">
        
        <div className="flex flex-col md:flex-row justify-between items-end mb-48 gap-8 border-b border-white/5 pb-16">
          <h2 className="font-display text-[clamp(3.5rem,10vw,10rem)] font-black tracking-[-0.05em] uppercase leading-[0.8] mb-4">
            Built <br /> <span className="text-outline-accent">With Intent.</span>
          </h2>
          <div className="flex flex-col items-end gap-4 mb-4">
            <span className="font-mono text-[10px] text-dribbble-accent uppercase tracking-[0.4em]">Project Index // 01-04</span>
            <a href="https://github.com/charansaiponnada" target="_blank" className="font-mono text-[10px] font-bold text-white/40 hover:text-white transition-colors flex items-center gap-2 uppercase tracking-[0.2em]">
              Primary_Repository <ArrowUpRight weight="bold" />
            </a>
          </div>
        </div>

        <div className="grid gap-64">
          {projects.map((p, i) => (
            <motion.div
              key={p.id}
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className={`flex flex-col lg:flex-row gap-16 lg:gap-32 items-start group ${i % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}
            >
              {/* Image Artifact */}
              <div className="w-full lg:w-7/12 relative bg-dribbble-canvas border border-white/5 overflow-hidden">
                <div className="aspect-[16/10] overflow-hidden">
                  <img 
                    src={p.image} 
                    alt={p.title} 
                    className="w-full h-full object-cover grayscale opacity-30 group-hover:grayscale-0 group-hover:opacity-80 group-hover:scale-105 transition-all duration-1000 ease-[0.16,1,0.3,1]"
                  />
                </div>
                {/* Overlay Tech Grid */}
                <div className="absolute inset-0 bg-[linear-gradient(rgba(212,255,0,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(212,255,0,0.02)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />
                
                <a 
                  href={p.link} 
                  target="_blank" 
                  className="absolute top-10 right-10 w-20 h-20 bg-dribbble-accent text-black flex items-center justify-center hover:bg-white transition-all z-10 -rotate-12 group-hover:rotate-0"
                >
                  <ArrowUpRight size={32} weight="bold" />
                </a>

                {/* Technical Meta */}
                <div className="absolute bottom-8 left-8 flex flex-col gap-2 font-mono text-[9px] uppercase tracking-[0.3em] text-white/20">
                  <div className="flex items-center gap-3">
                    <span className="text-dribbble-accent">ID</span> {p.id}
                  </div>
                  {p.award && <div className="text-dribbble-accent">{p.award}</div>}
                  {p.status && <div className="text-white/40 italic">{p.status}</div>}
                </div>
              </div>

              {/* Typographic Context */}
              <div className="w-full lg:w-5/12 flex flex-col pt-8">
                <div className="flex items-baseline gap-6 mb-12 border-b border-white/5 pb-10">
                  <div className="font-display text-8xl md:text-9xl font-black text-white leading-none tracking-tighter group-hover:text-dribbble-accent transition-colors">{p.metric}</div>
                  <div className="font-mono text-[10px] font-bold uppercase tracking-[0.3em] text-dribbble-accent">{p.metricLabel}</div>
                </div>

                <h3 className="font-display text-4xl md:text-5xl font-black uppercase tracking-tighter mb-4 leading-none text-white">{p.title}</h3>
                <div className="font-mono text-[10px] text-white/30 uppercase tracking-[0.4em] mb-8">{p.tagline}</div>
                
                <p className="font-sans text-xl text-dribbble-muted leading-relaxed font-medium mb-12">
                  {p.desc}
                </p>

                <div className="flex flex-wrap gap-4">
                  {p.tags.map(tag => (
                    <span key={tag} className="px-4 py-2 bg-white/5 font-mono text-[9px] font-bold uppercase tracking-widest text-white/40 border border-white/5">
                      {tag}
                    </span>
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