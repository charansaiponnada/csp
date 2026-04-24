'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import { Envelope, GithubLogo, LinkedinLogo } from '@phosphor-icons/react'

export default function Contact() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const [formState, setFormState] = useState<'idle' | 'submitting' | 'success'>('idle')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setFormState('submitting')
    setTimeout(() => setFormState('success'), 1500)
  }

  return (
    <section id="contact" className="py-24 bg-white relative">
      <div className="max-w-3xl mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-12"
        >
          <span className="text-[#A1A1A6] font-mono text-xs tracking-[0.2em] uppercase">Contact</span>
          <h2 className="font-display text-3xl md:text-4xl mt-3 mb-4 text-[#1D1D1F]">
            Let&apos;s Work Together
          </h2>
          <p className="text-[#6E6E73] text-lg mb-8">
            I&apos;m open to AI / ML / Data Science internships and research opportunities.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid sm:grid-cols-3 gap-4"
        >
          <a
            href="mailto:charansaiponnada06@gmail.com"
            className="flex items-center justify-center gap-3 p-5 bg-[#F5F5F7] border border-[#D2D2D7] rounded-xl hover:border-[#007AFF] hover:bg-[#007AFF]/5 transition-colors group"
          >
            <Envelope size={20} className="text-[#6E6E73] group-hover:text-[#007AFF] transition-colors" />
            <span className="font-mono text-sm text-[#1D1D1F]">Email</span>
          </a>

          <a
            href="https://github.com/charansaiponnada"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-3 p-5 bg-[#F5F5F7] border border-[#D2D2D7] rounded-xl hover:border-[#007AFF] hover:bg-[#007AFF]/5 transition-colors group"
          >
            <GithubLogo size={20} className="text-[#6E6E73] group-hover:text-[#007AFF] transition-colors" />
            <span className="font-mono text-sm text-[#1D1D1F]">GitHub</span>
          </a>

          <a
            href="https://linkedin.com/in/charansaiponnada"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-3 p-5 bg-[#F5F5F7] border border-[#D2D2D7] rounded-xl hover:border-[#007AFF] hover:bg-[#007AFF]/5 transition-colors group"
          >
            <LinkedinLogo size={20} className="text-[#6E6E73] group-hover:text-[#007AFF] transition-colors" />
            <span className="font-mono text-sm text-[#1D1D1F]">LinkedIn</span>
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 pt-8 border-t border-[#D2D2D7] text-center"
        >
          <p className="text-[#A1A1A6] text-sm font-mono">
            © 2026 Charan Sai Ponnada. Built with Next.js.
          </p>
        </motion.div>
      </div>
    </section>
  )
}