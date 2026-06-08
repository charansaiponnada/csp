'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useState, useEffect } from 'react'
import { Plus, X } from '@phosphor-icons/react'

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
            initial={{ opacity: 0, y: 10, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.98 }}
            transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="bg-white border border-black/10 p-8 w-80 mb-2 shadow-2xl"
          >
            <div className="absolute top-0 right-0 p-4">
              <button onClick={() => setIsOpen(false)} className="text-black/20 hover:text-[#0055FF] transition-colors">
                <X size={16} />
              </button>
            </div>
            
            <span className="text-[#0055FF] font-mono text-[9px] uppercase tracking-widest mb-4 block">Availability</span>
            <h4 className="text-lg font-bold mb-4 text-black uppercase leading-tight">Ready for deployment.</h4>
            <p className="text-black/50 text-xs mb-8 leading-relaxed font-light">
              Currently accepting queries for AI engineering roles and high-impact research projects.
            </p>
            
            <a 
              href="mailto:charansaiponnada06@gmail.com"
              className="flex items-center justify-center w-full py-4 bg-black text-white text-[10px] font-bold uppercase tracking-widest hover:bg-[#0055FF] transition-colors"
            >
              Initiate Contact
            </a>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {isVisible && !isOpen && (
          <motion.button
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setIsOpen(true)}
            className="w-14 h-14 bg-black text-white flex items-center justify-center shadow-xl hover:bg-[#0055FF] transition-colors"
          >
            <Plus size={24} weight="bold" />
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  )
}
