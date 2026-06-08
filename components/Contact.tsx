'use client'

import { motion } from 'framer-motion'

export default function Contact() {
  return (
    <section id="contact" className="py-[120px] px-6 bg-claude-canvas border-t border-claude-hairline">
      <div className="max-w-[1200px] mx-auto">
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid lg:grid-cols-2 gap-16 items-center bg-claude-surface-card rounded-[16px] p-[48px] md:p-[80px]"
        >
          <div className="flex flex-col">
            <span className="font-mono text-[12px] text-claude-primary uppercase tracking-[2px] mb-6 block">
              05 / Initialize Link
            </span>
            <h2 className="font-display text-[48px] md:text-[64px] tracking-claude-tightest text-claude-ink leading-[1] mb-8">
              Open to <br /> Collaboration
            </h2>
            <p className="font-sans text-[18px] text-claude-body leading-[1.6] max-w-md">
              Accepting queries for AI engineering roles, high-stakes infrastructure, and applied research initiatives. Let's build reliable intelligence systems.
            </p>
          </div>

          <div className="flex flex-col gap-6">
            <a 
              href="mailto:charansaiponnada06@gmail.com" 
              className="flex items-center justify-between p-6 md:p-8 bg-claude-primary text-white rounded-[12px] group hover:bg-claude-primary-active transition-colors"
            >
              <div className="flex flex-col">
                <span className="font-sans text-[12px] font-medium uppercase tracking-[1.5px] text-white/60 mb-2">Direct Communication</span>
                <span className="font-sans text-[20px] md:text-[24px] font-medium">charansaiponnada06@gmail.com</span>
              </div>
              <span className="text-[24px] group-hover:translate-x-2 transition-transform">&rarr;</span>
            </a>
            
            <a 
              href="https://linkedin.com/in/charansaiponnada" 
              target="_blank"
              className="flex items-center justify-between p-6 md:p-8 bg-claude-canvas border border-claude-hairline text-claude-ink rounded-[12px] group hover:bg-white transition-colors"
            >
              <div className="flex flex-col">
                <span className="font-sans text-[12px] font-medium uppercase tracking-[1.5px] text-claude-muted mb-2">Network</span>
                <span className="font-sans text-[20px] md:text-[24px] font-medium">Connect on LinkedIn</span>
              </div>
              <span className="text-[24px] text-claude-primary group-hover:translate-x-2 transition-transform">&rarr;</span>
            </a>
          </div>
        </motion.div>

      </div>
    </section>
  )
}
