'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const codeSnippets = [
  {
    title: 'LLM Evaluation Pipeline',
    language: 'python',
    code: `class LLMEvaluator:
    def __init__(self, model_path):
        self.model = load_model(model_path)
        self.test_cases = load_json("test_suites.json")

    def run_eval(self):
        results = []
        for case in self.test_cases:
            # Validating performance across 200+ structured cases
            pred = self.model.generate(case["prompt"])
            score = metrics.calculate_consistency(pred, case["expected"])
            results.append({"case_id": case["id"], "score": score})
        
        return results`
  },
  {
    title: 'Vision-Language Navigation',
    language: 'python',
    code: `# Fine-tuning BLIP via 3-stage LoRA training
from peft import LoraConfig, get_peft_model

config = LoraConfig(
    r=16,
    lora_alpha=32,
    target_modules=["qkv"],
    lora_dropout=0.05,
    bias="none"
)

# Training on 427-scene Indian traffic dataset
model = get_peft_model(blip_model, config)
trainer.train(dataset="indian_traffic_v1")`
  },
  {
    title: 'VectorLess RAG Pipeline',
    language: 'python',
    code: `# Achieving 98% lower API overhead
def vectorless_retrieval(query, doc_index):
    # Direct structural analysis of 500+ page reports
    structural_markers = doc_index.extract_markers(query)
    
    # Multi-agent decision pipeline for risk assessment
    context = structural_markers.aggregate_context()
    analysis = llm_agent.analyze_risk(context)
    
    return analysis`
  },
  {
    title: 'AyurMind RAG',
    language: 'python',
    code: `# RAG over 1200+ structured Ayurvedic entries
retriever = HybridRetriever(
    dense_model="bge-small-en-v1.5",
    sparse_model="bm25",
    alpha=0.7
)

# Reducing hallucinations by 45% via validation layers
validator = HallucinationFilter(threshold=0.85)
response = generator.generate(query, context)

if validator.is_grounded(response, context):
    return response`
  },
]

const keywords = ['from', 'import', 'for', 'in', 'def', 'class', 'return', 'if', 'else', 'True', 'False', 'None', 'with', 'as']

function highlightCode(code: string): JSX.Element[] {
  let parts: JSX.Element[] = []
  let lastIndex = 0
  let key = 0

  const commentRegex = /#.*/g

  code.replace(commentRegex, (match, index) => {
    if (index > lastIndex) {
      parts.push(<span key={key++}>{code.slice(lastIndex, index)}</span>)
    }
    parts.push(<span key={key++} className="text-[#666666]">{match}</span>)
    lastIndex = index + match.length
    return match
  })

  // Basic tokenization and highlighting for remaining parts would follow...
  // For simplicity in this replacement, I'll keep the logic consistent with the original
  return parts; 
}

export default function CodeWindow() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [displayedCode, setDisplayedCode] = useState('')
  const [isTyping, setIsTyping] = useState(true)

  const currentSnippet = codeSnippets[currentIndex]
  const fullCode = currentSnippet.code

  useEffect(() => {
    if (isTyping) {
      const timeout = setTimeout(() => {
        if (displayedCode.length < fullCode.length) {
          setDisplayedCode(fullCode.slice(0, displayedCode.length + 3))
        } else {
          setIsTyping(false)
          setTimeout(() => {
            setCurrentIndex((prev) => (prev + 1) % codeSnippets.length)
            setDisplayedCode('')
            setIsTyping(true)
          }, 2500)
        }
      }, 15)
      return () => clearTimeout(timeout)
    }
  }, [displayedCode, isTyping, fullCode])

  return (
    <div className="glass rounded-2xl overflow-hidden shadow-2xl border border-white/5">
      <div className="flex items-center gap-2 px-4 py-3 bg-white/5 border-b border-white/5">
        <div className="flex gap-1.5">
          <div className="w-2.5 h-2.5 rounded-full bg-white/10" />
          <div className="w-2.5 h-2.5 rounded-full bg-white/10" />
          <div className="w-2.5 h-2.5 rounded-full bg-white/10" />
        </div>
        <div className="flex-1 text-center">
          <span className="text-white/40 text-[10px] font-mono tracking-widest uppercase">{currentSnippet.title}</span>
        </div>
      </div>

      <div className="p-6 font-mono text-sm leading-relaxed min-h-[360px] max-w-2xl overflow-hidden">
        <pre className="text-[#EDEDED]">
          <code>
            {displayedCode.split('\n').map((line, lineIndex) => (
              <div key={lineIndex} className="flex">
                <span className="text-white/20 w-6 text-right pr-4 select-none text-xs">
                  {lineIndex + 1}
                </span>
                <span className="flex-1">
                  {line.split(/(\s+|[(){}[\],.:;])/g).map((token, tokenIndex) => {
                    if (!token) return null
                    if (keywords.includes(token)) {
                      return <span key={tokenIndex} className="text-[#00D1FF]">{token}</span>
                    }
                    if (/^\d+\.?\d*$/.test(token)) {
                      return <span key={tokenIndex} className="text-[#D19A66]">{token}</span>
                    }
                    if (token.startsWith('#')) {
                      return <span key={tokenIndex} className="text-[#666666] italic">{token}</span>
                    }
                    if (token.startsWith('"') || token.startsWith("'")) {
                      return <span key={tokenIndex} className="text-[#98C379]">{token}</span>
                    }
                    return <span key={tokenIndex}>{token}</span>
                  })}
                </span>
              </div>
            ))}
          </code>
        </pre>
        {isTyping && (
          <motion.span
            animate={{ opacity: [1, 0] }}
            transition={{ duration: 0.5, repeat: Infinity, repeatType: "reverse" }}
            className="inline-block w-1.5 h-4 bg-[#00D1FF] ml-1"
          />
        )}
      </div>

      <div className="px-4 py-3 bg-white/5 border-t border-white/5 flex items-center justify-between">
        <span className="text-white/30 text-[10px] font-mono uppercase tracking-widest">
          {currentSnippet.language}
        </span>
        <div className="flex gap-2">
          {codeSnippets.map((_, i) => (
            <div
              key={i}
              className={`w-1 h-1 rounded-full transition-all duration-300 ${
                i === currentIndex ? 'bg-[#00D1FF] w-3' : 'bg-white/10'
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  )
}