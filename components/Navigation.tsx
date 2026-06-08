'use client'

import { useState, useEffect } from 'react'

const navItems = [
  { name: 'Capabilities', href: '#highlights' },
  { name: 'Path', href: '#experience' },
  { name: 'Initiatives', href: '#projects' },
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
    <nav className="fixed top-0 left-0 w-full z-50 bg-white/95 backdrop-blur-md border-b border-black/5 flex items-center justify-between px-6 py-4">
      <div className="flex items-center gap-8">
        <a href="#hero" className="text-black font-display font-bold text-lg tracking-tight hover:text-[#0055FF] transition-colors">
          CSP
        </a>
        <div className="hidden md:flex gap-8">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="text-[10px] font-mono tracking-[0.2em] uppercase text-black/50 hover:text-[#0055FF] transition-colors"
            >
              {item.name}
            </a>
          ))}
        </div>
      </div>

      <div className="flex items-center gap-8">
        <div className="hidden sm:block text-[10px] font-mono tracking-widest text-black/40 uppercase">
          Kakinada, IN — <span suppressHydrationWarning>{time || '--:--'}</span> IST
        </div>
        <a
          href="mailto:charansaiponnada06@gmail.com"
          className="px-6 py-2.5 bg-black text-white text-[10px] font-bold tracking-widest uppercase rounded-full hover:bg-[#0055FF] transition-colors"
        >
          Initiate Contact
        </a>
      </div>
    </nav>
  )
}
