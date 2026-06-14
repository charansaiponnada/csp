'use client'

import { motion } from 'framer-motion'
import { ArrowUpRight, GithubLogo, LinkedinLogo, Envelope } from '@phosphor-icons/react'

export default function Hero() {
  return (
    <section id="hero" className="min-h-screen flex flex-col justify-center px-6 pt-32 pb-24 relative overflow-hidden bg-dribbble-canvas">
      
      {/* Background Architectural Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-20">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1px] h-full bg-gradient-to-b from-dribbble-accent/20 via-transparent to-transparent" />
        <div className="absolute top-[20%] left-0 w-full h-[1px] bg-white/[0.03]" />
        <div className="absolute top-[40%] left-0 w-full h-[1px] bg-white/[0.03]" />
      </div>

      <div className="max-w-[1400px] mx-auto w-full relative z-10">
        
        {/* Kinetic Location Kicker */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="flex items-center gap-4 mb-12"
        >
          <div className="w-12 h-[1px] bg-dribbble-accent" />
          <span className="font-mono text-[10px] md:text-xs font-bold uppercase tracking-[0.4em] text-dribbble-accent">
            Vijayawada <span className="text-white/20">→</span> Hyderabad <span className="text-white/20">→</span> wherever next
          </span>
        </motion.div>

        <div className="grid lg:grid-cols-12 gap-16 items-start">
          
          <div className="lg:col-span-8">
            <motion.h1 
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="font-display text-[clamp(4rem,14vw,13rem)] font-black leading-[0.8] tracking-[-0.06em] uppercase mb-12"
            >
              Charan <br />
              <span className="text-outline-accent">Sai</span> <br />
              Ponnada
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="mb-16"
            >
              <h2 className="font-display text-4xl md:text-6xl font-black uppercase tracking-tighter mb-8 text-white">
                Builder. Always learning.
              </h2>
              <p className="font-sans text-xl md:text-2xl text-dribbble-muted max-w-2xl leading-relaxed font-medium">
                Final-year AI & Data Science student at VRSEC. Currently building AI systems at <span className="text-white">Aynstyn Technologies</span>. I take systems apart to understand why they break, then rebuild them better.
              </p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-wrap items-center gap-10"
            >
              {[
                { label: 'GitHub', icon: GithubLogo, href: 'https://github.com/charansaiponnada' },
                { label: 'LinkedIn', icon: LinkedinLogo, href: 'https://linkedin.com/in/charansaiponnada' },
                { label: 'Email', icon: Envelope, href: 'mailto:charansaiponnada06@gmail.com' },
                { label: 'Portfolio', icon: ArrowUpRight, href: '#', external: true }
              ].map((link) => (
                <a 
                  key={link.label}
                  href={link.href}
                  target={link.external ? "_blank" : undefined}
                  className="group flex items-center gap-3 font-mono text-xs font-bold uppercase tracking-[0.2em] text-white/40 hover:text-dribbble-accent transition-all"
                >
                  <link.icon size={18} className="text-white/20 group-hover:text-dribbble-accent transition-colors" />
                  {link.label}
                  {link.external && <span className="text-[10px] opacity-40">↗</span>}
                </a>
              ))}
            </motion.div>
          </div>

          <div className="lg:col-span-4 relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.9, rotate: 5 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{ duration: 1, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="relative aspect-[4/5] w-full max-w-[400px] mx-auto lg:ml-auto group"
            >
              {/* Technical Frame */}
              <div className="absolute -inset-4 border border-white/[0.05] -z-10 group-hover:border-dribbble-accent/20 transition-colors" />
              <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-dribbble-accent" />
              <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-dribbble-accent" />
              
              {/* Image with 'Pixel/Dither' Effect via CSS */}
              <div className="w-full h-full overflow-hidden bg-dribbble-surface-1 grayscale brightness-110 contrast-125">
                <img 
                  src="/image.png" 
                  alt="Charan Sai Ponnada" 
                  className="w-full h-full object-cover mix-blend-luminosity opacity-80 group-hover:opacity-100 transition-opacity"
                  style={{ 
                    imageRendering: 'pixelated',
                    filter: 'contrast(1.5) brightness(0.9) grayscale(1)' 
                  }}
                />
                {/* Scanline/Grid Overlay */}
                <div className="absolute inset-0 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.1)_50%),linear-gradient(90deg,rgba(212,255,0,0.05),rgba(0,255,0,0.02),rgba(0,0,255,0.05))] bg-[length:100%_4px,3px_100%] pointer-events-none" />
              </div>

              {/* Data Label */}
              <div className="absolute -bottom-8 right-0 font-mono text-[9px] text-white/20 uppercase tracking-[0.3em] flex flex-col items-end gap-1">
                <span>Subject: CSP_06</span>
                <span>Status: Verified_Builder</span>
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  )
}
