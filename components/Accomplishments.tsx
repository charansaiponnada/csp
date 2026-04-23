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
    <section id="accomplishments" className="py-32 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <span className="text-[#2563EB] font-mono text-sm tracking-wider uppercase">Recognition</span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4">
            Things that made me pause
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {accomplishments.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -4 }}
              className="bg-[#FAFAF9] p-8 rounded-2xl border border-[#E4E4E7] hover:border-[#2563EB]/30 transition-all cursor-default group"
            >
              <div className="flex items-start gap-4">
                <div className="p-3 bg-[#2563EB]/10 rounded-xl group-hover:bg-[#2563EB]/20 transition-colors">
                  <item.icon size={28} weight="duotone" className="text-[#2563EB]" />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold mb-1">{item.title}</h3>
                  <p className="text-[#71717A] text-sm mb-2">{item.description}</p>
                  <span className="text-xs font-mono text-[#2563EB]">{item.date}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}