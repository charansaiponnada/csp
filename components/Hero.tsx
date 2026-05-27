'use client'

import { motion } from 'framer-motion'
import { GithubLogo, LinkedinLogo, ArrowRight } from '@phosphor-icons/react'
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
      className="min-h-screen flex items-center relative overflow-hidden bg-white pt-20"
    >
      {/* Background Subtle Glows */}
      <div className="absolute top-[-10%] right-[-10%] w-[600px] h-[600px] bg-[#0055FF]/5 blur-[120px] rounded-full" />
      <div className="absolute bottom-[-10%] left-[-10%] w-[500px] h-[500px] bg-[#0055FF]/5 blur-[100px] rounded-full" />

      <div className="max-w-7xl mx-auto px-6 relative z-10 w-full flex flex-col items-center text-center">
        {/* Visible Grid Frame */}
        <div className="absolute inset-0 grid-bg opacity-30 -z-10" />
        
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="mb-12 border border-black/10 px-6 py-2 rounded-full bg-white/40 backdrop-blur-xl"
        >
          <span className="flex items-center gap-3 text-[#0055FF] text-[9px] font-mono tracking-[0.4em] uppercase">
            <span className="relative flex h-1.5 w-1.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#0055FF] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-[#0055FF]"></span>
            </span>
            Available for New Opportunities
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="font-display text-5xl md:text-8xl lg:text-9xl font-bold tracking-tighter leading-[0.9] mb-12 uppercase"
        >
          <span className="text-black">Engineer</span><br />
          <span className="text-black/20">Designer</span><br />
          <span className="text-black/40">Researcher</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="text-lg md:text-xl text-black/50 leading-relaxed mb-16 max-w-2xl font-light"
        >
          A polymath explorer building at the intersection of <span className="text-black font-medium">Artificial Intelligence</span>, 
          <span className="text-black"> Visual Design</span>, and 
          <span className="text-black"> Human Psychology</span>. From high-stakes RAG systems to cinematic storytelling.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="flex flex-col sm:flex-row gap-6 items-center mb-24"
        >
          <a
            href="mailto:charansaiponnada06@gmail.com"
            className="group relative flex items-center gap-3 px-12 py-5 bg-black text-white font-bold text-[10px] tracking-[0.2em] uppercase rounded-full overflow-hidden transition-all hover:scale-105 active:scale-95 w-full sm:w-auto justify-center"
          >
            <span className="relative z-10">Start Collaboration</span>
            <ArrowRight size={14} className="relative z-10 group-hover:translate-x-1 transition-transform" />
            <div className="absolute inset-0 bg-[#0055FF] translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
          </a>

          <a
            href="#highlights"
            className="group flex items-center gap-3 px-12 py-5 border border-black/10 hover:border-black/20 text-black font-bold text-[10px] tracking-[0.2em] uppercase rounded-full transition-all hover:bg-black/5 w-full sm:w-auto justify-center"
          >
            View Projects
          </a>
        </motion.div>

        {/* Impact Strip - Hackculture Style */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="w-full grid grid-cols-2 md:grid-cols-4 border-t border-b border-black/5 bg-black/[0.02]"
        >
          {[
            { label: 'Annual Reports', value: '500+', unit: 'Analyzed' },
            { label: 'Hackathon Rank', value: '2nd', unit: 'YUVAAN 26' },
            { label: 'Network', value: '1,303+', unit: 'Followers' },
            { label: 'Research', value: 'Author', unit: 'ISAECT 25' }
          ].map((stat, i) => (
            <div key={i} className="p-8 border-r border-black/5 flex flex-col items-center justify-center gap-1">
              <span className="text-black text-3xl md:text-4xl font-bold tracking-tighter uppercase">{stat.value}</span>
              <span className="text-[#0055FF] text-[9px] font-mono uppercase tracking-widest">{stat.label}</span>
              <span className="text-black/20 text-[8px] font-mono uppercase tracking-tighter">{stat.unit}</span>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Personal Metadata Footer */}
      <div className="absolute bottom-12 left-0 w-full px-6 flex justify-between items-end border-t border-black/5 pt-8 max-w-7xl mx-auto left-1/2 -translate-x-1/2">
        <div className="flex gap-12 text-[10px] text-black/20 font-mono tracking-widest uppercase">
          <div className="flex flex-col gap-2">
            <span className="text-black/10">Based In</span>
            <span className="text-black/40">Kakinada, IN</span>
          </div>
          <div className="flex flex-col gap-2">
            <span className="text-black/10">Local Time</span>
            <span className="text-black/40">{time} IST</span>
          </div>
          <div className="flex flex-col gap-2">
            <span className="text-black/10">Focus</span>
            <span className="text-black/40">Intelligence Systems</span>
          </div>
        </div>

        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="flex flex-col items-center gap-4"
        >
          <span className="text-black/10 text-[9px] font-mono tracking-[0.5em] uppercase">Scroll</span>
          <div className="w-[1px] h-16 bg-gradient-to-b from-black/20 via-black/10 to-transparent" />
        </motion.div>
      </div>
    </section>
  )
}