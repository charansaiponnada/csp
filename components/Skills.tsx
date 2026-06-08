'use client'

import { motion } from 'framer-motion'
import { Cpu, Atom, Database, Cloud, Code, Monitor } from '@phosphor-icons/react'

const skillGroups = [
  {
    title: 'AI / ML Core',
    icon: Cpu,
    skills: ['PyTorch', 'TensorFlow', 'LoRA', 'Fine-Tuning', 'PEFT'],
    color: 'blue'
  },
  {
    title: 'Neural Systems',
    icon: Atom,
    skills: ['RAG', 'LangChain', 'LLM Eval', 'Prompt Eng.', 'Multi-Agent'],
    color: 'purple'
  },
  {
    title: 'Data Laboratory',
    icon: Database,
    skills: ['Pandas', 'NumPy', 'MongoDB', 'MySQL', 'ChromaDB'],
    color: 'green'
  },
  {
    title: 'Backend / APIs',
    icon: Code,
    skills: ['FastAPI', 'Flask', 'Node.js', 'REST APIs', 'Microservices'],
    color: 'orange'
  },
  {
    title: 'Cloud / Ops',
    icon: Cloud,
    skills: ['AWS', 'GCP', 'Docker', 'CI/CD', 'Git'],
    color: 'cyan'
  },
  {
    title: 'Visual / UI',
    icon: Monitor,
    skills: ['Next.js', 'React', 'Framer Motion', 'Tailwind', 'Gradio'],
    color: 'pink'
  }
]

export default function Skills() {
  return (
    <section id="skills" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4 uppercase">Operational <span className="text-slate-500">Stack.</span></h2>
          <p className="text-slate-400 font-light max-w-xl mx-auto text-center">High-performance tools for intelligence, systems, and visual engineering.</p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillGroups.map((group, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="spatial-card p-8 group"
            >
              <div className="flex items-center gap-4 mb-8">
                <div className={`w-12 h-12 rounded-2xl flex items-center justify-center bg-white/[0.03] group-hover:scale-110 transition-transform`}>
                  <group.icon size={24} className="text-slate-300" />
                </div>
                <h3 className="text-sm font-bold uppercase tracking-widest text-white">{group.title}</h3>
              </div>
              
              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <span 
                    key={skill} 
                    className="px-3 py-1.5 glass rounded-xl text-[10px] font-mono text-slate-500 hover:text-white transition-colors uppercase tracking-widest"
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
