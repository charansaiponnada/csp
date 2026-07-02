'use client'

import Section from '@/components/ui/Section'
import { SITE } from '@/lib/constants'

const contactLinks = [
  { href: SITE.social.github, label: 'GitHub', handle: '@charansaiponnada' },
  {
    href: SITE.social.linkedin,
    label: 'LinkedIn',
    handle: 'in/charansaiponnada',
  },
  { href: SITE.social.twitter, label: 'X / Twitter', handle: '@charansaiponnada' },
  { href: SITE.social.medium, label: 'Medium', handle: '@charansaiponnada' },
  { href: SITE.social.devto, label: 'Dev.to', handle: 'charansaiponnada' },
  { href: SITE.social.youtube, label: 'YouTube', handle: '@charansimplifies' },
]

export default function Contact() {
  return (
    <Section
      id="contact"
      eyebrow="// contact"
      title="Let's Build Something"
      subtitle="I'm always open to discussing research collaborations, project ideas, or opportunities in AI and ML."
    >
      <div className="grid gap-10 lg:grid-cols-5">
        <div className="lg:col-span-2 space-y-6">
          <p className="text-lg leading-relaxed text-cream-700">
            Whether you have a research collaboration in mind, a project you
            want to build, or just want to say hi — I'd love to hear from you.
          </p>

          <a
            href={`mailto:${SITE.social.email}`}
            className="inline-flex items-center gap-2 text-sienna hover:text-sienna-light transition-colors font-medium"
          >
            {SITE.social.email}
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path
                d="M3 8h10M9 4l4 4-4 4"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </a>

          <p className="text-sm text-cream-600">
            Based in Hyderabad, India. Available for remote opportunities
            worldwide.
          </p>
        </div>

        <div className="lg:col-span-3">
          <div className="rounded-lg border border-cream-400 overflow-hidden">
            {contactLinks.map((link, i) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`flex items-center justify-between px-5 py-4 transition-colors hover:bg-cream-100 ${
                  i < contactLinks.length - 1
                    ? 'border-b border-cream-400'
                    : ''
                }`}
              >
                <span className="text-sm font-medium text-cream-900">
                  {link.label}
                </span>
                <span className="flex items-center gap-2 text-sm text-cream-600">
                  {link.handle}
                  <svg
                    width="12"
                    height="12"
                    viewBox="0 0 12 12"
                    fill="none"
                    className="text-cream-400"
                  >
                    <path
                      d="M3 9l6-6M4 3h5v5"
                      stroke="currentColor"
                      strokeWidth="1.2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </Section>
  )
}
