'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Trophy, Medal, Certificate, UsersThree } from '@phosphor-icons/react'

const accomplishments = [
  {
    icon: Medal,
    title: '2nd Place — YUVAAN 2026',
    description: 'IIT Hyderabad AI/ML Hackathon — Intelli-Credit',
    date: '2026',
  },
  {
    icon: Trophy,
    title: 'AI Engineer Intern',
    description: 'Aynstyn Technologies Pvt. Ltd.',
    date: '2026',
  },
  {
    icon: Certificate,
    title: 'Published Research',
    description: 'ISAECT 2025 — Vision-Language Navigation',
    date: '2025',
  },
  {
    icon: UsersThree,
    title: '500+ Connections',
    description: 'LinkedIn network — 1,303 followers',
    date: 'Present',
  },
]

export default function Accomplishments() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="accomplishments" className="py-32 bg-[#F7F5F0] relative">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="mb-20"
        >
          <span className="text-[#C45D35] font-mono text-xs tracking-widest uppercase">Recognition</span>
          <h2 className="text-4xl md:text-5xl font-display mt-4">
            Things that made me pause
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {accomplishments.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1, ease: 'easeOut' }}
              className="bg-white border border-[#E5E2DB] p-10 hover:border-[#C45D35]/30 transition-all cursor-default group"
            >
              <div className="flex items-start gap-6">
                <div className="p-4 bg-[#EDEAE4] group-hover:bg-[#C45D35]/10 transition-colors">
                  <item.icon size={32} weight="regular" className="text-[#C45D35]" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-display mb-1">{item.title}</h3>
                  <p className="text-[#6B6B6B] text-sm mb-3">{item.description}</p>
                  <span className="text-xs font-mono text-[#9A9A9A] tracking-wide">{item.date}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}