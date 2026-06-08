'use client'

export default function Footer() {
  return (
    <footer className="bg-dribbble-canvas border-t border-dribbble-border py-12 px-6">
      <div className="max-w-[1400px] mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        
        <div className="font-display font-bold text-3xl tracking-tighter text-white">
          CHARAN<span className="text-dribbble-accent">.</span>
        </div>

        <div className="flex gap-8 font-mono text-sm font-bold uppercase tracking-widest text-dribbble-muted">
          <a href="https://github.com/charansaiponnada" className="hover:text-dribbble-accent transition-colors">GitHub</a>
          <a href="https://linkedin.com/in/charansaiponnada" className="hover:text-dribbble-accent transition-colors">LinkedIn</a>
        </div>

        <div className="font-mono text-xs font-bold uppercase tracking-widest text-dribbble-muted">
          © {new Date().getFullYear()} / India
        </div>

      </div>
    </footer>
  )
}
