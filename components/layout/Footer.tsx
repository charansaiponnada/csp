'use client'

import Link from 'next/link'
import { SITE } from '@/lib/constants'

const footerLinks = [
  { href: '/blog', label: 'Blog' },
  { href: '/publications', label: 'Publications' },
  { href: '/research', label: 'Research' },
  { href: '/projects', label: 'Projects' },
  { href: '/#about', label: 'About' },
  { href: '/#contact', label: 'Contact' },
]

const socialLinks = [
  { href: SITE.social.github, label: 'GitHub' },
  { href: SITE.social.linkedin, label: 'LinkedIn' },
  { href: SITE.social.twitter, label: 'X / Twitter' },
  { href: SITE.social.youtube, label: 'YouTube' },
  { href: SITE.social.medium, label: 'Medium' },
  { href: SITE.social.devto, label: 'Dev.to' },
]

export default function Footer() {
  return (
    <footer className="border-t border-cream-400 bg-cream-100">
      <div className="mx-auto max-w-6xl px-6 py-16">
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-3">
          <div>
            <Link
              href="/"
              className="font-mono text-sm font-medium tracking-tight text-cream-900"
            >
              csp.
            </Link>
            <p className="mt-3 text-sm leading-relaxed text-cream-600 max-w-xs">
              AI Engineer, ML Researcher, and Builder. Building at the
              intersection of deep learning, computer vision, and production AI
              systems.
            </p>
          </div>

          <div>
            <h3 className="font-mono text-xs uppercase tracking-widest text-cream-600 mb-4">
              Pages
            </h3>
            <ul className="space-y-2">
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-cream-700 hover:text-sienna transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-mono text-xs uppercase tracking-widest text-cream-600 mb-4">
              Connect
            </h3>
            <ul className="space-y-2">
              {socialLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-cream-700 hover:text-sienna transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-cream-400 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-cream-600">
            &copy; {new Date().getFullYear()} {SITE.name}. Built with intent.
          </p>
          <p className="text-xs text-cream-500 font-mono">
            AI Engineer &middot; Researcher &middot; Builder
          </p>
        </div>
      </div>
    </footer>
  )
}
