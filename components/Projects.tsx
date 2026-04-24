'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { GithubLogo, ArrowSquareOut, BookOpen } from '@phosphor-icons/react'

const projects = [
  {
    title: 'Intelli-Credit',
    subtitle: 'AI-Powered Credit Decision Engine',
    context: 'Corporate credit appraisal is slow, fragmented, and often difficult to justify. Critical decisions depend on stitching together data from financial statements, GST filings, bank records, and external intelligence — most of it unstructured.',
    whatBuilt: [
      'End-to-end system that processes 500+ page financial documents',
      'Multi-stage pipeline: ingestion → cross-referencing → research → scoring',
      'Logistic regression model + Five Cs framework alignment',
      'Credit Appraisal Memo generated in under 5 minutes',
    ],
    whatChanged: '2nd Place at YUVAAN 2026 (IIT Hyderabad) — 7600+ registrations, Top 10 finalists, ₹1 lakh prize. System validated across multiple scenarios with Indian financial context (GST, CIBIL, RBI).',
    stack: ['Python', 'LangChain', 'ChromaDB', 'Logistic Regression', 'Streamlit'],
    github: 'https://github.com/charansaiponnada/VIVIRITY',
    demo: null,
    paper: null,
    badge: '2nd Place • YUVAAN 2026',
    year: '2026',
    featured: true,
  },
  {
    title: 'BLIP Fine-tuning',
    subtitle: 'Vision-Language Model for Indian Traffic Scenes',
    context: 'Standard BLIP models didn\'t understand Indian traffic scenes — signboards, vehicles, road conditions specific to Indian roads were poorly recognized.',
    whatBuilt: [
      '3-stage LoRA fine-tuning on custom 427-scene dataset',
      'Vision-language model specialized for Indian traffic',
      'Deployed on HuggingFace Hub',
    ],
    whatChanged: 'Improved mean Average Precision (mAP) by 18% on Indian traffic scenarios. Paper published at ISAECT 2025.',
    stack: ['PyTorch', 'BLIP', 'LoRA', 'OpenCV', 'HuggingFace'],
    github: 'https://github.com/charansaiponnada/blip-instance',
    demo: 'https://huggingface.co/Charansaiponnada/BLIP-BASE-INDIAN',
    paper: 'https://doi.org/10.1109/isaect68904.2025.11318802',
    badge: 'Published • ISAECT 2025',
    year: '2025',
    featured: false,
  },
  {
    title: 'AyurMind',
    subtitle: 'Multi-Agent RAG for Ayurvedic Medicine',
    context: 'Traditional Ayurvedic knowledge is vast but scattered. Building a system that retrieves accurate, bilingual (English + Hindi) information without hallucinating medical advice.',
    whatBuilt: [
      '4 specialized agents + orchestrator',
      'Bilingual support (English + Hindi)',
      'Ground truth validation layer',
    ],
    whatChanged: '84% top-3 retrieval accuracy. System designed to say "I don\'t know" rather than make up answers.',
    stack: ['Python', 'LangChain', 'ChromaDB', 'Gradio'],
    github: 'https://github.com/charansaiponnada/AyurMind',
    demo: null,
    paper: null,
    badge: 'Research',
    year: '2025',
    featured: false,
  },
  {
    title: 'EEG Meditation Classification',
    subtitle: 'Signal Processing for Brain-Computer Interfaces',
    context: 'Exploring whether EEG signals can classify meditation states. Three rigorous pipelines built, all evaluated with subject-wise cross-validation.',
    whatBuilt: [
      'Three complete EEG classification pipelines',
      'Subject-wise cross-validation',
      'Signal preprocessing and feature extraction',
    ],
    whatChanged: 'Performance plateaued at F1 0.78-0.80. Called it off when label quality emerged as the bottleneck — scientific rigor over chasing accuracy.',
    stack: ['Python', 'ML', 'Signal Processing', 'scikit-learn'],
    github: 'https://github.com/charansaiponnada/eeg-meditation-classification-study',
    demo: null,
    paper: null,
    badge: 'Research',
    year: '2025',
    featured: false,
  },
]

export default function Projects() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="projects" className="py-24 bg-[#FAFAFA] relative">
      <div className="max-w-5xl mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="mb-16"
        >
          <span className="text-[#A1A1A6] font-mono text-xs tracking-[0.2em] uppercase">Work</span>
          <h2 className="font-display text-3xl md:text-4xl mt-3 mb-4 text-[#1D1D1F]">
            Projects
          </h2>
          <p className="text-[#6E6E73] text-lg max-w-xl">
            Systems I&apos;ve built. Not demos — things that went through iteration, failure, and sometimes got called off for the right reasons.
          </p>
        </motion.div>

        <div className="space-y-16">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className={`${project.featured ? 'bg-white p-8 rounded-2xl border border-[#D2D2D7]' : ''}`}
            >
              <div className="grid lg:grid-cols-12 gap-8">
                <div className="lg:col-span-3">
                  <span className="text-[#A1A1A6] font-mono text-sm">{project.year}</span>
                  <div className="mt-3 flex items-center gap-2">
                    <span className="px-3 py-1 bg-[#007AFF]/10 text-[#007AFF] text-xs font-mono rounded-full">{project.badge}</span>
                  </div>
                </div>

                <div className="lg:col-span-9">
                  <h3 className="font-display text-2xl md:text-3xl mb-1 text-[#1D1D1F]">
                    {project.title}
                  </h3>
                  <p className="text-[#6E6E73] mb-6 font-mono text-sm">{project.subtitle}</p>
                  
                  <p className="text-[#6E6E73] leading-relaxed mb-6">
                    {project.context}
                  </p>

                  <div className="mb-6">
                    <p className="text-xs font-mono text-[#A1A1A6] tracking-widest uppercase mb-4">What I Built</p>
                    <ul className="space-y-2">
                      {project.whatBuilt.map((item, i) => (
                        <li key={i} className="flex items-start gap-3 text-[#6E6E73]">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#007AFF] mt-2 flex-shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mb-6 p-4 bg-[#F5F5F7] rounded-xl">
                    <p className="text-xs font-mono text-[#A1A1A6] tracking-widest uppercase mb-2">What Changed</p>
                    <p className="text-[#1D1D1F]">{project.whatChanged}</p>
                  </div>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.stack.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1.5 bg-[#F5F5F7] text-[#6E6E73] text-xs font-mono rounded-lg border border-[#D2D2D7]"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-3">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2 bg-[#1D1D1F] text-white font-mono text-sm rounded-lg hover:bg-[#3D3D3D] transition-colors"
                    >
                      <GithubLogo size={14} />
                      Code
                    </a>
                    {project.demo && (
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-4 py-2 border border-[#D2D2D7] text-[#1D1D1F] font-mono text-sm rounded-lg hover:border-[#007AFF] hover:text-[#007AFF] transition-colors"
                      >
                        <ArrowSquareOut size={14} />
                        Model
                      </a>
                    )}
                    {project.paper && (
                      <a
                        href={project.paper}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-4 py-2 border border-[#D2D2D7] text-[#1D1D1F] font-mono text-sm rounded-lg hover:border-[#007AFF] hover:text-[#007AFF] transition-colors"
                      >
                        <BookOpen size={14} />
                        Paper
                      </a>
                    )}
                  </div>
                </div>
              </div>

              {index < projects.length - 1 && (
                <div className="mt-12 h-px bg-[#D2D2D7]" />
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}