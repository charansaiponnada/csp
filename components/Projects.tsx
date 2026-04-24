'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { GithubLogo, ArrowSquareOut, BookOpen } from '@phosphor-icons/react'

const projects = [
  {
    title: 'Intelli-Credit',
    tagline: 'Built at a hackathon. Used in real credit decisions.',
    description: 'Credit appraisal takes days. We got it down to minutes — not by throwing more models at it, but by designing a system where every number is traceable.',
    whatWorked: [
      'VectorLess RAG: 98% lower API overhead vs standard embedding',
      'Multi-agent pipeline that doesn\'t hallucinate financial data',
      'Credit Appraisal Memo in under 5 minutes',
    ],
    stack: ['Python', 'Gemini 2.5', 'Streamlit', 'Flask', 'Tavily'],
    github: 'https://github.com/charansaiponnada/VIVIRITY',
    badge: '2nd at YUVAAN 2026',
    year: '2026',
  },
  {
    title: 'BLIP Fine-tuning',
    tagline: 'When the base model isn\'t enough.',
    description: 'Standard BLIP didn\'t understand Indian traffic scenes. So we fine-tuned it — 3-stage LoRA on 427 scenes.',
    whatWorked: [
      'LoRA reduced compute significantly',
      '3-stage training on 427-scene dataset',
      'Model on HuggingFace',
    ],
    stack: ['PyTorch', 'BLIP', 'LoRA', 'OpenCV'],
    github: 'https://github.com/charansaiponnada/blip-instance',
    demo: 'https://huggingface.co/Charansaiponnada/BLIP-BASE-INDIAN',
    paper: 'https://doi.org/10.1109/isaect68904.2025.11318802',
    badge: 'ISAECT 2025',
    year: '2025',
  },
  {
    title: 'AyurMind',
    tagline: 'Multi-agent RAG that doesn\'t make up medical advice.',
    description: 'The hard part wasn\'t building a RAG system. The hard part was stopping it from confidently giving wrong answers.',
    whatWorked: [
      '4 specialized agents + orchestrator',
      '84% top-3 retrieval accuracy',
      'Bilingual support (English + Hindi)',
    ],
    stack: ['Python', 'LangChain', 'ChromaDB', 'Gradio'],
    github: 'https://github.com/charansaiponnada/AyurMind',
    badge: 'Conference ready',
    year: '2025',
  },
  {
    title: 'EEG Meditation Study',
    tagline: 'Sometimes the ceiling is the result.',
    description: 'Built three complete EEG pipelines. Performance plateaued at F1 0.78-0.80. Called it off. Label quality was the bottleneck.',
    whatWorked: [
      'Three rigorous pipelines, all evaluated',
      'Subject-wise cross-validation',
      'Scientific rigor > chasing accuracy',
    ],
    stack: ['Python', 'ML', 'Signal Processing'],
    github: 'https://github.com/charansaiponnada/eeg-meditation-classification-study',
    badge: 'Research',
    year: '2025',
  },
]

export default function Projects() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="projects" className="py-32 bg-[#F7F5F0] relative">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 60 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="mb-24"
        >
          <span className="text-[#9A9A9A] font-mono text-xs tracking-[0.3em] uppercase">— 03 / Projects</span>
          <h2 className="font-display text-4xl md:text-5xl mt-4 mb-6">
            What I&apos;ve actually built
          </h2>
          <p className="text-[#6B6B6B] text-lg font-light max-w-xl">
            Not just demos. Things that went through iteration, failure, and sometimes got called off for the right reasons.
          </p>
        </motion.div>

        <div className="space-y-16">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 80 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 1, delay: index * 0.15, ease: [0.16, 1, 0.3, 1] }}
              className="group"
            >
              <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-start">
                <div className="lg:col-span-1">
                  <span className="text-[#9A9A9A] font-mono text-xs">{project.year}</span>
                </div>

                <div className="lg:col-span-6">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="px-3 py-1 bg-[#EDEAE4] text-[#6B6B6B] text-xs font-mono">{project.badge}</span>
                  </div>
                  
                  <h3 className="font-display text-3xl md:text-4xl mb-2 group-hover:text-[#C45D35] transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-[#6B6B6B] mb-6 font-light">{project.tagline}</p>
                  
                  <p className="text-[#6B6B6B] leading-relaxed mb-8 max-w-lg">
                    {project.description}
                  </p>

                  <div className="space-y-2 mb-8">
                    <p className="text-xs font-mono text-[#9A9A9A] tracking-widest uppercase">What worked</p>
                    {project.whatWorked.map((item, i) => (
                      <div key={i} className="flex items-center gap-3">
                        <span className="w-1 h-1 rounded-full bg-[#C45D35]" />
                        <span className="text-sm text-[#6B6B6B]">{item}</span>
                      </div>
                    ))}
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {project.stack.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-[#EDEAE4] text-[#6B6B6B] text-xs font-mono border border-[#E5E2DB]"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="lg:col-span-4 lg:col-start-9">
                  <div className="flex flex-col gap-3">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group/btn flex items-center justify-center gap-2 px-6 py-4 bg-[#1A1A1A] text-white font-mono text-sm tracking-wide hover:bg-[#1A1A1A]/85 transition-all"
                    >
                      <GithubLogo size={16} />
                      <span>View Code</span>
                      <svg className="w-4 h-4 opacity-0 -translate-x-2 group-hover/btn:opacity-100 group-hover/btn:translate-x-0 transition-all" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M7 17L17 7M17 7H7M17 7V17"/>
                      </svg>
                    </a>
                    {project.demo && (
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group/btn flex items-center justify-center gap-2 px-6 py-4 border border-[#E5E2DB] text-[#1A1A1A] font-mono text-sm tracking-wide hover:border-[#C45D35] hover:text-[#C45D35] transition-all"
                      >
                        <ArrowSquareOut size={16} />
                        <span>HuggingFace</span>
                      </a>
                    )}
                    {project.paper && (
                      <a
                        href={project.paper}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group/btn flex items-center justify-center gap-2 px-6 py-4 border border-[#E5E2DB] text-[#1A1A1A] font-mono text-sm tracking-wide hover:border-[#C45D35] hover:text-[#C45D35] transition-all"
                      >
                        <BookOpen size={16} />
                        <span>Paper (DOI)</span>
                      </a>
                    )}
                  </div>
                </div>
              </div>

              {index < projects.length - 1 && (
                <div className="mt-16 mb-8 h-[1px] bg-[#E5E2DB]" />
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}