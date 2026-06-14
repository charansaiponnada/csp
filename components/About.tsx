'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { ArrowRight } from '@phosphor-icons/react'

export default function About() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="about" className="py-32 relative overflow-hidden bg-dribbble-canvas border-t border-white/5">
      <div className="max-w-[1400px] mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="grid lg:grid-cols-12 gap-16 lg:gap-24 items-start"
        >
          <div className="lg:col-span-5 sticky top-32">
            <span className="text-dribbble-accent font-mono text-[10px] tracking-[0.4em] uppercase">01 // THE PHILOSOPHY</span>
            
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="mt-12"
            >
              <h2 className="font-display text-5xl md:text-7xl font-black leading-[0.9] tracking-tighter text-white uppercase">
                Take it <span className="text-outline-accent">Apart.</span> <br />
                Rebuild it <span className="text-white">Better.</span>
              </h2>
            </motion.div>

            <div className="mt-16 flex flex-col gap-6">
              <div className="flex items-center gap-4">
                <div className="w-2 h-2 rounded-full bg-dribbble-accent" />
                <span className="font-mono text-[10px] font-bold uppercase tracking-[0.2em] text-white/40">Operational Logic: Persistence</span>
              </div>
              <p className="font-sans text-xl text-dribbble-muted leading-relaxed font-medium max-w-md">
                I don't just use systems; I disassemble them. I need to know exactly why things break before I can build them into something unbreakable.
              </p>
            </div>
          </div>

          <div className="lg:col-span-7 pt-12 lg:pt-32">
            <div className="grid gap-24">
              
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="group"
              >
                <div className="font-mono text-[10px] text-dribbble-accent mb-6 uppercase tracking-[0.3em]">Current Trajectory</div>
                <p className="font-display text-2xl md:text-4xl font-bold text-white leading-snug uppercase tracking-tight">
                  Final-year AI & Data Science student at VRSEC, currently architecting production AI systems at <span className="text-dribbble-accent">Aynstyn Technologies</span>.
                </p>
                <div className="mt-8 flex items-center gap-4 text-white/20 font-mono text-[10px] uppercase tracking-[0.2em]">
                  <span>PPO Received</span>
                  <div className="w-1 h-1 bg-white/20 rounded-full" />
                  <span>AI Engineer</span>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="grid md:grid-cols-2 gap-12"
              >
                <div>
                  <div className="font-mono text-[10px] text-dribbble-accent mb-4 uppercase tracking-[0.3em]">Benchmark 01</div>
                  <h4 className="font-display text-xl font-black text-white uppercase mb-4">IIT Hyderabad YUVAAN</h4>
                  <p className="font-sans text-sm text-dribbble-muted leading-relaxed font-medium">
                    Placed 2nd in the 2026 hackathon, building high-stakes credit intelligence systems under extreme pressure.
                  </p>
                </div>
                <div>
                  <div className="font-mono text-[10px] text-dribbble-accent mb-4 uppercase tracking-[0.3em]">Benchmark 02</div>
                  <h4 className="font-display text-xl font-black text-white uppercase mb-4">Published Research</h4>
                  <h4 className="font-display text-xl font-black text-white uppercase mb-4">Published Research</h4>
                  <p className="font-sans text-sm text-dribbble-muted leading-relaxed font-medium">
                    Primary author of a published paper on vision-language models for assistive navigation. 
                  </p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.5 }}
                className="p-12 border border-white/5 bg-white/[0.02] rounded-3xl relative overflow-hidden group"
              >
                <div className="absolute top-0 right-0 p-8 font-mono text-[60px] text-white/[0.03] select-none leading-none">
                  SYS
                </div>
                <p className="font-display text-2xl font-bold text-white uppercase tracking-tight leading-tight relative z-10">
                  I go all the way when something matters. Persistent. Precise. <span className="text-dribbble-accent">Absolute.</span>
                </p>
              </motion.div>

            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}