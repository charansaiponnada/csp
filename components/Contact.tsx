'use client'

import { motion } from 'framer-motion'
import { ArrowUpRight } from '@phosphor-icons/react'

export default function Contact() {
  return (
    <section id="contact" className="border-t border-black/5 bg-[#0055FF]/[0.02]">
      <div className="max-w-7xl mx-auto border-x border-black/5 flex flex-col md:flex-row">
        
        <div className="md:w-1/2 p-6 md:p-12 border-b md:border-b-0 md:border-r border-black/5 flex flex-col justify-between">
          <div>
            <span className="text-[#0055FF] font-mono text-[9px] tracking-[0.4em] uppercase mb-12 block">05 / Initialize Link</span>
            <h2 className="font-display text-4xl md:text-5xl font-bold tracking-tight uppercase leading-[0.9] mb-8">
              Open to <br /> Collaboration
            </h2>
            <p className="text-black/60 text-sm font-light leading-relaxed max-w-sm mb-12">
              Accepting queries for AI engineering roles, high-stakes infrastructure, and applied research initiatives.
            </p>
          </div>
          
          <div className="flex items-center gap-3">
            <div className="w-1.5 h-1.5 bg-[#0055FF] animate-pulse" />
            <span className="text-[9px] font-mono font-bold text-black/50 uppercase tracking-widest">Systems Operational</span>
          </div>
        </div>

        <div className="md:w-1/2 flex flex-col">
          <a 
            href="mailto:charansaiponnada06@gmail.com" 
            className="p-6 md:p-12 border-b border-black/5 group hover:bg-[#0055FF] hover:text-white transition-colors flex flex-col h-full justify-center"
          >
            <span className="text-black/30 group-hover:text-white/50 font-mono text-[9px] uppercase tracking-[0.3em] mb-4">Direct Communication</span>
            <div className="flex justify-between items-end">
              <span className="text-xl md:text-3xl font-bold uppercase tracking-tight">Email</span>
              <ArrowUpRight size={24} className="text-[#0055FF] group-hover:text-white transition-colors" />
            </div>
          </a>
          
          <div className="flex flex-col sm:flex-row h-full">
            <a 
              href="https://github.com/charansaiponnada" 
              target="_blank"
              className="flex-1 p-6 md:p-12 border-b sm:border-b-0 sm:border-r border-black/5 group hover:bg-[#0055FF]/10 transition-colors flex flex-col justify-between"
            >
              <span className="text-black/30 font-mono text-[9px] uppercase tracking-[0.3em] mb-4">Source Code</span>
              <div className="flex justify-between items-end">
                <span className="text-lg md:text-xl font-bold uppercase tracking-tight group-hover:text-[#0055FF] transition-colors">GitHub</span>
              </div>
            </a>
            
            <a 
              href="https://linkedin.com/in/charansaiponnada" 
              target="_blank"
              className="flex-1 p-6 md:p-12 group hover:bg-[#0055FF]/10 transition-colors flex flex-col justify-between"
            >
              <span className="text-black/30 font-mono text-[9px] uppercase tracking-[0.3em] mb-4">Network</span>
              <div className="flex justify-between items-end">
                <span className="text-lg md:text-xl font-bold uppercase tracking-tight group-hover:text-[#0055FF] transition-colors">LinkedIn</span>
              </div>
            </a>
          </div>
        </div>

      </div>
    </section>
  )
}
