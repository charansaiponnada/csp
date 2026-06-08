'use client'

import { motion } from 'framer-motion'
import { ArrowRight } from '@phosphor-icons/react'

export default function Hero() {
  return (
    <section id="hero" className="min-h-screen flex flex-col justify-center px-6 relative overflow-hidden">
      {/* Background Graphic Element */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-dribbble-accent/5 blur-[120px] rounded-full -z-10" />

      <div className="max-w-[1400px] mx-auto w-full pt-32 pb-24">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col items-center text-center"
        >
          <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full border border-dribbble-border bg-dribbble-surface-1 mb-8">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-dribbble-accent opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-dribbble-accent"></span>
            </span>
            <span className="font-sans text-xs font-semibold tracking-widest text-dribbble-muted uppercase">Available for new roles</span>
          </div>

          <h1 className="font-display text-[12vw] md:text-[8rem] font-bold leading-[0.85] tracking-tighter uppercase mb-6 text-white mix-blend-difference">
            Creative <br />
            <span className="text-outline text-transparent">Technologist.</span>
          </h1>

          <p className="font-sans text-lg md:text-2xl text-dribbble-muted max-w-2xl mx-auto leading-relaxed mb-12">
            I'm Charan Sai Ponnada. I architect high-stakes RAG systems and vision-language models, blending deep engineering with aggressive design.
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-6">
            <a href="#projects" className="btn-acid group">
              Explore Work 
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" weight="bold" />
            </a>
            <a href="https://github.com/charansaiponnada" target="_blank" className="btn-ghost">
              GitHub Repo
            </a>
          </div>
        </motion.div>
      </div>

      {/* Massive scrolling marquee or decorative text at the bottom of hero */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden whitespace-nowrap opacity-10 pointer-events-none select-none flex">
        <motion.div 
          animate={{ x: ["0%", "-50%"] }}
          transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
          className="font-display text-[120px] font-bold uppercase tracking-tighter flex"
        >
          <span className="px-8 text-dribbble-accent">AI ENGINEERING</span>
          <span className="px-8 text-outline">SYSTEMS ARCHITECTURE</span>
          <span className="px-8 text-dribbble-accent">AI ENGINEERING</span>
          <span className="px-8 text-outline">SYSTEMS ARCHITECTURE</span>
        </motion.div>
      </div>
    </section>
  )
}
