'use client'

import { motion } from 'framer-motion'

export default function Experience() {
  return (
    <section id="experience" className="py-32 px-6 bg-dribbble-canvas border-t border-dribbble-border">
      <div className="max-w-[1400px] mx-auto grid lg:grid-cols-12 gap-16 lg:gap-24 items-start">
        
        <div className="lg:col-span-5 sticky top-32">
          <h2 className="font-display text-[clamp(3rem,8vw,8rem)] font-extrabold tracking-[-0.04em] uppercase leading-[0.85] mb-8">
            Career <br /> <span className="text-outline text-transparent">Timeline.</span>
          </h2>
        </div>

        <div className="lg:col-span-7 flex flex-col gap-24">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="relative pl-8 md:pl-16 border-l-2 border-dribbble-border group"
          >
            {/* Timeline Dot */}
            <div className="absolute top-0 -left-[11px] w-5 h-5 rounded-full bg-dribbble-canvas border-2 border-dribbble-border group-hover:bg-dribbble-accent group-hover:border-dribbble-accent transition-colors" />

            <div className="font-display text-[80px] md:text-[120px] font-extrabold text-dribbble-surface-2 leading-none tracking-tighter absolute -top-12 -z-10 group-hover:text-dribbble-accent/10 transition-colors select-none">
              2026
            </div>
            
            <h3 className="font-display text-4xl md:text-5xl font-extrabold tracking-tighter uppercase leading-none mb-4 mt-8">
              Aynstyn Technologies
            </h3>
            <p className="font-sans text-xl font-bold text-dribbble-accent uppercase tracking-widest mb-8">AI Engineer Intern</p>
            
            <p className="font-sans text-lg text-dribbble-muted leading-relaxed mb-8 max-w-xl font-medium">
              Engineered AI-powered SaaS modules for interview simulation. Designed and implemented an LLM evaluation pipeline validating model performance across 200+ structured test cases, improving coverage by 2x.
            </p>

            <div className="flex flex-wrap gap-4">
              {['FastAPI', 'LangChain', 'PyTorch', 'RAG'].map(tech => (
                <span key={tech} className="font-sans text-sm font-bold uppercase tracking-widest text-white/50 border-b border-dribbble-border pb-1 group-hover:text-white group-hover:border-dribbble-accent transition-all">
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
