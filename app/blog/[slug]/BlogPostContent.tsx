'use client'

import { BlogPost } from '@/lib/content/blog'
import { formatDate } from '@/lib/utils'
import { SITE } from '@/lib/constants'
import Link from 'next/link'
import Card from '@/components/ui/Card'
import JsonLd from '@/components/seo/JsonLd'

type Props = {
  post: BlogPost
  related: BlogPost[]
}

export default function BlogPostContent({ post, related }: Props) {
  return (
    <>
      <JsonLd
        type="BlogPosting"
        data={{
          post: {
            title: post.title,
            description: post.description,
            url: `/blog/${post.slug}`,
            datePublished: post.date,
            dateModified: post.modifiedDate || post.date,
            category: post.category,
            tags: post.tags,
          },
        }}
      />
      <JsonLd
        type="BreadcrumbList"
        data={{
          items: [
            { name: 'Home', path: '/' },
            { name: 'Blog', path: '/blog' },
            { name: post.title, path: `/blog/${post.slug}` },
          ],
        }}
      />

      <article className="pt-28 pb-20">
        <div className="mx-auto max-w-3xl px-6">
          <div className="mb-10">
            <Link
              href="/blog"
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
              Back to Blog
            </Link>

            <div className="flex items-center gap-3 mb-4">
              <span className="pill">{post.category}</span>
              <span className="text-xs text-cream-500 font-mono">
                {formatDate(post.date)}
              </span>
            </div>

            <h1 className="heading-xl text-balance mb-4">{post.title}</h1>

            <p className="text-lg leading-relaxed text-cream-600">
              {post.description}
            </p>

            <div className="flex items-center gap-3 mt-6 text-sm text-cream-600">
              <span>By {post.author}</span>
              <span className="text-cream-400">·</span>
              <span className="text-xs font-mono">
                {post.tags.join(', ')}
              </span>
            </div>
          </div>

          <div className="section-rule mb-10" />

          <div className="prose-custom">{post.content}</div>
        </div>
      </article>

      {related.length > 0 && (
        <div className="border-t border-cream-400 py-20">
          <div className="mx-auto max-w-6xl px-6">
            <h2 className="heading-md mb-8">Related Articles</h2>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {related.map((r, i) => (
                <Link key={r.slug} href={`/blog/${r.slug}`}>
                  <Card delay={i * 50} className="h-full flex flex-col">
                    <div className="flex items-center gap-2 mb-3">
                      <span className="pill">{r.category}</span>
                      <span className="text-xs text-cream-500 font-mono">
                        {formatDate(r.date)}
                      </span>
                    </div>
                    <h3 className="heading-sm mb-2 line-clamp-2">{r.title}</h3>
                    <p className="text-sm text-cream-700 flex-1 line-clamp-3">
                      {r.description}
                    </p>
                  </Card>
                </Link>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  )
}
