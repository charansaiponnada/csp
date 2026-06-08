'use client'

import { motion } from 'framer-motion'

const skillGroups = [
  {
    title: 'AI / ML Core',
    skills: ['PyTorch', 'TensorFlow', 'LoRA', 'PEFT'],
  },
  {
    title: 'Neural Systems',
    skills: ['RAG', 'LangChain', 'LLM Eval', 'Multi-Agent'],
  },
  {
    title: 'Data & Backend',
    skills: ['Pandas', 'MongoDB', 'MySQL', 'ChromaDB'],
  },
  {
    title: 'Cloud & Ops',
    skills: ['FastAPI', 'AWS', 'Docker', 'CI/CD'],
  }
]

export default function Skills() {
  return (
    <section id="skills" className="py-32 px-6 bg-dribbble-surface-2 border-t border-dribbble-border">
      <div className="max-w-[1400px] mx-auto">
        
        <div className="text-center mb-24">
          <h2 className="font-display text-[60px] md:text-[100px] font-bold tracking-tighter uppercase leading-[0.8] mb-6">
            Technical <br /> <span className="text-dribbble-accent">Skills.</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillGroups.map((group, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: i * 0.1 }}
              className="bg-dribbble-surface-1 border border-dribbble-border rounded-3xl p-8 hover:border-dribbble-accent transition-colors group"
            >
              <h3 className="font-mono text-sm font-bold uppercase tracking-widest text-dribbble-accent mb-8">
                {group.title}
              </h3>
              
              <div className="flex flex-col gap-4">
                {group.skills.map((skill) => (
                  <div 
                    key={skill} 
                    className="font-sans text-xl font-bold text-white group-hover:translate-x-2 transition-transform"
                  >
                    {skill}
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
