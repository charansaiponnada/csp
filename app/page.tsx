'use client'

import { useState, useEffect } from 'react'
import Navigation from '@/components/Navigation'
import Hero from '@/components/Hero'
import Experience from '@/components/Experience'
import Projects from '@/components/Projects'
import Recognition from '@/components/Recognition'
import Skills from '@/components/Skills'
import AIConsole from '@/components/AIConsole'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'

export default function Home() {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  return (
    <main className={`min-h-screen bg-[#0A0A0A] transition-opacity duration-1000 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}>
      <Navigation />
      <Hero />
      <Experience />
      <Projects />
      <Recognition />
      <Skills />
      <AIConsole />
      <Contact />
      <Footer />
    </main>
  )
}