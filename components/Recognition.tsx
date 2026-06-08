'use client'

import { motion } from 'framer-motion'
import { Book, Microscope, ChartLineUp, FileText } from '@phosphor-icons/react'

export default function Recognition() {
  return (
    <section id="research" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-blue-400 font-mono text-xs uppercase tracking-[0.3em] mb-6 block">Primary Author</span>
            <h2 className="text-4xl md:text-6xl font-bold tracking-tighter mb-8 uppercase leading-none">
              Vision-Language <br />
              <span className="text-blue-500">Navigation.</span>
            </h2>
            <p className="text-slate-400 text-lg leading-relaxed font-light mb-10">
              Published research in <span className="text-white font-medium">ISAECT 2025</span> focusing on assistive navigation for Indian traffic environments using BLIP and 3-stage LoRA fine-tuning.
            </p>
            
            <div className="grid grid-cols-2 gap-8 mb-12">
              {[
                { label: 'Improvement', value: '+15.6%', desc: 'Across BLEU/METEOR' },
                { label: 'Dataset', value: '427', desc: 'Unique Traffic Scenes' }
              ].map((stat, i) => (
                <div key={i}>
                  <p className="text-3xl font-bold text-white mb-1 tracking-tight">{stat.value}</p>
                  <p className="text-[10px] font-mono text-blue-400 uppercase tracking-widest mb-2">{stat.label}</p>
                  <p className="text-xs text-slate-500 font-light leading-none">{stat.desc}</p>
                </div>
              ))}
            </div>

            <motion.a
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              href="https://huggingface.co/charansaiponnada"
              className="inline-flex items-center gap-3 px-8 py-4 glass rounded-2xl text-sm font-bold uppercase tracking-widest hover:bg-white/[0.05] transition-colors"
            >
              <FileText size={20} /> View Paper & Model
            </motion.a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="absolute inset-0 bg-blue-500/10 blur-[100px] -z-10" />
            <div className="spatial-card p-12 aspect-[4/5] flex flex-col justify-center items-center text-center">
              <div className="w-20 h-20 bg-blue-500/10 rounded-3xl flex items-center justify-center mb-8 border border-blue-500/20">
                <Microscope size={40} className="text-blue-400" />
              </div>
              <h3 className="text-2xl font-bold mb-4 uppercase tracking-tight">ISAECT 2025</h3>
              <p className="text-slate-500 text-sm leading-relaxed font-light mb-8 max-w-[250px]">
                Multimodal scene understanding using BLIP vision-language models for assistive technologies.
              </p>
              <div className="flex gap-4">
                {['PyTorch', 'BLIP', 'LoRA'].map(t => (
                  <span key={t} className="text-[10px] font-mono text-blue-400 uppercase tracking-widest">{t}</span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
