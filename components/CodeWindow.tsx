'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const codeSnippets = [
  {
    title: 'LoRA Fine-tuning',
    language: 'python',
    code: `from peft import LoraConfig, get_peft_model

config = LoraConfig(
    r=16,
    lora_alpha=32,
    target_modules=["q_proj", "v_proj"],
    lora_dropout=0.05
)

model = get_peft_model(base_model, config)
model.print_trainable_parameters()`
  },
  {
    title: 'Training Loop',
    language: 'python',
    code: `for epoch in range(num_epochs):
    for batch in dataloader:
        outputs = model(**batch)
        loss = outputs.loss
        loss.backward()
        optimizer.step()
        scheduler.step()`
  },
  {
    title: 'Model Inference',
    language: 'python',
    code: `from transformers import pipeline

generator = pipeline(
    "text-generation",
    model=finetuned_model,
    max_new_tokens=256
)

result = generator(prompt)
print(result[0]["generated_text"])`
  },
]

const keywords = ['from', 'import', 'for', 'in', 'def', 'class', 'return', 'if', 'else', 'True', 'False', 'None', 'with', 'as']

const stringRegex = /(["'])(?:(?!\1)[^\\]|\\.)*?\1/g
const commentRegex = /#.*/g
const numberRegex = /\b\d+\.?\d*\b/g

function highlightCode(code: string): JSX.Element[] {
  let parts: JSX.Element[] = []
  let lastIndex = 0
  let key = 0

  // Highlight comments first
  code.replace(commentRegex, (match, index) => {
    if (index > lastIndex) {
      parts.push(<span key={key++}>{code.slice(lastIndex, index)}</span>)
    }
    parts.push(<span key={key++} className="text-[#6B6B6B]">{match}</span>)
    lastIndex = index + match.length
    return match
  })

  // Highlight strings
  const remaining = code.slice(lastIndex)
  let remainingParts: JSX.Element[] = []
  let rLastIndex = 0

  remaining.replace(stringRegex, (match, _quote, index) => {
    if (index > rLastIndex) {
      remainingParts.push(<span key={key++}>{remaining.slice(rLastIndex, index)}</span>)
    }
    remainingParts.push(<span key={key++} className="text-[#C45D35]">{match}</span>)
    rLastIndex = index + match.length
    return match
  })

  if (rLastIndex < remaining.length) {
    remainingParts.push(<span key={key++}>{remaining.slice(rLastIndex)}</span>)
  }

  // Add remaining parts
  if (parts.length === 0) {
    return remainingParts.length > 0 ? remainingParts : [<span key={0}>{code}</span>]
  }

  // Rebuild final array with highlighted parts
  const finalParts: JSX.Element[] = []
  let fKey = 0
  parts.forEach(p => finalParts.push(p))
  remainingParts.forEach(p => finalParts.push(p))

  return finalParts.length > 0 ? finalParts : [<span key={0}>{code}</span>]
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
          }, 3000)
        }
      }, 20)
      return () => clearTimeout(timeout)
    }
  }, [displayedCode, isTyping, fullCode])

  return (
    <div className="bg-[#1A1A1A] rounded-lg overflow-hidden border border-[#333] shadow-2xl">
      {/* Window Header */}
      <div className="flex items-center gap-2 px-4 py-3 bg-[#2D2D2D] border-b border-[#333]">
        <div className="flex gap-2">
          <div className="w-3 h-3 rounded-full bg-[#FF5F56]" />
          <div className="w-3 h-3 rounded-full bg-[#FFBD2E]" />
          <div className="w-3 h-3 rounded-full bg-[#27C93F]" />
        </div>
        <div className="flex-1 text-center">
          <span className="text-[#6B6B6B] text-xs font-mono">{currentSnippet.title}</span>
        </div>
      </div>

      {/* Code Area */}
      <div className="p-4 font-mono text-sm leading-relaxed min-h-[280px]">
        <pre className="text-[#E5E5E5]">
          <code>
            {displayedCode.split('\n').map((line, lineIndex, lines) => (
              <div key={lineIndex} className="flex">
                <span className="text-[#4A4A4A] w-8 text-right pr-4 select-none">
                  {lineIndex + 1}
                </span>
                <span className="flex-1">
                  {line.split(/(\s+|[(){}[\],.:;])/g).map((token, tokenIndex) => {
                    if (!token) return null
                    if (keywords.includes(token)) {
                      return <span key={tokenIndex} className="text-[#C792EA]">{token}</span>
                    }
                    if (/^\d+\.?\d*$/.test(token)) {
                      return <span key={tokenIndex} className="text-[#F78C6C]">{token}</span>
                    }
                    if (token.startsWith('#')) {
                      return <span key={tokenIndex} className="text-[#546E7A]">{token}</span>
                    }
                    if (token.startsWith('"') || token.startsWith("'")) {
                      return <span key={tokenIndex} className="text-[#C3E88D]">{token}</span>
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
            className="inline-block w-2 h-4 bg-[#C45D35] ml-0"
          />
        )}
      </div>

      {/* Status Bar */}
      <div className="px-4 py-2 bg-[#2D2D2D] border-t border-[#333] flex items-center justify-between">
        <span className="text-[#6B6B6B] text-xs font-mono">
          {currentSnippet.language}
        </span>
        <div className="flex gap-1">
          {codeSnippets.map((_, i) => (
            <div
              key={i}
              className={`w-1.5 h-1.5 rounded-full transition-colors ${
                i === currentIndex ? 'bg-[#C45D35]' : 'bg-[#4A4A4A]'
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  )
}