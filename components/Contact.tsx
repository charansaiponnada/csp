'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Envelope, GithubLogo, LinkedinLogo } from '@phosphor-icons/react'

export default function Contact() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="contact" className="py-32 bg-[#F7F5F0] relative">
      <div className="max-w-4xl mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 60 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-16"
        >
          <span className="text-[#9A9A9A] font-mono text-xs tracking-[0.3em] uppercase">— 06 / Contact</span>
          <h2 className="font-display text-4xl md:text-5xl mt-4 mb-6">
            Let&apos;s connect
          </h2>
          <p className="text-xl text-[#6B6B6B] max-w-2xl mx-auto font-light">
            Interested in working together, or just want to talk about AI systems that actually make sense? Reach out.
          </p>
          <p className="mt-4 text-[#C45D35] font-mono text-sm">
            Open to AI / ML / Data Science internships
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="grid md:grid-cols-3 gap-4"
        >
          <a
            href="mailto:charansaiponnada06@gmail.com"
            className="flex items-center gap-4 p-6 bg-white border border-[#E5E2DB] hover:border-[#C45D35] transition-colors group"
          >
            <div className="p-3 bg-[#EDEAE4] group-hover:bg-[#C45D35]/10 transition-colors">
              <Envelope size={22} className="text-[#C45D35]" />
            </div>
            <div>
              <span className="text-xs font-mono text-[#9A9A9A] tracking-wide uppercase block mb-1">Email</span>
              <p className="font-medium text-[#1A1A1A]">charansaiponnada06@gmail.com</p>
            </div>
          </a>

          <a
            href="https://github.com/charansaiponnada"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-4 p-6 bg-white border border-[#E5E2DB] hover:border-[#C45D35] transition-colors group"
          >
            <div className="p-3 bg-[#EDEAE4] group-hover:bg-[#C45D35]/10 transition-colors">
              <GithubLogo size={22} className="text-[#C45D35]" />
            </div>
            <div>
              <span className="text-xs font-mono text-[#9A9A9A] tracking-wide uppercase block mb-1">GitHub</span>
              <p className="font-medium text-[#1A1A1A]">@charansaiponnada</p>
            </div>
          </a>

          <a
            href="https://linkedin.com/in/charansaiponnada"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-4 p-6 bg-white border border-[#E5E2DB] hover:border-[#C45D35] transition-colors group"
          >
            <div className="p-3 bg-[#EDEAE4] group-hover:bg-[#C45D35]/10 transition-colors">
              <LinkedinLogo size={22} className="text-[#C45D35]" />
            </div>
            <div>
              <span className="text-xs font-mono text-[#9A9A9A] tracking-wide uppercase block mb-1">LinkedIn</span>
              <p className="font-medium text-[#1A1A1A]">Charan Sai Ponnada</p>
            </div>
          </a>
        </motion.div>
      </div>
    </section>
  )
}