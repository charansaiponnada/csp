'use client'

import Link from 'next/link'
import Card from '@/components/ui/Card'
import { publications } from '@/lib/content/publications'

const statusStyles: Record<string, string> = {
  published: 'text-green-700 bg-green-100',
  'in-review': 'text-amber-700 bg-amber-100',
  'in-progress': 'text-blue-700 bg-blue-100',
}

export default function ResearchHub() {
  return (
    <div className="pt-28 pb-20">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-12">
          <p className="section-eyebrow mb-3">// research</p>
          <h1 className="heading-xl">Research</h1>
          <p className="mt-3 max-w-2xl text-cream-600 leading-relaxed">
            Exploring the frontiers of AI through peer-reviewed research.
            Computer vision, deep learning, NLP, and genomic AI.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {publications.map((pub, i) => (
            <Link key={pub.slug} href={`/research/${pub.slug}`}>
              <Card delay={i * 100} className="h-full flex flex-col">
                <div className="flex items-start justify-between gap-4 mb-4">
                  <span className="font-mono text-xs uppercase tracking-widest text-cream-600">
                    {pub.venueShort}
                  </span>
                  <span
                    className={`inline-flex items-center px-2 py-0.5 text-xs font-mono rounded-full ${statusStyles[pub.status]}`}
                  >
                    {pub.status === 'published'
                      ? 'Published'
                      : pub.status === 'in-review'
                        ? 'In Review'
                        : 'In Progress'}
                  </span>
                </div>

                <h2 className="heading-sm mb-3 line-clamp-2">{pub.title}</h2>

                <p className="text-sm leading-relaxed text-cream-700 flex-1 mb-4 line-clamp-3">
                  {pub.description}
                </p>

                <p className="text-xs text-cream-500 mb-3">
                  {pub.authors.join(', ')}
                </p>

                <div className="flex flex-wrap gap-1.5 mb-4">
                  {pub.keywords.slice(0, 4).map((kw) => (
                    <span key={kw} className="pill">
                      {kw}
                    </span>
                  ))}
                </div>

                <div className="grid grid-cols-4 gap-3 border-t border-cream-400 pt-4 mt-auto">
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
      </div>
    </div>
  )
}
