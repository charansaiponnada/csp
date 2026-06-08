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
    <section id="recognition" className="bg-white relative max-w-7xl mx-auto border-t border-black/5">
      <div className="grid lg:grid-cols-12 w-full border-l border-black/5">
        {/* Section Header */}
        <div className="lg:col-span-4 p-8 md:p-12 border-r border-b border-black/5 flex flex-col min-h-[400px]">
          <span className="text-[#0055FF] font-mono text-[9px] tracking-[0.4em] uppercase mb-12 block">06 / Milestones</span>
          <h2 className="font-display text-4xl md:text-5xl font-bold tracking-tight uppercase text-black leading-[0.9] mt-auto">
            Professional<br />
            Recognition.
          </h2>
          <p className="text-black/40 text-xs font-light mt-8 leading-relaxed max-w-[250px]">
            Validated impact through competitive hackathons and academic contributions.
          </p>
        </div>

        {/* Milestones Grid */}
        <div className="lg:col-span-8 grid sm:grid-cols-2">
          {accomplishments.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="p-8 md:p-12 border-r border-b border-black/5 hover:bg-black/[0.01] transition-all group flex flex-col justify-between min-h-[350px]"
            >
              <div>
                <div className="w-12 h-12 bg-black/5 rounded-full flex items-center justify-center mb-8 group-hover:bg-[#0055FF]/10 transition-colors"> 
                  <item.icon size={20} className="text-black/30 group-hover:text-[#0055FF] transition-colors" />
                </div>
                <h4 className="text-2xl md:text-3xl font-bold text-black mb-3 uppercase leading-none group-hover:text-[#0055FF] transition-colors">{item.title}</h4>
                <p className="text-[#0055FF] text-[10px] font-mono tracking-widest uppercase mb-6">{item.org}</p>
                <p className="text-black/50 text-sm font-light leading-relaxed">{item.desc}</p>
              </div>

              <div className="mt-12 pt-6 border-t border-black/5">
                <p className="text-black/30 text-[9px] font-mono uppercase tracking-widest">{item.detail} • {item.year}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
