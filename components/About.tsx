'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { ArrowRight } from '@phosphor-icons/react'

export default function About() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="about" className="py-24 bg-white relative">
      <div className="max-w-5xl mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="grid lg:grid-cols-12 gap-12"
        >
          <div className="lg:col-span-5">
            <span className="text-[#007AFF] font-mono text-xs tracking-[0.2em] uppercase">About</span>
            
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="mt-6"
            >
              <h2 className="font-display text-3xl md:text-4xl leading-tight text-[#1D1D1F]">
                Building AI systems that actually work.
              </h2>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="mt-8 space-y-5"
            >
              <p className="text-[#6E6E73] leading-relaxed">
                I'm building AI systems that solve real problems. Currently working on LLM pipelines and evaluation at Aynstyn Technologies — making AI trustworthy, not just accurate.
              </p>
              
              <p className="text-[#6E6E73] leading-relaxed">
                What I focus on: multimodal systems that bridge vision and language, assistive AI for accessibility, and real-time ML pipelines that don't break in production.
              </p>
              
              <p className="text-[#6E6E73] leading-relaxed">
                The system has to actually work. That's what draws me to this — I care about building things that have real impact, not just impressive demos.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="mt-10"
            >
              <a
                href="https://linkedin.com/in/charansaiponnada"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-[#007AFF] hover:text-[#0066D9] transition-colors font-mono text-sm"
              >
                More on LinkedIn
                <ArrowRight size={14} className="transition-transform" />
              </a>
            </motion.div>
          </div>

          <div className="lg:col-span-6 lg:col-start-7">
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="bg-[#F5F5F7] p-8 rounded-2xl border border-[#D2D2D7]"
            >
              <p className="text-2xl text-[#1D1D1F] leading-relaxed font-display">
                "In financial applications, a prediction without reasoning is not usable. Explainability is not an add-on; it is a requirement."
              </p>
              
              <div className="mt-8 pt-6 border-t border-[#D2D2D7]">
                <p className="text-xs text-[#A1A1A6] font-mono tracking-widest uppercase mb-2">Current</p>
                <p className="text-[#6E6E73]">
                  Final year B.Tech CSE at VRSEC. AI Engineer Intern at Aynstyn Technologies. Building LLM pipelines, RAG systems, and evaluation frameworks.
                </p>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}