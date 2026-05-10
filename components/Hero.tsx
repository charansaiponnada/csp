'use client'

import { motion } from 'framer-motion'
import { GithubLogo, LinkedinLogo } from '@phosphor-icons/react'
import { useState, useEffect } from 'react'
import CodeWindow from './CodeWindow'

export default function Hero() {
  const [time, setTime] = useState('')

  useEffect(() => {
    const updateTime = () => {
      const now = new Date()
      const istOffset = 5.5 * 60 * 60 * 1000
      const istTime = new Date(now.getTime() + (now.getTimezoneOffset() * 60 * 1000) + istOffset)
      setTime(istTime.toLocaleTimeString('en-US', { 
        hour: '2-digit', 
        minute: '2-digit',
        hour12: false 
      }))
    }
    updateTime()
    const interval = setInterval(updateTime, 1000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center relative overflow-hidden bg-[#0A0A0A]"
    >
      {/* Background Glows */}
      <div className="absolute top-[-10%] right-[-10%] w-[500px] h-[500px] bg-[#E87E53]/10 blur-[120px] rounded-full" />
      <div className="absolute bottom-[-10%] left-[-10%] w-[400px] h-[400px] bg-[#E87E53]/5 blur-[100px] rounded-full" />
      
      <div className="max-w-7xl mx-auto px-6 py-32 relative z-10 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="mb-8"
            >
              <span className="inline-flex items-center gap-2 px-3 py-1 border border-white/10 bg-white/5 backdrop-blur-sm text-white/60 text-[10px] font-mono tracking-[0.2em] uppercase rounded-full">
                <span className="w-1 h-1 rounded-full bg-[#E87E53] animate-pulse" />
                Available for AI Internships
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="font-display text-6xl md:text-8xl font-medium tracking-tight leading-[0.95] mb-10"
            >
              <span className="gradient-text">Charan Sai</span><br />
              <span className="text-white/40">Ponnada</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="text-lg md:text-xl text-white/50 leading-relaxed mb-10 max-w-md font-light"
            >
              AI Engineer specializing in <span className="text-white">RAG Systems</span>, 
              <span className="text-white"> LLM Evaluation</span>, and 
              <span className="text-white"> Computer Vision</span>.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex items-center gap-6 text-[10px] text-white/30 font-mono tracking-widest uppercase mb-12"
            >
              <div className="flex items-center gap-2">
                <span className="w-1 h-1 bg-white/20 rounded-full" />
                <span>{time} IST</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-1 h-1 bg-white/20 rounded-full" />
                <span>Kakinada, India</span>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-wrap gap-4"
            >
              <a
                href="#projects"
                className="group relative flex items-center gap-2 px-8 py-4 bg-white text-black font-medium text-sm rounded-full overflow-hidden transition-all hover:pr-10"
              >
                <span className="relative z-10">Explore Research</span>
                <div className="absolute right-4 opacity-0 group-hover:opacity-100 transition-all">→</div>
              </a>
              <a
                href="https://github.com/charansaiponnada"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-8 py-4 bg-white/5 border border-white/10 text-white font-medium text-sm rounded-full hover:bg-white/10 transition-all"
              >
                <GithubLogo size={20} />
                <span>GitHub</span>
              </a>
              <a
                href="https://linkedin.com/in/charansaiponnada"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-8 py-4 bg-white/5 border border-white/10 text-white font-medium text-sm rounded-full hover:bg-white/10 transition-all"
              >
                <LinkedinLogo size={20} />
                <span>LinkedIn</span>
              </a>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="hidden lg:block relative"
          >
            <div className="absolute -inset-10 bg-[#E87E53]/5 blur-[80px] rounded-full opacity-50" />
            <div className="relative z-10 scale-110 translate-x-12">
              <CodeWindow />
            </div>
          </motion.div>
        </div>
      </div>
      
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4"
      >
        <span className="text-white/20 text-[10px] font-mono tracking-[0.3em] uppercase">Scroll</span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-white/20 to-transparent" />
      </motion.div>
    </section>
  )
}