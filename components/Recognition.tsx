'use client'

import { motion } from 'framer-motion'
import { ArrowUpRight } from '@phosphor-icons/react'

export default function Recognition() {
  return (
    <section id="research" className="border-t border-black/5 bg-[#0055FF] text-white">
      <div className="max-w-7xl mx-auto border-x border-white/10">
        <div className="flex flex-col lg:flex-row">
          
          <div className="lg:w-1/3 p-6 md:p-12 border-b lg:border-b-0 lg:border-r border-white/10 flex flex-col justify-between min-h-[400px]">
            <span className="font-mono text-[9px] tracking-[0.4em] uppercase text-white/50 mb-12 block">04 / Publications</span>
            <h2 className="font-display text-4xl md:text-5xl font-bold tracking-tight uppercase leading-[0.9]">
              Academic <br /> Research
            </h2>
          </div>

          <div className="lg:w-2/3 p-6 md:p-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex items-center gap-4 mb-8">
                <span className="px-3 py-1 bg-white text-[#0055FF] text-[9px] font-bold font-mono uppercase tracking-widest">Primary Author</span>
                <span className="text-white/60 text-[10px] font-mono tracking-widest uppercase">ISAECT 2025</span>
              </div>
              
              <h3 className="font-display text-3xl md:text-5xl font-bold uppercase tracking-tight leading-[0.95] mb-8 max-w-2xl">
                Vision-Language Assistive Navigation System.
              </h3>
              
              <div className="grid md:grid-cols-2 gap-12 mb-12">
                <p className="text-white/80 text-sm leading-relaxed font-light">
                  Built a multimodal assistive navigation system using the BLIP vision-language model for deep scene understanding in complex, unstructured traffic environments.
                </p>
                <div className="space-y-4">
                  <div className="flex justify-between items-center border-b border-white/20 pb-2">
                    <span className="text-[10px] font-mono uppercase tracking-widest text-white/50">Performance Gain</span>
                    <span className="font-bold">+15.6%</span>
                  </div>
                  <div className="flex justify-between items-center border-b border-white/20 pb-2">
                    <span className="text-[10px] font-mono uppercase tracking-widest text-white/50">Training Method</span>
                    <span className="font-bold">3-Stage LoRA</span>
                  </div>
                  <div className="flex justify-between items-center border-b border-white/20 pb-2">
                    <span className="text-[10px] font-mono uppercase tracking-widest text-white/50">Dataset Size</span>
                    <span className="font-bold">427 Scenes</span>
                  </div>
                </div>
              </div>

              <a 
                href="https://huggingface.co/charansaiponnada" 
                target="_blank"
                className="inline-flex items-center gap-3 text-xs font-bold uppercase tracking-widest text-white hover:text-white/70 transition-colors"
              >
                Access Model & Paper <ArrowUpRight size={16} />
              </a>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  )
}
