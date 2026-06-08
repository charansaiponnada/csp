'use client'

import { motion } from 'framer-motion'

export default function Contact() {
  return (
    <section id="contact" className="bg-apple-tile-1 py-[80px] w-full flex flex-col items-center">
      <div className="max-w-[1024px] w-full px-6 text-center flex flex-col items-center">
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="font-display text-[40px] md:text-[56px] font-semibold leading-[1.07] tracking-apple-tight text-white mb-6">
            Initialize Connection.
          </h2>
          <p className="font-sans text-[21px] font-normal leading-[1.19] tracking-[0.01em] text-white/80 mb-12 max-w-lg mx-auto">
            Open for high-stakes AI engineering roles, research collaborations, and ambitious technical projects.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <a 
              href="mailto:charansaiponnada06@gmail.com" 
              className="bg-apple-blue text-white font-sans text-[17px] font-normal rounded-full px-[22px] py-[11px] btn-active-scale transition-transform w-full sm:w-auto"
            >
              Email charansaiponnada06@gmail.com
            </a>
          </div>

          <div className="flex items-center justify-center gap-8 mt-16 text-apple-blue-dark font-sans text-[17px] font-normal">
            <a href="https://github.com/charansaiponnada" target="_blank" className="hover:underline">
              GitHub {'>'}
            </a>
            <a href="https://linkedin.com/in/charansaiponnada" target="_blank" className="hover:underline">
              LinkedIn {'>'}
            </a>
          </div>
        </motion.div>

      </div>
    </section>
  )
}
