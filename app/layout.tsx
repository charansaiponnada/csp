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
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&family=IBM+Plex+Mono:wght@400;500;600&display=swap" rel="stylesheet" />
      </head>
      <body className="antialiased bg-white">
        {children}
      </body>
    </html>
  )
}