'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

const skillGroups = [
  {
    title: 'AI / ML Core',
    skills: ['PyTorch', 'TensorFlow', 'Keras', 'SciPy', 'LoRA Fine-tuning', 'Evaluation'],
  },
  {
    title: 'LLM Systems',
    skills: ['RAG', 'Vector Retrieval', 'Prompt Engineering', 'LLM Evaluation', 'LangChain'],
  },
  {
    title: 'Backend & APIs',
    skills: ['FastAPI', 'Flask', 'REST APIs', 'API Integration', 'Microservices'],
  },
  {
    title: 'Frontend',
    skills: ['Next.js', 'React', 'HTML/CSS', 'JavaScript', 'Streamlit'],
  },
  {
    title: 'Data Engineering',
    skills: ['Pandas', 'NumPy', 'PySpark', 'MySQL', 'MongoDB', 'ChromaDB'],
  },
  {
    title: 'Cloud & Deployment',
    skills: ['AWS', 'GCP', 'Model Serving', 'Docker', 'Git'],
  },
]

export default function Skills() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="skills" className="py-32 bg-white relative">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="mb-20"
        >
          <span className="text-[#C45D35] font-mono text-xs tracking-widest uppercase">Skills</span>
          <h2 className="text-4xl md:text-5xl font-display mt-4">
            The stack behind the work
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-[#E5E2DB]">
          {skillGroups.map((group, groupIndex) => (
            <motion.div
              key={group.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: groupIndex * 0.1, ease: 'easeOut' }}
              className="bg-white p-8 hover:bg-[#F7F5F0] transition-colors"
            >
              <h3 className="text-xs font-mono tracking-widest uppercase text-[#9A9A9A] mb-6">{group.title}</h3>
              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill, skillIndex) => (
                  <span
                    key={skill}
                    className="px-4 py-2 bg-[#EDEAE4] text-[#6B6B6B] text-sm font-mono border border-[#E5E2DB] hover:border-[#C45D35] hover:text-[#C45D35] transition-colors cursor-default"
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