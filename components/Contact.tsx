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
    <section id="contact" className="py-32">
      <div className="max-w-4xl mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-[#2563EB] font-mono text-sm tracking-wider uppercase">Contact</span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6">
            Let&apos;s connect
          </h2>
          <p className="text-xl text-[#71717A] max-w-2xl mx-auto">
            Interested in working together, or just want to talk about AI systems that actually make sense? Reach out.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid md:grid-cols-2 gap-12"
        >
          <div className="space-y-6">
            <a
              href="mailto:charansaiponnada06@gmail.com"
              className="flex items-center gap-4 p-6 bg-white rounded-2xl border border-[#E4E4E7] hover:border-[#2563EB]/30 transition-colors group"
            >
              <div className="p-3 bg-[#2563EB]/10 rounded-xl group-hover:bg-[#2563EB]/20 transition-colors">
                <Envelope size={24} weight="duotone" className="text-[#2563EB]" />
              </div>
              <div>
                <span className="text-sm text-[#71717A]">Email</span>
                <p className="font-medium">charansaiponnada06@gmail.com</p>
              </div>
            </a>

            <a
              href="https://github.com/charansaiponnada"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 p-6 bg-white rounded-2xl border border-[#E4E4E7] hover:border-[#2563EB]/30 transition-colors group"
            >
              <div className="p-3 bg-[#2563EB]/10 rounded-xl group-hover:bg-[#2563EB]/20 transition-colors">
                <GithubLogo size={24} weight="duotone" className="text-[#2563EB]" />
              </div>
              <div>
                <span className="text-sm text-[#71717A]">GitHub</span>
                <p className="font-medium">@charansaiponnada</p>
              </div>
            </a>

            <a
              href="https://linkedin.com/in/charansaiponnada"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 p-6 bg-white rounded-2xl border border-[#E4E4E7] hover:border-[#2563EB]/30 transition-colors group"
            >
              <div className="p-3 bg-[#2563EB]/10 rounded-xl group-hover:bg-[#2563EB]/20 transition-colors">
                <LinkedinLogo size={24} weight="duotone" className="text-[#2563EB]" />
              </div>
              <div>
                <span className="text-sm text-[#71717A]">LinkedIn</span>
                <p className="font-medium">Charan Sai Ponnada</p>
              </div>
            </a>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium mb-2">Name</label>
              <input
                type="text"
                id="name"
                required
                className="w-full px-4 py-3 bg-white border border-[#E4E4E7] rounded-xl focus:border-[#2563EB] focus:outline-none transition-colors"
                placeholder="Your name"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-2">Email</label>
              <input
                type="email"
                id="email"
                required
                className="w-full px-4 py-3 bg-white border border-[#E4E4E7] rounded-xl focus:border-[#2563EB] focus:outline-none transition-colors"
                placeholder="your@email.com"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium mb-2">Message</label>
              <textarea
                id="message"
                required
                rows={4}
                className="w-full px-4 py-3 bg-white border border-[#E4E4E7] rounded-xl focus:border-[#2563EB] focus:outline-none transition-colors resize-none"
                placeholder="Let's talk about..."
              />
            </div>
            <button
              type="submit"
              disabled={formState !== 'idle'}
              className="w-full flex items-center justify-center gap-2 px-6 py-4 bg-[#2563EB] text-white font-medium rounded-xl hover:bg-[#1D4ED8] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {formState === 'idle' && (
                <>
                  <PaperPlaneTilt size={20} />
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