'use client'

import { motion } from 'framer-motion'
import { Briefcase, GraduationCap, Calendar } from '@phosphor-icons/react'

const experiences = [
  {
    role: 'AI Engineer Intern',
    company: 'Aynstyn Technologies Pvt. Ltd.',
    period: 'Jan 2026 – Present',
    description: 'Engineering AI-powered SaaS modules for interview simulation and candidate assessment. Building high-stakes evaluation infrastructure for LLM reliability.',
    highlights: [
      'Built LLM evaluation pipeline validating model performance across 200+ structured test cases.',
      'Optimized prompt architectures and inference workflows, reducing unstable outputs.',
      'Integrated LLM-based components into scalable SaaS infrastructure for real-time inference.'
    ],
    tech: ['FastAPI', 'LangChain', 'PyTorch', 'LLM Eval', 'RAG']
  }
]

const education = [
  {
    degree: 'B.Tech in Artificial Intelligence and Data Science',
    institution: 'Velagapudi Ramakrishna Siddhartha Engineering College',
    period: '2023 – 2027',
    details: 'CGPA: 8.76. Focused on deep learning, neural architectures, and data engineering.'
  }
]

export default function Experience() {
  return (
    <section id="experience" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4 uppercase">Professional <span className="text-blue-500">Path.</span></h2>
          <p className="text-slate-400 font-light">Documented journey of systems engineering and research.</p>
        </motion.div>

        <div className="grid lg:grid-cols-12 gap-12">
          {/* Experience Timeline */}
          <div className="lg:col-span-8 space-y-12">
            {experiences.map((exp, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="spatial-card p-8 md:p-12"
              >
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-1 uppercase tracking-tight">{exp.role}</h3>
                    <p className="text-blue-400 font-mono text-sm tracking-widest uppercase">{exp.company}</p>
                  </div>
                  <div className="flex items-center gap-2 px-4 py-2 glass rounded-full text-xs font-mono text-slate-400">
                    <Calendar size={14} /> {exp.period}
                  </div>
                </div>
                
                <p className="text-slate-400 mb-8 leading-relaxed font-light">{exp.description}</p>
                
                <ul className="grid md:grid-cols-2 gap-4 mb-10">
                  {exp.highlights.map((h, j) => (
                    <li key={j} className="flex gap-3 text-xs text-slate-500 leading-relaxed font-light">
                      <div className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-1 shrink-0" />
                      {h}
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-2">
                  {exp.tech.map((t) => (
                    <span key={t} className="px-3 py-1 glass rounded-full text-[10px] font-mono text-slate-400 uppercase tracking-widest">{t}</span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Education Sidebar */}
          <div className="lg:col-span-4 space-y-8">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="glass p-8 rounded-3xl"
            >
              <div className="w-12 h-12 bg-blue-500/10 rounded-2xl flex items-center justify-center mb-6 border border-blue-500/20">
                <GraduationCap size={24} className="text-blue-400" />
              </div>
              <h3 className="text-lg font-bold mb-4 uppercase tracking-tight">Academic Foundation</h3>
              {education.map((edu, i) => (
                <div key={i} className="space-y-4">
                  <p className="text-sm font-medium leading-tight">{edu.degree}</p>
                  <p className="text-xs text-slate-400 leading-relaxed font-light">{edu.institution}</p>
                  <div className="flex items-center justify-between pt-4 border-t border-white/5">
                    <span className="text-[10px] font-mono text-blue-400 uppercase tracking-widest">{edu.period}</span>
                    <span className="text-[10px] font-mono text-slate-500 uppercase">CGPA: 8.76</span>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
