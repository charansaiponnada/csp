'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

const experiences = [
  {
    role: 'AI Engineer Intern',
    company: 'Aynstyn Technologies Pvt. Ltd.',
    period: 'Jan 2026 – Present',
    description: 'Engineering AI-powered SaaS modules for interview simulation and candidate assessment. Building high-stakes evaluation infrastructure for LLM reliability.',
    highlights: [
      'Engineered SaaS modules for voice evaluation supporting 3+ production workflows.',
      'Built LLM evaluation pipeline validating performance across 200+ structured test cases.',
      'Optimized prompt architectures reducing unstable outputs and improving consistency.',
      'Integrated LLM components into scalable infrastructure for real-time inference.'
    ],
    tech: ['FastAPI', 'LangChain', 'PyTorch', 'LLM Eval', 'RAG']
  }
]

const research = [
  {
    title: 'Vision-Language Assistive Navigation System',
    venue: 'Primary Author — ISAECT 2025',
    description: 'Multimodal assistive navigation system using BLIP for scene understanding in complex traffic environments.',
    highlights: [
      'Fine-tuned BLIP via 3-stage LoRA training on 427-scene Indian traffic dataset.',
      'Achieved +15.6% improvement across BLEU, METEOR, and semantic similarity.',
      'Developed full ML pipeline from dataset design to model release.',
      'Published on HuggingFace and GitHub.'
    ],
    tech: ['BLIP', 'LoRA', 'Computer Vision', 'PyTorch']
  }
]

export default function Experience() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="experience" className="py-32 bg-[#0A0A0A] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="mb-24"
        >
          <span className="text-[#E87E53] font-mono text-[10px] tracking-[0.4em] uppercase mb-4 block">01 / Career Path</span>
          <h2 className="font-display text-5xl md:text-7xl font-medium tracking-tight">Experience <span className="text-white/20">&</span> Research</h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Experience Column */}
          <div className="space-y-12">
            <h3 className="text-white/30 font-mono text-[10px] tracking-widest uppercase mb-8">Professional</h3>
            {experiences.map((exp, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.2 + i * 0.1 }}
                className="glass p-8 rounded-3xl group hover:border-white/20 transition-all"
              >
                <div className="flex justify-between items-start mb-6">
                  <div>
                    <h4 className="text-2xl font-medium mb-1">{exp.role}</h4>
                    <p className="text-[#E87E53] font-mono text-xs">{exp.company}</p>
                  </div>
                  <span className="text-white/30 font-mono text-[10px] uppercase tracking-tighter">{exp.period}</span>
                </div>
                <p className="text-white/50 text-sm mb-8 leading-relaxed font-light">{exp.description}</p>
                <ul className="space-y-4 mb-8">
                  {exp.highlights.map((h, j) => (
                    <li key={j} className="flex gap-4 text-xs text-white/40 leading-relaxed font-light">
                      <span className="text-[#E87E53] font-mono">0{j+1}</span>
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>
                <div className="flex flex-wrap gap-2">
                  {exp.tech.map((t) => (
                    <span key={t} className="px-3 py-1 bg-white/5 border border-white/5 text-[10px] font-mono text-white/40 rounded-full group-hover:border-white/10 transition-all">{t}</span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Research Column */}
          <div className="space-y-12">
            <h3 className="text-white/30 font-mono text-[10px] tracking-widest uppercase mb-8">Academic</h3>
            {research.map((res, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.3 + i * 0.1 }}
                className="glass p-8 rounded-3xl group hover:border-white/20 transition-all"
              >
                <div className="flex justify-between items-start mb-6">
                  <div>
                    <h4 className="text-2xl font-medium mb-1">{res.title}</h4>
                    <p className="text-[#E87E53] font-mono text-xs">{res.venue}</p>
                  </div>
                </div>
                <p className="text-white/50 text-sm mb-8 leading-relaxed font-light">{res.description}</p>
                <ul className="space-y-4 mb-8">
                  {res.highlights.map((h, j) => (
                    <li key={j} className="flex gap-4 text-xs text-white/40 leading-relaxed font-light">
                      <span className="text-[#E87E53] font-mono">0{j+1}</span>
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>
                <div className="flex flex-wrap gap-2">
                  {res.tech.map((t) => (
                    <span key={t} className="px-3 py-1 bg-white/5 border border-white/5 text-[10px] font-mono text-white/40 rounded-full group-hover:border-white/10 transition-all">{t}</span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}