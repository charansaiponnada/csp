'use client'

import { motion } from 'framer-motion'

export default function Contact() {
  return (
    <section id="contact" className="py-32 px-6 bg-dribbble-canvas border-t border-white/5 text-center overflow-hidden relative">
      <div className="max-w-[1400px] mx-auto relative z-10 flex flex-col items-center">
        
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-24"
        >
          <span className="font-mono text-[10px] text-dribbble-accent uppercase tracking-[0.4em] mb-8 block">Final Node // Connection Request</span>
          <h2 className="font-display text-[80px] md:text-[180px] font-black tracking-[-0.06em] uppercase leading-[0.75] mb-12 hover:text-outline-accent hover:text-transparent transition-all cursor-none select-none">
            LET'S <br /> BUILD <span className="text-outline-accent">SOMETHING.</span>
          </h2>
          <p className="font-sans text-xl md:text-2xl text-dribbble-muted max-w-2xl mx-auto font-medium">
            Open to AI Engineer, SDE, and R&D roles. Also happy to talk research, ideas, or anything interesting.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-24 w-full max-w-4xl text-left">
          <div className="flex flex-col gap-12">
            <div>
              <div className="font-mono text-[9px] text-white/20 uppercase tracking-[0.3em] mb-4">Direct Channel</div>
              <a 
                href="mailto:charansaiponnada06@gmail.com" 
                className="font-display text-2xl md:text-3xl font-black text-white hover:text-dribbble-accent transition-colors"
              >
                charansaiponnada06@gmail.com
              </a>
            </div>
            <div>
              <div className="font-mono text-[9px] text-white/20 uppercase tracking-[0.3em] mb-4">Tele-Communication</div>
              <div className="font-display text-2xl md:text-3xl font-black text-white">+91 86392 69120</div>
            </div>
          </div>

          <div className="flex flex-col gap-12">
            <div className="grid grid-cols-2 gap-8">
              <div>
                <div className="font-mono text-[9px] text-white/20 uppercase tracking-[0.3em] mb-4">GitHub</div>
                <a href="https://github.com/charansaiponnada" target="_blank" className="font-display text-xl font-black text-white hover:text-dribbble-accent transition-all uppercase">charansaiponnada</a>
              </div>
              <div>
                <div className="font-mono text-[9px] text-white/20 uppercase tracking-[0.3em] mb-4">LinkedIn</div>
                <a href="https://linkedin.com/in/charansaiponnada" target="_blank" className="font-display text-xl font-black text-white hover:text-dribbble-accent transition-all uppercase">charansaiponnada</a>
              </div>
              <div>
                <div className="font-mono text-[9px] text-white/20 uppercase tracking-[0.3em] mb-4">X / Twitter</div>
                <a href="https://x.com/charansai_p" target="_blank" className="font-display text-xl font-black text-white hover:text-dribbble-accent transition-all uppercase">charansai_p</a>
              </div>
              <div>
                <div className="font-mono text-[9px] text-white/20 uppercase tracking-[0.3em] mb-4">Insta</div>
                <a href="https://instagram.com/lone_melodies" target="_blank" className="font-display text-xl font-black text-white hover:text-dribbble-accent transition-all uppercase">@lone_melodies</a>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}
