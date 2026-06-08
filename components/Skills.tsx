'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

const skillGroups = [
  {
    title: 'AI / ML Core',
    skills: ['PyTorch', 'TensorFlow', 'LoRA', 'Fine-Tuning', 'PEFT'],
    image: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&q=80&w=400'
  },
  {
    title: 'Neural Systems',
    skills: ['RAG', 'LangChain', 'LLM Eval', 'Prompt Eng.', 'Multi-Agent'],
    image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=400'
  },
  {
    title: 'Data & Ops',
    skills: ['FastAPI', 'Pandas', 'MongoDB', 'AWS', 'Docker'],
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&q=80&w=400'
  }
]

export default function Skills() {
  return (
    <section id="skills" className="bg-apple-canvas py-[80px] w-full flex flex-col items-center">
      <div className="max-w-[1024px] w-full px-6">
        
        <div className="text-center mb-16">
          <h2 className="font-display text-[40px] font-semibold leading-[1.1] tracking-apple-tight text-apple-ink mb-2">
            Operational Stack.
          </h2>
          <p className="font-sans text-apple-body text-apple-ink-muted">
            The foundation for reliable intelligence systems.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {skillGroups.map((group, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-apple-canvas border border-apple-hairline rounded-[18px] p-6 flex flex-col items-center text-center"
            >
              <div className="relative w-full aspect-square mb-6 rounded-lg overflow-hidden bg-apple-parchment">
                <Image
                  src={group.image}
                  alt={group.title}
                  fill
                  className="object-cover opacity-90"
                />
              </div>
              
              <h3 className="font-sans text-[17px] font-semibold tracking-[-0.022em] text-apple-ink mb-2">
                {group.title}
              </h3>
              
              <p className="font-sans text-[17px] font-normal leading-[1.47] text-apple-ink-muted">
                {group.skills.join(', ')}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  )
}
