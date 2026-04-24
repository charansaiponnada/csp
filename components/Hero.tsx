'use client'

import { motion } from 'framer-motion'
import { GithubLogo, LinkedinLogo, Envelope } from '@phosphor-icons/react'
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
      className="min-h-screen flex items-center relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-[#FAFAFA]" />
      
      <div className="max-w-5xl mx-auto px-6 py-32 relative z-10 w-full">
        <div className="grid lg:grid-cols-5 gap-12 items-center">
          <div className="lg:col-span-3">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="mb-6"
            >
              <span className="inline-flex items-center gap-2 px-3 py-1.5 bg-[#007AFF]/10 text-[#007AFF] text-xs font-mono rounded-full">
                <span className="w-1.5 h-1.5 rounded-full bg-[#007AFF] animate-pulse" />
                Open to Internships
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="font-display text-5xl md:text-6xl lg:text-7xl font-normal leading-[1.15] mb-6 text-[#1D1D1F]"
            >
              Charan Sai<br />
              <span className="text-[#007AFF]">Ponnada</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="text-lg md:text-xl text-[#6E6E73] leading-relaxed mb-8 max-w-lg"
            >
              AI Engineer building real-world ML systems.<br />
              <span className="text-[#A1A1A6]">Computer Vision, Multimodal Systems, Assistive AI</span>
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex items-center gap-4 text-sm text-[#A1A1A6] font-mono mb-10"
            >
              <span>{time} IST</span>
              <span className="w-1 h-1 bg-[#D2D2D7] rounded-full" />
              <span>India</span>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex gap-3"
            >
              <a
                href="#projects"
                className="flex items-center gap-2 px-5 py-2.5 bg-[#007AFF] text-white font-mono text-sm rounded-lg hover:bg-[#0066D9] transition-colors"
              >
                View Work
              </a>
              <a
                href="https://github.com/charansaiponnada"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-5 py-2.5 border border-[#D2D2D7] text-[#1D1D1F] font-mono text-sm rounded-lg hover:border-[#007AFF] hover:text-[#007AFF] transition-colors"
              >
                <GithubLogo size={16} />
                GitHub
              </a>
              <a
                href="https://linkedin.com/in/charansaiponnada"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-5 py-2.5 border border-[#D2D2D7] text-[#1D1D1F] font-mono text-sm rounded-lg hover:border-[#007AFF] hover:text-[#007AFF] transition-colors"
              >
                <LinkedinLogo size={16} />
              </a>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="lg:col-span-2 hidden lg:block"
          >
            <div className="relative">
              <div className="absolute -inset-4 bg-[#007AFF]/5 rounded-2xl" />
              <CodeWindow />
            </div>
          </motion.div>
        </div>
      </div>
      
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-[#A1A1A6] text-xs font-mono tracking-widest"
      >
        scroll
      </motion.div>
    </section>
  )
}