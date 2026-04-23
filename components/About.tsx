'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

export default function About() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="about" className="py-32 relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="grid md:grid-cols-2 gap-16 items-start"
        >
          <div>
            <span className="text-[#2563EB] font-mono text-sm tracking-wider uppercase">The Story</span>
            <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-8">
              Thinking out loud about AI systems
            </h2>
          </div>

          <div className="space-y-6">
            <div className="relative pl-8 border-l-2 border-[#E4E4E7]">
              <span className="absolute -left-3 top-0 text-6xl text-[#2563EB]/20 font-serif">&quot;</span>
              <p className="text-xl leading-relaxed text-[#71717A] italic">
                In financial applications, a prediction without reasoning is not usable. Explainability is not an add-on; it is a requirement.
              </p>
            </div>

            <p className="text-lg leading-relaxed text-[#71717A]">
              Currently working as an AI Engineer Intern at Aynstyn Technologies, I design and deploy LLM-powered systems for interview simulation, candidate evaluation, and real-time AI applications. My focus is on improving model reliability, scalability, and practical usability in production settings.
            </p>

            <p className="text-lg leading-relaxed text-[#71717A]">
              I&apos;m particularly drawn to the problems that don&apos;t have clean solutions — when a RAG pipeline confidently gives wrong answers, when an LLM&apos;s output is unstable, when the &quot;right-looking&quot; architecture still fails in practice. That&apos;s where the real engineering happens.
            </p>

            <p className="text-lg leading-relaxed text-[#71717A]">
              Currently in my final year at VRSEC, pursuing a B.Tech in AI &amp; Data Science. But the real learning has been outside the classroom — through internships, hackathons, and building things that actually matter.
            </p>

            <p className="text-lg leading-relaxed text-[#71717A]">
              When I&apos;m not building AI systems, I&apos;m probably writing about building AI systems. I share my learnings on LinkedIn — sometimes about breakthroughs, sometimes about things that didn&apos;t work. Both feel equally important.
            </p>

            <div className="pt-6">
              <a
                href="https://linkedin.com/in/charansaiponnada"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-[#2563EB] hover:text-[#1D4ED8] transition-colors group"
              >
                Read more on LinkedIn
                <span className="group-hover:translate-x-1 transition-transform">→</span>
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}