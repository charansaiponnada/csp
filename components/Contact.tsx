'use client'

import { motion, useInView } from 'framer-motion'
import { useRef, useState, useEffect } from 'react'
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
    <section id="contact" className="bg-white relative overflow-hidden border-t border-black/5">
      <div className="grid lg:grid-cols-4 w-full">
        {/* Header Cell */}
        <div className="lg:col-span-1 p-12 border-r border-b border-black/5 flex flex-col justify-between min-h-[400px]">
          <div>
            <span className="text-[#0055FF] font-mono text-[10px] tracking-[0.4em] uppercase mb-4 block">06 / CONNECT</span>
            <h2 className="font-display text-5xl font-bold tracking-tight uppercase text-black leading-none">INITIALIZE<br/>LINK</h2>
          </div>
          <p className="text-black/30 text-xs font-light leading-relaxed max-w-[200px]">
            The lab is open for high-stakes AI engineering and research collaborations.
          </p>
        </div>

        {/* Contact Content Area */}
        <div className="lg:col-span-3 grid md:grid-cols-2">
          {/* Main Info Cell */}
          <div className="p-12 border-r border-b border-black/5 flex flex-col justify-center">
            <h3 className="font-display text-4xl font-bold text-black mb-8 uppercase leading-tight">
              Ready to <span className="text-[#0055FF]">scale</span> impact?
            </h3>
            <p className="text-black/40 text-lg font-light leading-relaxed mb-12">
              Building at the intersection of intelligence and human behavior requires a different kind of engineer. Let&apos;s talk about the future.
            </p>
            <div className="flex flex-col gap-4">
              <span className="text-black/20 font-mono text-[9px] uppercase tracking-widest">Protocol Status</span>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-[#0055FF] animate-pulse" />
                <span className="text-black text-xs font-mono uppercase">Operational & Accepting Queries</span>
              </div>
            </div>
          </div>

          {/* Contact Links Grid */}
          <div className="grid grid-rows-3">
            {links.map((link, i) => (
              <a
                key={i}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-12 border-b border-black/5 hover:bg-black/[0.02] transition-all group flex flex-col justify-between"
              >
                <div className="flex justify-between items-start">
                  <div>
                    <span className="text-black/20 font-mono text-[9px] uppercase block mb-4 tracking-widest">{link.label}</span>
                    <p className="text-black group-hover:text-[#0055FF] text-xl font-bold transition-colors uppercase leading-tight">{link.value}</p>
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