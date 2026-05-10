'use client'

import { motion, useInView } from 'framer-motion'
import { useRef, useState, useEffect } from 'react'
import { Envelope, GithubLogo, LinkedinLogo, Copy, Check } from '@phosphor-icons/react'

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
]

export default function Contact() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const [copied, setCopied] = useState(false)

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
    <section id="contact" className="py-32 bg-[#0A0A0A] relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#E87E53]/5 blur-[120px] rounded-full" />
      
      <div className="max-w-4xl mx-auto px-6 relative z-10 text-center">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <span className="text-[#E87E53] font-mono text-[10px] tracking-[0.4em] uppercase mb-4 block">04 / Availability</span>
          <h2 className="font-display text-5xl md:text-7xl font-medium tracking-tight mb-8">Let&apos;s Build <span className="text-white/20">Together</span></h2>
          <p className="text-lg text-white/40 font-light leading-relaxed mb-16 max-w-xl mx-auto">
            I&apos;m currently seeking AI engineering roles and research collaborations. 
            If you&apos;re building something that pushes boundaries, let&apos;s talk.
          </p>

          <div className="grid md:grid-cols-3 gap-4 mb-20">
            {links.map((link, i) => (
              <motion.div
                key={link.label}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.2 + i * 0.1 }}
              >
                <a
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="glass p-8 rounded-3xl block hover:border-white/20 transition-all group"
                >
                  <div className="flex flex-col items-center gap-4">
                    <link.icon size={24} className="text-white/20 group-hover:text-[#E87E53] transition-colors" />
                    <p className="text-[10px] font-mono tracking-widest uppercase text-white/30">{link.label}</p>
                    {link.label === 'Email' ? (
                      <div className="flex items-center gap-2" onClick={(e) => { e.preventDefault(); copyEmail(); }}>
                         <p className="text-sm font-medium">{copied ? 'Copied!' : 'Copy Email'}</p>
                      </div>
                    ) : (
                      <p className="text-sm font-medium">Visit Profile</p>
                    )}
                  </div>
                </a>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.8 }}
            className="pt-20 border-t border-white/5"
          >
            <p className="text-white/20 text-[10px] font-mono tracking-widest uppercase mb-4">Located in</p>
            <p className="text-white font-medium">Kakinada, Andhra Pradesh, India</p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}