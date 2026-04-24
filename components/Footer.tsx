'use client'

import { GithubLogo, LinkedinLogo, Heart } from '@phosphor-icons/react'

const socialLinks = [
  { icon: GithubLogo, label: 'GitHub', href: 'https://github.com/charansaiponnada' },
  { icon: LinkedinLogo, label: 'LinkedIn', href: 'https://linkedin.com/in/charansaiponnada' },
]

export default function Footer() {
  return (
    <footer className="py-12 border-t border-[#E5E2DB] bg-[#F7F5F0]">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-6">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 text-[#6B6B6B] hover:text-[#C45D35] transition-colors"
                aria-label={social.label}
              >
                <social.icon size={20} />
              </a>
            ))}
          </div>

          <p className="text-xs text-[#9A9A9A] font-mono tracking-wide flex items-center gap-2">
            Built with <Heart size={12} weight="fill" className="text-[#C45D35]" /> and coffee
          </p>

          <p className="text-xs text-[#9A9A9A] font-mono tracking-wide">
            © {new Date().getFullYear()} CSP
          </p>
        </div>
      </div>
    </footer>
  )
}