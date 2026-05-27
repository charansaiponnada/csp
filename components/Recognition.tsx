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
    <section id="recognition" className="bg-white relative overflow-hidden border-t border-black/5">
      <div className="grid lg:grid-cols-4 w-full">
        {/* Header Cell */}
        <div className="lg:col-span-1 p-12 border-r border-b border-black/5 flex flex-col justify-between min-h-[400px]">
          <div>
            <span className="text-[#0055FF] font-mono text-[10px] tracking-[0.4em] uppercase mb-4 block">04 / MILESTONES</span>
            <h2 className="font-display text-5xl font-bold tracking-tight uppercase text-black leading-none">PROFESSIONAL<br/>RECOGNITION</h2>
          </div>
          <p className="text-black/30 text-xs font-light leading-relaxed max-w-[200px]">
            Validated impact through competitive hackathons and academic contributions.
          </p>
        </div>

        {/* Milestones Grid */}
        <div className="lg:col-span-3 grid md:grid-cols-2 lg:grid-cols-4">
          {accomplishments.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="p-12 border-r border-b border-black/5 hover:bg-black/[0.02] transition-all group flex flex-col justify-between min-h-[350px]"
            >
              <div>
                <div className="w-10 h-10 bg-black/5 rounded-full flex items-center justify-center mb-8 group-hover:bg-[#0055FF]/10 transition-colors"> 
                  <item.icon size={20} className="text-black/20 group-hover:text-[#0055FF] transition-colors" />
                </div>
                <h4 className="text-3xl font-bold text-black mb-2 uppercase leading-none group-hover:text-[#0055FF] transition-colors">{item.title}</h4>
                <p className="text-[#0055FF] text-[9px] font-mono tracking-widest uppercase mb-6">{item.org}</p>
                <p className="text-black/40 text-xs font-light leading-relaxed">{item.desc}</p>
              </div>

              <div className="mt-8 pt-6 border-t border-black/5">
                <p className="text-black/20 text-[9px] font-mono uppercase tracking-tighter">{item.detail} • {item.year}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}