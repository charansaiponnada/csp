'use client'

export default function Footer() {
  return (
    <footer className="py-8 border-t border-[#D2D2D7] bg-[#FAFAFA]">
      <div className="max-w-5xl mx-auto px-6">
        <p className="text-xs text-[#A1A1A6] font-mono text-center">
          © {new Date().getFullYear()} Charan Sai Ponnada
        </p>
      </div>
    </footer>
  )
}