'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

const navItems = [
  { name: 'Showcase', href: '#hero' },
  { name: 'Impact', href: '#highlights' },
  { name: 'Console', href: '#console' },
  { name: 'Connect', href: '#contact' },
]

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav className="fixed top-8 left-1/2 -translate-x-1/2 z-50 w-full max-w-fit px-6">
      <motion.div
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className={`flex items-center gap-1 p-1 rounded-full transition-all duration-500 border border-black/5 ${
          scrolled ? 'glass shadow-sm' : 'bg-black/5 backdrop-blur-sm'
        }`}
      >
        <a href="#hero" className="flex items-center justify-center w-10 h-10 rounded-full hover:bg-black/5 transition-colors group">
          <span className="text-[10px] font-bold tracking-tighter group-hover:text-[#0055FF] transition-colors text-black">CSP</span>
        </a>

        <div className="w-[1px] h-4 bg-black/10 mx-1" />

        <div className="flex items-center">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="px-5 py-2.5 text-[10px] font-mono tracking-widest uppercase text-black/40 hover:text-[#0055FF] transition-all rounded-full hover:bg-black/5"
            >
              {item.name}
            </a>
          ))}
        </div>

        <div className="w-[1px] h-4 bg-black/10 mx-2" />

        <a
          href="mailto:charansaiponnada06@gmail.com"
          className="px-5 py-2.5 text-[10px] font-mono tracking-widest uppercase text-black/60 hover:text-[#0055FF] transition-all font-bold"
        >
          Message
        </a>
      </motion.div>
    </nav>
  )
}