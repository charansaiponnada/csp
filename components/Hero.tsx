'use client'

import { motion } from 'framer-motion'
import { GithubLogo, LinkedinLogo, TwitterLogo, Envelope, MapPin, ArrowUpRight } from '@phosphor-icons/react'
import Image from 'next/image'

export default function Hero() {
  return (
    <section id="hero" className="min-h-screen relative flex items-center justify-center pt-20 overflow-hidden">
      {/* Immersive Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full -z-10">
        <div className="absolute top-[-10%] right-[-10%] w-[500px] h-[500px] bg-blue-600/10 blur-[120px] rounded-full animate-pulse" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[600px] h-[600px] bg-purple-600/10 blur-[150px] rounded-full" />
        <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center relative z-10">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-blue-500/20 bg-blue-500/5 text-blue-400 text-xs font-mono mb-6">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
            </span>
            Currently Engineering at Aynstyn Technologies
          </div>
          
          <h1 className="text-6xl md:text-8xl font-bold tracking-tighter leading-[0.9] mb-8">
            Charan Sai <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
              Ponnada.
            </span>
          </h1>
          
          <p className="text-xl text-slate-400 leading-relaxed mb-10 max-w-lg font-light">
            AI Engineer specializing in <span className="text-slate-100">RAG Systems</span>, 
            <span className="text-slate-100"> LLM Evaluation</span>, and 
            <span className="text-slate-100"> Computer Vision</span>. Primary Author for ISAECT 2025.
          </p>

          <div className="flex flex-wrap gap-4 items-center">
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="mailto:charansaiponnada06@gmail.com"
              className="px-8 py-4 bg-white text-black font-bold rounded-xl flex items-center gap-2"
            >
              Collaborate <ArrowUpRight weight="bold" />
            </motion.a>
            
            <div className="flex items-center gap-4 ml-4">
              {[
                { icon: GithubLogo, href: "https://github.com/charansaiponnada" },
                { icon: LinkedinLogo, href: "https://linkedin.com/in/charansaiponnada" },
                { icon: Envelope, href: "mailto:charansaiponnada06@gmail.com" }
              ].map((social, i) => (
                <motion.a
                  key={i}
                  whileHover={{ y: -5, color: '#60a5fa' }}
                  href={social.href}
                  className="text-slate-500 transition-colors"
                >
                  <social.icon size={28} />
                </motion.a>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Spatial Visual Representation */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="relative group"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 blur-[80px] opacity-20 group-hover:opacity-40 transition-opacity" />
          <div className="relative glass rounded-3xl overflow-hidden aspect-square flex items-center justify-center p-4">
            <Image
              src="https://avatars.githubusercontent.com/u/120614838?v=4"
              alt="Charan Sai Ponnada"
              width={400}
              height={400}
              className="rounded-2xl grayscale hover:grayscale-0 transition-all duration-700 hover:scale-105"
            />
          </div>
          
          {/* Metadata Badges */}
          <div className="absolute -bottom-6 -left-6 glass p-6 rounded-2xl">
            <p className="text-[10px] font-mono text-blue-400 uppercase tracking-widest mb-1">Based In</p>
            <p className="text-sm font-medium">Kakinada, India</p>
          </div>
          
          <div className="absolute -top-6 -right-6 glass p-6 rounded-2xl">
            <p className="text-[10px] font-mono text-purple-400 uppercase tracking-widest mb-1">Research Status</p>
            <p className="text-sm font-medium">ISAECT 2025 Author</p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
