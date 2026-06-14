'use client'

import { motion } from 'framer-motion'

export default function Navigation() {
  return (
    <motion.nav 
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className="fixed top-8 left-1/2 -translate-x-1/2 z-50 w-[94%] max-w-[1000px]"
    >
      <div className="bg-dribbble-surface-1/40 backdrop-blur-2xl border border-white/5 rounded-full px-8 py-4 flex items-center justify-between shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
        <a href="#hero" className="font-display font-black text-2xl tracking-tighter text-white group">
          CSP<span className="text-dribbble-accent group-hover:animate-pulse">.</span>
        </a>
        
        <div className="hidden md:flex items-center gap-10">
          {['about', 'work', 'research', 'now', 'contact'].map((item) => (
            <a 
              key={item} 
              href={`#${item}`}
              className="font-mono text-[10px] font-bold uppercase tracking-[0.3em] text-white/40 hover:text-dribbble-accent transition-all relative group"
            >
              {item}
              <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-dribbble-accent transition-all group-hover:w-full" />
            </a>
          ))}
        </div>

        <div className="flex items-center gap-4">
          <div className="w-1.5 h-1.5 rounded-full bg-dribbble-accent animate-pulse" />
          <span className="font-mono text-[9px] font-bold uppercase tracking-[0.2em] text-white/20 hidden sm:inline">System Active</span>
        </div>
      </div>
    </motion.nav>
  )
}
