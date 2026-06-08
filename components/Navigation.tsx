'use client'

import { useState, useEffect } from 'react'

const navItems = [
  { name: 'Identity', href: '#hero' },
  { name: 'Path', href: '#experience' },
  { name: 'Initiatives', href: '#projects' },
  { name: 'Research', href: '#research' },
]

export default function Navigation() {
  const [time, setTime] = useState('')

  useEffect(() => {
    setTime(new Date().toLocaleTimeString('en-US', { timeZone: 'Asia/Kolkata', hour: '2-digit', minute: '2-digit', hour12: false }))
    const interval = setInterval(() => {
      setTime(new Date().toLocaleTimeString('en-US', { timeZone: 'Asia/Kolkata', hour: '2-digit', minute: '2-digit', hour12: false }))
    }, 1000)
    return () => clearInterval(interval)
  }, [])

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-white border-b border-black/5">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4 border-x border-black/5">
        <div className="flex items-center gap-12">
          <a href="#hero" className="font-display font-bold text-xl tracking-tighter hover:text-[#0055FF] transition-colors">
            CSP.
          </a>
          <div className="hidden md:flex gap-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-[9px] font-bold font-mono tracking-[0.2em] uppercase text-black/40 hover:text-[#0055FF] transition-colors"
              >
                {item.name}
              </a>
            ))}
          </div>
        </div>

        <div className="flex items-center gap-8">
          <div className="hidden sm:block text-[9px] font-mono tracking-widest text-black/30 uppercase">
            <span suppressHydrationWarning>{time || '--:--'}</span> IST
          </div>
          <a
            href="mailto:charansaiponnada06@gmail.com"
            className="text-[9px] font-bold font-mono tracking-[0.2em] uppercase text-[#0055FF] hover:text-black transition-colors"
          >
            Connect
          </a>
        </div>
      </div>
    </nav>
  )
}
