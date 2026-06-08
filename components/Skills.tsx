'use client'

import { motion } from 'framer-motion'

const skillGroups = [
  {
    title: 'AI & ML Core',
    skills: ['PyTorch', 'TensorFlow', 'LoRA', 'Fine-Tuning', 'PEFT'],
  },
  {
    title: 'Neural Systems',
    skills: ['RAG Architecture', 'LangChain', 'LLM Evaluation', 'Prompt Engineering', 'Multi-Agent Flows'],
  },
  {
    title: 'Data & Backend',
    skills: ['FastAPI', 'Pandas', 'MongoDB', 'REST APIs', 'MySQL', 'ChromaDB'],
  },
  {
    title: 'Infrastructure',
    skills: ['AWS', 'GCP', 'Docker', 'CI/CD Pipelines', 'Git'],
  }
]

export default function Skills() {
  return (
    <section id="skills" className="py-[120px] px-6 bg-claude-surface-card">
      <div className="max-w-[1200px] mx-auto grid lg:grid-cols-12 gap-12 lg:gap-24">
        
        <div className="lg:col-span-5 flex flex-col">
          <h2 className="font-display text-[40px] md:text-[52px] tracking-claude-tight text-claude-ink leading-[1.05] mb-6">
            Operational <br /> Stack
          </h2>
          <p className="font-sans text-[16px] text-claude-muted leading-[1.6] max-w-sm">
            The foundation for reliable intelligence systems, moving away from fragmented scripts toward scalable backend orchestration.
          </p>
        </div>

        <div className="lg:col-span-7">
          <div className="grid sm:grid-cols-2 gap-x-12 gap-y-16">
            {skillGroups.map((group, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.8 }}
                className="flex flex-col"
              >
                {/* Impeccable Rule: Avoid cards if not needed. Use strong typographic hierarchy. */}
                <h3 className="font-sans text-[14px] font-medium tracking-[1.5px] uppercase text-claude-primary mb-6 border-b border-claude-hairline pb-4">
                  {group.title}
                </h3>
                
                <ul className="space-y-3">
                  {group.skills.map((skill) => (
                    <li key={skill} className="font-sans text-[16px] text-claude-ink">
                      {skill}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}
