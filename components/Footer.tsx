'use client'

export default function Footer() {
  return (
    <footer className="py-12 bg-[#0a0a0c] border-t border-white/5 mt-24">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="flex flex-col gap-2">
          <p className="text-sm font-bold text-white uppercase tracking-tighter">Charan Sai Ponnada</p>
          <p className="text-[10px] font-mono text-slate-500 uppercase tracking-[0.4em]">Neural Lab V2.0.0 — 2026 Edition</p>
        </div>

        <div className="flex items-center gap-8">
          <div className="flex flex-col items-end gap-1">
            <p className="text-[9px] font-mono text-slate-600 uppercase tracking-widest">Protocol Status</p>
            <div className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-green-500" />
              <span className="text-[10px] font-mono text-slate-400 uppercase tracking-widest">Ready for Deployment</span>
            </div>
          </div>
          
          <p className="text-slate-700 text-[10px] font-mono uppercase tracking-[0.2em] pt-4 md:pt-0">
            &copy; {new Date().getFullYear()} / Operational
          </p>
        </div>
      </div>
    </footer>
  )
}
