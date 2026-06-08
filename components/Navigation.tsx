'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { House, IdentificationCard, Briefcase, Code, Microscope, ChatCircleText } from '@phosphor-icons/react'

const navItems = [
  { name: 'Home', href: '#hero', icon: House },
  { name: 'Capabilities', href: '#experience', icon: IdentificationCard },
  { name: 'Projects', href: '#projects', icon: Code },
  { name: 'Research', href: '#research', icon: Microscope },
  { name: 'Connect', href: '#contact', icon: ChatCircleText },
]

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50 px-6 w-full max-w-fit">
      <motion.div
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="glass p-2 rounded-3xl flex items-center gap-1 shadow-2xl shadow-blue-500/10"
      >
        {navItems.map((item, i) => (
          <a
            key={i}
            href={item.href}
            className="flex items-center gap-2 px-4 py-3 rounded-2xl hover:bg-white/5 text-slate-400 hover:text-white transition-all group"
          >
            <item.icon size={20} className="group-hover:scale-110 transition-transform" />
            <span className="hidden md:block text-[10px] font-mono uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity">
              {item.name}
            </span>
          </a>
        ))}
        
        <div className="w-[1px] h-6 bg-white/10 mx-2" />
        
        <a 
          href="mailto:charansaiponnada06@gmail.com"
          className="px-6 py-3 bg-blue-500 text-white rounded-2xl text-[10px] font-bold uppercase tracking-widest hover:bg-blue-600 transition-colors"
        >
          Message
        </a>
      </motion.div>
    </nav>
  )
}
