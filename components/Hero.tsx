'use client'

import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'

const lines = [
  'I build things that work.',
  'Then I make them matter.',
  'AI Engineer. Researcher.',
  'Builder. Always learning.'
]

export default function Hero() {
  const [displayText, setDisplayText] = useState('')
  const [lineIdx, setLineIdx] = useState(0)
  const [charIdx, setCharIdx] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    const timeout = setTimeout(() => {
      const currentLine = lines[lineIdx]
      
      if (!isDeleting) {
        setDisplayText(currentLine.slice(0, charIdx + 1))
        setCharIdx(prev => prev + 1)
        
        if (charIdx + 1 === currentLine.length) {
          if (lineIdx === lines.length - 1) return // stop on last line
          setTimeout(() => setIsDeleting(true), 1800)
        }
      } else {
        setDisplayText(currentLine.slice(0, charIdx - 1))
        setCharIdx(prev => prev - 1)
        
        if (charIdx - 1 === 0) {
          setIsDeleting(false)
          setLineIdx(prev => (prev + 1) % lines.length)
        }
      }
    }, isDeleting ? 28 : 52)

    return () => clearTimeout(timeout)
  }, [charIdx, isDeleting, lineIdx])

  return (
    <section id="hero" className="min-h-screen flex items-center pt-20 bg-portfolio-beige">
      <div className="max-w-[900px] mx-auto px-12 w-full">
        <div className="grid md:grid-cols-[1fr_auto] gap-16 items-center">
          
          <div className="hero-text">
            <p className="font-mono text-[11px] text-portfolio-ink-3 tracking-[0.12em] uppercase mb-6">
              // Vijayawada → Hyderabad → wherever next
            </p>
            <h1 className="font-mono text-[clamp(32px,5vw,52px)] font-medium leading-[1.1] tracking-[-0.02em] text-portfolio-ink mb-4">
              Charan Sai<br />Ponnada
            </h1>
            <p className="font-mono text-[clamp(13px,1.8vw,15px)] text-portfolio-ink-2 mb-8 min-h-[2.4em] flex items-center">
              {displayText}
              <span className="inline-block w-[2px] h-[1em] bg-portfolio-sienna ml-[2px] animate-[blink_1s_step-end_infinite]" />
            </p>
            <div className="flex flex-wrap gap-6">
              {[
                { label: 'github', href: 'https://github.com/charansaiponnada' },
                { label: 'linkedin', href: 'https://linkedin.com/in/charansaiponnada' },
                { label: 'email', href: 'mailto:charansaiponnada06@gmail.com' },
                { label: 'portfolio ↗', href: 'https://charansaiponnada.vercel.app' }
              ].map((link) => (
                <a 
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  className="font-mono text-[12px] text-portfolio-ink-3 no-underline border-b border-portfolio-rule pb-[2px] hover:text-portfolio-sienna hover:border-portfolio-sienna transition-all"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          <div className="relative w-[240px] hidden md:block">
            <img 
              src="/image.png" 
              alt="Pixel portrait of Charan Sai Ponnada" 
              className="w-full block rounded-[4px]"
              style={{ imageRendering: 'pixelated' }}
            />
            <span className="absolute -bottom-7 left-0 font-mono text-[10px] text-portfolio-ink-3 tracking-[0.08em]">
              // pixel_portrait.png
            </span>
          </div>

        </div>
      </div>
      
      <style jsx>{`
        @keyframes blink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0; }
        }
      `}</style>
    </section>
  )
}
