'use client'

import { List } from '@phosphor-icons/react'

const navItems = [
  { name: 'Experience', href: '#experience' },
  { name: 'Projects', href: '#projects' },
  { name: 'Research', href: '#research' },
  { name: 'Stack', href: '#skills' },
]

export default function Navigation() {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-claude-canvas border-b border-claude-hairline h-[64px] flex items-center px-6">
      <div className="w-full max-w-[1200px] mx-auto flex items-center justify-between">
        
        <div className="flex items-center gap-8">
          {/* Brand Mark */}
          <a href="#hero" className="flex items-center gap-2 group">
            <svg viewBox="0 0 24 24" className="w-5 h-5 fill-claude-ink group-hover:fill-claude-primary transition-colors">
              <path d="M12 2C12 7.5 16.5 12 22 12C16.5 12 12 16.5 12 22C12 16.5 7.5 12 2 12C7.5 12 12 7.5 12 2Z" />
            </svg>
            <span className="font-display text-xl font-medium tracking-tight text-claude-ink">Charan</span>
          </a>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-6">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="font-sans text-[14px] font-medium text-claude-body hover:text-claude-primary transition-colors"
              >
                {item.name}
              </a>
            ))}
          </div>
        </div>

        {/* Right Actions */}
        <div className="flex items-center gap-4">
          <a 
            href="https://github.com/charansaiponnada" 
            target="_blank"
            className="hidden sm:block font-sans text-[14px] font-medium text-claude-ink hover:text-claude-primary transition-colors"
          >
            GitHub
          </a>
          <a href="#contact" className="btn-coral text-[14px] h-[40px] px-[20px]">
            Collaborate
          </a>
          
          <button className="md:hidden text-claude-ink ml-2">
            <List size={24} />
          </button>
        </div>

      </div>
    </nav>
  )
}
