'use client'

import { motion } from 'framer-motion'

const projects = [
  {
    id: '01',
    title: 'VIVIRITY Intelli-Credit — Credit Risk Intelligence',
    desc: 'End-to-end AI credit intelligence system. Processes 500+ page annual reports in under 5 minutes. VectorLess RAG pipeline with 98% lower API overhead than embedding-based systems. Extracted 50+ financial risk indicators with a multi-agent decision pipeline.',
    link: 'https://github.com/charansaiponnada/VIVIRITY',
    linkText: '2nd · IIT Hyd ↗',
    tags: ['RAG', 'Multi-agent', 'LLM', 'FinTech']
  },
  {
    id: '02',
    title: 'AyurMind — Domain-Specific RAG System',
    desc: 'RAG system over 1200+ structured Ayurvedic knowledge entries. 84% Top-3 retrieval accuracy. Reduced hallucinated responses by 45% via validation layers. Expert-rated answer quality improved from 3.1 to 4.4 / 5.',
    link: 'https://github.com/charansaiponnada/AyurMind',
    linkText: 'GitHub ↗',
    tags: ['RAG', 'Knowledge Base', 'Hallucination Reduction']
  },
  {
    id: '03',
    title: 'Aynstyn Technologies — AI Engineer Intern',
    desc: 'Engineered AI-powered SaaS modules for interview simulation, candidate assessment, and voice evaluation. Built an LLM evaluation pipeline validating performance across 200+ structured test cases. Optimized prompt architectures for production consistency.',
    link: 'https://aynstyn.com',
    linkText: 'aynstyn.com ↗',
    tags: ['SaaS', 'LLM Evaluation', 'Prompt Engineering', 'Production AI']
  },
  {
    id: '04',
    title: 'Genomic Foundation Model — Multi-Species',
    desc: 'Building a ~100M parameter genomic foundation model from scratch using Mamba SSM architecture. 4,096 bp context window across 5 species. Phase 1 validated on Human Chr22 with MAE Transformer. Phase 2 targets university L40S cluster with DDP/SLURM.',
    tags: ['Mamba SSM', 'Genomics', 'Foundation Model', 'Research'],
    status: 'In progress'
  }
]

export default function Projects() {
  const faders = {
    initial: { opacity: 0, y: 16 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, amount: 0.1 },
    transition: { duration: 0.6, ease: "easeOut" }
  }

  return (
    <>
      <div className="section-rule" />
      <section id="work" className="py-24 bg-portfolio-beige">
        <div className="max-w-[900px] mx-auto px-12">
          <motion.p className="section-eyebrow" {...faders}>// work & projects</motion.p>
          
          <motion.div className="flex flex-col gap-1" {...faders}>
            {projects.map((p) => (
              <div key={p.id} className="py-7 border-b border-portfolio-rule flex flex-col md:flex-row gap-6 items-start first:border-t">
                <span className="font-mono text-[11px] text-portfolio-ink-3 tracking-[0.06em] pt-1 min-w-[28px]">
                  {p.id}
                </span>
                
                <div className="flex-1">
                  <div className="font-sans text-[17px] font-medium text-portfolio-ink mb-1.5 leading-[1.3]">
                    {p.title}
                  </div>
                  <div className="text-[14px] text-portfolio-ink-3 leading-[1.6] max-w-[560px]">
                    {p.desc}
                  </div>
                  <div className="flex flex-wrap gap-1.5 mt-3">
                    {p.tags.map(tag => (
                      <span key={tag} className="font-mono text-[10px] text-portfolio-ink-3 bg-portfolio-beige-2 px-2 py-0.5 tracking-[0.04em] rounded-[2px]">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {p.link ? (
                  <a 
                    href={p.link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="font-mono text-[11px] text-portfolio-ink-3 no-underline pt-1 tracking-[0.04em] whitespace-nowrap hover:text-portfolio-sienna transition-colors hidden md:block"
                  >
                    {p.linkText}
                  </a>
                ) : (
                  <span className="font-mono text-[11px] text-portfolio-slate pt-1 tracking-[0.04em] whitespace-nowrap hidden md:block">
                    {p.status}
                  </span>
                )}
              </div>
            ))}
          </motion.div>
        </div>
      </section>
    </>
  )
}
