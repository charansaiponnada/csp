'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { ArrowRight } from '@phosphor-icons/react'

export default function About() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="about" className="py-32 relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="max-w-3xl mx-auto"
        >
          <span className="text-[#C45D35] font-mono text-xs tracking-widest uppercase">The Story</span>
          
          <div className="mt-12 space-y-10">
            <p className="text-3xl md:text-4xl lg:text-5xl font-display leading-snug text-[#1A1A1A]">
              &ldquo;I build AI systems that operate beyond experiments and function reliably in real-world environments.&rdquo;
            </p>

            <div className="w-16 h-[2px] bg-[#C45D35]" />

            <div className="space-y-6 text-lg text-[#6B6B6B] leading-relaxed font-light">
              <p>
                Currently working as an AI Engineer Intern at Aynstyn Technologies, designing and deploying LLM-powered systems for interview simulation and candidate evaluation. Not just getting them to work — getting them to actually be trustworthy.
              </p>

              <p>
                The thing I keep coming back to: bigger isn&apos;t always better. That&apos;s where Small Language Models start to impress. Faster inference, predictable behavior, easier to debug. For domain-specific tasks, they&apos;re often the right call.
              </p>

              <p>
                I&apos;m in my final year at VRSEC, but the real learning has been outside the classroom. Hackathons (secured 2nd place at YUVAAN 2026 at IIT Hyderabad), research (published at ISAECT 2025), and building things that actually get used.
              </p>

              <p>
                When I&apos;m not building, I&apos;m probably writing about what I learned. Sometimes breakthroughs. Sometimes things that didn&apos;t work. Both feel equally important.
              </p>
            </div>

            <div className="pt-10 flex items-center gap-6">
              <a
                href="https://linkedin.com/in/charansaiponnada"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 text-[#1A1A1A] hover:text-[#C45D35] transition-colors font-mono text-sm tracking-wide group"
              >
                Read more on LinkedIn
                <ArrowRight 
                  size={16} 
                  className="group-hover:translate-x-1 transition-transform" 
                />
              </a>
              <span className="text-[#E5E2DB]">—</span>
              <span className="text-sm text-[#9A9A9A] font-mono">1,303 followers</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}