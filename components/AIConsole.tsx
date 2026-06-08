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
    <section id="console" className="bg-white relative max-w-7xl mx-auto border-t border-black/5">
      <div className="grid lg:grid-cols-12 w-full border-l border-black/5">
        {/* Section Header */}
        <div className="lg:col-span-4 p-8 md:p-12 border-r border-b border-black/5 flex flex-col min-h-[400px]">
          <span className="text-[#0055FF] font-mono text-[9px] tracking-[0.4em] uppercase mb-12 block">04 / Diagnostic</span>
          <h2 className="font-display text-4xl md:text-5xl font-bold tracking-tight uppercase text-black leading-[0.9] mt-auto">
            Interactive<br />
            Console.
          </h2>
          <p className="text-black/40 text-xs font-light mt-8 leading-relaxed max-w-[250px]">
            Direct interface for validating system reasoning and architecture philosophy.
          </p>
        </div>

        {/* Console Content */}
        <div className="lg:col-span-8 grid md:grid-cols-5">
          {/* Main Terminal - Takes 3/5 columns of the 8 (i.e. larger portion) */}
          <div className="md:col-span-3 border-r border-b border-black/5 flex flex-col min-h-[500px]">
            <div className="bg-black/5 px-6 py-4 border-b border-black/5 flex items-center justify-between">
              <div className="flex gap-2">
                <div className="w-2 h-2 rounded-full bg-black/10" />
                <div className="w-2 h-2 rounded-full bg-black/10" />
                <div className="w-2 h-2 rounded-full bg-black/10" />
              </div>
              <span className="text-black/30 text-[9px] font-mono tracking-[0.2em] uppercase">agent@polymath-lab</span>
            </div>

            <div
              ref={scrollRef}
              className="p-8 flex-grow overflow-y-auto font-mono text-xs md:text-sm space-y-4 bg-white scroll-smooth"
            >
              <AnimatePresence mode="popLayout">
                {history.map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    className={item.type === 'input' ? 'text-[#0055FF]' : 'text-black/60'}
                  >
                    {item.type === 'input' ? <span className="mr-3 opacity-50">{'>'}</span> : null}
                    {item.content}
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>

            <form onSubmit={handleCommand} className="p-6 bg-black/[0.02] border-t border-black/5 flex items-center gap-4">
              <span className="text-[#0055FF] font-mono animate-pulse">{'>'}</span>
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                className="bg-transparent border-none outline-none flex-1 text-black font-mono text-xs md:text-sm placeholder:text-black/20 uppercase tracking-widest"
                placeholder="INITIALIZE DIRECTIVE..."
              />
            </form>
          </div>

          {/* Quick Directives - Takes 2/5 columns */}
          <div className="md:col-span-2 border-b border-black/5 flex flex-col bg-black/[0.01]">
            <div className="p-6 border-b border-black/5">
              <h4 className="text-black/30 font-mono text-[9px] tracking-[0.3em] uppercase">Available Vectors</h4>
            </div>
            <div className="flex flex-col flex-grow">
              {['whoami', 'status', 'philosophy', 'stack', 'help'].map(c => (
                <button
                  key={c}
                  onClick={() => setInputValue(c)}
                  className="w-full text-left p-6 border-b border-black/5 hover:bg-black/5 transition-all group relative"
                >
                  <span className="text-[#0055FF] opacity-0 group-hover:opacity-100 transition-opacity absolute left-4">{'>'}</span>
                  <span className="text-black/40 font-mono text-[10px] uppercase tracking-widest group-hover:text-black group-hover:ml-4 transition-all">{c}</span>
                </button>
              ))}
              <div className="p-8 mt-auto border-t border-[#0055FF]/10 bg-[#0055FF]/5">
                <span className="text-[#0055FF] font-mono text-[9px] uppercase tracking-widest block mb-4">Environment</span>
                <p className="text-[10px] font-mono text-black/60 uppercase leading-relaxed">
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
