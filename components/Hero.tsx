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
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-[60%] h-full bg-gradient-to-l from-[#EDEAE4]/50 to-transparent" />
        <div className="absolute bottom-0 left-0 w-[40%] h-[60%] bg-gradient-to-t from-[#C45D35]/[0.02] to-transparent" />
      </div>
      
      <div className="max-w-6xl mx-auto px-6 py-32 relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, y: 60 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="mb-8 flex items-center gap-4">
                <span className="text-[#9A9A9A] font-mono text-xs tracking-widest uppercase">
                  Available for work
                </span>
                <span className="w-2 h-2 rounded-full bg-[#C45D35] animate-pulse" />
              </div>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 80 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="font-display text-6xl md:text-7xl lg:text-[5.5rem] xl:text-[7rem] font-normal leading-[1] tracking-tight mb-8"
            >
              Charan
              <br />
              <span className="gradient-text italic">Sai</span>
              <br />
              <span className="text-[#9A9A9A]">Ponnada</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 60 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="text-xl md:text-2xl text-[#6B6B6B] max-w-xl mb-6 leading-relaxed font-light"
            >
              AI systems that don&apos;t just work,
              <br />
              but make sense.
            </motion.p>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="flex items-center gap-3 text-[#9A9A9A] font-mono text-sm tracking-wide mb-10"
            >
              <span>{time}</span>
              <span className="w-px h-3 bg-[#E5E2DB]" />
              <span>IST</span>
              <span className="w-px h-3 bg-[#E5E2DB]" />
              <span>Kakinada, India</span>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-wrap gap-4"
            >
              <a
                href="https://github.com/charansaiponnada"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-3 px-6 py-4 bg-[#1A1A1A] text-white font-mono text-sm tracking-wide hover:bg-[#1A1A1A]/85 transition-all"
              >
                <GithubLogo size={18} />
                <span>github</span>
                <svg className="w-4 h-4 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M7 17L17 7M17 7H7M17 7V17"/>
                </svg>
              </a>
              <a
                href="https://linkedin.com/in/charansaiponnada"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-3 px-6 py-4 border border-[#E5E2DB] text-[#1A1A1A] font-mono text-sm tracking-wide hover:border-[#C45D35] hover:text-[#C45D35] transition-all"
              >
                <LinkedinLogo size={18} />
                <span>linkedin</span>
              </a>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.2, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 hidden lg:block"
          >
            <CodeWindow />
          </motion.div>
        </div>
      </div>
      
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="text-[#9A9A9A] font-mono text-xs tracking-widest"
        >
          scroll
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.6 }}
          className="w-[1px] h-12 bg-gradient-to-b from-[#E5E2DB] to-transparent"
        />
      </div>
    </section>
  )
}