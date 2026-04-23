'use client'

import { GithubLogo, LinkedinLogo, InstagramLogo, MediumLogo, Heart } from '@phosphor-icons/react'

const socialLinks = [
  { icon: GithubLogo, label: 'GitHub', href: 'https://github.com/charansaiponnada' },
  { icon: LinkedinLogo, label: 'LinkedIn', href: 'https://linkedin.com/in/charansaiponnada' },
  { icon: InstagramLogo, label: 'Instagram', href: 'https://instagram.com/Charansaiponnada' },
  { icon: MediumLogo, label: 'Medium', href: 'https://medium.com/@Charansaiponnada' },
]

export default function Footer() {
  return (
    <footer className="py-12 border-t border-[#E4E4E7]">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 text-[#71717A] hover:text-[#2563EB] transition-colors"
                aria-label={social.label}
              >
                <social.icon size={24} weight="duotone" />
              </a>
            ))}
          </div>

          <p className="text-sm text-[#71717A] flex items-center gap-1">
            Built with <Heart size={14} weight="fill" className="text-[#2563EB]" /> and a lot of coffee
          </p>

          <p className="text-sm text-[#71717A]">
            © {new Date().getFullYear()} Charan Sai Ponnada
          </p>
        </div>
      </div>
    </footer>
  )
}