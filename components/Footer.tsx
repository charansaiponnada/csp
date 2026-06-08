'use client'

export default function Footer() {
  return (
    <footer className="bg-apple-parchment pt-[64px] pb-[40px] w-full flex flex-col items-center border-t border-apple-hairline">
      <div className="max-w-[1024px] w-full px-6">
        
        <div className="border-b border-apple-hairline pb-6 mb-6">
          <p className="font-sans text-[12px] font-normal leading-[1.3] tracking-[-0.01em] text-apple-ink-muted">
            1. VIVIRITY Intelli-Credit processing times and API overhead reductions are based on internal testing against standard embedding-based retrieval systems.
            <br />
            2. AyurMind retrieval accuracy evaluated by domain experts on a dataset of 1200+ structured entries.
          </p>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <div className="font-sans text-[12px] font-normal text-apple-ink-muted">
            Copyright © {new Date().getFullYear()} Charan Sai Ponnada. All rights reserved.
          </div>
          
          <div className="flex gap-4 font-sans text-[12px] font-normal text-apple-ink">
            <a href="https://github.com/charansaiponnada" className="hover:underline">GitHub</a>
            <span className="text-apple-hairline">|</span>
            <a href="https://linkedin.com/in/charansaiponnada" className="hover:underline">LinkedIn</a>
          </div>
          
          <div className="font-sans text-[12px] font-normal text-apple-ink-muted">
            India
          </div>
        </div>

      </div>
    </footer>
  )
}
