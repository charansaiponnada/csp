'use client'

import { GithubLogo, LinkedinLogo } from '@phosphor-icons/react'

export default function Footer() {
  return (
    <footer className="py-20 bg-[#0A0A0A] border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex items-center gap-8">
            <a 
              href="https://github.com/charansaiponnada" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-white/20 hover:text-white transition-colors"
            >
              <GithubLogo size={20} />
            </a>
            <a 
              href="https://linkedin.com/in/charansaiponnada" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-white/20 hover:text-white transition-colors"
            >
              <LinkedinLogo size={20} />
            </a>
          </div>

          <div className="text-center md:text-right">
            <p className="text-[10px] font-mono tracking-[0.3em] uppercase text-white/20 mb-2">
              Designed & Developed by
            </p>
            <p className="text-white/60 text-xs font-light tracking-wide">
              Charan Sai Ponnada © {new Date().getFullYear()}
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}