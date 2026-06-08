'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

export default function Hero() {
  return (
    <section id="hero" className="bg-apple-canvas pt-[44px]">
      <div className="w-full flex flex-col items-center text-center pt-[80px] pb-[80px]">
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-[1024px] px-6 flex flex-col items-center"
        >
          <h1 className="font-display text-[40px] md:text-[56px] font-semibold leading-[1.07] tracking-[-0.015em] md:tracking-[-0.02em] text-apple-ink mb-2">
            Charan Sai Ponnada
          </h1>
          
          <h2 className="font-display text-[21px] md:text-[28px] font-normal leading-[1.14] tracking-[0.01em] text-apple-ink mb-6">
            Intelligence Systems Engineer.
          </h2>

          <div className="flex items-center space-x-6 mb-16">
            <a 
              href="#projects" 
              className="bg-apple-blue text-white font-sans text-[17px] font-normal rounded-full px-[22px] py-[11px] btn-active-scale transition-transform"
            >
              View Initiatives
            </a>
            <a 
              href="mailto:charansaiponnada06@gmail.com" 
              className="text-apple-blue font-sans text-[17px] font-normal hover:underline"
            >
              Contact me {'>'}
            </a>
          </div>
        </motion.div>

        {/* Product Imagery */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="w-full max-w-[1024px] px-6"
        >
          <div className="relative w-full aspect-[21/9] md:aspect-[16/9] rounded-2xl overflow-hidden product-shadow bg-apple-parchment flex items-center justify-center">
            {/* The museum gallery approach: the image is the product. No decorative chrome. */}
            <Image
              src="https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=2000"
              alt="Systems Engineering Workspace"
              fill
              className="object-cover"
              priority
            />
          </div>
        </motion.div>

      </div>
    </section>
  )
}
