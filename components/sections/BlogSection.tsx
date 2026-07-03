'use client'

import Section from '@/components/ui/Section'
import Card from '@/components/ui/Card'
import { blogPosts } from '@/lib/content/blog'
import { mediumArticles } from '@/lib/content/medium'
import { formatDate } from '@/lib/utils'
import Link from 'next/link'

export default function BlogSection() {
  const posts = blogPosts.slice(0, 3)
  const medium = mediumArticles.slice(0, 2)

  return (
    <>
      <Section
        id="blog"
        eyebrow="// writing"
        title="Latest Articles"
        subtitle="Thoughts on AI, machine learning, deep learning, and building production systems."
      >
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {posts.map((post, i) => (
            <Link key={post.slug} href={`/blog/${post.slug}`}>
              <Card delay={i * 100} className="h-full flex flex-col">
                <div className="flex items-center gap-2 mb-3">
                  <span className="pill">{post.category}</span>
                  <span className="text-xs text-cream-500 font-mono">
                    {formatDate(post.date)}
                  </span>
                </div>

                <h3 className="heading-sm mb-2 line-clamp-2">{post.title}</h3>

                <p className="text-sm leading-relaxed text-cream-700 flex-1 line-clamp-3 mb-4">
                  {post.description}
                </p>

                <div className="flex flex-wrap gap-1.5 mt-auto">
                  {post.tags.slice(0, 3).map((tag) => (
                    <span key={tag} className="pill">
                      {tag}
                    </span>
                  ))}
                </div>
              </Card>
            </Link>
          ))}
        </div>

        <div className="mt-8 text-center">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-cream-600 hover:text-sienna transition-colors"
          >
            Read All Articles
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
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

      {medium.length > 0 && (
        <div className="mx-auto max-w-6xl px-6 pb-20">
          <div className="section-rule mb-12" />
          <div className="mb-8">
            <p className="section-eyebrow mb-3">// medium</p>
            <h2 className="heading-lg">Latest on Medium</h2>
            <p className="mt-3 text-cream-600 leading-relaxed">
              Articles I've published on Medium about AI, machine learning, and
              data science.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2">
            {medium.map((article, i) => (
              <a
                key={article.slug}
                href={article.url}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Card delay={i * 100} className="h-full flex flex-col">
                  {article.image && (
                    <div
                      className="relative w-full h-40 -mt-6 -mx-6 mb-4 overflow-hidden rounded-t-lg"
                      style={{ width: 'calc(100% + 3rem)' }}
                    >
                      <img
                        src={article.image}
                        alt={article.title}
                        className="w-full h-full object-cover"
                        loading="lazy"
                      />
                    </div>
                  )}

                  <div className="flex items-center gap-2 mb-3">
                    <span className="inline-flex items-center gap-1 pill text-green-700 bg-green-100">
                      Medium
                    </span>
                    <span className="text-xs text-cream-500 font-mono">
                      {formatDate(article.date)}
                    </span>
                  </div>

                  <h3 className="heading-sm mb-2 line-clamp-2">
                    {article.title}
                  </h3>

                  <p className="text-sm leading-relaxed text-cream-700 flex-1 line-clamp-3 mb-4">
                    {article.description}
                  </p>

                  <div className="flex flex-wrap gap-1.5 mt-auto">
                    {article.tags.slice(0, 3).map((tag) => (
                      <span key={tag} className="pill">
                        {tag}
                      </span>
                    ))}
                  </div>
                </Card>
              </a>
            ))}
          </div>

          <div className="mt-8 text-center">
            <a
              href="https://medium.com/@charansaiponnada06"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-cream-600 hover:text-sienna transition-colors"
            >
              View All on Medium
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                <path
                  d="M2 6h8M7 3l3 3-3 3"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </a>
          </div>
        </div>
      )}
    </>
  )
}
