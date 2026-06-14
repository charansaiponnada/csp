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
        <link href="https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@400;500&family=IBM+Plex+Sans:wght@300;400;500&display=swap" rel="stylesheet" />
      </head>
      <body className="antialiased bg-[#F2EDE4]">
        {children}
      </body>
    </html>
  )
}