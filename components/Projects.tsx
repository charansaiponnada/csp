'use client'

import { motion } from 'framer-motion'
import { ArrowUpRight } from '@phosphor-icons/react'

const projects = [
  {
    title: 'VIVIRITY Intelli-Credit',
    metric: '2nd Place',
    metricLabel: 'IIT Hackathon',
    desc: 'End-to-end AI credit intelligence system. Reduced financial analysis time from days to minutes by processing 500+ page annual reports in under 5 minutes.',
    link: 'https://github.com/charansaiponnada/VIVIRITY',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1200'
  },
  {
    title: 'Hive Agent Framework',
    metric: 'Evolving',
    metricLabel: 'AI Framework',
    desc: 'An outcome-driven agent development framework built in Python that evolves through usage. Designed for adaptable, highly-autonomous AI agent pipelines.',
    link: 'https://github.com/charansaiponnada/hive',
    image: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&q=80&w=1200'
  },
  {
    title: 'VHR Vehicle Routing',
    metric: 'Vision',
    metricLabel: 'Satellite Data',
    desc: 'Optimized Vehicle Routing based on Context Reasoning extracted from Very High-Resolution Satellite images. Fusing computer vision with logistical mapping.',
    link: 'https://github.com/charansaiponnada/vehicle_width_routing',
    image: 'https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&q=80&w=1200'
  },
  {
    title: 'AyurMind RAG',
    metric: '84%',
    metricLabel: 'Top-3 Accuracy',
    desc: 'Domain-specific RAG system over 1200+ structured Ayurvedic knowledge entries. Reduced hallucinated responses by 45% using validation layers.',
    link: 'https://github.com/charansaiponnada/AyurMind',
    image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=1200'
  }
]

export default function Projects() {
  return (
    <section id="projects" className="py-32 px-6 bg-dribbble-surface-1 border-t border-dribbble-border relative">
      <div className="max-w-[1400px] mx-auto">
        
        <div className="flex flex-col md:flex-row justify-between items-end mb-32 gap-8 border-b border-dribbble-border pb-12">
          <h2 className="font-display text-[clamp(3rem,8vw,8rem)] font-extrabold tracking-[-0.04em] uppercase leading-[0.85]">
            Selected <br /> <span className="text-dribbble-accent">Projects.</span>
          </h2>
          <a href="https://github.com/charansaiponnada" target="_blank" className="font-sans text-sm font-bold text-dribbble-muted hover:text-white transition-colors flex items-center gap-2 uppercase tracking-[0.2em] mb-4">
            View Source Code <ArrowUpRight weight="bold" />
          </a>
        </div>

        <div className="flex flex-col gap-32">
          {projects.map((p, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              className={`flex flex-col lg:flex-row gap-12 lg:gap-24 items-center group ${i % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}
            >
              {/* Image Artifact */}
              <div className="w-full lg:w-7/12 relative overflow-hidden rounded-[2rem] aspect-[4/3] bg-dribbble-surface-2 border border-dribbble-border">
                <img 
                  src={p.image} 
                  alt={p.title} 
                  className="w-full h-full object-cover grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700 ease-[0.16,1,0.3,1]"
                />
                <a 
                  href={p.link} 
                  target="_blank" 
                  className="absolute top-6 right-6 w-16 h-16 bg-black/50 backdrop-blur-md rounded-full border border-white/20 flex items-center justify-center text-white hover:bg-dribbble-accent hover:text-black hover:border-dribbble-accent transition-all z-10"
                >
                  <ArrowUpRight size={24} weight="bold" />
                </a>
              </div>

              {/* Typographic Context */}
              <div className="w-full lg:w-5/12 flex flex-col">
                <div className="flex items-end gap-4 mb-8 border-b border-dribbble-border pb-6">
                  <div className="font-display text-5xl md:text-7xl font-extrabold text-dribbble-accent leading-none tracking-tighter">{p.metric}</div>
                  <div className="font-sans text-xs font-bold uppercase tracking-[0.2em] text-dribbble-muted pb-2">{p.metricLabel}</div>
                </div>

                <h3 className="font-display text-4xl md:text-5xl font-extrabold uppercase tracking-tighter mb-6">{p.title}</h3>
                
                <p className="font-sans text-lg text-dribbble-muted leading-relaxed font-medium">
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
