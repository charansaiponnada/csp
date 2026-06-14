import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'CSP.LAB | Charan Sai Ponnada | Neural Architect',
  description: 'Charan Sai Ponnada: AI Engineer specializing in high-stakes AI Evaluation, RAG Systems, and Computer Vision.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700&family=Inter:wght@300;400;500;600;700;800&family=IBM+Plex+Mono:wght@400;500&display=swap" rel="stylesheet" />
      </head>
      <body className="antialiased bg-[#050505]">
        {children}
      </body>
    </html>
  )
}