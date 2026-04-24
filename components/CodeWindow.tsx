'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const codeSnippets = [
  {
    title: 'RAG Pipeline',
    language: 'python',
    code: `from langchain_chroma import Chroma
from langchain_huggingface import HuggingFaceEmbeddings

embeddings = HuggingFaceEmbeddings(
    model_name="BAAI/bge-small-en-v1.5"
)

vector_db = Chroma.from_documents(
    documents=docs,
    embedding=embeddings
)

query = "credit risk factors"
docs = vector_db.similarity_search(query, k=3)

context = "\\n".join([d.page_content for d in docs])`
  },
  {
    title: 'LLM Generation',
    language: 'python',
    code: `from transformers import pipeline

generator = pipeline(
    "text-generation",
    model="mistralai/Mistral-7B-Instruct",
    max_new_tokens=200
)

prompt = f"Answer based on context:\\n{context}"
response = generator(prompt)

print(response[0]["generated_text"])`
  },
  {
    title: 'LoRA Fine-Tuning',
    language: 'python',
    code: `from peft import LoraConfig, get_peft_model
from transformers import AutoModelForCausalLM

base_model = AutoModelForCausalLM.from_pretrained("gpt2")

config = LoraConfig(
    r=16,
    lora_alpha=32,
    target_modules=["c_attn"],
    lora_dropout=0.1
)

model = get_peft_model(base_model, config)
model.print_trainable_parameters()`
  },
  {
    title: 'Multi-Agent Orchestration',
    language: 'python',
    code: `def retriever_agent(query):
    return vector_db.similarity_search(query)

def reasoning_agent(context):
    prompt = f"Analyze:\\n{context}"
    return generator(prompt)[0]["generated_text"]

def critic_agent(answer):
    return "Valid" if len(answer) > 50 else "Revise"

docs = retriever_agent(user_query)
context = "\\n".join([d.page_content for d in docs])

answer = reasoning_agent(context)
review = critic_agent(answer)

print(answer, review)`
  },
]

const keywords = ['from', 'import', 'for', 'in', 'def', 'class', 'return', 'if', 'else', 'True', 'False', 'None', 'with', 'as']

function highlightCode(code: string): JSX.Element[] {
  let parts: JSX.Element[] = []
  let lastIndex = 0
  let key = 0

  const stringRegex = /(["'])(?:(?!\1)[^\\]|\\.)*?\1/g
  const commentRegex = /#.*/g

  code.replace(commentRegex, (match, index) => {
    if (index > lastIndex) {
      parts.push(<span key={key++}>{code.slice(lastIndex, index)}</span>)
    }
    parts.push(<span key={key++} className="text-[#6E6E73]">{match}</span>)
    lastIndex = index + match.length
    return match
  })

  const remaining = code.slice(lastIndex)
  let remainingParts: JSX.Element[] = []
  let rLastIndex = 0

  remaining.replace(stringRegex, (match, _quote, index) => {
    if (index > rLastIndex) {
      remainingParts.push(<span key={key++}>{remaining.slice(rLastIndex, index)}</span>)
    }
    remainingParts.push(<span key={key++} className="text-[#30D158]">{match}</span>)
    rLastIndex = index + match.length
    return match
  })

  if (rLastIndex < remaining.length) {
    remainingParts.push(<span key={key++}>{remaining.slice(rLastIndex)}</span>)
  }

  if (parts.length === 0) {
    return remainingParts.length > 0 ? remainingParts : [<span key={0}>{code}</span>]
  }

  const finalParts: JSX.Element[] = []
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
          }, 2500)
        }
      }, 15)
      return () => clearTimeout(timeout)
    }
  }, [displayedCode, isTyping, fullCode])

  return (
    <div className="bg-[#1C1C1E] rounded-2xl overflow-hidden shadow-2xl border border-[#38383A]">
      <div className="flex items-center gap-2 px-4 py-3 bg-[#2C2C2E] border-b border-[#38383A]">
        <div className="flex gap-1.5">
          <div className="w-3 h-3 rounded-full bg-[#FF5F56]" />
          <div className="w-3 h-3 rounded-full bg-[#FFBD2E]" />
          <div className="w-3 h-3 rounded-full bg-[#27C93F]" />
        </div>
        <div className="flex-1 text-center">
          <span className="text-[#6E6E73] text-xs font-mono">{currentSnippet.title}</span>
        </div>
      </div>

      <div className="p-5 font-mono text-sm leading-relaxed min-h-[340px] max-w-2xl">
        <pre className="text-[#E5E5E5]">
          <code>
            {displayedCode.split('\n').map((line, lineIndex) => (
              <div key={lineIndex} className="flex">
                <span className="text-[#4A4A4A] w-6 text-right pr-3 select-none">
                  {lineIndex + 1}
                </span>
                <span className="flex-1">
                  {line.split(/(\s+|[(){}[\],.:;])/g).map((token, tokenIndex) => {
                    if (!token) return null
                    if (keywords.includes(token)) {
                      return <span key={tokenIndex} className="text-[#BF8FEF]">{token}</span>
                    }
                    if (/^\d+\.?\d*$/.test(token)) {
                      return <span key={tokenIndex} className="text-[#FF9F0C]">{token}</span>
                    }
                    if (token.startsWith('#')) {
                      return <span key={tokenIndex} className="text-[#6E6E73]">{token}</span>
                    }
                    if (token.startsWith('"') || token.startsWith("'")) {
                      return <span key={tokenIndex} className="text-[#30D158]">{token}</span>
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

      <div className="px-4 py-2 bg-[#2C2C2E] border-t border-[#38383A] flex items-center justify-between">
        <span className="text-[#6E6E73] text-xs font-mono">
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