'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { ArrowRight } from '@phosphor-icons/react'

export default function About() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="about" className="py-32 relative overflow-hidden bg-[#000000]">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 60 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="grid lg:grid-cols-12 gap-16"
        >
          <div className="lg:col-span-5">
            <span className="text-[#00D1FF] font-mono text-[10px] tracking-[0.4em] uppercase">00 / The Explorer</span>
            
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="mt-8"
            >
              <h2 className="font-display text-4xl md:text-6xl font-medium leading-[1.1] tracking-tight text-white">
                Everything is an <span className="text-white/20">experiment</span>
              </h2>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="mt-12 space-y-8"
            >
              <div className="flex items-start gap-4">
                <span className="text-[#00D1FF] font-mono text-xs mt-1">▲</span>
                <p className="text-white/50 leading-relaxed font-light text-lg">
                  I don&apos;t just code systems; I design experiences. As a Graphic Designer and Video Editor, I understand that the bridge between technology and humans is built with visuals and storytelling.
                </p>
              </div>
              
              <div className="flex items-start gap-4">
                <span className="text-[#00D1FF] font-mono text-xs mt-1">▲</span>
                <p className="text-white/50 leading-relaxed font-light text-lg">
                  My deep dive into Human Psychology and Sales isn&apos;t a detour — it&apos;s the edge. I build AI that resonates because I understand the people who use it.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="mt-16 pt-8 border-t border-white/5"
            >
              <div className="flex flex-col gap-4">
                <p className="text-[10px] text-white/20 font-mono uppercase tracking-[0.3em]">Operational Fields</p>
                <div className="flex flex-wrap gap-4 text-[10px] text-[#00D1FF] font-mono uppercase tracking-widest">
                  <span>AI Engineering</span>
                  <span className="text-white/10">/</span>
                  <span>Graphic Design</span>
                  <span className="text-white/10">/</span>
                  <span>Research</span>
                  <span className="text-white/10">/</span>
                  <span>Psychology</span>
                </div>
              </div>
            </motion.div>
          </div>

          <div className="lg:col-span-6 lg:col-start-7">
            <motion.div
              initial={{ opacity: 0, x: 60 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 1, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="relative"
            >
              <div className="glass p-12 md:p-16 rounded-[3rem] border border-white/5 relative overflow-hidden group">
                <div className="absolute top-0 right-0 p-8">
                  <span className="text-[#00D1FF]/20 font-mono text-6xl tracking-[0.2em] select-none">&ldquo;</span>
                </div>
                
                <p className="font-display text-2xl md:text-3xl leading-snug text-white/80 mb-12 relative z-10">
                  I am a conversationalist by nature and an engineer by trade. I believe the most powerful technology is the one that speaks the human language fluently.
                </p>
                
                <div className="mt-10 pt-10 border-t border-white/5">
                  <p className="text-[#00D1FF] font-mono text-[10px] tracking-widest uppercase mb-4">Unconventional Path</p>
                  <p className="text-white/40 text-sm font-light leading-relaxed">
                    I explore everything worth trying. Whether it&apos;s closing a sale, editing a cinematic sequence, or optimizing a RAG pipeline, I bring the same intensity to every discipline.
                  </p>
                </div>
              </div>

              <div className="absolute -bottom-6 -right-6 w-32 h-32 border border-[#00D1FF]/10 rounded-[3rem] -z-10" />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}