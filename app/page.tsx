import Hero from '@/components/sections/Hero'
import About from '@/components/sections/About'
import Skills from '@/components/sections/Skills'
import Experience from '@/components/sections/Experience'
import Research from '@/components/sections/Research'
import Projects from '@/components/sections/Projects'
import BlogSection from '@/components/sections/BlogSection'
import Contact from '@/components/sections/Contact'
import FAQ from '@/components/sections/FAQ'
import JsonLd from '@/components/seo/JsonLd'

export default function Home() {
  return (
    <>
      <Hero />
      <div className="mx-auto max-w-6xl px-6">
        <div className="section-rule" />
      </div>
      <About />
      <div className="mx-auto max-w-6xl px-6">
        <div className="section-rule" />
      </div>
      <Skills />
      <div className="mx-auto max-w-6xl px-6">
        <div className="section-rule" />
      </div>
      <Experience />
      <div className="mx-auto max-w-6xl px-6">
        <div className="section-rule" />
      </div>
      <Research />
      <div className="mx-auto max-w-6xl px-6">
        <div className="section-rule" />
      </div>
      <Projects />
      <div className="mx-auto max-w-6xl px-6">
        <div className="section-rule" />
      </div>
      <BlogSection />
      <div className="mx-auto max-w-6xl px-6">
        <div className="section-rule" />
      </div>
      <FAQ />
      <div className="mx-auto max-w-6xl px-6">
        <div className="section-rule" />
      </div>
      <Contact />

      <JsonLd type="WebPage" data={{ title: 'Charan Sai Ponnada', description: 'AI Engineer and ML Researcher', path: '/' }} />
      <JsonLd
        type="FAQ"
        data={{
          questions: [
            { question: 'What is your research focus?', answer: 'Computer vision, deep learning, and NLP. Vision-language models, hallucination detection, and genomic foundation models.' },
            { question: 'Are you available for collaboration?', answer: 'Yes, always open to research collaborations and opportunities.' },
            { question: 'What technologies do you work with?', answer: 'Python, PyTorch, LangChain, FastAPI, React, Docker, AWS, and more.' },
          ],
        }}
      />
    </>
  )
}
