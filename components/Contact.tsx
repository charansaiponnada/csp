'use client'

import { motion } from 'framer-motion'
import { GithubLogo, LinkedinLogo, Envelope, ArrowRight, MapPin } from '@phosphor-icons/react'

export default function Contact() {
  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-12 gap-12">
          {/* Contact Info */}
          <div className="lg:col-span-5">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-6xl font-bold tracking-tighter mb-8 uppercase leading-none">
                Initialize <br />
                <span className="text-blue-500">Connection.</span>
              </h2>
              <p className="text-slate-400 text-lg font-light leading-relaxed mb-12">
                Open for high-stakes AI engineering roles, research collaborations, and ambitious technical projects.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-center gap-4 group cursor-pointer">
                  <div className="w-12 h-12 glass rounded-2xl flex items-center justify-center text-blue-400 group-hover:bg-blue-500 group-hover:text-white transition-all">
                    <Envelope size={24} />
                  </div>
                  <div>
                    <p className="text-[10px] font-mono text-slate-500 uppercase tracking-widest">Email Protocol</p>
                    <p className="text-white font-medium">charansaiponnada06@gmail.com</p>
                  </div>
                </div>

                <div className="flex items-center gap-4 group cursor-pointer">
                  <div className="w-12 h-12 glass rounded-2xl flex items-center justify-center text-purple-400 group-hover:bg-purple-500 group-hover:text-white transition-all">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <p className="text-[10px] font-mono text-slate-500 uppercase tracking-widest">Location Status</p>
                    <p className="text-white font-medium">Kakinada, Andhra Pradesh, India</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Contact Links Grid */}
          <div className="lg:col-span-7 grid sm:grid-cols-2 gap-6">
            {[
              { label: 'GitHub', value: '@charansaiponnada', href: 'https://github.com/charansaiponnada', icon: GithubLogo, color: 'blue' },
              { label: 'LinkedIn', value: 'Charan Sai Ponnada', href: 'https://linkedin.com/in/charansaiponnada', icon: LinkedinLogo, color: 'purple' }
            ].map((link, i) => (
              <motion.a
                key={i}
                whileHover={{ y: -5 }}
                href={link.href}
                target="_blank"
                className="spatial-card p-8 flex flex-col justify-between aspect-square"
              >
                <div className="w-12 h-12 glass rounded-2xl flex items-center justify-center text-slate-400">
                  <link.icon size={24} />
                </div>
                <div>
                  <p className="text-[10px] font-mono text-slate-500 uppercase tracking-[0.3em] mb-2">{link.label}</p>
                  <p className="text-xl font-bold text-white mb-6 uppercase tracking-tight">{link.value}</p>
                  <div className="flex items-center gap-2 text-blue-400 text-[10px] font-mono uppercase tracking-widest">
                    Execute Link <ArrowRight size={14} />
                  </div>
                </div>
              </motion.a>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
