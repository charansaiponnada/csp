'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

export default function Experience() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="experience" className="py-24 bg-white relative">
      <div className="absolute top-0 right-0 w-[30%] h-full bg-[#F5F5F7]" />
      
      <div className="max-w-5xl mx-auto px-6 relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="mb-12"
        >
          <span className="text-[#A1A1A6] font-mono text-xs tracking-[0.2em] uppercase">Experience</span>
          <h2 className="font-display text-3xl md:text-4xl mt-3 text-[#1D1D1F]">
            Where I&apos;ve Worked
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-12 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-4"
          >
            <div className="sticky top-32">
              <div className="bg-[#1D1D1F] text-white p-6 rounded-2xl">
                <p className="text-xs text-[#6E6E73] font-mono tracking-widest uppercase mb-4">Current Role</p>
                <p className="font-display text-xl mb-1">AI Engineer Intern</p>
                <p className="text-[#A1A1A6] text-sm mb-6">Aynstyn Technologies</p>
                <div className="w-8 h-px bg-[#007AFF] mb-4" />
                <p className="text-xs text-[#6E6E73] font-mono mb-1">Period</p>
                <p className="text-sm">Jan 2026 — Present</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-8"
          >
            <p className="text-lg text-[#6E6E73] leading-relaxed mb-8">
              Building and deploying LLM-powered systems. Not just getting them to work — making them trustworthy. Working on pipelines, RAG systems, and evaluation frameworks.
            </p>

            <div className="space-y-6">
              {[
                {
                  num: '01',
                  title: 'LLM Pipeline Development',
                  desc: 'Built multi-stage pipelines for document processing and credit analysis.'
                },
                {
                  num: '02', 
                  title: 'Evaluation Infrastructure',
                  desc: 'Created evaluation frameworks across 200+ test cases. Coverage improved by 2x.'
                },
                {
                  num: '03',
                  title: 'RAG System Optimization',
                  desc: 'Reduced hallucination rates. Made outputs consistent across edge cases.'
                }
              ].map((item, i) => (
                <div key={i} className="flex gap-4 group">
                  <div className="flex-shrink-0">
                    <span className="text-[#007AFF] font-mono text-xs">{item.num}</span>
                    <div className="w-px h-full bg-[#D2D2D7] ml-[5px] mt-2 group-hover:bg-[#007AFF] transition-colors" />
                  </div>
                  <div>
                    <h4 className="font-medium text-[#1D1D1F] mb-1">{item.title}</h4>
                    <p className="text-sm text-[#6E6E73]">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 pt-6 border-t border-[#D2D2D7]">
              <p className="text-xs text-[#A1A1A6] font-mono tracking-widest uppercase mb-4">Technologies</p>
              <div className="flex flex-wrap gap-2">
                {['FastAPI', 'LangChain', 'PyTorch', 'RAG', 'LLM Evaluation', 'Python'].map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1.5 bg-[#F5F5F7] text-[#6E6E73] text-xs font-mono rounded-lg border border-[#D2D2D7]"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}