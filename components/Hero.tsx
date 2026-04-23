'use client'

import { motion } from 'framer-motion'
import { GithubLogo, LinkedinLogo, ArrowUpRight } from '@phosphor-icons/react'

export default function Hero() {
  return (
    <section
      id="hero"
      className="min-h-screen flex items-center relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-[#F7F5F0] via-[#F7F5F0] to-[#EDEAE4]" />
      
      <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-[#C45D35]/[0.03] rounded-full blur-[100px]" />
      <div className="absolute bottom-1/4 left-0 w-[300px] h-[300px] bg-[#8B4513]/[0.03] rounded-full blur-[80px]" />
      
      <div className="max-w-6xl mx-auto px-6 py-32 relative z-10">
        <div className="max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            <span className="inline-block px-4 py-2 bg-[#EDEAE4] text-[#6B6B6B] text-sm font-mono tracking-wide mb-8 border border-[#E5E2DB]">
              AI & Data Science Researcher
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: 'easeOut' }}
            className="font-display text-6xl md:text-7xl lg:text-[5rem] xl:text-[6rem] font-normal leading-[1.05] tracking-tight mb-8"
          >
            Charan Sai
            <br />
            <span className="gradient-text">Ponnada</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
            className="text-xl md:text-2xl text-[#6B6B6B] max-w-xl mb-10 leading-relaxed font-light"
          >
            I build AI systems that don&apos;t just work, but make sense.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3, ease: 'easeOut' }}
            className="flex items-center gap-6 text-[#9A9A9A] mb-12 font-mono text-sm tracking-wide"
          >
            <span>Kakinada, India</span>
            <span className="w-8 h-[1px] bg-[#E5E2DB]" />
            <span>He/Him</span>
            <span className="w-8 h-[1px] bg-[#E5E2DB]" />
            <span>Final Year, AI & DS</span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: 'easeOut' }}
            className="flex flex-wrap gap-6"
          >
            <a
              href="https://github.com/charansaiponnada"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-5 py-3 bg-[#1A1A1A] text-white font-mono text-sm tracking-wide hover:bg-[#1A1A1A]/90 transition-colors"
            >
              <GithubLogo size={18} />
              GitHub
              <ArrowUpRight size={14} />
            </a>
            <a
              href="https://linkedin.com/in/charansaiponnada"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-5 py-3 bg-[#EDEAE4] text-[#1A1A1A] font-mono text-sm tracking-wide hover:bg-[#E5E2DB] transition-colors border border-[#E5E2DB]"
            >
              <LinkedinLogo size={18} />
              LinkedIn
            </a>
          </motion.div>
        </div>
      </div>
      
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-[#E5E2DB] rounded-full flex justify-center pt-2">
          <div className="w-1 h-2 bg-[#C45D35] rounded-full" />
        </div>
      </div>
    </section>
  )
}