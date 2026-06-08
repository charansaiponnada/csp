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
    title: 'Data & Backend',
    skills: ['FastAPI', 'Pandas', 'MongoDB', 'REST APIs', 'MySQL'],
  },
  {
    title: 'Infrastructure',
    skills: ['AWS', 'GCP', 'Docker', 'CI/CD', 'Git'],
  }
]

export default function Skills() {
  return (
    <section id="skills" className="py-[96px] px-6">
      <div className="max-w-[1200px] mx-auto">
        
        <div className="mb-12">
          <h2 className="font-display text-[36px] md:text-[48px] tracking-claude-tight text-claude-ink mb-4">
            Operational Stack
          </h2>
          <p className="font-sans text-[18px] text-claude-muted max-w-2xl">
            The foundation for reliable intelligence systems, from deep learning primitives to scalable backend orchestration.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillGroups.map((group, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              className="claude-card"
            >
              <h3 className="font-sans text-[18px] font-medium text-claude-ink mb-6 pb-4 border-b border-claude-hairline">
                {group.title}
              </h3>
              
              <ul className="space-y-4">
                {group.skills.map((skill) => (
                  <li key={skill} className="font-sans text-[16px] text-claude-body flex items-center gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-claude-muted shrink-0" />
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
