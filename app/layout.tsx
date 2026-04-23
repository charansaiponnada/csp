import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Charan Sai Ponnada | AI & Data Science Researcher',
  description: 'AI & Data Science Researcher building large scale AI systems. Deep Learning, LLMs, RAG systems, and production ML pipelines.',
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
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&family=JetBrains+Mono:wght@400;500;600&display=swap" rel="stylesheet" />
      </head>
      <body className="antialiased">
        {children}
      </body>
    </html>
  )
}