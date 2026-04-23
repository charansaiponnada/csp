'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

const skillGroups = [
  {
    title: 'AI / ML Core',
    skills: ['PyTorch', 'TensorFlow', 'Keras', 'SciPy', 'Model Fine-Tuning (LoRA)', 'Evaluation Metrics'],
  },
  {
    title: 'LLM Systems',
    skills: ['RAG', 'Vector Retrieval', 'Non-Vector Retrieval', 'Prompt Engineering', 'LLM Evaluation', 'LangChain'],
  },
  {
    title: 'Backend & APIs',
    skills: ['FastAPI', 'Flask', 'Node.js', 'REST APIs', 'API Integration', 'Microservices'],
  },
  {
    title: 'Frontend',
    skills: ['Next.js', 'React', 'HTML/CSS', 'JavaScript'],
  },
  {
    title: 'Data Engineering',
    skills: ['Pandas', 'NumPy', 'PySpark', 'Dask', 'MySQL', 'MongoDB'],
  },
  {
    title: 'Cloud & Deployment',
    skills: ['AWS', 'GCP', 'Model Serving', 'Scalable Inference', 'Docker', 'Git'],
  },
]

export default function Skills() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="skills" className="py-32">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <span className="text-[#2563EB] font-mono text-sm tracking-wider uppercase">Skills</span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4">
            The stack behind the work
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillGroups.map((group, groupIndex) => (
            <motion.div
              key={group.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: groupIndex * 0.1 }}
              className="bg-white p-6 rounded-2xl border border-[#E4E4E7] hover:border-[#2563EB]/30 transition-colors"
            >
              <h3 className="text-lg font-semibold mb-4 text-[#18181B]">{group.title}</h3>
              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill, skillIndex) => (
                  <motion.span
                    key={skill}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.3, delay: groupIndex * 0.1 + skillIndex * 0.05 }}
                    whileHover={{ scale: 1.05 }}
                    className="px-3 py-2 bg-[#F4F4F5] text-[#71717A] text-sm font-mono rounded-lg cursor-default hover:bg-[#2563EB] hover:text-white transition-colors"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}