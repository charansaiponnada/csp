'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

const skillGroups = [
  {
    title: 'AI / ML',
    skills: ['PyTorch', 'TensorFlow', 'Keras', 'LoRA', 'Fine-Tuning'],
  },
  {
    title: 'LLM Systems',
    skills: ['RAG', 'Prompt Eng.', 'LangChain', 'LLM Eval', 'Vector Retrieval'],
  },
  {
    title: 'Backend',
    skills: ['FastAPI', 'Flask', 'Node.js', 'REST APIs', 'Microservices'],
  },
  {
    title: 'Data Engineering',
    skills: ['Pandas', 'NumPy', 'PySpark', 'MySQL', 'MongoDB', 'ChromaDB'],
  },
  {
    title: 'Cloud & Deploy',
    skills: ['AWS', 'GCP', 'Docker', 'Scalable Inference', 'Git'],
  },
  {
    title: 'Frontend',
    skills: ['Next.js', 'React', 'Streamlit', 'Gradio'],
  },
]

export default function Skills() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="skills" className="py-32 bg-[#0A0A0A] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="mb-24 text-center"
        >
          <span className="text-[#E87E53] font-mono text-[10px] tracking-[0.4em] uppercase mb-4 block">03 / Tech Stack</span>
          <h2 className="font-display text-5xl md:text-7xl font-medium tracking-tight">Abilities <span className="text-white/20">&</span> Tools</h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillGroups.map((group, groupIndex) => (
            <motion.div
              key={group.title}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.8, delay: groupIndex * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="glass p-8 rounded-[2rem] group hover:border-white/20 transition-all"
            >
              <h4 className="text-white/30 font-mono text-[10px] tracking-widest uppercase mb-8">{group.title}</h4>
              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-4 py-2 bg-white/5 border border-white/5 text-white/50 text-xs font-mono rounded-full group-hover:border-white/10 group-hover:text-white transition-all"
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