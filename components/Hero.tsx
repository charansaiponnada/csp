'use client'

import { motion } from 'framer-motion'
import { ArrowRight, GithubLogo } from '@phosphor-icons/react'

export default function Hero() {
  return (
    <section id="hero" className="min-h-screen flex flex-col justify-center px-6 pt-32 pb-24 relative overflow-hidden">
      
      {/* Decisive Imagery - The Brand Law: Ship Imagery */}
      <motion.div 
        initial={{ opacity: 0, scale: 1.1 }}
        animate={{ opacity: 0.15, scale: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="absolute top-0 right-0 w-[80vw] h-[100vh] -z-10 overflow-hidden"
      >
        <img 
          src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&q=80&w=1600" 
          alt="Abstract algorithmic intelligence" 
          className="w-full h-full object-cover mix-blend-screen grayscale"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-dribbble-canvas via-dribbble-canvas/80 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-dribbble-canvas via-transparent to-transparent" />
      </motion.div>

      <div className="max-w-[1400px] mx-auto w-full grid lg:grid-cols-12 gap-12 items-center">
        
        <div className="lg:col-span-8 flex flex-col items-start z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="inline-flex items-center gap-3 px-4 py-2 rounded-full border border-dribbble-border bg-dribbble-surface-1 mb-8"
          >
            <div className="w-2 h-2 rounded-full bg-dribbble-accent animate-pulse" />
            <span className="font-sans text-xs font-bold tracking-[0.2em] text-dribbble-muted uppercase">Intelligence Systems Architect</span>
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="font-display text-[clamp(4rem,10vw,9rem)] font-extrabold leading-[0.85] tracking-[-0.04em] uppercase mb-8"
          >
            Creative <br />
            <span className="text-outline text-transparent">Technologist.</span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="font-sans text-xl md:text-2xl text-dribbble-muted max-w-2xl leading-relaxed mb-12 font-medium"
          >
            I'm Charan Sai Ponnada. I architect high-stakes <span className="text-white">RAG systems</span> and <span className="text-white">vision-language models</span>, blending deep engineering with aggressive design.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col sm:flex-row items-center gap-6"
          >
            <a href="#projects" className="btn-acid group">
              Explore Work 
              <ArrowRight className="ml-3 group-hover:translate-x-1 transition-transform" weight="bold" />
            </a>
            <a href="https://github.com/charansaiponnada" target="_blank" className="btn-ghost group">
              <GithubLogo size={24} className="mr-3 group-hover:text-dribbble-accent transition-colors" />
              Source Code
            </a>
          </motion.div>
        </div>

        {/* Asymmetrical Right Column Accent */}
        <div className="lg:col-span-4 hidden lg:flex flex-col justify-end h-full pb-12 opacity-40">
          <div className="font-mono text-[200px] leading-none text-outline-accent rotate-90 transform origin-bottom-left absolute right-12 bottom-[20vh] select-none pointer-events-none">
            CSP.
          </div>
        </div>

      </div>
    </section>
  )
}
