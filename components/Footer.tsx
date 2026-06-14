'use client'

export default function Footer() {
  return (
    <footer className="bg-dribbble-canvas border-t border-dribbble-border py-16 px-6">
      <div className="max-w-[1400px] mx-auto flex flex-col md:flex-row justify-between items-start md:items-center gap-12">
        
        <div className="flex flex-col gap-4">
          <div className="font-display font-black text-4xl tracking-tighter text-white">
            CSP<span className="text-dribbble-accent">.</span>SYS
          </div>
          <div className="flex items-center gap-3">
            <div className="w-1.5 h-1.5 rounded-full bg-dribbble-accent animate-pulse" />
            <span className="font-mono text-[10px] font-bold uppercase tracking-[0.2em] text-dribbble-accent/60">System Status: Optimal</span>
          </div>
        </div>

        <div className="flex flex-wrap gap-x-12 gap-y-4 font-mono text-xs font-bold uppercase tracking-[0.3em] text-dribbble-muted">
          <a href="https://github.com/charansaiponnada" className="hover:text-white transition-colors">GitHub</a>
          <a href="https://linkedin.com/in/charansaiponnada" className="hover:text-white transition-colors">LinkedIn</a>
          <a href="https://x.com/charansai_p" className="hover:text-white transition-colors">X / Twitter</a>
        </div>

        <div className="flex flex-col items-end gap-2 font-mono text-[10px] font-bold uppercase tracking-[0.3em] text-dribbble-muted">
          <div>© {new Date().getFullYear()} / CSP.LAB</div>
          <div className="text-white/10 italic">Built for the near future</div>
        </div>

      </div>
    </footer>
  )
}
