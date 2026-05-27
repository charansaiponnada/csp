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
    <section id="experience" className="bg-white relative overflow-hidden border-t border-black/5">
      <div className="grid lg:grid-cols-4 w-full">
        {/* Header Cell */}
        <div className="lg:col-span-1 p-12 border-r border-b border-black/5 flex flex-col justify-between min-h-[400px]">
          <div>
            <span className="text-[#0055FF] font-mono text-[10px] tracking-[0.4em] uppercase mb-4 block">02 / PATH</span>
            <h2 className="font-display text-5xl font-bold tracking-tight uppercase text-black leading-none">PROFESSIONAL<br/>TIMELINE</h2>
          </div>
          <p className="text-black/30 text-xs font-light leading-relaxed max-w-[200px]">
            A documented path of systems engineering and research publications.
          </p>
        </div>

        {/* Experience Grid */}
        <div className="lg:col-span-3 grid md:grid-cols-2">
          {[...experiences, ...research].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: i * 0.1 }}
              className="p-12 border-r border-b border-black/5 hover:bg-black/[0.02] transition-all group"
            >
              <div className="flex justify-between items-start mb-8">
                <div>
                  <h4 className="text-2xl font-bold text-black mb-2 uppercase leading-tight group-hover:text-[#0055FF] transition-colors">
                    {'role' in item ? (item as any).role : (item as any).title}
                  </h4>
                  <p className="text-[#0055FF] font-mono text-[10px] uppercase tracking-widest">
                    {'company' in item ? (item as any).company : (item as any).venue}
                  </p>
                </div>
                <span className="text-black/20 font-mono text-[9px] uppercase tracking-tighter">
                  {'period' in item ? (item as any).period : '2025'}
                </span>
              </div>
              
              <ul className="space-y-4">
                {item.highlights.map((h, j) => (
                  <li key={j} className="flex gap-4 text-xs text-black/40 leading-relaxed font-light">
                    <span className="text-[#0055FF] font-mono">0{j+1}</span>
                    <span>{h}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}