'use client'

import { motion } from 'framer-motion'

export default function Navigation() {
  return (
    <motion.nav 
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className="fixed top-8 left-1/2 -translate-x-1/2 z-50 w-[90%] max-w-[800px]"
    >
      <div className="bg-dribbble-surface-1/80 backdrop-blur-xl border border-dribbble-border rounded-full px-6 py-4 flex items-center justify-between">
        <a href="#hero" className="font-display font-bold text-xl tracking-tighter text-white hover:text-dribbble-accent transition-colors">
          CHARAN<span className="text-dribbble-accent">.</span>
        </a>
        
        <div className="hidden md:flex items-center gap-8">
          {['Experience', 'Projects', 'Research', 'Stack'].map((item) => (
            <a 
              key={item} 
              href={`#${item.toLowerCase()}`}
              className="font-sans text-sm font-medium text-dribbble-muted hover:text-white transition-colors"
            >
              {item}
            </a>
          ))}
        </div>

        <a href="mailto:charansaiponnada06@gmail.com" className="font-sans text-sm font-bold text-black bg-dribbble-accent px-5 py-2 rounded-full hover:bg-white transition-colors">
          HIRE ME
        </a>
      </div>
    </motion.nav>
  )
}
