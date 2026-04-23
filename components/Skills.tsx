'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

const skillGroups = [
  {
    title: 'AI / ML',
    skills: ['PyTorch', 'TensorFlow', 'SciPy', 'LoRA', 'Evaluation'],
  },
  {
    title: 'LLM Systems',
    skills: ['RAG', 'Prompt Eng.', 'LLM Eval.', 'LangChain'],
  },
  {
    title: 'Backend',
    skills: ['FastAPI', 'Flask', 'REST APIs', 'Microservices'],
  },
  {
    title: 'Frontend',
    skills: ['Next.js', 'React', 'Streamlit', 'Gradio'],
  },
  {
    title: 'Data',
    skills: ['Pandas', 'NumPy', 'MySQL', 'MongoDB', 'ChromaDB'],
  },
  {
    title: 'Cloud',
    skills: ['AWS', 'GCP', 'Docker', 'Git'],
  },
]

export default function Skills() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="skills" className="py-32 bg-white relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-[1px] bg-[#E5E2DB]" />
      
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 60 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="mb-24"
        >
          <span className="text-[#9A9A9A] font-mono text-xs tracking-[0.3em] uppercase">— 04 / Skills</span>
          <h2 className="font-display text-4xl md:text-5xl mt-4">
            The stack behind the work
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
          {skillGroups.map((group, groupIndex) => (
            <motion.div
              key={group.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: groupIndex * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="group"
            >
              <p className="text-xs font-mono text-[#9A9A9A] tracking-[0.2em] uppercase mb-6">{group.title}</p>
              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-4 py-2 bg-[#F7F5F0] text-[#6B6B6B] text-sm font-mono border border-[#E5E2DB] group-hover:border-[#C45D35] group-hover:text-[#C45D35] transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}