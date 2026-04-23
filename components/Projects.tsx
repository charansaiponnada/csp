'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { GithubLogo, ArrowSquareOut, BookOpen } from '@phosphor-icons/react'

const projects = [
  {
    title: 'Intelli-Credit',
    tagline: 'Built at a hackathon. Used in real credit decisions.',
    description: 'Credit appraisal takes days. We got it down to minutes — not by throwing more models at it, but by designing a system where every number is traceable. 500+ page reports processed. 2nd place at YUVAAN 2026. Won the prototype round, lost shortlisting, kept building anyway.',
    whatWorked: [
      'VectorLess RAG: 98% lower API overhead vs standard embedding approaches',
      'Multi-agent pipeline that doesn\'t hallucinate financial data',
      'Credit Appraisal Memo generated in under 5 minutes',
    ],
    stack: ['Python', 'Gemini 2.5', 'Streamlit', 'Flask', 'Tavily Search', 'Databricks'],
    github: 'https://github.com/charansaiponnada/VIVIRITY',
    demo: undefined,
    paper: undefined,
    stars: '2nd at YUVAAN 2026',
    color: '#2563EB',
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
    stars: 'Conference ready',
    color: '#059669',
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
    stars: 'Published — ISAECT 2025',
    color: '#7C3AED',
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
    stars: 'Research journey',
    color: '#DC2626',
  },
]

export default function Projects() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="projects" className="py-32 bg-[#FAFAF9]">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <span className="text-[#2563EB] font-mono text-sm tracking-wider uppercase">Projects</span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4">
            What I&apos;ve actually built
          </h2>
          <p className="text-[#71717A] mt-4 max-w-2xl">
            Not just demos. Things that went through iteration, failure, and sometimes got called off for the right reasons.
          </p>
        </motion.div>

        <div className="space-y-12">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group"
            >
              <div className="bg-white rounded-2xl border border-[#E4E4E7] hover:border-[#2563EB]/30 transition-all overflow-hidden">
                <div className="p-8 md:p-12">
                  <div className="flex flex-col md:flex-row md:items-start gap-6">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <span 
                          className="w-3 h-3 rounded-full"
                          style={{ backgroundColor: project.color }}
                        />
                        <span className="text-sm text-[#71717A] font-mono">{project.stars}</span>
                      </div>
                      
                      <h3 className="text-2xl font-bold mb-1">{project.title}</h3>
                      <p className="text-[#2563EB] text-lg mb-4">{project.tagline}</p>
                      
                      <p className="text-[#71717A] leading-relaxed mb-6">
                        {project.description}
                      </p>

                      <div className="space-y-2 mb-6">
                        <p className="text-sm font-medium text-[#18181B]">What actually worked:</p>
                        {project.whatWorked.map((item, i) => (
                          <div key={i} className="flex items-start gap-2">
                            <span className="text-[#059669] mt-0.5">→</span>
                            <span className="text-sm text-[#71717A]">{item}</span>
                          </div>
                        ))}
                      </div>

                      <div className="flex flex-wrap gap-2">
                        {project.stack.map((tech) => (
                          <span
                            key={tech}
                            className="px-3 py-1 bg-[#F4F4F5] text-[#71717A] text-xs font-mono rounded-full"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-3 md:items-end">
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-4 py-2 bg-[#18181B] text-white text-sm font-medium rounded-lg hover:bg-[#18181B]/80 transition-colors"
                      >
                        <GithubLogo size={16} />
                        View Code
                      </a>
                      {project.demo && (
                        <a
                          href={project.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 px-4 py-2 bg-[#059669] text-white text-sm font-medium rounded-lg hover:bg-[#059669]/80 transition-colors"
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
                          className="flex items-center gap-2 px-4 py-2 bg-[#7C3AED] text-white text-sm font-medium rounded-lg hover:bg-[#7C3AED]/80 transition-colors"
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