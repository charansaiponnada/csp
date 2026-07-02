'use client'

import { useState, useEffect } from 'react'
import { SITE } from '@/lib/constants'

const roles = [
  'AI Engineer',
  'ML Researcher',
  'Computer Vision Engineer',
  'Deep Learning Engineer',
  'Published Researcher',
  'Full-Stack AI Developer',
]

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0)
  const [charIndex, setCharIndex] = useState(0)
  const [deleting, setDeleting] = useState(false)
  const [paused, setPaused] = useState(false)

  useEffect(() => {
    if (paused) {
      const timeout = setTimeout(() => {
        setPaused(false)
        setDeleting(true)
      }, 2000)
      return () => clearTimeout(timeout)
    }

    const currentRole = roles[roleIndex]
    const timeout = setTimeout(
      () => {
        if (!deleting) {
          if (charIndex < currentRole.length) {
            setCharIndex(charIndex + 1)
          } else {
            setPaused(true)
          }
        } else {
          if (charIndex > 0) {
            setCharIndex(charIndex - 1)
          } else {
            setDeleting(false)
            setRoleIndex((roleIndex + 1) % roles.length)
          }
        }
      },
      deleting ? 40 : 80
    )

    return () => clearTimeout(timeout)
  }, [charIndex, deleting, roleIndex, paused])

  return (
    <section
      id="hero"
      className="relative flex min-h-screen items-center justify-center"
    >
      <div className="mx-auto max-w-6xl px-6 py-32 text-center">
        <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-cream-400 bg-cream-100/50 px-4 py-1.5">
          <span className="h-2 w-2 rounded-full bg-green-500 animate-pulse" />
          <span className="font-mono text-xs text-cream-600">
            Available for opportunities
          </span>
        </div>

        <h1 className="heading-xl mb-4 text-balance">
          {SITE.name}
        </h1>

        <div className="mb-8 h-8">
          <span className="heading-sm text-cream-600">
            {roles[roleIndex].substring(0, charIndex)}
            <span className="inline-block w-0.5 h-6 bg-sienna ml-0.5 animate-blink align-middle" />
          </span>
        </div>

        <p className="mx-auto mb-10 max-w-2xl text-lg leading-relaxed text-cream-600">
          Building at the intersection of deep learning, computer vision, and
          production AI systems. IEEE published researcher crafting genomic
          foundation models and intelligent RAG systems.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4">
          <a
            href="/#contact"
            className="inline-flex items-center gap-2 rounded-lg bg-cream-900 px-6 py-3 text-sm font-medium text-cream-100 transition-all hover:bg-cream-800"
          >
            Get in Touch
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              className="transition-transform group-hover:translate-x-0.5"
            >
              <path
                d="M3 8h10M9 4l4 4-4 4"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </a>
          <a
            href="/#work"
            className="inline-flex items-center gap-2 rounded-lg border border-cream-400 px-6 py-3 text-sm font-medium text-cream-700 transition-all hover:border-cream-500 hover:text-cream-900"
          >
            View My Work
          </a>
        </div>

        <div className="mt-12 flex items-center justify-center gap-8">
          {[
            { href: SITE.social.github, label: 'GitHub' },
            { href: SITE.social.linkedin, label: 'LinkedIn' },
            { href: SITE.social.twitter, label: 'X' },
            {
              href: '/resume.pdf',
              label: 'Resume',
            },
          ].map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono text-xs uppercase tracking-widest text-cream-600 hover:text-sienna transition-colors"
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
