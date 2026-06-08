'use client'

import { MagnifyingGlass, ShoppingBag, List } from '@phosphor-icons/react'

const navItems = [
  { name: 'Identity', href: '#hero' },
  { name: 'Path', href: '#experience' },
  { name: 'Initiatives', href: '#projects' },
  { name: 'Research', href: '#research' },
  { name: 'Stack', href: '#skills' },
]

export default function Navigation() {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-apple-black text-white h-[44px] flex items-center justify-center px-4">
      <div className="w-full max-w-[1024px] flex items-center justify-between text-[12px] tracking-[-0.012em]">
        
        {/* Mobile Menu Icon */}
        <button className="md:hidden text-white/80 hover:text-white transition-colors">
          <List size={18} />
        </button>

        {/* Logo / Brand */}
        <a href="#hero" className="font-display font-semibold hover:text-white/80 transition-colors">
          CSP
        </a>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center justify-center space-x-8">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="text-white/80 hover:text-white transition-colors"
            >
              {item.name}
            </a>
          ))}
        </div>

        {/* Right Actions */}
        <div className="flex items-center space-x-6 text-white/80">
          <a href="mailto:charansaiponnada06@gmail.com" className="hover:text-white transition-colors">
            Contact
          </a>
        </div>

      </div>
    </nav>
  )
}
