'use client'

import { motion } from 'framer-motion'

export default function Recognition() {
  return (
    <section id="research" className="py-[96px] px-6">
      <div className="max-w-[1200px] mx-auto">
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-claude-primary rounded-[12px] p-[48px] md:p-[64px] flex flex-col md:flex-row gap-12 items-center justify-between shadow-xl"
        >
          <div className="flex-1">
            <span className="inline-block px-3 py-1 bg-white/20 text-white font-sans text-[12px] font-medium tracking-[1.5px] uppercase rounded-full mb-6">
              Primary Author
            </span>
            <h2 className="font-display text-[36px] md:text-[48px] tracking-claude-tight text-white mb-6 leading-[1.1]">
              Vision-Language Assistive Navigation System.
            </h2>
            <p className="font-sans text-[18px] text-white/90 max-w-xl mb-8 leading-[1.5]">
              Published research in ISAECT 2025. Built a multimodal navigation system fine-tuning BLIP via 3-stage LoRA, achieving +15.6% improvement in scene understanding across 427 complex traffic environments.
            </p>
            <a 
              href="https://huggingface.co/charansaiponnada" 
              target="_blank"
              className="inline-flex bg-claude-canvas text-claude-ink font-sans text-[14px] font-medium rounded-[8px] px-6 py-3 hover:bg-white transition-colors active:scale-[0.98]"
            >
              Access Paper & Models
            </a>
          </div>

          <div className="w-full md:w-1/3 grid grid-cols-2 md:grid-cols-1 gap-6">
            <div className="bg-white/10 rounded-[8px] p-6">
              <div className="font-display text-[36px] text-white mb-1 leading-none">+15.6%</div>
              <div className="font-sans text-[14px] text-white/80 font-medium">Performance Gain</div>
            </div>
            <div className="bg-white/10 rounded-[8px] p-6">
              <div className="font-display text-[36px] text-white mb-1 leading-none">427</div>
              <div className="font-sans text-[14px] text-white/80 font-medium">Unique Traffic Scenes</div>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  )
}
