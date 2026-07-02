'use client'

import Section from '@/components/ui/Section'
import Card from '@/components/ui/Card'
import { blogPosts } from '@/lib/content/blog'
import { formatDate } from '@/lib/utils'
import Link from 'next/link'

export default function BlogSection() {
  const posts = blogPosts.slice(0, 3)

  return (
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
  )
}
