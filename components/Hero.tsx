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
      className="min-h-screen flex items-center relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-[#F7F5F0]" />
      
      <div className="max-w-6xl mx-auto px-6 py-32 relative z-10 w-full">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="mb-6"
            >
              <span className="inline-flex items-center gap-2 px-3 py-1.5 bg-[#1A1A1A] text-white text-xs font-mono tracking-wider">
                <span className="w-1.5 h-1.5 rounded-full bg-[#C45D35] animate-pulse" />
                Available for work
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 60 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="font-display text-5xl md:text-7xl lg:text-8xl font-normal leading-[1.1] mb-8"
            >
              Hello, I&apos;m<br />
              <span className="gradient-text">Charan Sai</span>
              <br />
              <span className="text-[#C45D35]">Ponnada</span> 
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="text-xl md:text-2xl text-[#6B6B6B] leading-relaxed mb-8 max-w-lg"
            >
              Building AI systems that don&apos;t just work, but make sense.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex items-center gap-4 text-sm text-[#9A9A9A] font-mono mb-10"
            >
              <span>{time} IST</span>
              <span className="w-1 h-1 bg-[#E5E2DB] rounded-full" />
              <span>Kakinada, India</span>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex gap-4"
            >
              <a
                href="#projects"
                className="flex items-center gap-2 px-5 py-3 bg-[#1A1A1A] text-white font-mono text-sm hover:bg-[#1A1A1A]/90 transition-colors"
              >
                View Work
              </a>
              <a
                href="https://github.com/charansaiponnada"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-5 py-3 border border-[#E5E2DB] text-[#1A1A1A] font-mono text-sm hover:border-[#C45D35] transition-colors"
              >
                <GithubLogo size={18} />
                github
              </a>
              <a
                href="https://linkedin.com/in/charansaiponnada"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-5 py-3 border border-[#E5E2DB] text-[#1A1A1A] font-mono text-sm hover:border-[#C45D35] transition-colors"
              >
                <LinkedinLogo size={18} />
                linkedin
              </a>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="hidden lg:block"
          >
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-br from-[#C45D35]/10 to-transparent rounded-3xl" />
              <CodeWindow />
            </div>
          </motion.div>
        </div>
      </div>
      
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-[#9A9A9A] text-xs font-mono tracking-widest"
      >
        scroll
      </motion.div>
    </section>
  )
}