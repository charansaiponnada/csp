'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useState, useEffect } from 'react'
import { ChatCircleDots, X } from '@phosphor-icons/react'

export default function HireMe() {
  const [isVisible, setIsVisible] = useState(false)
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="fixed bottom-8 right-8 z-50 flex flex-col items-end gap-4">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            className="glass p-6 rounded-3xl w-72 mb-2 relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 p-4">
              <button onClick={() => setIsOpen(false)} className="text-black/20 hover:text-black transition-colors">
                <X size={16} />
              </button>
            </div>
            
            <span className="text-[#0055FF] font-mono text-[10px] uppercase tracking-widest mb-4 block">Open for Collaboration</span>
            <h4 className="text-xl font-medium mb-4 text-black">Let's build something exceptional.</h4>
            <p className="text-black/40 text-xs mb-6 leading-relaxed">
              Currently available for AI / ML engineering roles and ambitious research projects.
            </p>
            
            <a 
              href="mailto:charansaiponnada06@gmail.com"
              className="flex items-center justify-center gap-2 w-full py-3 bg-black text-white text-xs font-bold rounded-full hover:bg-[#0055FF] transition-all duration-300"
            >
              HIRE ME NOW
            </a>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {isVisible && (
          <motion.button
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setIsOpen(!isOpen)}
            className="w-14 h-14 rounded-full bg-black text-white flex items-center justify-center shadow-2xl relative group overflow-hidden"
          >
            <div className="absolute inset-0 bg-[#0055FF] translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
            <ChatCircleDots size={24} className="relative z-10 group-hover:text-white transition-colors" />
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  )
}
