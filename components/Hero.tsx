'use client'

import { motion } from 'framer-motion'
import { ArrowDownRight } from '@phosphor-icons/react'

export default function Hero() {
  return (
    <section id="hero" className="min-h-[90vh] flex flex-col justify-end px-6 pb-24 max-w-7xl mx-auto border-x border-black/5">
      <div className="w-full">
        {/* Core Identity */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="mb-12 flex flex-col md:flex-row md:items-end justify-between gap-8 border-b border-black/5 pb-12"
        >
          <div>
            <span className="text-[#0055FF] text-[10px] font-mono tracking-[0.4em] uppercase block mb-8 flex items-center gap-4">
              <div className="w-1.5 h-1.5 bg-[#0055FF] animate-pulse" />
              Intelligence Systems Engineer
            </span>
            <h1 className="font-display text-[clamp(3rem,8vw,8rem)] font-bold leading-[0.85] tracking-tighter uppercase">
              Charan Sai <br /> Ponnada
            </h1>
          </div>
          <div className="max-w-xs text-sm text-black/50 leading-relaxed font-light mb-2">
            Engineering robust RAG architectures and vision-language systems. Bridging theoretical research with production-grade execution.
          </div>
        </motion.div>

        {/* Anti-Grid Structural Data */}
        <div className="flex flex-col md:flex-row gap-12 md:gap-24 pt-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex-1 flex flex-col gap-2"
          >
            <span className="text-[9px] font-mono text-black/30 uppercase tracking-widest">Current Node</span>
            <span className="text-sm font-medium">Aynstyn Technologies</span>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex-1 flex flex-col gap-2"
          >
            <span className="text-[9px] font-mono text-black/30 uppercase tracking-widest">Research Status</span>
            <span className="text-sm font-medium">ISAECT 2025 Author</span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex-1 flex items-end justify-start md:justify-end"
          >
            <a href="mailto:charansaiponnada06@gmail.com" className="group flex items-center gap-4">
              <span className="text-xs font-bold uppercase tracking-widest group-hover:text-[#0055FF] transition-colors">Initiate Contact</span>
              <div className="w-10 h-10 rounded-full border border-black/10 flex items-center justify-center group-hover:bg-[#0055FF] group-hover:border-[#0055FF] group-hover:text-white transition-all">
                <ArrowDownRight size={16} />
              </div>
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
