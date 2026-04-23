'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { GithubLogo, ArrowSquareOut, BookOpen, ArrowUpRight } from '@phosphor-icons/react'

const projects = [
  {
    title: 'Intelli-Credit',
    tagline: 'Built at a hackathon. Used in real credit decisions.',
    description: 'Credit appraisal takes days. We got it down to minutes — not by throwing more models at it, but by designing a system where every number is traceable. 500+ page reports processed. Won the prototype round, lost shortlisting, kept building anyway.',
    whatWorked: [
      'VectorLess RAG: 98% lower API overhead vs standard embedding approaches',
      'Multi-agent pipeline that doesn\'t hallucinate financial data',
      'Credit Appraisal Memo generated in under 5 minutes',
    ],
    stack: ['Python', 'Gemini 2.5', 'Streamlit', 'Flask', 'Tavily Search', 'Databricks'],
    github: 'https://github.com/charansaiponnada/VIVIRITY',
    demo: undefined,
    paper: undefined,
    badge: '2nd at YUVAAN 2026',
    color: '#C45D35',
  },
  {
    title: 'AyurMind',
    tagline: 'Multi-agent RAG that doesn\'t make up medical advice.',
    description: 'The hard part wasn\'t building a RAG system. The hard part was stopping it from confidently giving wrong answers about Ayurveda. Four agents, 1,200+ knowledge entries, and a lot of validation layers later — we got it to actually cite its sources.',
    whatWorked: [
      '4 specialized agents + orchestrator for grounded recommendations',
      '84% top-3 retrieval accuracy',
      'Bilingual support (English + Hindi)',
    ],
    stack: ['Python', 'LangChain', 'ChromaDB', 'OpenRouter', 'Gradio'],
    github: 'https://github.com/charansaiponnada/AyurMind',
    demo: undefined,
    paper: undefined,
    badge: 'Conference ready',
    color: '#8B4513',
  },
  {
    title: 'BLIP Fine-tuning',
    tagline: 'When the base model isn\'t enough.',
    description: 'Standard BLIP didn\'t understand Indian traffic scenes. So we fine-tuned it — 3-stage LoRA on 427 scenes. The numbers improved modestly (+15.6% across metrics), but more importantly, the captions started actually making sense for the context.',
    whatWorked: [
      'LoRA fine-tuning reduced compute requirements significantly',
      '3-stage LoRA training on 427-scene Indian traffic dataset',
      'Model deployed on HuggingFace',
    ],
    stack: ['PyTorch', 'BLIP', 'LoRA', 'OpenCV'],
    github: 'https://github.com/charansaiponnada/blip-instance',
    demo: 'https://huggingface.co/Charansaiponnada/BLIP-BASE-INDIAN',
    paper: 'https://doi.org/10.1109/isaect68904.2025.11318802',
    badge: 'ISAECT 2025',
    color: '#5C4033',
  },
  {
    title: 'EEG Meditation Study',
    tagline: 'Sometimes the ceiling is the result.',
    description: 'Built three complete EEG pipelines from scratch. Handcrafted features, region-based spectral, Riemannian geometry. Performance plateaued around F1 0.78-0.80 — same as published literature. Called it off. Label quality was the bottleneck, not the model.',
    whatWorked: [
      'Three rigorous pipelines, all evaluated',
      'Subject-wise cross-validation (no data leakage)',
      'Scientific rigor > chasing accuracy',
    ],
    stack: ['Python', 'Machine Learning', 'Signal Processing', 'Riemannian Geometry'],
    github: 'https://github.com/charansaiponnada/eeg-meditation-classification-study',
    demo: undefined,
    paper: undefined,
    badge: 'Research',
    color: '#4A3728',
  },
]

export default function Projects() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="projects" className="py-32 bg-[#F7F5F0] relative">
      <div className="absolute inset-0 bg-gradient-to-b from-white to-[#F7F5F0]" />
      
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="mb-20"
        >
          <span className="text-[#C45D35] font-mono text-xs tracking-widest uppercase">Projects</span>
          <h2 className="text-4xl md:text-5xl font-display mt-4 mb-6">
            What I&apos;ve actually built
          </h2>
          <p className="text-[#6B6B6B] mt-4 max-w-2xl text-lg font-light">
            Not just demos. Things that went through iteration, failure, and sometimes got called off for the right reasons.
          </p>
        </motion.div>

        <div className="space-y-16">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 60 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.15, ease: 'easeOut' }}
              className="group"
            >
              <div className="bg-white border border-[#E5E2DB] hover:border-[#C45D35]/30 transition-all">
                <div className="p-10 md:p-14">
                  <div className="flex flex-col lg:flex-row lg:items-start gap-10">
                    <div className="flex-1">
                      <div className="flex items-center gap-4 mb-4">
                        <span 
                          className="w-2 h-2 rounded-full"
                          style={{ backgroundColor: project.color }}
                        />
                        <span className="text-sm text-[#9A9A9A] font-mono tracking-wide">{project.badge}</span>
                      </div>
                      
                      <h3 className="text-3xl md:text-4xl font-display mb-2">{project.title}</h3>
                      <p className="text-[#C45D35] text-lg mb-6 font-light">{project.tagline}</p>
                      
                      <p className="text-[#6B6B6B] leading-relaxed mb-8 max-w-2xl">
                        {project.description}
                      </p>

                      <div className="space-y-3 mb-8">
                        <p className="text-xs font-mono tracking-widest uppercase text-[#9A9A9A]">What actually worked</p>
                        {project.whatWorked.map((item, i) => (
                          <div key={i} className="flex items-start gap-3">
                            <span className="text-[#C45D35] font-mono text-sm mt-0.5">—</span>
                            <span className="text-sm text-[#6B6B6B]">{item}</span>
                          </div>
                        ))}
                      </div>

                      <div className="flex flex-wrap gap-2">
                        {project.stack.map((tech) => (
                          <span
                            key={tech}
                            className="px-4 py-2 bg-[#EDEAE4] text-[#6B6B6B] text-sm font-mono border border-[#E5E2DB]"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="flex flex-col gap-3 lg:min-w-[200px]">
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center gap-2 px-6 py-3 bg-[#1A1A1A] text-white font-mono text-sm tracking-wide hover:bg-[#1A1A1A]/90 transition-colors"
                      >
                        <GithubLogo size={16} />
                        View Code
                        <ArrowUpRight size={14} />
                      </a>
                      {project.demo && (
                        <a
                          href={project.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center justify-center gap-2 px-6 py-3 bg-[#C45D35] text-white font-mono text-sm tracking-wide hover:bg-[#C45D35]/90 transition-colors"
                        >
                          <ArrowSquareOut size={16} />
                          HuggingFace
                        </a>
                      )}
                      {project.paper && (
                        <a
                          href={project.paper}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center justify-center gap-2 px-6 py-3 bg-[#EDEAE4] text-[#1A1A1A] font-mono text-sm tracking-wide hover:bg-[#E5E2DB] transition-colors border border-[#E5E2DB]"
                        >
                          <BookOpen size={16} />
                          Paper (DOI)
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}