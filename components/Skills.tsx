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

        {/* Dense Typography Wall instead of cards */}
        <div className="relative w-[150%] md:w-[120%] -ml-[25%] md:-ml-[10%] rotate-[-2deg]">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1 }}
            className="flex flex-wrap justify-center gap-4 md:gap-8"
          >
            {allSkills.map((skill, i) => (
              <span 
                key={i} 
                className={`font-display font-extrabold uppercase tracking-tighter leading-none transition-colors duration-500 cursor-crosshair
                  ${i % 3 === 0 ? 'text-[40px] md:text-[80px] text-dribbble-accent hover:text-white' : 
                    i % 2 === 0 ? 'text-[60px] md:text-[120px] text-outline hover:text-dribbble-accent' : 
                    'text-[30px] md:text-[60px] text-dribbble-surface-1 hover:text-white'}`}
              >
                {skill}
              </span>
            ))}
          </motion.div>
        </div>

      </div>
    </section>
  )
}
