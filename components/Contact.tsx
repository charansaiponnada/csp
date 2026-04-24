'use client'

import { motion, useScroll, useTransform, useInView } from 'framer-motion'
import { useRef, useState, useEffect } from 'react'
import { Envelope, GithubLogo, LinkedinLogo, Copy, Check, ArrowSquareOut } from '@phosphor-icons/react'

const stats = [
  { label: 'GitHub', value: '150+', suffix: 'contributions', href: 'https://github.com/charansaiponnada' },
  { label: 'LinkedIn', value: '1.3K', suffix: 'connections', href: 'https://linkedin.com/in/charansaiponnada' },
  { label: 'Papers', value: '2', suffix: 'published', href: 'https://github.com/charansaiponnada' },
]

const links = [
  {
    label: 'Email',
    value: 'charansaiponnada06@gmail.com',
    href: 'mailto:charansaiponnada06@gmail.com',
    icon: Envelope,
  },
  {
    label: 'GitHub',
    value: '@charansaiponnada',
    href: 'https://github.com/charansaiponnada',
    icon: GithubLogo,
  },
  {
    label: 'LinkedIn',
    value: 'Charan Sai Ponnada',
    href: 'https://linkedin.com/in/charansaiponnada',
    icon: LinkedinLogo,
  },
  {
    label: 'Papers',
    value: 'View on Google Scholar',
    href: 'https://scholar.google.com',
    icon: ArrowSquareOut,
  },
]

export default function Contact() {
  const ref = useRef(null)
  const containerRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const [copied, setCopied] = useState(false)

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  })

  const y = useTransform(scrollYProgress, [0, 1], [100, -100])
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0])

  useEffect(() => {
    if (copied) {
      const timer = setTimeout(() => setCopied(false), 2000)
      return () => clearTimeout(timer)
    }
  }, [copied])

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText('charansaiponnada06@gmail.com')
      setCopied(true)
    } catch {
      setCopied(false)
    }
  }

  return (
    <section 
      id="contact" 
      ref={containerRef}
      className="py-32 bg-[#F7F5F0] relative overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div 
          className="absolute inset-0" 
          style={{
            backgroundImage: `radial-gradient(#1A1A1A 1px, transparent 1px)`,
            backgroundSize: '24px 24px'
          }}
        />
      </div>

      <motion.div
        ref={ref}
        style={{ y, opacity }}
        initial={{ opacity: 0, y: 60 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        className="max-w-5xl mx-auto px-6 relative z-10"
      >
        {/* Header */}
        <div className="text-center mb-20">
          <span className="text-[#9A9A9A] font-mono text-xs tracking-[0.3em] uppercase block mb-4">
            — 06 / Contact
          </span>
          <h2 className="font-display text-5xl md:text-6xl lg:text-7xl mb-6 leading-tight">
            Let&apos;s Build<br />
            <span className="text-[#C45D35]">Something Real</span>
          </h2>
          <p className="text-xl text-[#6B6B6B] max-w-2xl mx-auto font-light leading-relaxed">
            I&apos;m building AI systems that don&apos;t just work, but make sense. 
            Open to research collaborations, ML engineering roles, and internships 
            where I can contribute to meaningful problems.
          </p>
          
          {/* Tags */}
          <div className="flex flex-wrap justify-center gap-3 mt-8">
            {['Computer Vision', 'Multimodal Systems', 'Assistive AI', 'LLM Evaluation'].map((tag) => (
              <span 
                key={tag}
                className="px-4 py-1.5 bg-white border border-[#E5E2DB] text-[#6B6B6B] text-sm font-mono hover:border-[#C45D35] hover:text-[#C45D35] transition-colors cursor-default"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Stats Row */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid grid-cols-3 gap-4 mb-16"
        >
          {stats.map((stat, i) => (
            <a
              key={stat.label}
              href={stat.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group p-6 bg-white border border-[#E5E2DB] hover:border-[#C45D35] transition-all text-center"
            >
              <motion.div
                initial={{ scale: 1 }}
                whileHover={{ scale: 1.02 }}
                className="space-y-2"
              >
                <p className="text-xs font-mono text-[#9A9A9A] uppercase tracking-wider">{stat.label}</p>
                <p className="text-3xl font-display text-[#1A1A1A]">
                  {stat.value}
                  <span className="text-lg text-[#C45D35] ml-1">+</span>
                </p>
                <p className="text-sm text-[#6B6B6B]">{stat.suffix}</p>
              </motion.div>
            </a>
          ))}
        </motion.div>

        {/* Contact Links */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-4"
        >
          {links.map((link, i) => (
            <motion.div
              key={link.label}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.5 + i * 0.1 }}
            >
              <a
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative p-6 bg-white border border-[#E5E2DB] hover:border-[#C45D35] transition-all block h-full"
              >
                <div className="absolute top-0 right-0 p-3 opacity-0 group-hover:opacity-100 transition-opacity">
                  <link.icon size={16} className="text-[#C45D35]" />
                </div>
                
                <div className="space-y-3">
                  <p className="text-xs font-mono text-[#9A9A9A] uppercase tracking-wider">
                    {link.label}
                  </p>
                  
                  {link.label === 'Email' ? (
                    <div className="flex items-center gap-2">
                      <p className="font-medium text-[#1A1A1A] truncate">{link.value}</p>
                      <button
                        onClick={(e) => {
                          e.preventDefault()
                          copyEmail()
                        }}
                        className="p-1.5 text-[#6B6B6B] hover:text-[#C45D35] transition-colors"
                      >
                        {copied ? <Check size={14} /> : <Copy size={14} />}
                      </button>
                    </div>
                  ) : (
                    <p className="font-medium text-[#1A1A1A]">{link.value}</p>
                  )}
                </div>

                {/* Hover indicator */}
                <div className="absolute bottom-0 left-0 w-0 h-px bg-[#C45D35] group-hover:w-full transition-all duration-300" />
              </a>
            </motion.div>
          ))}
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 1, delay: 1 }}
          className="text-center mt-20"
        >
          <p className="text-[#6B6B6B] font-mono text-sm">
            Prefer a quick intro? Email me with &quot;Intro&quot; in the subject — I respond within 48 hours.
          </p>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 1.5 }}
          className="flex justify-center mt-16"
        >
          <div className="flex items-center gap-2 text-[#9A9A9A] font-mono text-xs">
            <span className="w-8 h-px bg-[#E5E2DB]" />
            scroll up to top
            <span className="w-8 h-px bg-[#E5E2DB]" />
          </div>
        </motion.div>
      </motion.div>
    </section>
  )
}