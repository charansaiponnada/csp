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
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="relative pl-8 md:pl-16 border-l border-dribbble-border group"
          >
            {/* Timeline Dot with Pulse */}
            <div className="absolute top-0 -left-[5px] w-2.5 h-2.5 rounded-full bg-dribbble-accent shadow-[0_0_15px_rgba(212,255,0,0.5)] z-10" />
            <div className="absolute top-0 -left-[5px] w-2.5 h-2.5 rounded-full bg-dribbble-accent animate-ping opacity-75" />

            <div className="font-display text-[90px] md:text-[140px] font-extrabold text-white/[0.03] leading-none tracking-tighter absolute -top-12 -left-4 md:-left-8 -z-10 group-hover:text-dribbble-accent/[0.07] transition-colors select-none">
              2026
            </div>
            
            <h3 className="font-display text-4xl md:text-5xl font-extrabold tracking-tighter uppercase leading-none mb-4 mt-8">
              Aynstyn Technologies
            </h3>
            <p className="font-mono text-sm font-bold text-dribbble-accent uppercase tracking-[0.3em] mb-8">AI Engineer Intern</p>
            
            <p className="font-sans text-lg text-dribbble-muted leading-relaxed mb-8 max-w-xl font-medium">
              Engineered AI-powered SaaS modules for interview simulation. Designed and implemented an <span className="text-white">LLM evaluation pipeline</span> validating model performance across 200+ structured test cases, improving coverage by 2x.
            </p>

            <div className="flex flex-wrap gap-6">
              {['FastAPI', 'LangChain', 'PyTorch', 'RAG'].map(tech => (
                <div key={tech} className="flex items-center gap-2">
                  <div className="w-1 h-1 bg-dribbble-accent rounded-full" />
                  <span className="font-mono text-xs font-bold uppercase tracking-widest text-dribbble-muted group-hover:text-white transition-all">
                    {tech}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  )
}
