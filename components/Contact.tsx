'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import { Envelope, GithubLogo, LinkedinLogo, PaperPlaneTilt } from '@phosphor-icons/react'

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
    <section id="contact" className="py-32 bg-white relative">
      <div className="absolute inset-0 bg-gradient-to-b from-[#F7F5F0] to-white" />
      
      <div className="max-w-4xl mx-auto px-6 relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="text-center mb-16"
        >
          <span className="text-[#C45D35] font-mono text-xs tracking-widest uppercase">Contact</span>
          <h2 className="text-4xl md:text-5xl font-display mt-4 mb-6">
            Let&apos;s connect
          </h2>
          <p className="text-xl text-[#6B6B6B] max-w-2xl mx-auto font-light">
            Interested in working together, or just want to talk about AI systems that actually make sense? Reach out.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
          className="grid md:grid-cols-2 gap-12"
        >
          <div className="space-y-4">
            <a
              href="mailto:charansaiponnada06@gmail.com"
              className="flex items-center gap-4 p-6 bg-[#F7F5F0] border border-[#E5E2DB] hover:border-[#C45D35]/30 transition-colors group"
            >
              <div className="p-3 bg-[#EDEAE4] group-hover:bg-[#C45D35]/10 transition-colors">
                <Envelope size={24} className="text-[#C45D35]" />
              </div>
              <div>
                <span className="text-xs font-mono text-[#9A9A9A] tracking-wide">Email</span>
                <p className="font-medium text-[#1A1A1A]">charansaiponnada06@gmail.com</p>
              </div>
            </a>

            <a
              href="https://github.com/charansaiponnada"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 p-6 bg-[#F7F5F0] border border-[#E5E2DB] hover:border-[#C45D35]/30 transition-colors group"
            >
              <div className="p-3 bg-[#EDEAE4] group-hover:bg-[#C45D35]/10 transition-colors">
                <GithubLogo size={24} className="text-[#C45D35]" />
              </div>
              <div>
                <span className="text-xs font-mono text-[#9A9A9A] tracking-wide">GitHub</span>
                <p className="font-medium text-[#1A1A1A]">@charansaiponnada</p>
              </div>
            </a>

            <a
              href="https://linkedin.com/in/charansaiponnada"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 p-6 bg-[#F7F5F0] border border-[#E5E2DB] hover:border-[#C45D35]/30 transition-colors group"
            >
              <div className="p-3 bg-[#EDEAE4] group-hover:bg-[#C45D35]/10 transition-colors">
                <LinkedinLogo size={24} className="text-[#C45D35]" />
              </div>
              <div>
                <span className="text-xs font-mono text-[#9A9A9A] tracking-wide">LinkedIn</span>
                <p className="font-medium text-[#1A1A1A]">Charan Sai Ponnada</p>
              </div>
            </a>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-sm font-mono text-[#6B6B6B] mb-2 tracking-wide">Name</label>
              <input
                type="text"
                id="name"
                required
                className="w-full px-4 py-3 bg-[#F7F5F0] border border-[#E5E2DB] rounded-none focus:border-[#C45D35] focus:outline-none transition-colors"
                placeholder="Your name"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-mono text-[#6B6B6B] mb-2 tracking-wide">Email</label>
              <input
                type="email"
                id="email"
                required
                className="w-full px-4 py-3 bg-[#F7F5F0] border border-[#E5E2DB] rounded-none focus:border-[#C45D35] focus:outline-none transition-colors"
                placeholder="your@email.com"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-mono text-[#6B6B6B] mb-2 tracking-wide">Message</label>
              <textarea
                id="message"
                required
                rows={4}
                className="w-full px-4 py-3 bg-[#F7F5F0] border border-[#E5E2DB] rounded-none focus:border-[#C45D35] focus:outline-none transition-colors resize-none"
                placeholder="Let's talk about..."
              />
            </div>
            <button
              type="submit"
              disabled={formState !== 'idle'}
              className="w-full flex items-center justify-center gap-2 px-6 py-4 bg-[#1A1A1A] text-white font-mono text-sm tracking-wide hover:bg-[#1A1A1A]/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {formState === 'idle' && (
                <>
                  <PaperPlaneTilt size={18} />
                  Send Message
                </>
              )}
              {formState === 'submitting' && 'Sending...'}
              {formState === 'success' && 'Message Sent!'}
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  )
}