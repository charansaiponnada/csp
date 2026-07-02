'use client'

import { useState, useEffect } from 'react'
import { cn } from '@/lib/utils'
import Link from 'next/link'

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/#about', label: 'About' },
  { href: '/#work', label: 'Work' },
  { href: '/#research', label: 'Research' },
  { href: '/blog', label: 'Blog' },
  { href: '/#contact', label: 'Contact' },
]

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => { document.body.style.overflow = '' }
  }, [mobileOpen])

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        scrolled
          ? 'border-b border-cream-400 bg-cream-200/90 backdrop-blur-md'
          : 'bg-transparent'
      )}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link
          href="/"
          className="font-mono text-sm font-medium tracking-tight text-cream-900 hover:text-sienna transition-colors"
        >
          csp.
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="font-mono text-xs uppercase tracking-widest text-cream-600 hover:text-cream-900 transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden relative w-6 h-6 text-cream-900"
          aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
        >
          <span
            className={cn(
              'absolute top-2 left-0 w-full h-px bg-current transition-all duration-300',
              mobileOpen && 'top-3 rotate-45'
            )}
          />
          <span
            className={cn(
              'absolute top-3 left-0 w-full h-px bg-current transition-all duration-300',
              mobileOpen && 'opacity-0'
            )}
          />
          <span
            className={cn(
              'absolute top-4 left-0 w-full h-px bg-current transition-all duration-300',
              mobileOpen && 'top-3 -rotate-45'
            )}
          />
        </button>
      </div>

      <div
        className={cn(
          'fixed inset-0 top-[57px] bg-cream-200 flex flex-col items-center justify-center gap-8 transition-all duration-300 md:hidden',
          mobileOpen
            ? 'opacity-100 pointer-events-auto'
            : 'opacity-0 pointer-events-none'
        )}
      >
        {navLinks.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            onClick={() => setMobileOpen(false)}
            className="font-mono text-lg uppercase tracking-widest text-cream-900 hover:text-sienna transition-colors"
          >
            {link.label}
          </Link>
        ))}
      </div>
    </header>
  )
}
