'use client'

import { motion } from 'framer-motion'

export default function Contact() {
  return (
    <section id="contact" className="py-[96px] px-6 bg-[#181715]">
      <div className="max-w-[1200px] mx-auto text-center flex flex-col items-center">
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-2xl"
        >
          <div className="inline-flex items-center gap-2 mb-8">
            <span className="w-2 h-2 rounded-full bg-[#5db872]" />
            <span className="font-mono text-[14px] text-[#a09d96]">Available for opportunities</span>
          </div>

          <h2 className="font-display text-[48px] tracking-claude-tight text-[#faf9f5] mb-6 leading-[1.1]">
            Ready to build reliable intelligence systems?
          </h2>
          <p className="font-sans text-[18px] text-[#a09d96] mb-12">
            Currently accepting queries for AI engineering roles, high-stakes infrastructure, and applied research initiatives.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a 
              href="mailto:charansaiponnada06@gmail.com" 
              className="bg-claude-primary text-white font-sans text-[16px] font-medium rounded-[8px] px-8 py-4 hover:bg-claude-primary-active transition-colors active:scale-[0.98] w-full sm:w-auto"
            >
              charansaiponnada06@gmail.com
            </a>
            <a 
              href="https://linkedin.com/in/charansaiponnada" 
              target="_blank"
              className="bg-[#252320] text-[#faf9f5] font-sans text-[16px] font-medium rounded-[8px] px-8 py-4 hover:bg-[#1f1e1b] transition-colors active:scale-[0.98] w-full sm:w-auto"
            >
              Connect on LinkedIn
            </a>
          </div>
        </motion.div>

      </div>
    </section>
  )
}
