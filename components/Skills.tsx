'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

const skillGroups = [
  {
    title: 'AI / ML Core',
    skills: ['PyTorch', 'TensorFlow', 'Keras', 'LoRA', 'Fine-Tuning', 'PEFT'],
  },
  {
    title: 'Neural Architectures',
    skills: ['RAG', 'Prompt Eng.', 'LangChain', 'LLM Eval', 'Vector Retrieval', 'Multi-Agent'],
  },
  {
    title: 'System Backend',
    skills: ['FastAPI', 'Flask', 'Node.js', 'REST APIs', 'Microservices', 'Inference Ops'],
  },
  {
    title: 'Data Laboratory',
    skills: ['Pandas', 'NumPy', 'MySQL', 'MongoDB', 'ChromaDB', 'VectorDB'],
  },
  {
    title: 'Cloud Deployment',
    skills: ['AWS', 'GCP', 'Docker', 'Git', 'CI/CD'],
  },
  {
    title: 'Interface',
    skills: ['Next.js', 'React', 'Streamlit', 'Gradio', 'Tailwind'],
  },
]

export default function Skills() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="skills" className="bg-white relative max-w-7xl mx-auto border-t border-black/5">
      <div className="grid lg:grid-cols-12 w-full border-l border-black/5">
        {/* Section Header */}
        <div className="lg:col-span-4 p-8 md:p-12 border-r border-b border-black/5 flex flex-col min-h-[400px]">
          <span className="text-[#0055FF] font-mono text-[9px] tracking-[0.4em] uppercase mb-12 block">05 / Stack</span>
          <h2 className="font-display text-4xl md:text-5xl font-bold tracking-tight uppercase text-black leading-[0.9] mt-auto">
            Operational<br />
            Stack.
          </h2>
          <p className="text-black/40 text-xs font-light mt-8 leading-relaxed max-w-[250px]">
            High-performance tools for intelligence, design, and behavioral engineering.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="lg:col-span-8 grid md:grid-cols-3">
          {skillGroups.map((group, groupIndex) => (
            <motion.div
              key={group.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, delay: groupIndex * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="p-8 md:p-12 border-r border-b border-black/5 hover:bg-black/[0.01] transition-all group"
            >
              <h4 className="text-[#0055FF] font-mono text-[10px] tracking-widest uppercase mb-10">{group.title}</h4>
              <div className="flex flex-col gap-y-4">
                {group.skills.map((skill) => (
                  <div key={skill} className="flex items-center gap-4 group/skill">
                    <div className="w-1 h-1 rounded-full bg-black/10 group-hover/skill:bg-[#0055FF] transition-colors" />
                    <span className="text-black/50 text-xs font-mono tracking-tight group-hover/skill:text-black transition-colors uppercase">
                      {skill}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
