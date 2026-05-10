'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { Trophy, Medal, BookOpen, UsersThree } from '@phosphor-icons/react'

const accomplishments = [
  {
    icon: Medal,
    title: '2nd Place',
    org: 'YUVAAN 2026',
    desc: 'IIT Hyderabad AI/ML Hackathon',
    detail: 'Intelli-Credit system',
    year: '2026',
  },
  {
    icon: BookOpen,
    title: 'Primary Author',
    org: 'ISAECT 2025',
    desc: 'Vision-Language Research',
    detail: 'BLIP-based navigation',
    year: '2025',
  },
  {
    icon: Trophy,
    title: 'AI Intern',
    org: 'Aynstyn Tech',
    desc: 'Production AI Systems',
    detail: 'LLM Eval & RAG Pipelines',
    year: '2026',
  },
  {
    icon: UsersThree,
    title: '1,303+',
    org: 'LinkedIn Network',
    desc: 'Community Growth',
    detail: 'Sharing AI Insights',
    year: 'Present',
  },
]

export default function Recognition() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="recognition" className="py-32 bg-[#0A0A0A] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="mb-24"
        >
          <span className="text-[#E87E53] font-mono text-[10px] tracking-[0.4em] uppercase mb-4 block">04 / Recognition</span>
          <h2 className="font-display text-5xl md:text-7xl font-medium tracking-tight">Milestones <span className="text-white/20">&</span> Awards</h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
          {accomplishments.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="glass p-10 rounded-[2.5rem] group hover:border-white/20 transition-all text-center"
            >
              <div className="w-16 h-16 bg-white/5 rounded-full flex items-center justify-center mx-auto mb-8 group-hover:bg-[#E87E53]/10 transition-colors">
                <item.icon size={28} className="text-white/20 group-hover:text-[#E87E53] transition-colors" />
              </div>
              <h4 className="text-3xl font-medium mb-1 group-hover:text-white transition-colors">{item.title}</h4>
              <p className="text-[#E87E53] font-mono text-[10px] tracking-widest uppercase mb-6">{item.org}</p>
              <div className="w-8 h-[1px] bg-white/10 mx-auto mb-6" />
              <p className="text-white/40 text-sm font-light mb-2">{item.desc}</p>
              <p className="text-white/20 text-[10px] font-mono">{item.detail} • {item.year}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}