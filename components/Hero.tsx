'use client'

import { motion } from 'framer-motion'
import { ArrowRight } from '@phosphor-icons/react'

export default function Hero() {
  return (
    <section
      id="hero"
      className="min-h-screen flex flex-col justify-center relative bg-white pt-24 pb-12 px-6 border-b border-black/5"
    >
      <div className="max-w-7xl mx-auto w-full flex flex-col justify-center flex-grow">
        {/* Top Label */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="mb-8"
        >
          <span className="flex items-center gap-3 text-[#0055FF] text-[10px] font-mono tracking-[0.3em] uppercase">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full bg-[#0055FF] opacity-50"></span>
              <span className="relative inline-flex h-2 w-2 bg-[#0055FF]"></span>
            </span>
            Systems Engineering / Visual Design / Research
          </span>
        </motion.div>

        {/* Main Display */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="font-display text-[clamp(4rem,12vw,10rem)] font-bold tracking-[-0.04em] leading-[0.85] uppercase mb-12 text-black"
        >
          Charan Sai <br />
          <span className="text-black/20">Ponnada.</span>
        </motion.h1>

        {/* Narrative & Action */}
        <div className="grid md:grid-cols-2 gap-12 items-end">
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="text-base md:text-lg text-black/60 leading-relaxed font-light max-w-lg"
          >
            A polymath explorer building at the intersection of <strong className="text-black font-medium">Artificial Intelligence</strong>, <strong className="text-black font-medium">Visual Design</strong>, and <strong className="text-black font-medium">Human Psychology</strong>. Focused on high-stakes RAG systems and cinematic storytelling.
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-start md:justify-end"
          >
            <a
              href="mailto:charansaiponnada06@gmail.com"
              className="flex items-center gap-3 px-8 py-4 bg-black text-white font-bold text-[10px] tracking-[0.2em] uppercase rounded-full transition-colors hover:bg-[#0055FF] w-full sm:w-auto justify-center"
            >
              Start Collaboration
              <ArrowRight size={14} />
            </a>
            <a
              href="#highlights"
              className="flex items-center gap-3 px-8 py-4 border border-black/10 text-black font-bold text-[10px] tracking-[0.2em] uppercase rounded-full transition-colors hover:bg-black/5 w-full sm:w-auto justify-center"
            >
              View Capabilities
            </a>
          </motion.div>
        </div>
      </div>

      {/* Grid Stats */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="w-full mt-24 max-w-7xl mx-auto"
      >
        <div className="grid grid-cols-2 md:grid-cols-4 border-l border-t border-black/5">
          {[
            { label: 'Annual Reports', value: '500+', unit: 'Analyzed' },
            { label: 'Hackathon Rank', value: '2nd', unit: 'YUVAAN 26' },
            { label: 'Network', value: '1.3k+', unit: 'Followers' },
            { label: 'Research', value: 'Author', unit: 'ISAECT 25' }
          ].map((stat, i) => (
            <div key={i} className="p-6 border-r border-b border-black/5 flex flex-col items-start bg-black/[0.01]">
              <span className="text-[#0055FF] text-[9px] font-mono uppercase tracking-[0.2em] mb-4">{stat.label}</span>
              <span className="text-black text-3xl font-bold tracking-tight uppercase leading-none mb-1">{stat.value}</span>
              <span className="text-black/30 text-[9px] font-mono uppercase tracking-widest">{stat.unit}</span>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}