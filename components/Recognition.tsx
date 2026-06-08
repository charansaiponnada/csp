'use client'

import { motion } from 'framer-motion'
import { ArrowUpRight } from '@phosphor-icons/react'

export default function Recognition() {
  return (
    <section id="research" className="py-32 px-6 bg-dribbble-canvas border-t border-dribbble-border">
      <div className="max-w-[1400px] mx-auto">
        
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="bg-dribbble-accent rounded-[40px] p-8 md:p-16 lg:p-24 text-black relative overflow-hidden"
        >
          {/* Decorative graphic */}
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-white opacity-20 blur-[100px] rounded-full pointer-events-none" />

          <div className="relative z-10 flex flex-col lg:flex-row gap-16 justify-between">
            <div className="lg:w-1/2">
              <span className="inline-block px-4 py-2 border-2 border-black rounded-full font-mono text-sm font-bold uppercase tracking-widest mb-8">
                Primary Author
              </span>
              <h2 className="font-display text-[48px] md:text-[72px] font-bold tracking-tighter uppercase leading-[0.9] mb-8">
                Vision-Language Navigation.
              </h2>
              <p className="font-sans text-xl font-medium leading-relaxed mb-12 max-w-lg">
                Published research in ISAECT 2025. Built a multimodal navigation system fine-tuning BLIP via 3-stage LoRA for complex traffic environments.
              </p>
              <a 
                href="https://huggingface.co/charansaiponnada" 
                target="_blank"
                className="inline-flex items-center gap-3 bg-black text-dribbble-accent font-display font-bold text-lg px-8 py-4 rounded-full hover:bg-white hover:text-black transition-colors active:scale-95"
              >
                Access Research <ArrowUpRight weight="bold" />
              </a>
            </div>

            <div className="lg:w-1/3 flex flex-col justify-center gap-8 border-t-2 lg:border-t-0 lg:border-l-2 border-black/20 pt-8 lg:pt-0 lg:pl-16">
              <div>
                <div className="font-display text-[64px] font-bold leading-none mb-2">+15.6%</div>
                <div className="font-mono text-sm font-bold uppercase tracking-widest">Performance Gain</div>
              </div>
              <div>
                <div className="font-display text-[64px] font-bold leading-none mb-2">427</div>
                <div className="font-mono text-sm font-bold uppercase tracking-widest">Traffic Scenes</div>
              </div>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  )
}
