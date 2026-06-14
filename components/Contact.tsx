'use client'

import { motion } from 'framer-motion'

export default function Contact() {
  const faders = {
    initial: { opacity: 0, y: 16 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, amount: 0.1 },
    transition: { duration: 0.6, ease: "easeOut" }
  }

  return (
    <>
      <div className="section-rule" />
      <section id="contact" className="py-24 bg-portfolio-beige">
        <div className="max-w-[900px] mx-auto px-12">
          <div className="grid md:grid-cols-2 gap-16 items-start">
            
            <motion.div {...faders}>
              <h2 className="font-mono text-[clamp(22px,3vw,32px)] font-medium text-portfolio-ink mb-4 leading-[1.2]">
                Let&apos;s build<br />something.
              </h2>
              <p className="text-[14px] text-portfolio-ink-3 leading-[1.7] mb-8">
                Open to AI Engineer, SDE, and R&D roles at product companies and funded startups. Also happy to talk research, ideas, or anything interesting.
              </p>
              <a 
                href="mailto:charansaiponnada06@gmail.com" 
                className="font-mono text-[14px] text-portfolio-ink no-underline border-b border-portfolio-sienna pb-0.5 hover:text-portfolio-sienna transition-colors"
              >
                charansaiponnada06@gmail.com
              </a>
            </motion.div>

            <motion.div className="flex flex-col gap-3 pt-2" {...faders}>
              {[
                { name: 'GitHub', handle: 'charansaiponnada ↗', href: 'https://github.com/charansaiponnada' },
                { name: 'LinkedIn', handle: 'charansaiponnada ↗', href: 'https://linkedin.com/in/charansaiponnada' },
                { name: 'Resume', handle: 'resume.pdf ↗', href: '/resume.pdf' },
                { name: 'Phone', handle: '+91 86392 69120', href: 'tel:+918639269120' }
              ].map((link) => (
                <a 
                  key={link.name}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex justify-between items-center py-3.5 border-b border-portfolio-rule no-underline transition-colors hover:border-portfolio-ink-3"
                >
                  <span className="font-mono text-[12px] text-portfolio-ink tracking-[0.04em]">{link.name}</span>
                  <span className="font-mono text-[12px] text-portfolio-ink-3 tracking-[0.02em]">{link.handle}</span>
                </a>
              ))}
            </motion.div>

          </div>
        </div>
      </section>
    </>
  )
}
