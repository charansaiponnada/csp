'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Briefcase, ArrowSquareOut } from '@phosphor-icons/react'

export default function Experience() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="experience" className="py-32 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="text-[#2563EB] font-mono text-sm tracking-wider uppercase">Experience</span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-12">
            Where the real work happens
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-[#FAFAF9] rounded-3xl border border-[#E4E4E7] overflow-hidden"
        >
          <div className="p-8 md:p-12">
            <div className="flex items-start justify-between flex-wrap gap-4 mb-6">
              <div>
                <div className="flex items-center gap-3 mb-2">
                  <Briefcase size={28} weight="duotone" className="text-[#2563EB]" />
                  <h3 className="text-2xl font-bold">AI Engineer Intern</h3>
                </div>
                <p className="text-[#2563EB] text-lg">Aynstyn Technologies Pvt. Ltd.</p>
              </div>
              <span className="px-4 py-2 bg-[#059669]/10 text-[#059669] font-mono text-sm rounded-full">
                Jan 2026 — Present
              </span>
            </div>

            <div className="space-y-6 mb-8">
              <p className="text-lg text-[#71717A] leading-relaxed">
                Engineered AI-powered SaaS modules for interview simulation, candidate assessment, and voice evaluation. Then realized the harder problem wasn&apos;t the AI — it was knowing if the AI was actually trustworthy.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <span className="text-[#059669] font-semibold mt-1">→</span>
                  <div>
                    <p className="font-medium">Built evaluation infrastructure</p>
                    <p className="text-[#71717A] text-sm">Evaluation pipeline across 200+ test cases. Coverage improved by 2x.</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <span className="text-[#059669] font-semibold mt-1">→</span>
                  <div>
                    <p className="font-medium">Optimized inference workflows</p>
                    <p className="text-[#71717A] text-sm">Reduced unstable outputs. Made responses consistent across edge cases.</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <span className="text-[#059669] font-semibold mt-1">→</span>
                  <div>
                    <p className="font-medium">Integrated LLM-powered systems</p>
                    <p className="text-[#71717A] text-sm">Real-time inference supporting concurrent user interactions.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-wrap gap-2 mb-6">
              {['FastAPI', 'LangChain', 'PyTorch', 'RAG', 'LLM Evaluation', 'SaaS'].map((tech) => (
                <span
                  key={tech}
                  className="px-4 py-2 bg-[#F4F4F5] text-[#71717A] text-sm font-mono rounded-full hover:bg-[#2563EB] hover:text-white transition-colors"
                >
                  {tech}
                </span>
              ))}
            </div>

            <a
              href="https://linkedin.com/company/aynstyn"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-[#2563EB] hover:text-[#1D4ED8] transition-colors"
            >
              Learn more about Aynstyn
              <ArrowSquareOut size={16} />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}