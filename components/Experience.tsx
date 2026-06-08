'use client'

import { motion } from 'framer-motion'

export default function Experience() {
  return (
    <section id="experience" className="bg-apple-parchment py-[80px] w-full flex flex-col items-center">
      <div className="max-w-[1024px] w-full px-6 flex flex-col items-center text-center">
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-display text-[40px] font-semibold leading-[1.1] tracking-apple-tight text-apple-ink mb-2">
            AI Engineer Intern
          </h2>
          <p className="font-display text-[28px] font-normal leading-[1.14] tracking-[0.01em] text-apple-ink mb-6">
            Aynstyn Technologies Pvt. Ltd.
          </p>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="font-sans text-apple-body text-apple-ink mb-12 max-w-2xl"
        >
          Engineering AI-powered SaaS modules for interview simulation and candidate assessment. 
          Building high-stakes evaluation infrastructure for LLM reliability.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="w-full grid md:grid-cols-3 gap-8 text-left"
        >
          {[
            { title: "LLM Pipeline", desc: "Validating model performance across 200+ structured test cases." },
            { title: "Optimization", desc: "Reducing unstable outputs through prompt architectures and inference workflows." },
            { title: "Integration", desc: "Deploying scalable SaaS infrastructure for real-time concurrent inference." }
          ].map((item, i) => (
            <div key={i} className="flex flex-col">
              <h3 className="font-sans text-[17px] font-semibold tracking-[-0.022em] text-apple-ink mb-2">{item.title}</h3>
              <p className="font-sans text-[17px] font-normal leading-[1.47] tracking-[-0.022em] text-apple-ink">{item.desc}</p>
            </div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 text-center"
        >
          <p className="font-sans text-[12px] font-normal tracking-[-0.012em] text-apple-ink-muted">
            Jan 2026 – Present • Remote
          </p>
        </motion.div>

      </div>
    </section>
  )
}
