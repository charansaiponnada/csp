'use client'

import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav className={`fixed top-0 left-0 right-0 z-[100] flex justify-between items-center px-6 md:px-12 py-5 bg-portfolio-beige transition-colors border-b ${scrolled ? 'border-portfolio-rule' : 'border-transparent'}`}>
      <a href="#hero" className="font-mono text-[13px] text-portfolio-ink tracking-[0.04em] no-underline">
        csp.
      </a>
      
      <ul className="flex gap-8 list-none">
        {['about', 'work', 'research', 'now', 'contact'].map((item) => (
          <li key={item}>
            <a 
              href={`#${item}`}
              className="font-mono text-[12px] text-portfolio-ink-3 hover:text-portfolio-ink tracking-[0.06em] no-underline transition-colors uppercase"
            >
              {item}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  )
}
