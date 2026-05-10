'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const navItems = [
  { name: 'Research', href: '#projects' },
  { name: 'Experience', href: '#experience' },
  { name: 'Skills', href: '#skills' },
  { name: 'Contact', href: '#contact' },
]

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav className="fixed top-6 left-1/2 -translate-x-1/2 z-50 w-full max-w-fit px-6">
      <motion.div
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className={`flex items-center gap-1 p-1 rounded-full transition-all duration-300 ${
          scrolled ? 'glass' : 'bg-transparent border border-transparent'
        }`}
      >
        <div className="flex items-center">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="px-5 py-2.5 text-[11px] font-mono tracking-widest uppercase text-white/50 hover:text-white transition-all rounded-full hover:bg-white/5"
            >
              {item.name}
            </a>
          ))}
        </div>
        
        <div className="w-[1px] h-4 bg-white/10 mx-2" />
        
        <a
          href="mailto:charansaiponnada06@gmail.com"
          className="px-5 py-2.5 text-[11px] font-mono tracking-widest uppercase text-[#E87E53] hover:text-[#F29976] transition-all"
        >
          Hire Me
        </a>
      </motion.div>
    </nav>
  )
}