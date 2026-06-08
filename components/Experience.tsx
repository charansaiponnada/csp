'use client'

import { motion } from 'framer-motion'

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
  return (
    <section id="experience" className="bg-white relative border-b border-black/5 max-w-7xl mx-auto">
      <div className="grid lg:grid-cols-12 w-full border-l border-black/5">
        {/* Section Header */}
        <div className="lg:col-span-4 p-8 md:p-12 border-r border-b border-black/5 flex flex-col min-h-[400px]">
          <span className="text-[#0055FF] font-mono text-[9px] tracking-[0.4em] uppercase mb-12 block">02 / Path</span>
          <h2 className="font-display text-4xl md:text-5xl font-bold tracking-tight uppercase text-black leading-[0.9] mt-auto">
            Professional<br />
            Timeline.
          </h2>
        </div>

        {/* Experience Rows */}
        <div className="lg:col-span-8 flex flex-col">
          {[...experiences, ...research].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="p-8 md:p-12 border-r border-b border-black/5 flex flex-col md:flex-row gap-8 md:gap-12 hover:bg-black/[0.01] transition-colors group"
            >
              <div className="w-full md:w-1/3 flex flex-col">
                <span className="text-black/30 font-mono text-[10px] uppercase tracking-widest mb-4">
                  {'period' in item ? (item as any).period : '2025 / Research'}
                </span>
                <h3 className="text-xl md:text-2xl font-bold text-black mb-2 uppercase leading-tight group-hover:text-[#0055FF] transition-colors">
                  {'role' in item ? (item as any).role : (item as any).title}
                </h3>
                <span className="text-[#0055FF] font-mono text-[9px] uppercase tracking-widest mt-auto pt-4 border-t border-black/5 block w-fit">
                  {'company' in item ? (item as any).company : (item as any).venue}
                </span>
              </div>
              
              <div className="w-full md:w-2/3 flex flex-col">
                <p className="text-black/60 text-sm md:text-base leading-relaxed font-light mb-8">
                  {item.description}
                </p>
                
                <ul className="space-y-4 mb-8 flex-grow">
                  {item.highlights.map((h, j) => (
                    <li key={j} className="flex gap-4 items-start text-xs md:text-sm text-black/50 leading-relaxed font-light">
                      <span className="text-black/20 font-mono text-[9px] mt-1 shrink-0">{(j+1).toString().padStart(2, '0')}</span>
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-2 pt-6 border-t border-black/5">
                  {item.tech.map((t) => (
                    <span key={t} className="text-[9px] font-mono tracking-widest uppercase text-black/40 bg-black/5 px-3 py-1 rounded-full">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
