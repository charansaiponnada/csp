'use client'

import { motion } from 'framer-motion'
import { ArrowUpRight } from '@phosphor-icons/react'

const projects = [
  {
    title: 'VIVIRITY Intelli-Credit',
    metric: '2nd Place',
    metricLabel: 'IIT Hackathon',
    desc: 'End-to-end AI credit intelligence system. Reduced financial analysis time from days to minutes by processing 500+ page annual reports in under 5 minutes.',
    link: 'https://github.com/charansaiponnada/VIVIRITY'
  },
  {
    title: 'AyurMind RAG',
    metric: '84%',
    metricLabel: 'Top-3 Accuracy',
    desc: 'Domain-specific RAG system over 1200+ structured Ayurvedic knowledge entries. Reduced hallucinated responses by 45% using validation layers.',
    link: 'https://github.com/charansaiponnada/AyurMind'
  }
]

export default function Projects() {
  return (
    <section id="projects" className="py-32 px-6 bg-dribbble-canvas border-t border-dribbble-border">
      <div className="max-w-[1400px] mx-auto">
        
        <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-8">
          <h2 className="font-display text-[60px] md:text-[100px] font-bold tracking-tighter uppercase leading-[0.8]">
            <span className="text-outline text-transparent">Selected</span> <br /> Projects
          </h2>
          <a href="https://github.com/charansaiponnada" target="_blank" className="font-sans text-lg font-bold text-dribbble-accent hover:text-white transition-colors flex items-center gap-2">
            VIEW ALL ON GITHUB <ArrowUpRight weight="bold" />
          </a>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {projects.map((p, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: i * 0.1 }}
              className="bg-dribbble-surface-1 border border-dribbble-border rounded-[32px] p-8 md:p-12 flex flex-col justify-between group hover:border-dribbble-accent transition-colors min-h-[400px]"
            >
              <div className="flex justify-between items-start mb-12">
                <div className="bg-dribbble-surface-2 px-6 py-4 rounded-2xl">
                  <div className="font-display text-4xl font-bold text-dribbble-accent leading-none mb-1">{p.metric}</div>
                  <div className="font-mono text-xs font-bold uppercase tracking-widest text-dribbble-muted">{p.metricLabel}</div>
                </div>
                <a href={p.link} target="_blank" className="w-16 h-16 rounded-full border border-dribbble-border flex items-center justify-center text-white group-hover:bg-dribbble-accent group-hover:text-black group-hover:border-dribbble-accent transition-all">
                  <ArrowUpRight size={24} weight="bold" />
                </a>
              </div>

              <div>
                <h3 className="font-display text-4xl md:text-5xl font-bold uppercase tracking-tighter mb-6">{p.title}</h3>
                <p className="font-sans text-lg text-dribbble-muted leading-relaxed max-w-lg">
                  {p.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  )
}
