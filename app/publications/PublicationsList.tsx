'use client'

import { publications } from '@/lib/content/publications'
import { formatDate } from '@/lib/utils'

export default function PublicationsList() {
  const published = publications.filter((p) => p.status === 'published')
  const inReview = publications.filter((p) => p.status === 'in-review')

  return (
    <div className="pt-28 pb-20">
      <div className="mx-auto max-w-4xl px-6">
        <div className="mb-12">
          <p className="section-eyebrow mb-3">// publications</p>
          <h1 className="heading-xl">Publications</h1>
          <p className="mt-3 max-w-2xl text-cream-600 leading-relaxed">
            Peer-reviewed research papers published at IEEE conferences and
            journals.
          </p>
        </div>

        {published.length > 0 && (
          <div className="mb-12">
            <h2 className="heading-md mb-6">Published</h2>
            <div className="space-y-6">
              {published.map((pub) => (
                <div
                  key={pub.slug}
                  className="rounded-lg border border-cream-400 bg-cream-100 p-6"
                >
                  <div className="flex items-center gap-3 mb-2">
                    <span className="font-mono text-xs uppercase tracking-widest text-cream-600">
                      {pub.venueShort}
                    </span>
                    <span className="text-xs text-cream-500">{pub.type}</span>
                  </div>
                  <h3 className="heading-sm mb-2">{pub.title}</h3>
                  <p className="text-sm text-cream-600 mb-1">
                    {pub.authors.join(', ')}
                  </p>
                  <p className="text-sm text-cream-500 mb-3">
                    {pub.venue} · {formatDate(pub.date)}
                  </p>
                  <p className="text-sm leading-relaxed text-cream-700 mb-3">
                    {pub.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {pub.keywords.map((kw) => (
                      <span key={kw} className="pill">
                        {kw}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {inReview.length > 0 && (
          <div>
            <h2 className="heading-md mb-6">Under Review</h2>
            <div className="space-y-6">
              {inReview.map((pub) => (
                <div
                  key={pub.slug}
                  className="rounded-lg border border-cream-400 bg-cream-100 p-6"
                >
                  <div className="flex items-center gap-3 mb-2">
                    <span className="font-mono text-xs uppercase tracking-widest text-cream-600">
                      {pub.venueShort}
                    </span>
                    <span className="text-xs text-cream-500">{pub.type}</span>
                  </div>
                  <h3 className="heading-sm mb-2">{pub.title}</h3>
                  <p className="text-sm text-cream-600 mb-1">
                    {pub.authors.join(', ')}
                  </p>
                  <p className="text-sm text-cream-500 mb-3">
                    {pub.venue} · Submitted {formatDate(pub.date)}
                  </p>
                  <p className="text-sm leading-relaxed text-cream-700">
                    {pub.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
