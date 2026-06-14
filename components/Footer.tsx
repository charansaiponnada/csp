'use client'

export default function Footer() {
  return (
    <footer className="py-10 bg-portfolio-beige border-t border-portfolio-rule">
      <div className="max-w-[900px] mx-auto px-12">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <span className="font-mono text-[11px] text-portfolio-ink-3 tracking-[0.04em]">
            © 2026 Charan Sai Ponnada · Built with intent.
          </span>
          
          <div className="flex items-center gap-5">
            <a 
              href="https://instagram.com/lone_melodies" 
              target="_blank"
              className="font-mono text-[11px] text-portfolio-ink-3 no-underline tracking-[0.04em] hover:text-portfolio-ink transition-colors"
            >
              @lone_melodies
            </a>
            <span className="text-portfolio-rule text-[11px]">·</span>
            <a 
              href="#" 
              target="_blank"
              className="font-mono text-[11px] text-portfolio-ink-3 no-underline tracking-[0.04em] hover:text-portfolio-ink transition-colors"
            >
              Unspoken Love
            </a>
            <span className="text-portfolio-rule text-[11px]">·</span>
            <a 
              href="https://youtube.com/@charansimplifies" 
              target="_blank"
              className="font-mono text-[11px] text-portfolio-ink-3 no-underline tracking-[0.04em] hover:text-portfolio-ink transition-colors"
            >
              charansimplifies
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
