'use client'

import { motion } from 'framer-motion'

const skillGroups = [
  {
    title: 'AI / ML Core',
    skills: ['PyTorch', 'TensorFlow', 'LoRA', 'Fine-Tuning', 'PEFT'],
  },
  {
    title: 'Neural Systems',
    skills: ['RAG', 'LangChain', 'LLM Eval', 'Prompt Eng.', 'Multi-Agent'],
  },
  {
    title: 'Backend / APIs',
    skills: ['FastAPI', 'Flask', 'Node.js', 'REST APIs', 'Microservices'],
  },
  {
    title: 'Data & Ops',
    skills: ['Pandas', 'NumPy', 'MongoDB', 'AWS', 'Docker'],
  }
]

export default function Skills() {
  return (
    <section id="skills" className="border-t border-black/5">
      <div className="max-w-7xl mx-auto border-x border-black/5 flex flex-col md:flex-row">
        
        <div className="md:w-1/3 p-6 md:p-12 border-b md:border-b-0 md:border-r border-black/5 bg-[#0055FF]/[0.02]">
          <span className="text-[#0055FF] font-mono text-[9px] tracking-[0.4em] uppercase mb-12 block">03 / Matrices</span>
          <h2 className="font-display text-4xl md:text-5xl font-bold tracking-tight uppercase leading-[0.9] mb-6">
            Operational<br /> Stack
          </h2>
          <p className="text-black/40 text-xs font-light leading-relaxed max-w-[200px]">
            The toolset enabling reliable intelligence systems and backend execution.
          </p>
        </div>

        <div className="md:w-2/3 p-6 md:p-12 grid sm:grid-cols-2 gap-x-12 gap-y-16">
          {skillGroups.map((group, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <h3 className="text-[10px] font-bold font-mono uppercase tracking-[0.2em] mb-6 pb-4 border-b border-black/5 text-black">
                {group.title}
              </h3>
              <ul className="space-y-3">
                {group.skills.map((skill) => (
                  <li key={skill} className="text-sm text-black/60 font-light tracking-wide">
                    {skill}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
        
      </div>
    </section>
  )
}
