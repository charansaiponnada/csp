'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { GithubLogo, ArrowSquareOut, BookOpen } from '@phosphor-icons/react'

interface TimelineEntry {
  title: string
  organization: string
  date: string
  description: string[]
  tech: string[]
  links?: { label: string; href: string; icon: 'github' | 'demo' | 'paper' }[]
  highlight?: string
}

const entries: TimelineEntry[] = [
  {
    title: 'AI Engineer Intern',
    organization: 'Aynstyn Technologies Pvt. Ltd.',
    date: 'Jan 2026 — Present',
    highlight: 'Making AI actually reliable in production',
    description: [
      'Engineered AI-powered SaaS modules for interview simulation and candidate assessment. Then realized the harder problem wasn\'t the AI — it was knowing if the AI was actually trustworthy.',
      'Built an evaluation pipeline across 200+ test cases that answered that question. Evaluation coverage improved by 2x.',
      'Optimized prompt architectures and inference workflows. Reduced unstable outputs. Made responses consistent across edge cases.',
    ],
    tech: ['FastAPI', 'LangChain', 'PyTorch', 'LLM Evaluation', 'RAG'],
  },
  {
    title: 'Intelli-Credit — Credit Intelligence System',
    organization: 'YUVAAN 2026 @ IIT Hyderabad',
    date: '2026',
    highlight: '2nd place. Still felt like a win.',
    description: [
      'Credit appraisal takes weeks. We made it five minutes. Not by adding more models — by designing a system where every decision is traceable, every indicator cross-verified, every score explainable.',
      'Developed a VectorLess RAG pipeline achieving 98% lower API overhead. Processed 500+ page annual reports in under 5 minutes.',
      'Extracted 50+ financial risk indicators. Built a multi-agent decision pipeline for loan risk assessment.',
    ],
    tech: ['RAG', 'Multi-Agent Systems', 'Python', 'Logistic Regression', 'Financial Analysis'],
    links: [
      { label: 'GitHub', href: 'https://github.com/charansaiponnada/VIVIRITY', icon: 'github' },
    ],
  },
  {
    title: 'Vision-Language Assistive Navigation',
    organization: 'ISAECT 2025 — Published Research',
    date: '2025',
    highlight: 'Published paper on multimodal AI',
    description: [
      'Built multimodal assistive navigation system using BLIP vision-language model for scene understanding. Fine-tuned via 3-stage LoRA training on a 427-scene Indian traffic dataset.',
      'Achieved +15.6% improvement across BLEU, METEOR, ROUGE, and semantic similarity.',
      'Developed full ML pipeline covering dataset design, training workflow, evaluation framework, and model release.',
    ],
    tech: ['PyTorch', 'BLIP', 'LoRA', 'Computer Vision', 'NLP'],
    links: [
      { label: 'Paper', href: '#', icon: 'paper' },
      { label: 'Model', href: '#', icon: 'demo' },
    ],
  },
  {
    title: 'AyurMind — Domain-Specific RAG System',
    organization: 'Academic Project',
    date: '2025',
    highlight: '84% retrieval accuracy. 45% fewer hallucinations.',
    description: [
      'Built a RAG system over 1,200+ structured Ayurvedic knowledge entries. The tricky part wasn\'t retrieval — it was stopping the model from making things up.',
      'Added validation layers. Reduced hallucinations by 45%. Expert-rated answer quality went from 3.1 to 4.4.',
      'Achieved 84% Top-3 retrieval accuracy through optimized retrieval pipeline.',
    ],
    tech: ['RAG', 'LangChain', 'Vector Search', 'Python', 'Evaluation'],
    links: [
      { label: 'GitHub', href: 'https://github.com/charansaiponnada/AyurMind', icon: 'github' },
    ],
  },
  {
    title: 'B.Tech in AI & Data Science',
    organization: 'Velagapudi Ramakrishna Siddhartha Engineering College',
    date: '2023 — 2027',
    highlight: 'CGPA: 8.76',
    description: [
      'Currently in final year, focusing on AI systems, machine learning, and data engineering.',
      'Built projects spanning NLP, computer vision, and production ML systems.',
      'Active in hackathons and research, including multiple competitions at IITs.',
    ],
    tech: ['Python', 'Machine Learning', 'Deep Learning', 'Data Structures'],
  },
]

const getIcon = (icon: 'github' | 'demo' | 'paper') => {
  switch (icon) {
    case 'github':
      return GithubLogo
    case 'demo':
      return ArrowSquareOut
    case 'paper':
      return BookOpen
  }
}

export default function Timeline() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="timeline" className="py-32 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <span className="text-[#2563EB] font-mono text-sm tracking-wider uppercase">Work & Projects</span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4">
            The work behind the work
          </h2>
        </motion.div>

        <div className="relative">
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-[#E4E4E7] md:-translate-x-px" />

          <div className="space-y-16">
            {entries.map((entry, index) => {
              const isEven = index % 2 === 0
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 40 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className={`relative flex flex-col md:flex-row gap-8 ${isEven ? 'md:flex-row-reverse' : ''}`}
                >
                  <div className="flex-1" />
                  <div className="absolute left-0 md:left-1/2 w-4 h-4 bg-[#2563EB] rounded-full border-4 border-white md:-translate-x-1/2 -translate-y-1" />
                  <div className={`flex-1 ${isEven ? 'md:pr-12 md:text-right' : 'md:pl-12'}`}>
                    <div className="bg-[#FAFAF9] p-8 rounded-2xl border border-[#E4E4E7] hover:border-[#2563EB]/30 transition-colors group">
                      <div className="flex items-center gap-2 mb-2">
                        <span className="text-sm text-[#71717A] font-mono">{entry.date}</span>
                      </div>
                      <h3 className="text-xl font-semibold mb-1">{entry.title}</h3>
                      <p className="text-[#2563EB] text-sm mb-4">{entry.organization}</p>
                      {entry.highlight && (
                        <p className="text-sm text-[#059669] font-medium mb-4">→ {entry.highlight}</p>
                      )}
                      <ul className="space-y-2 text-[#71717A] text-sm">
                        {entry.description.map((desc, i) => (
                          <li key={i}>{desc}</li>
                        ))}
                      </ul>
                      <div className="flex flex-wrap gap-2 mt-4">
                        {entry.tech.map((t) => (
                          <span key={t} className="px-3 py-1 bg-[#F4F4F5] text-[#71717A] text-xs font-mono rounded-full">
                            {t}
                          </span>
                        ))}
                      </div>
                      {entry.links && (
                        <div className={`flex gap-4 mt-4 ${isEven ? 'md:justify-end' : ''}`}>
                          {entry.links.map((link) => {
                            const Icon = getIcon(link.icon)
                            return (
                              <a
                                key={link.label}
                                href={link.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-1 text-sm text-[#2563EB] hover:text-[#1D4ED8] transition-colors"
                              >
                                <Icon size={16} />
                                {link.label}
                              </a>
                            )
                          })}
                        </div>
                      )}
                    </div>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}