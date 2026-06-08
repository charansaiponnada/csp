'use client'

export default function Footer() {
  return (
    <footer className="bg-white max-w-7xl mx-auto mb-24">
      <div className="border-x border-b border-black/5 p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-6">
          <span className="text-[9px] font-mono text-black/30 uppercase tracking-[0.5em]">Neural Lab V1.0.4</span>
        </div>

        <div className="text-center md:text-right">
          <p className="text-black/40 text-[9px] font-mono uppercase tracking-[0.3em]">
            Charan Sai Ponnada &copy; {new Date().getFullYear()} / Operational
          </p>
        </div>
      </div>
    </footer>
  )
}
