'use client'

import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const COMMANDS = [
  { cmd: 'whoami', response: 'Charan Sai Ponnada: AI Engineer & Research Author. Focused on LLM reliability, RAG, and Computer Vision.' },
  { cmd: 'status', response: 'Current Role: AI Engineer Intern @ Aynstyn Technologies. System Status: Optimized. Reasoning: Enabled.' },
  { cmd: 'philosophy', response: 'Explainability is not an add-on; it is a requirement. If a system can\'t tell you why it made a decision, it shouldn\'t be making it.' },
  { cmd: 'stack', response: 'PyTorch, Transformers, FastAPI, LangChain, LoRA, Vector Databases (Chroma, Pinecone).' },
  { cmd: 'help', response: 'Available commands: whoami, status, philosophy, stack, clear' },
]

export default function AIConsole() {
  const [history, setHistory] = useState<{ type: 'input' | 'output'; content: string }[]>([
    { type: 'output', content: 'Neural Console v1.0.4. Type "help" to begin.' }
  ])
  const [inputValue, setInputValue] = useState('')
  const scrollRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight
    }
  }, [history])

  const handleCommand = (e: React.FormEvent) => {
    e.preventDefault()
    const cmd = inputValue.toLowerCase().trim()
    if (!cmd) return

    const newHistory = [...history, { type: 'input', content: cmd }] as any

    if (cmd === 'clear') {
      setHistory([{ type: 'output', content: 'Console cleared.' }])
    } else {
      const command = COMMANDS.find(c => c.cmd === cmd)
      if (command) {
        newHistory.push({ type: 'output', content: command.response })
      } else {
        newHistory.push({ type: 'output', content: `Command not found: ${cmd}. Type "help" for a list of commands.` })
      }
      setHistory(newHistory)
    }
    setInputValue('')
  }

  return (
    <section id="console" className="bg-white relative overflow-hidden border-t border-black/5">
      <div className="grid lg:grid-cols-4 w-full">
        {/* Header Cell */}
        <div className="lg:col-span-1 p-12 border-r border-b border-black/5 flex flex-col justify-between min-h-[400px]">
          <div>
            <span className="text-[#0055FF] font-mono text-[10px] tracking-[0.4em] uppercase mb-4 block">05 / DIAGNOSTIC</span>
            <h2 className="font-display text-5xl font-bold tracking-tight uppercase text-black leading-none">INTERACTIVE<br/>CONSOLE</h2>
          </div>
          <p className="text-black/30 text-xs font-light leading-relaxed max-w-[200px]">
            Direct interface for validating system reasoning and architecture philosophy.
          </p>
        </div>

        {/* Console Grid */}
        <div className="lg:col-span-3 grid md:grid-cols-3">
          {/* Main Terminal - Takes 2 columns */}
          <div className="md:col-span-2 border-r border-b border-black/5 flex flex-col min-h-[500px]">
            <div className="bg-black/5 px-6 py-4 border-b border-black/5 flex items-center justify-between">
              <div className="flex gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-[#0055FF]/40" />
                <div className="w-1.5 h-1.5 rounded-full bg-black/10" />
                <div className="w-1.5 h-1.5 rounded-full bg-black/10" />
              </div>
              <span className="text-black/20 text-[10px] font-mono tracking-widest uppercase">agent@polymath-lab: ~</span>
            </div>

            <div
              ref={scrollRef}
              className="p-12 flex-grow overflow-y-auto font-mono text-sm space-y-4 scrollbar-hide bg-white/40"
            >
              <AnimatePresence mode="popLayout">
                {history.map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    className={item.type === 'input' ? 'text-[#0055FF]' : 'text-black/60'}
                  >
                    {item.type === 'input' ? <span className="mr-2">{'>'}</span> : null}
                    {item.content}
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>

            <form onSubmit={handleCommand} className="p-8 bg-black/[0.02] border-t border-black/5 flex items-center gap-4">
              <span className="text-[#0055FF] font-mono animate-pulse">{'>'}</span>
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                className="bg-transparent border-none outline-none flex-1 text-black font-mono text-sm placeholder:text-black/10 uppercase tracking-widest"
                placeholder="Initialize instruction..."
              />
            </form>
          </div>

          {/* Quick Directives - Takes 1 column */}
          <div className="border-b border-black/5 flex flex-col">
            <div className="p-8 border-b border-black/5">
              <h4 className="text-black/20 font-mono text-[9px] tracking-[0.3em] uppercase">QUICK DIRECTIVES</h4>
            </div>
            <div className="flex flex-col flex-grow">
              {['whoami', 'status', 'philosophy', 'stack', 'help'].map(c => (
                <button
                  key={c}
                  onClick={() => setInputValue(c)}
                  className="w-full text-left p-8 border-b border-black/5 hover:bg-[#0055FF]/5 transition-all group relative"
                >
                  <span className="text-[#0055FF] opacity-0 group-hover:opacity-100 transition-opacity absolute left-4">{'>'}</span>
                  <span className="text-black/40 font-mono text-[10px] group-hover:text-black transition-colors">{c.toUpperCase()}</span>
                </button>
              ))}
              <div className="p-12 mt-auto bg-[#0055FF]/5">
                <span className="text-black/20 font-mono text-[9px] uppercase block mb-4">Environment</span>
                <p className="text-[10px] font-mono text-[#0055FF]/60 uppercase leading-relaxed">
                  Production-Ready AI Pipeline V1.0.4 <br />
                  Multi-Agent Hub Initialized
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
