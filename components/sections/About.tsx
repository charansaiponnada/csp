'use client'

import Section from '@/components/ui/Section'
import Card from '@/components/ui/Card'
import { SITE } from '@/lib/constants'

export default function About() {
  return (
    <Section
      id="about"
      eyebrow="// about"
      title="Building AI That Matters"
      subtitle="I'm an AI Engineer and Machine Learning Researcher focused on deep learning, computer vision, and production AI systems. Currently building a genomic foundation model and working on LLM hallucination detection."
    >
      <div className="grid gap-8 lg:grid-cols-5">
        <div className="lg:col-span-3 space-y-4 leading-relaxed text-cream-700">
          <p>
            I am a B.Tech student in Artificial Intelligence & Data Science at
            VRSEC (Velagapudi Ramakrishna Siddhartha Engineering College) and an
            AI Engineer at Aynstyn Technologies, where I build production AI
            systems and SaaS platform features. My research spans computer
            vision, deep learning, and natural language processing — with
            publications at IEEE conferences.
          </p>
          <p>
            I specialize in building{' '}
            <span className="text-cream-900 font-medium">RAG systems</span>,
            fine-tuning <span className="text-cream-900 font-medium">vision-language models</span>,
            and developing{' '}
            <span className="text-cream-900 font-medium">genomic foundation models</span>{' '}
            using Mamba SSM architecture. I believe in creating AI that is not
            just intelligent, but reliable and trustworthy.
          </p>
          <p>
            When I'm not training models or writing papers, I write technical
            articles on Medium, contribute to open source, and share my journey
            on YouTube at{' '}
            <a
              href={SITE.social.youtube}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sienna hover:text-sienna-light transition-colors"
            >
              @charansimplifies
            </a>
            .
          </p>
        </div>

        <div className="lg:col-span-2">
          <div className="rounded-lg border border-cream-400 bg-cream-100 p-6">
            <h3 className="font-mono text-xs uppercase tracking-widest text-cream-600 mb-4">
              Quick Facts
            </h3>
            <dl className="space-y-3 text-sm">
              {[
                { dt: 'Location', dd: 'Hyderabad, India' },
                { dt: 'Current Role', dd: 'AI Engineer @ Aynstyn' },
                { dt: 'Education', dd: 'B.Tech AI & DS, VRSEC' },
                { dt: 'Research', dd: 'IEEE Published' },
                { dt: 'Focus', dd: 'Deep Learning, CV, Genomic AI' },
                { dt: 'Writing', dd: 'Technical Articles & Tutorials' },
              ].map((item) => (
                <div key={item.dt} className="flex justify-between">
                  <dt className="text-cream-600">{item.dt}</dt>
                  <dd className="text-cream-900 font-medium text-right">
                    {item.dd}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
    </Section>
  )
}
