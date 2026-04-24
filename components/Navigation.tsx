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
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? 'bg-[#F7F5F0]/90 backdrop-blur-lg border-b border-[#E5E2DB]'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 py-5 flex items-center justify-between">
        <a href="#hero" className="font-mono text-sm tracking-tight">
          <span className="font-semibold">CSP</span>
          <span className="text-[#C45D35]">.</span>
        </a>

        <div className="hidden md:flex items-center gap-10">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-[#6B6B6B] hover:text-[#1A1A1A] transition-colors relative group font-mono text-sm tracking-wide"
            >
              {item.label}
              <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-[#C45D35] transition-all duration-500 group-hover:w-full" />
            </a>
          ))}
        </div>

        <button
          className="md:hidden p-2 text-[#1A1A1A]"
          onClick={() => setIsMobileOpen(!isMobileOpen)}
          aria-label="Toggle menu"
        >
          {isMobileOpen ? <X size={24} /> : <List size={24} />}
        </button>
      </div>

      {isMobileOpen && (
        <div className="md:hidden bg-[#F7F5F0] border-t border-[#E5E2DB]">
          <div className="px-6 py-6 flex flex-col gap-5">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-[#6B6B6B] hover:text-[#1A1A1A] transition-colors py-2 font-mono text-sm"
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