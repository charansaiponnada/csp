'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { BookOpen, Star, UsersThree, Trophy } from '@phosphor-icons/react'

const capabilities = [
  {
    type: 'Intelligence',
    title: 'AI Engineering',
    desc: 'Engineering high-stakes evaluation infrastructure and RAG systems for LLM reliability.',
    tags: ['FastAPI', 'LangChain', 'RAG'],
    icon: <Star size={24} />
  },
  {
    type: 'Synthesis',
    title: 'Research & Auth',
    desc: 'Primary author for vision-language scene understanding research in complex traffic environments.',
    tags: ['PyTorch', 'CV', 'BLIP'],
    icon: <BookOpen size={24} />
  },
  {
    type: 'Visuals',
    title: 'Creative Direct',
    desc: 'Cinematic video editing and high-fidelity graphic design bridging tech and emotion.',
    tags: ['Premiere', 'After Effects', 'PS'],
    icon: <Star size={24} />
  },
  {
    type: 'Behavior',
    title: 'Psych & Sales',
    desc: 'Applying human psychology insights to optimize sales pipelines and system experience.',
    tags: ['Strategy', 'Behavioral', 'Sales'],
    icon: <UsersThree size={24} />
  },
  {
    type: 'Impact',
    title: 'Fintech RAG',
    desc: '2nd Place @ YUVAAN for Intelli-Credit, processing 500+ page reports in minutes.',
    tags: ['Gemini', 'Multi-Agent', 'Risk'],
    icon: <Trophy size={24} />
  },
  {
    type: 'Network',
    title: 'Advocacy',
    desc: 'Building high-impact networks and speaking on technical innovation across platforms.',
    tags: ['LinkedIn', 'Public Speaking'],
    icon: <UsersThree size={24} />
  }
]

export default function Highlights() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="highlights" className="bg-white relative max-w-7xl mx-auto border-t border-black/5">
      <div className="grid lg:grid-cols-12 w-full border-l border-black/5">
        {/* Section Header */}
        <div className="lg:col-span-4 p-8 md:p-12 border-r border-b border-black/5 flex flex-col min-h-[400px]">
          <span className="text-[#0055FF] font-mono text-[9px] tracking-[0.4em] uppercase mb-12 block">01 / Capabilities</span>
          <h2 className="font-display text-4xl md:text-5xl font-bold tracking-tight uppercase text-black leading-[0.9] mt-auto">
            Core<br />
            Impact.
          </h2>
          <p className="text-black/40 text-xs font-light mt-8 leading-relaxed max-w-[250px]">
            A multidisciplinary matrix designed to bridge technical engineering with human understanding.
          </p>
        </div>

        {/* Capabilities Grid */}
        <div className="lg:col-span-8 grid md:grid-cols-2">
          {capabilities.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, delay: 0.1 * i, ease: [0.16, 1, 0.3, 1] }}
              className="p-8 md:p-12 border-r border-b border-black/5 hover:bg-black/[0.01] transition-all group relative overflow-hidden flex flex-col"
            >
              <div className="absolute top-0 right-0 p-8 text-black/10 group-hover:text-[#0055FF] transition-colors">
                {item.icon}
              </div>

              <div className="relative z-10 flex-grow flex flex-col">
                <span className="text-[#0055FF] font-mono text-[9px] uppercase tracking-[0.2em] mb-6 block">{item.type}</span>
                <h3 className="text-xl md:text-2xl font-bold text-black mb-4 uppercase leading-tight group-hover:text-[#0055FF] transition-colors">{item.title}</h3>
                <p className="text-black/50 text-sm font-light leading-relaxed mb-8 flex-grow">{item.desc}</p>
                
                <div className="flex flex-wrap gap-2 pt-6 border-t border-black/5 mt-auto">
                  {item.tags.map((t) => (
                    <span key={t} className="px-3 py-1 bg-black/5 border border-black/5 text-[9px] font-mono text-black/40 rounded-full uppercase tracking-widest">
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
