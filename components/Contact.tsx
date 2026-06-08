'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { Envelope, GithubLogo, LinkedinLogo, ArrowRight } from '@phosphor-icons/react'

const links = [
  {
    label: 'Direct Email',
    value: 'charansaiponnada06@gmail.com',
    href: 'mailto:charansaiponnada06@gmail.com',
    icon: Envelope,
  },
  {
    label: 'Neural Repo',
    value: '@charansaiponnada',
    href: 'https://github.com/charansaiponnada',
    icon: GithubLogo,
  },
  {
    label: 'Connection Path',
    value: 'Charan Sai Ponnada',
    href: 'https://linkedin.com/in/charansaiponnada',
    icon: LinkedinLogo,
  },
]

export default function Contact() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="contact" className="bg-white relative max-w-7xl mx-auto border-t border-black/5">
      <div className="grid lg:grid-cols-12 w-full border-l border-black/5">
        {/* Section Header */}
        <div className="lg:col-span-4 p-8 md:p-12 border-r border-b border-black/5 flex flex-col min-h-[400px]">
          <span className="text-[#0055FF] font-mono text-[9px] tracking-[0.4em] uppercase mb-12 block">07 / Connect</span>
          <h2 className="font-display text-4xl md:text-5xl font-bold tracking-tight uppercase text-black leading-[0.9] mt-auto">
            Initialize<br />
            Link.
          </h2>
          <p className="text-black/40 text-xs font-light mt-8 leading-relaxed max-w-[250px]">
            The lab is open for high-stakes AI engineering and research collaborations.
          </p>
        </div>

        {/* Contact Content Area */}
        <div className="lg:col-span-8 grid md:grid-cols-2">
          {/* Main Info Cell */}
          <div className="p-8 md:p-12 border-r border-b border-black/5 flex flex-col justify-center bg-black/[0.01]">
            <h3 className="font-display text-3xl md:text-4xl font-bold text-black mb-8 uppercase leading-[1.1]">
              Ready to <span className="text-[#0055FF]">scale</span> impact?
            </h3>
            <p className="text-black/50 text-sm md:text-base font-light leading-relaxed mb-12">
              Building at the intersection of intelligence and human behavior requires a different kind of engineer. Let's talk about the future.
            </p>
            <div className="flex flex-col gap-4 mt-auto border-t border-black/5 pt-8">
              <span className="text-black/30 font-mono text-[9px] uppercase tracking-widest">Protocol Status</span>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-[#0055FF] animate-pulse" />
                <span className="text-black text-xs font-mono uppercase tracking-widest">Operational & Accepting Queries</span>
              </div>
            </div>
          </div>

          {/* Contact Links Grid */}
          <div className="grid grid-rows-3 border-b border-black/5">
            {links.map((link, i) => (
              <a
                key={i}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-8 md:p-12 border-b border-black/5 last:border-b-0 hover:bg-[#0055FF]/[0.02] transition-all group flex flex-col justify-between"
              >
                <div className="flex justify-between items-start">
                  <div>
                    <span className="text-black/30 font-mono text-[9px] uppercase block mb-4 tracking-widest">{link.label}</span>
                    <p className="text-black group-hover:text-[#0055FF] text-lg md:text-xl font-bold transition-colors uppercase leading-tight">{link.value}</p>
                  </div>
                  <div className="text-black/10 group-hover:text-[#0055FF] transition-colors">
                    <link.icon size={24} />
                  </div>
                </div>
                <div className="flex items-center gap-2 mt-8 opacity-0 group-hover:opacity-100 transition-opacity">
                  <span className="text-[#0055FF] font-mono text-[9px] uppercase tracking-widest">Execute Directive</span>
                  <ArrowRight size={12} className="text-[#0055FF]" />
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
