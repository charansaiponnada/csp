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
    <section className="py-24 bg-[#0A0A0A] relative overflow-hidden">
      <div className="max-w-4xl mx-auto px-6">
        <div className="mb-12 text-center">
            <h3 className="text-white/20 font-mono text-[10px] tracking-[0.4em] uppercase mb-4">Interactive</h3>
            <h2 className="text-3xl font-medium">Neural <span className="text-white/20">Console</span></h2>
        </div>

        <div className="glass rounded-3xl overflow-hidden border border-white/5 shadow-2xl">
          <div className="bg-white/5 px-6 py-4 border-b border-white/5 flex items-center justify-between">
            <div className="flex gap-2">
              <div className="w-2.5 h-2.5 rounded-full bg-white/10" />
              <div className="w-2.5 h-2.5 rounded-full bg-white/10" />
              <div className="w-2.5 h-2.5 rounded-full bg-white/10" />
            </div>
            <span className="text-white/20 text-[10px] font-mono tracking-widest uppercase">agent@csp: ~</span>
          </div>

          <div 
            ref={scrollRef}
            className="p-8 h-[400px] overflow-y-auto font-mono text-sm space-y-4 scrollbar-hide"
          >
            <AnimatePresence mode="popLayout">
              {history.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3 }}
                  className={item.type === 'input' ? 'text-[#E87E53]' : 'text-white/60'}
                >
                  {item.type === 'input' ? <span className="mr-2">❯</span> : null}
                  {item.content}
                </motion.div>
              ))}
            </AnimatePresence>
          </div>

          <form onSubmit={handleCommand} className="p-6 bg-white/5 border-t border-white/5 flex items-center gap-3">
            <span className="text-[#E87E53] font-mono">❯</span>
            <input
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              className="bg-transparent border-none outline-none flex-1 text-white font-mono text-sm placeholder:text-white/10"
              placeholder="Enter command..."
              autoFocus
            />
          </form>
        </div>
        
        <div className="mt-8 flex flex-wrap justify-center gap-2">
            {['whoami', 'status', 'philosophy', 'stack'].map(c => (
                <button 
                    key={c}
                    onClick={() => setInputValue(c)}
                    className="px-4 py-1.5 bg-white/5 border border-white/5 text-[10px] font-mono text-white/30 rounded-full hover:border-[#E87E53]/30 hover:text-white transition-all"
                >
                    {c}
                </button>
            ))}
        </div>
      </div>
    </section>
  )
}