'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { ArrowRight } from '@phosphor-icons/react'

export default function About() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="about" className="py-32 relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 60 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="grid lg:grid-cols-12 gap-16"
        >
          <div className="lg:col-span-5">
            <span className="text-[#C45D35] font-mono text-xs tracking-[0.3em] uppercase">The Story</span>
            
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="mt-8"
            >
              <div className="text-[#9A9A9A] font-mono text-xs tracking-widest mb-6">
                — 01 / About
              </div>
              <h2 className="font-display text-4xl md:text-5xl leading-tight">
                Thinking out loud about AI systems
              </h2>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="mt-12 space-y-6"
            >
              <div className="flex items-start gap-4">
                <span className="text-[#C45D35] font-mono text-xs mt-1">▲</span>
                <p className="text-[#6B6B6B] leading-relaxed font-light">
                  Currently working as an AI Engineer Intern at Aynstyn Technologies, designing and deploying LLM-powered systems. Not just getting them to work — getting them to be trustworthy.
                </p>
              </div>
              
              <div className="flex items-start gap-4">
                <span className="text-[#C45D35] font-mono text-xs mt-1">▲</span>
                <p className="text-[#6B6B6B] leading-relaxed font-light">
                  Bigger isn&apos;t always better. That&apos;s where Small Language Models start to impress. Faster inference, predictable behavior, easier to debug.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="mt-12 pt-8 border-t border-[#E5E2DB]"
            >
              <a
                href="https://linkedin.com/in/charansaiponnada"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 text-[#1A1A1A] hover:text-[#C45D35] transition-colors font-mono text-sm tracking-wide group"
              >
                Read more on LinkedIn
                <ArrowRight 
                  size={16} 
                  className="group-hover:translate-x-1 transition-transform" 
                />
              </a>
              <span className="text-[#E5E2DB] mx-3">—</span>
              <span className="text-xs text-[#9A9A9A] font-mono">1,303 followers</span>
            </motion.div>
          </div>

          <div className="lg:col-span-6 lg:col-start-7">
            <motion.div
              initial={{ opacity: 0, x: 60 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 1, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="relative"
            >
              <div className="bg-[#EDEAE4] p-10 md:p-14 border border-[#E5E2DB]">
                <span className="text-[#C45D35] font-mono text-xs tracking-[0.2em]">&ldquo;</span>
                <p className="font-display text-2xl md:text-3xl leading-snug text-[#1A1A1A] mb-8">
                  In financial applications, a prediction without reasoning is not usable. Explainability is not an add-on; it is a requirement.
                </p>
                <span className="text-[#C45D35] font-mono text-xs tracking-[0.2em]">&rdquo;</span>
                
                <div className="mt-10 pt-8 border-t border-[#E5E2DB]">
                  <p className="text-xs text-[#9A9A9A] font-mono tracking-widest uppercase mb-2">Also worth noting</p>
                  <p className="text-[#6B6B6B] text-sm font-light">
                    Final year at VRSEC. The real learning has been outside the classroom — through internships, hackathons (2nd at YUVAAN 2026), and building things that actually get used.
                  </p>
                </div>
              </div>

              <div className="absolute -bottom-6 -right-6 w-32 h-32 border border-[#C45D35]/20" />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}