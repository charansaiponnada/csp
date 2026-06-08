'use client'

import { motion } from 'framer-motion'

export default function Contact() {
  return (
    <section id="contact" className="py-32 px-6 bg-dribbble-surface-1 border-t border-dribbble-border text-center overflow-hidden relative">
      <div className="max-w-[1400px] mx-auto relative z-10 flex flex-col items-center">
        
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="font-display text-[80px] md:text-[160px] font-bold tracking-tighter uppercase leading-[0.8] mb-8 hover:text-outline hover:text-transparent transition-all cursor-crosshair">
            LET'S <br /> TALK.
          </h2>
          <p className="font-sans text-2xl text-dribbble-muted max-w-xl mx-auto">
            Ready to architect reliable intelligence systems together? Drop a line.
          </p>
        </motion.div>

        <a 
          href="mailto:charansaiponnada06@gmail.com" 
          className="font-display text-3xl md:text-5xl font-bold text-dribbble-accent border-b-4 border-dribbble-accent pb-2 hover:text-white hover:border-white transition-colors"
        >
          charansaiponnada06@gmail.com
        </a>

      </div>
    </section>
  )
}
