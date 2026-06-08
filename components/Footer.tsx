'use client'

export default function Footer() {
  return (
    <footer className="border-t border-black/5 bg-white">
      <div className="max-w-7xl mx-auto border-x border-black/5 p-6 md:p-12 flex flex-col sm:flex-row justify-between items-center gap-6">
        <span className="text-black font-display font-bold text-lg tracking-tighter">CSP.</span>
        
        <div className="flex gap-6 text-[9px] font-mono uppercase tracking-[0.2em] text-black/30">
          <span>&copy; {new Date().getFullYear()}</span>
          <span className="hidden sm:inline">/</span>
          <span>Intelligence Systems</span>
        </div>
      </div>
    </footer>
  )
}
