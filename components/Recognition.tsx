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
          className="bg-dribbble-accent rounded-[3rem] p-8 md:p-16 lg:p-24 text-black relative overflow-hidden"
        >
          {/* Decorative graphic */}
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-white opacity-20 blur-[100px] rounded-full pointer-events-none" />

          <div className="relative z-10 flex flex-col lg:flex-row gap-16 justify-between items-center">
            <div className="lg:w-1/2">
              <span className="inline-block px-6 py-3 border-2 border-black rounded-full font-mono text-sm font-bold uppercase tracking-[0.2em] mb-8">
                Primary Author
              </span>
              <h2 className="font-display text-[clamp(3rem,6vw,6rem)] font-extrabold tracking-tighter uppercase leading-[0.85] mb-8">
                Vision-Language Navigation.
              </h2>
              <p className="font-sans text-xl font-bold leading-relaxed mb-12 max-w-lg opacity-80">
                Published research in ISAECT 2025. Built a multimodal navigation system fine-tuning BLIP via 3-stage LoRA for complex traffic environments.
              </p>
              <a 
                href="https://huggingface.co/charansaiponnada" 
                target="_blank"
                className="inline-flex items-center gap-3 bg-black text-dribbble-accent font-display font-extrabold text-lg px-10 py-5 rounded-full hover:bg-white hover:text-black transition-all active:scale-95 uppercase tracking-wide"
              >
                Access Research <ArrowUpRight weight="bold" />
              </a>
            </div>

            <div className="lg:w-1/3 flex flex-col justify-center gap-12 border-t-4 lg:border-t-0 lg:border-l-4 border-black/10 pt-12 lg:pt-0 lg:pl-16 w-full">
              <div>
                <div className="font-display text-[80px] font-extrabold leading-none mb-2 tracking-tighter">+15.6%</div>
                <div className="font-mono text-sm font-bold uppercase tracking-[0.2em] opacity-60">Performance Gain</div>
              </div>
              <div>
                <div className="font-display text-[80px] font-extrabold leading-none mb-2 tracking-tighter">427</div>
                <div className="font-mono text-sm font-bold uppercase tracking-[0.2em] opacity-60">Traffic Scenes</div>
              </div>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  )
}
