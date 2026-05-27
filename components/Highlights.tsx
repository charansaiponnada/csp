'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { GithubLogo, LinkedinLogo, BookOpen, Star, UsersThree, Trophy } from '@phosphor-icons/react'

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
    <section id="highlights" className="bg-white relative overflow-hidden border-t border-black/5">
      <div className="grid lg:grid-cols-4 w-full">
        {/* Header Cell */}
        <div className="lg:col-span-1 p-12 border-r border-b border-black/5 flex flex-col justify-between min-h-[400px]">
          <div>
            <span className="text-[#0055FF] font-mono text-[10px] tracking-[0.4em] uppercase mb-4 block">01 / CAPABILITIES</span>
            <h2 className="font-display text-5xl font-bold tracking-tight uppercase text-black leading-none">CORE<br/>IMPACT</h2>
          </div>
          <p className="text-black/30 text-xs font-light leading-relaxed max-w-[200px]">
            A multidisciplinary matrix designed to bridge technical engineering with human understanding.
          </p>
        </div>

        {/* Capabilities Grid */}
        <div className="lg:col-span-3 grid md:grid-cols-3">
          {capabilities.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.1 * i }}
              className="p-12 border-r border-b border-black/5 hover:bg-black/[0.02] transition-all group relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 p-8 opacity-0 group-hover:opacity-100 transition-opacity">
                <div className="text-[#0055FF]">{item.icon}</div>
              </div>

              <div className="relative z-10">
                <span className="text-[#0055FF] font-mono text-[9px] uppercase tracking-[0.2em] mb-4 block">{item.type}</span>
                <h3 className="text-2xl font-bold text-black mb-6 uppercase leading-tight group-hover:text-[#0055FF] transition-colors">{item.title}</h3>
                <p className="text-black/40 text-sm font-light leading-relaxed mb-8">{item.desc}</p>
                
                <div className="flex flex-wrap gap-2">
                  {item.tags.map((t) => (
                    <span key={t} className="px-3 py-1 bg-black/5 border border-black/5 text-[8px] font-mono text-black/30 rounded-full">
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
