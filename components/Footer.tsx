'use client'

export default function Footer() {
  return (
    <footer className="py-12 bg-white border-t border-black/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-6">
            <span className="text-[9px] font-mono text-black/10 uppercase tracking-[0.5em]">Neural Lab V1.0.4</span>
          </div>

          <div className="text-center md:text-right">
            <p className="text-black/20 text-[9px] font-mono uppercase tracking-[0.3em]">
              Charan Sai Ponnada &copy; {new Date().getFullYear()} / Operational
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}