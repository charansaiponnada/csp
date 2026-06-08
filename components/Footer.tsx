'use client'

export default function Footer() {
  return (
    <footer className="bg-[#181715] pt-[32px] pb-[64px] px-6 border-t border-white/5">
      <div className="max-w-[1200px] mx-auto">
        
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-2">
            <div className="flex items-center gap-2 group mb-6">
              <svg viewBox="0 0 24 24" className="w-5 h-5 fill-[#faf9f5]">
                <path d="M12 2C12 7.5 16.5 12 22 12C16.5 12 12 16.5 12 22C12 16.5 7.5 12 2 12C7.5 12 12 7.5 12 2Z" />
              </svg>
              <span className="font-display text-xl font-medium tracking-tight text-[#faf9f5]">CSP.</span>
            </div>
            <p className="font-sans text-[14px] text-[#a09d96] max-w-sm leading-[1.55]">
              Intelligence Systems Engineer focusing on RAG, evaluation pipelines, and applied research.
            </p>
          </div>

          <div>
            <h4 className="font-sans text-[14px] font-medium text-[#faf9f5] mb-4">Code & Research</h4>
            <ul className="space-y-3 font-sans text-[14px] text-[#a09d96]">
              <li><a href="https://github.com/charansaiponnada" className="hover:text-claude-primary transition-colors">GitHub Profile</a></li>
              <li><a href="https://huggingface.co/charansaiponnada" className="hover:text-claude-primary transition-colors">HuggingFace</a></li>
              <li><a href="#projects" className="hover:text-claude-primary transition-colors">Initiatives</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-sans text-[14px] font-medium text-[#faf9f5] mb-4">Connect</h4>
            <ul className="space-y-3 font-sans text-[14px] text-[#a09d96]">
              <li><a href="https://linkedin.com/in/charansaiponnada" className="hover:text-claude-primary transition-colors">LinkedIn</a></li>
              <li><a href="mailto:charansaiponnada06@gmail.com" className="hover:text-claude-primary transition-colors">Email</a></li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between font-sans text-[14px] text-[#a09d96]">
          <p>© {new Date().getFullYear()} Charan Sai Ponnada.</p>
          <p>Kakinada, Andhra Pradesh, India</p>
        </div>

      </div>
    </footer>
  )
}
