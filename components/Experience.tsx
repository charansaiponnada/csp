'use client'

import { motion } from 'framer-motion'
import { ArrowRight } from '@phosphor-icons/react'

export default function Experience() {
  return (
    <section id="experience" className="py-32 px-6 bg-dribbble-surface-1 border-t border-dribbble-border">
      <div className="max-w-[1400px] mx-auto grid lg:grid-cols-12 gap-16 lg:gap-8 items-start">
        
        <div className="lg:col-span-5 sticky top-32">
          <h2 className="font-display text-[60px] md:text-[80px] font-bold tracking-tighter uppercase leading-[0.9] mb-6">
            Professional <br /> <span className="text-dribbble-accent">Trajectory.</span>
          </h2>
          <p className="font-sans text-xl text-dribbble-muted max-w-sm">
            Architecting high-stakes evaluation infrastructure and reliable AI pipelines for production environments.
          </p>
        </div>

        <div className="lg:col-span-7 flex flex-col gap-12">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="group"
          >
            <div className="flex items-center gap-4 mb-4">
              <span className="font-mono text-sm font-bold text-dribbble-accent uppercase tracking-widest">01 / Intern</span>
              <span className="w-12 h-[1px] bg-dribbble-border" />
              <span className="font-mono text-sm text-dribbble-muted uppercase">Jan 2026 – Present</span>
            </div>
            
            <h3 className="font-display text-[40px] md:text-[56px] font-bold tracking-tighter uppercase leading-none mb-2 group-hover:text-dribbble-accent transition-colors">
              Aynstyn Technologies
            </h3>
            <p className="font-sans text-xl font-medium text-white mb-8">AI Engineer Intern</p>
            
            <p className="font-sans text-lg text-dribbble-muted leading-relaxed mb-8 max-w-2xl">
              Engineered AI-powered SaaS modules for interview simulation. Designed and implemented an LLM evaluation pipeline validating model performance across 200+ structured test cases, improving coverage by 2x.
            </p>

            <div className="flex flex-wrap gap-3">
              {['FastAPI', 'LangChain', 'PyTorch', 'RAG'].map(tech => (
                <span key={tech} className="px-4 py-2 border border-dribbble-border rounded-full font-sans text-sm font-medium text-white group-hover:border-dribbble-accent transition-colors">
                  {tech}
                </span>
              ))}
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  )
}
