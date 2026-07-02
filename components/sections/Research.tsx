'use client'

import Section from '@/components/ui/Section'
import Card from '@/components/ui/Card'
import { publications } from '@/lib/content/publications'
import Link from 'next/link'

const statusStyles: Record<string, string> = {
  published: 'text-green-700 bg-green-100 border-green-200',
  'in-review': 'text-amber-700 bg-amber-100 border-amber-200',
  'in-progress': 'text-blue-700 bg-blue-100 border-blue-200',
}

export default function Research() {
  return (
    <Section
      id="research"
      eyebrow="// research"
      title="Published Research"
      subtitle="Exploring the frontiers of AI through peer-reviewed research. IEEE publications in computer vision, NLP, and deep learning."
    >
      <div className="grid gap-6 md:grid-cols-2">
        {publications.map((pub, i) => (
          <Link key={pub.slug} href={`/research/${pub.slug}`}>
            <Card delay={i * 100} className="h-full flex flex-col">
              <div className="flex items-center gap-3 mb-4">
                <span className="font-mono text-xs uppercase tracking-widest text-cream-600">
                  {pub.venueShort}
                </span>
                <span
                  className={`inline-flex items-center px-2 py-0.5 text-xs font-mono rounded-full border ${statusStyles[pub.status]}`}
                >
                  {pub.status === 'published'
                    ? 'Published'
                    : pub.status === 'in-review'
                      ? 'In Review'
                      : 'In Progress'}
                </span>
              </div>

              <h3 className="heading-sm mb-3 line-clamp-2">{pub.title}</h3>

              <p className="text-sm leading-relaxed text-cream-700 mb-4 flex-1 line-clamp-3">
                {pub.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-4">
                {pub.keywords.slice(0, 4).map((kw) => (
                  <span key={kw} className="pill">
                    {kw}
                  </span>
                ))}
              </div>

              <div className="grid grid-cols-2 gap-3 border-t border-cream-400 pt-4 mt-auto">
                {pub.metrics.map((m) => (
                  <div key={m.label}>
                    <p className="text-xs text-cream-600">{m.label}</p>
                    <p className="text-sm font-medium text-cream-900">
                      {m.value}
                    </p>
                  </div>
                ))}
              </div>
            </Card>
          </Link>
        ))}
      </div>

      <div className="mt-8 text-center">
        <Link
          href="/publications"
          className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-cream-600 hover:text-sienna transition-colors"
        >
          View All Publications
          <svg
            width="12"
            height="12"
            viewBox="0 0 12 12"
            fill="none"
          >
            <path
              d="M2 6h8M7 3l3 3-3 3"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </Link>
      </div>
    </Section>
  )
}
