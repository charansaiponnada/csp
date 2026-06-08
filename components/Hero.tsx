'use client'

import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section id="hero" className="pt-[160px] pb-[96px] px-6">
      <div className="max-w-[1200px] mx-auto grid lg:grid-cols-2 gap-12 items-center">
        
        {/* Left: Copy & Actions */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex flex-col items-start"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-claude-surface-card rounded-full text-claude-ink text-xs font-medium mb-6">
            <span className="w-2 h-2 rounded-full bg-claude-primary" />
            AI Engineer Intern @ Aynstyn Technologies
          </div>
          
          <h1 className="font-display text-[52px] md:text-[64px] leading-[1.05] tracking-claude-tightest text-claude-ink mb-6">
            Meet your next <br />
            systems architect.
          </h1>
          
          <p className="font-sans text-[18px] md:text-[20px] leading-[1.5] text-claude-body mb-8 max-w-lg">
            I build robust RAG systems, evaluate LLM reliability, and author vision-language research. Designing high-stakes intelligence infrastructure.
          </p>

          <div className="flex flex-wrap items-center gap-4">
            <a href="#projects" className="btn-coral">
              View Initiatives
            </a>
            <a href="https://linkedin.com/in/charansaiponnada" target="_blank" className="btn-outline">
              Connect on LinkedIn
            </a>
          </div>
        </motion.div>

        {/* Right: Code Window Mockup */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="claude-dark-card shadow-xl"
        >
          <div className="flex items-center justify-between mb-6 border-b border-white/10 pb-4">
            <div className="flex gap-2">
              <div className="w-3 h-3 rounded-full bg-[#ff5f56]" />
              <div className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
              <div className="w-3 h-3 rounded-full bg-[#27c93f]" />
            </div>
            <div className="font-mono text-[12px] text-claude-on-dark-soft">eval_pipeline.py</div>
          </div>
          
          <div className="font-mono text-[13px] md:text-[14px] leading-[1.6] overflow-x-auto text-claude-on-dark">
            <pre><code>
<span className="text-[#c678dd]">def</span> <span className="text-[#61afef]">evaluate_rag_system</span>(query: <span className="text-[#e5c07b]">str</span>, context: <span className="text-[#e5c07b]">List[str]</span>):
    <span className="text-[#5c6370]">"""</span>
    <span className="text-[#5c6370]">Validates LLM performance across 200+ edge cases.</span>
    <span className="text-[#5c6370]">Ensures zero hallucination in critical outputs.</span>
    <span className="text-[#5c6370]">"""</span>
    
    retriever = VectorLessRetriever()
    relevant_docs = retriever.search(query, context)
    
    <span className="text-[#c678dd]">if not</span> relevant_docs:
        <span className="text-[#c678dd]">return</span> <span className="text-[#98c379]">"Insufficient context."</span>
        
    response = llm.generate(
        prompt=build_strict_prompt(query, relevant_docs),
        temperature=<span className="text-[#d19a66]">0.0</span>
    )
    
    <span className="text-[#c678dd]">return</span> validation_layer.score(response)
            </code></pre>
          </div>
          
          <div className="mt-6 pt-4 border-t border-white/10 flex justify-between items-center text-[12px] font-mono text-claude-on-dark-soft">
            <span>Status: <span className="text-[#5db872]">Passing 98.4%</span></span>
            <span>Latency: 124ms</span>
          </div>
        </motion.div>

      </div>
    </section>
  )
}
