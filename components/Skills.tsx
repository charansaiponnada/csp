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
    <section id="skills" className="bg-white relative overflow-hidden border-t border-black/5">
      <div className="grid lg:grid-cols-4 w-full">
        {/* Header Cell */}
        <div className="lg:col-span-1 p-12 border-r border-b border-black/5 flex flex-col justify-between min-h-[400px]">
          <div>
            <span className="text-[#0055FF] font-mono text-[10px] tracking-[0.4em] uppercase mb-4 block">03 / STACK</span>
            <h2 className="font-display text-5xl font-bold tracking-tight uppercase text-black leading-none">OPERATIONAL<br/>STACK</h2>
          </div>
          <p className="text-black/30 text-xs font-light leading-relaxed max-w-[200px]">
            High-performance tools for intelligence, design, and behavioral engineering.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="lg:col-span-3 grid md:grid-cols-3">
          {skillGroups.map((group, groupIndex) => (
            <motion.div
              key={group.title}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: groupIndex * 0.1 }}
              className="p-12 border-r border-b border-black/5 hover:bg-black/[0.02] transition-all group"
            >
              <h4 className="text-[#0055FF] font-mono text-[10px] tracking-widest uppercase mb-10">{group.title}</h4>
              <div className="flex flex-col gap-y-4">
                {group.skills.map((skill) => (
                  <div key={skill} className="flex items-center gap-3 group/skill">
                    <div className="w-1 h-1 rounded-full bg-[#0055FF]/40 group-hover/skill:bg-[#0055FF] transition-colors" />
                    <span className="text-black/40 text-xs font-mono tracking-tight group-hover/skill:text-black transition-colors uppercase">
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