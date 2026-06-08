'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

export default function Projects() {
  return (
    <section id="projects" className="bg-apple-tile-1 py-[80px] w-full flex flex-col items-center">
      <div className="max-w-[1024px] w-full px-6 flex flex-col items-center text-center">
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-display text-[40px] font-semibold leading-[1.1] tracking-apple-tight text-white mb-2">
            Intelli-Credit
          </h2>
          <p className="font-display text-[28px] font-normal leading-[1.14] tracking-[0.01em] text-white mb-6">
            Credit Risk Intelligence System.
          </p>
          <div className="flex items-center justify-center space-x-6 mb-12">
            <a 
              href="https://github.com/charansaiponnada/VIVIRITY" 
              className="bg-apple-blue text-white font-sans text-[17px] font-normal rounded-full px-[22px] py-[11px] btn-active-scale transition-transform"
            >
              View Source
            </a>
            <span className="font-sans text-[17px] font-normal text-apple-ink-muted">
              YUVAAN 2026
            </span>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="w-full"
        >
          <div className="relative w-full aspect-[16/9] rounded-2xl overflow-hidden product-shadow bg-apple-tile-2 flex items-center justify-center mb-16">
            <Image
              src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=2000"
              alt="VIVIRITY Intelli-Credit"
              fill
              className="object-cover opacity-80 mix-blend-luminosity"
            />
          </div>
        </motion.div>

        <div className="w-full border-t border-white/10 pt-16 flex flex-col md:flex-row gap-12 text-left">
          <div className="flex-1">
            <h3 className="font-display text-[34px] font-semibold leading-[1.47] tracking-[-0.022em] text-white mb-4">AyurMind</h3>
            <p className="font-sans text-apple-body text-white/80 mb-6">
              RAG system over 1200+ structured Ayurvedic knowledge entries with 84% Top-3 retrieval accuracy.
            </p>
            <a 
              href="https://github.com/charansaiponnada/AyurMind" 
              className="text-apple-blue-dark font-sans text-[17px] font-normal hover:underline"
            >
              View Source {'>'}
            </a>
          </div>
          <div className="flex-1">
            <h3 className="font-display text-[34px] font-semibold leading-[1.47] tracking-[-0.022em] text-white mb-4">ISAECT 2025</h3>
            <p className="font-sans text-apple-body text-white/80 mb-6">
              Vision-Language Assistive Navigation System. Fine-tuned BLIP via 3-stage LoRA training achieving +15.6% improvement.
            </p>
            <a 
              href="https://huggingface.co/charansaiponnada" 
              className="text-apple-blue-dark font-sans text-[17px] font-normal hover:underline"
            >
              View Paper {'>'}
            </a>
          </div>
        </div>

      </div>
    </section>
  )
}
