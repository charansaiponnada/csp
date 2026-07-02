'use client'

import Link from 'next/link'
import JsonLd from '@/components/seo/JsonLd'
import { Publication } from '@/lib/content/publications'
import { formatDate } from '@/lib/utils'

type Props = { pub: Publication }

const statusStyles: Record<string, string> = {
  published: 'text-green-700 bg-green-100',
  'in-review': 'text-amber-700 bg-amber-100',
  'in-progress': 'text-blue-700 bg-blue-100',
}

export default function ResearchDetail({ pub }: Props) {
  return (
    <>
      <JsonLd
        type="ScholarlyArticle"
        data={{
          paper: {
            title: pub.title,
            description: pub.description,
            url: `/research/${pub.slug}`,
            datePublished: pub.date,
            venue: pub.venue,
          },
        }}
      />
      <JsonLd
        type="BreadcrumbList"
        data={{
          items: [
            { name: 'Home', path: '/' },
            { name: 'Research', path: '/research' },
            { name: pub.title, path: `/research/${pub.slug}` },
          ],
        }}
      />

      <article className="pt-28 pb-20">
        <div className="mx-auto max-w-3xl px-6">
          <Link
            href="/research"
            className="inline-flex items-center gap-1 font-mono text-xs uppercase tracking-widest text-cream-600 hover:text-sienna transition-colors mb-6"
          >
            <svg
              width="12"
              height="12"
              viewBox="0 0 12 12"
              fill="none"
              className="rotate-180"
            >
              <path
                d="M2 6h8M7 3l3 3-3 3"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            Back to Research
          </Link>

          <div className="flex items-center gap-3 mb-4">
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
            <span className="font-mono text-xs text-cream-500">
              {pub.type}
            </span>
          </div>

          <h1 className="heading-xl text-balance mb-4">{pub.title}</h1>

          <p className="text-cream-600 mb-2">{pub.authors.join(', ')}</p>
          <p className="text-sm text-cream-500 mb-8">
            {pub.venue} · {formatDate(pub.date)}
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-10 p-5 rounded-lg border border-cream-400 bg-cream-100">
            {pub.metrics.map((m) => (
              <div key={m.label}>
                <p className="text-xs text-cream-600">{m.label}</p>
                <p className="text-lg font-medium text-cream-900">{m.value}</p>
              </div>
            ))}
          </div>

          <div className="section-rule mb-10" />

          <div className="prose-custom">
            <h2>Abstract</h2>
            <p>{pub.abstract}</p>

            <h2>Keywords</h2>
            <div className="flex flex-wrap gap-2">
              {pub.keywords.map((kw) => (
                <span key={kw} className="tag-sienna">
                  {kw}
                </span>
              ))}
            </div>

            <h2>Citation</h2>
            <pre className="bg-cream-300 p-4 rounded-lg overflow-x-auto text-sm font-mono text-cream-800">
              {pub.bibtex}
            </pre>

            {pub.doi && (
              <p>
                DOI:{' '}
                <a
                  href={`https://doi.org/${pub.doi}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {pub.doi}
                </a>
              </p>
            )}
          </div>
        </div>
      </article>
    </>
  )
}
