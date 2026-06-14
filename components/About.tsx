'use client'

import { motion } from 'framer-motion'

export default function About() {
  const faders = {
    initial: { opacity: 0, y: 16 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, amount: 0.1 },
    transition: { duration: 0.6, ease: "easeOut" }
  }

  return (
    <>
      <div className="section-rule" />
      <section id="about" className="py-24 bg-portfolio-beige">
        <div className="max-w-[900px] mx-auto px-12">
          <motion.p className="section-eyebrow" {...faders}>// about</motion.p>
          
          <div className="grid md:grid-cols-2 gap-16 items-start">
            <motion.div className="text-[16px] text-portfolio-ink-2 leading-[1.8]" {...faders}>
              <p className="mb-5">
                I'm a final-year AI & Data Science student at VRSEC, currently building AI systems at <strong>Aynstyn Technologies</strong> — where I've already received a pre-placement offer.
              </p>
              <p className="mb-5">
                The way I work: I take something apart until I understand exactly why it breaks. Then I rebuild it better. That's true for ML pipelines, product systems, and most things in life.
              </p>
              <p className="mb-5">
                I hold a published research paper on vision-language models, placed <strong>2nd at IIT Hyderabad's YUVAAN 2026</strong> hackathon, and am currently training a genomic foundation model from scratch across multiple species.
              </p>
              <p>Persistent. Precise. I go all the way when something matters.</p>
            </motion.div>

            <motion.div className="flex flex-col gap-2 pt-1" {...faders}>
              {[
                'Python · PyTorch · TensorFlow',
                'LLM Systems · RAG · Prompt Engineering',
                'FastAPI · Node.js · REST APIs',
                'Next.js · React',
                'AWS · GCP · Model Serving',
                'Mamba SSM · Genomic Modeling',
                'LangChain · Vector Retrieval'
              ].map((stack) => (
                <div key={stack} className="stack-item">
                  {stack}
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>
    </>
  )
}
