'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Trophy, Medal, Certificate, UsersThree } from '@phosphor-icons/react'

const accomplishments = [
  {
    icon: Medal,
    title: '2nd Place',
    org: 'YUVAAN 2026',
    desc: 'IIT Hyderabad AI/ML Hackathon',
    detail: 'Intelli-Credit project',
    year: '2026',
  },
  {
    icon: Trophy,
    title: 'AI Engineer',
    org: 'Aynstyn Technologies',
    desc: 'Building production AI systems',
    detail: 'LLM pipelines, RAG, evaluation',
    year: '2026',
  },
  {
    icon: Certificate,
    title: 'Published',
    org: 'ISAECT 2025',
    desc: 'Vision-Language Navigation',
    detail: 'BLIP fine-tuning research',
    year: '2025',
  },
  {
    icon: UsersThree,
    title: '1,303',
    org: 'LinkedIn followers',
    desc: 'Building network',
    detail: 'Sharing learnings publicly',
    year: 'Now',
  },
]

export default function Accomplishments() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="accomplishments" className="py-32 bg-[#1A1A1A] text-white relative">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-full h-full" style={{backgroundImage: 'radial-gradient(#fff 1px, transparent 1px)', backgroundSize: '40px 40px'}} />
      </div>
      
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 60 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="mb-24"
        >
          <span className="text-[#6B6B6B] font-mono text-xs tracking-[0.3em] uppercase">— 05 / Recognition</span>
          <h2 className="font-display text-4xl md:text-5xl mt-4">
            Things that made me pause
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {accomplishments.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 60 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="group p-8 bg-[#1A1A1A] border border-[#333] hover:border-[#C45D35]/50 transition-colors"
            >
              <item.icon size={32} className="text-[#C45D35] mb-6" />
              <p className="font-display text-3xl mb-1">{item.title}</p>
              <p className="text-[#C45D35] text-sm mb-4">{item.org}</p>
              <div className="w-8 h-[1px] bg-[#333] mb-4" />
              <p className="text-[#6B6B6B] text-sm mb-2">{item.desc}</p>
              <p className="text-[#9A9A9A] text-xs">{item.detail}</p>
              <span className="inline-block mt-4 text-xs font-mono text-[#6B6B6B]">{item.year}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}