'use client'

import { useState, useEffect } from 'react'
import Navigation from '@/components/Navigation'
import Hero from '@/components/Hero'
import About from '@/components/About'
import Experience from '@/components/Experience'
import Projects from '@/components/Projects'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'

export default function Home() {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  return (
    <main className={`min-h-screen transition-opacity duration-500 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}>
      <Navigation />
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Contact />
      <Footer />
    </main>
  )
}