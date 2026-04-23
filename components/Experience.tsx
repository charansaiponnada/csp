'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Briefcase, ArrowUpRight } from '@phosphor-icons/react'

export default function Experience() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="experience" className="py-32 bg-white relative">
      <div className="absolute inset-0 bg-gradient-to-b from-[#F7F5F0] to-white" />
      
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <span className="text-[#C45D35] font-mono text-xs tracking-widest uppercase">Experience</span>
          <h2 className="text-4xl md:text-5xl font-display mt-4 mb-16">
            Where the real work happens
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
          className="bg-[#F7F5F0] rounded-none border border-[#E5E2DB] overflow-hidden max-w-4xl"
        >
          <div className="p-10 md:p-14">
            <div className="flex flex-col md:flex-row md:items-start justify-between gap-6 mb-10">
              <div>
                <div className="flex items-center gap-3 mb-3">
                  <Briefcase size={24} weight="regular" className="text-[#C45D35]" />
                  <h3 className="text-2xl md:text-3xl font-display">AI Engineer Intern</h3>
                </div>
                <p className="text-[#6B6B6B] text-lg">Aynstyn Technologies Pvt. Ltd.</p>
              </div>
              <span className="px-5 py-2 bg-[#EDEAE4] text-[#6B6B6B] font-mono text-sm tracking-wide self-start">
                Jan 2026 — Present
              </span>
            </div>

            <div className="space-y-8 mb-10">
              <p className="text-lg text-[#6B6B6B] leading-relaxed">
                Engineered AI-powered SaaS modules for interview simulation, candidate assessment, and voice evaluation. Then realized the harder problem wasn&apos;t the AI — it was knowing if the AI was actually trustworthy.
              </p>
              
              <div className="space-y-5">
                <div className="flex items-start gap-4">
                  <span className="text-[#C45D35] font-mono text-sm mt-1">01</span>
                  <div>
                    <p className="font-medium text-[#1A1A1A]">Built evaluation infrastructure</p>
                    <p className="text-[#6B6B6B] text-sm">Evaluation pipeline across 200+ test cases. Coverage improved by 2x.</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <span className="text-[#C45D35] font-mono text-sm mt-1">02</span>
                  <div>
                    <p className="font-medium text-[#1A1A1A]">Optimized inference workflows</p>
                    <p className="text-[#6B6B6B] text-sm">Reduced unstable outputs. Made responses consistent across edge cases.</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <span className="text-[#C45D35] font-mono text-sm mt-1">03</span>
                  <div>
                    <p className="font-medium text-[#1A1A1A]">Integrated LLM-powered systems</p>
                    <p className="text-[#6B6B6B] text-sm">Real-time inference supporting concurrent user interactions.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-wrap gap-2 mb-10">
              {['FastAPI', 'LangChain', 'PyTorch', 'RAG', 'LLM Evaluation', 'SaaS'].map((tech) => (
                <span
                  key={tech}
                  className="px-4 py-2 bg-[#EDEAE4] text-[#6B6B6B] text-sm font-mono border border-[#E5E2DB] hover:border-[#C45D35] hover:text-[#C45D35] transition-colors cursor-default"
                >
                  {tech}
                </span>
              ))}
            </div>

            <a
              href="https://linkedin.com/company/aynstyn"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-[#C45D35] hover:text-[#A84D2B] transition-colors font-mono text-sm tracking-wide group"
            >
              Learn more
              <ArrowUpRight size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}