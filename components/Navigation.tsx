'use client'

import { useState, useEffect } from 'react'
import { List, X } from '@phosphor-icons/react'

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileOpen, setIsMobileOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = [
    { label: 'Work', href: '#projects' },
    { label: 'Experience', href: '#experience' },
    { label: 'About', href: '#about' },
    { label: 'Contact', href: '#contact' },
  ]

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/80 backdrop-blur-xl border-b border-[#D2D2D7]'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-5xl mx-auto px-6 py-4 flex items-center justify-between">
        <a href="#hero" className="font-mono text-sm tracking-tight">
          <span className="font-semibold text-[#1D1D1F]">CSP</span>
          <span className="text-[#007AFF]">.</span>
        </a>

        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-[#6E6E73] hover:text-[#1D1D1F] transition-colors font-mono text-sm"
            >
              {item.label}
            </a>
          ))}
        </div>

        <button
          className="md:hidden p-2 text-[#1D1D1F]"
          onClick={() => setIsMobileOpen(!isMobileOpen)}
          aria-label="Toggle menu"
        >
          {isMobileOpen ? <X size={24} /> : <List size={24} />}
        </button>
      </div>

      {isMobileOpen && (
        <div className="md:hidden bg-white border-t border-[#D2D2D7]">
          <div className="px-6 py-6 flex flex-col gap-5">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-[#6E6E73] hover:text-[#1D1D1F] transition-colors py-2 font-mono text-sm"
                onClick={() => setIsMobileOpen(false)}
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  )
}