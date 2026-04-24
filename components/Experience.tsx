'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Briefcase } from '@phosphor-icons/react'

export default function Experience() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="experience" className="py-32 bg-white relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[30%] h-full bg-[#F7F5F0]" />
      
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 60 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="mb-20"
        >
          <div className="flex items-center gap-4 mb-4">
            <span className="text-[#9A9A9A] font-mono text-xs tracking-[0.3em] uppercase">— 02 / Experience</span>
          </div>
          <h2 className="font-display text-4xl md:text-5xl">
            Where the real work happens
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-12 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-4"
          >
            <div className="sticky top-32">
              <div className="bg-[#1A1A1A] text-white p-8">
                <p className="font-mono text-xs text-[#6B6B6B] tracking-widest uppercase mb-6">Current Role</p>
                <p className="font-display text-2xl mb-2">AI Engineer Intern</p>
                <p className="text-[#9A9A9A] text-sm mb-6">Aynstyn Technologies</p>
                <div className="w-8 h-[1px] bg-[#C45D35] mb-6" />
                <p className="font-mono text-xs text-[#6B6B6B] mb-2">Period</p>
                <p className="text-sm">Jan 2026 — Present</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 60 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-8"
          >
            <div className="space-y-12">
              <p className="text-xl text-[#6B6B6B] leading-relaxed font-light">
                Engineered AI-powered SaaS modules for interview simulation, candidate assessment, and voice evaluation. Then realized the harder problem wasn&apos;t the AI — it was knowing if the AI was actually trustworthy.
              </p>

              <div className="space-y-8">
                {[
                  {
                    num: '01',
                    title: 'Built evaluation infrastructure',
                    desc: 'Evaluation pipeline across 200+ test cases. Coverage improved by 2x.'
                  },
                  {
                    num: '02', 
                    title: 'Optimized inference workflows',
                    desc: 'Reduced unstable outputs. Made responses consistent across edge cases.'
                  },
                  {
                    num: '03',
                    title: 'Integrated LLM-powered systems',
                    desc: 'Real-time inference supporting concurrent user interactions.'
                  }
                ].map((item, i) => (
                  <div key={i} className="flex gap-6 group">
                    <div className="flex-shrink-0">
                      <span className="text-[#C45D35] font-mono text-xs">{item.num}</span>
                      <div className="w-[1px] h-full bg-[#E5E2DB] ml-[5px] mt-2 group-hover:bg-[#C45D35] transition-colors" />
                    </div>
                    <div>
                      <h4 className="font-medium text-[#1A1A1A] mb-1">{item.title}</h4>
                      <p className="text-sm text-[#6B6B6B]">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="pt-8 border-t border-[#E5E2DB]">
                <p className="text-xs font-mono text-[#9A9A9A] tracking-widest uppercase mb-4">Technologies</p>
                <div className="flex flex-wrap gap-2">
                  {['FastAPI', 'LangChain', 'PyTorch', 'RAG', 'LLM Evaluation', 'SaaS'].map((tech) => (
                    <span
                      key={tech}
                      className="px-4 py-2 bg-[#F7F5F0] text-[#6B6B6B] text-sm font-mono border border-[#E5E2DB] hover:border-[#C45D35] hover:text-[#C45D35] transition-colors"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}