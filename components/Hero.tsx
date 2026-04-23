'use client'

import { motion } from 'framer-motion'
import { GithubLogo, LinkedinLogo, InstagramLogo, MediumLogo } from '@phosphor-icons/react'

const socialLinks = [
  { icon: GithubLogo, label: 'GitHub', href: 'https://github.com/charansaiponnada' },
  { icon: LinkedinLogo, label: 'LinkedIn', href: 'https://linkedin.com/in/charansaiponnada' },
  { icon: InstagramLogo, label: 'Instagram', href: 'https://instagram.com/Charansaiponnada' },
  { icon: MediumLogo, label: 'Medium', href: 'https://medium.com/@Charansaiponnada' },
]

export default function Hero() {
  return (
    <section
      id="hero"
      className="min-h-screen flex items-center relative overflow-hidden"
    >
      <div className="absolute inset-0 dot-pattern opacity-30" />
      
      <div className="absolute top-20 right-0 w-96 h-96 bg-[#2563EB]/5 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-0 w-72 h-72 bg-[#059669]/5 rounded-full blur-3xl" />

      <div className="max-w-6xl mx-auto px-6 py-32 relative z-10">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-block px-4 py-2 bg-[#F4F4F5] rounded-full text-sm font-mono text-[#71717A] mb-6">
              AI & Data Science Researcher
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-6xl md:text-7xl lg:text-8xl font-extrabold tracking-tight mb-6"
          >
            Charan Sai
            <br />
            <span className="text-[#2563EB]">Ponnada</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-xl md:text-2xl text-[#71717A] max-w-xl mb-8 leading-relaxed"
          >
            I build AI systems that don&apos;t just work, but make sense.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex items-center gap-4 text-[#71717A] mb-12"
          >
            <span>Kakinada, India</span>
            <span className="w-1 h-1 bg-[#71717A] rounded-full" />
            <span>He/Him</span>
            <span className="w-1 h-1 bg-[#71717A] rounded-full" />
            <span>B.Tech AI & DS</span>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-lg text-[#71717A] max-w-2xl mb-12 leading-relaxed"
          >
            Most people talk about AI in absolutes. I got here by getting my hands dirty with the messy stuff — unstable outputs, retrieval failures, hallucinations that look confident. Turns out, that&apos;s exactly where the interesting engineering lives.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="flex flex-wrap gap-6"
          >
            {socialLinks.map((social, index) => (
              <motion.a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-[#71717A] hover:text-[#2563EB] transition-colors group"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
              >
                <social.icon size={24} weight="duotone" />
                <span className="group-hover:underline">{social.label}</span>
              </motion.a>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}