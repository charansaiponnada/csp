'use client'

import { motion } from 'framer-motion'

const allSkills = [
  'PyTorch', 'TensorFlow', 'LoRA', 'PEFT', 'RAG Architecture', 'LangChain', 
  'LLM Evaluation', 'Multi-Agent', 'FastAPI', 'Pandas', 'MongoDB', 'MySQL', 
  'ChromaDB', 'AWS', 'Docker', 'CI/CD', 'Git'
]

export default function Skills() {
  return (
    <section id="skills" className="py-32 px-6 bg-dribbble-surface-2 border-t border-dribbble-border overflow-hidden">
      <div className="max-w-[1400px] mx-auto flex flex-col items-center">
        
        <div className="text-center mb-24 relative z-10">
          <h2 className="font-display text-[clamp(3rem,8vw,8rem)] font-extrabold tracking-[-0.04em] uppercase leading-[0.85] mb-6">
            Technical <br /> <span className="text-dribbble-accent">Arsenal.</span>
          </h2>
          <p className="font-sans text-xl text-dribbble-muted max-w-lg mx-auto font-medium">
            The foundation for reliable intelligence systems and backend infrastructure.
          </p>
        </div>

        {/* Dense Typography Wall - Aggressive & Alive */}
        <div className="relative w-[150%] md:w-[130%] -ml-[25%] md:-ml-[15%]">
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5 }}
            className="flex flex-wrap justify-center gap-x-8 gap-y-4 md:gap-x-12 md:gap-y-8"
          >
            {allSkills.map((skill, i) => (
              <motion.span 
                key={i} 
                initial={{ rotate: Math.random() * 4 - 2 }}
                whileHover={{ scale: 1.1, rotate: 0, color: '#D4FF00', zIndex: 20 }}
                className={`font-display font-black uppercase tracking-tighter leading-none transition-all duration-300 cursor-none select-none
                  ${i % 3 === 0 ? 'text-[50px] md:text-[100px] text-white' : 
                    i % 2 === 0 ? 'text-[70px] md:text-[140px] text-outline opacity-40 hover:opacity-100' : 
                    'text-[40px] md:text-[80px] text-dribbble-muted/30 hover:text-white'}`}
              >
                {skill}
              </motion.span>
            ))}
          </motion.div>
        </div>

      </div>
    </section>
  )
}
