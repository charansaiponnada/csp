'use client'

import { BlogPost } from '@/lib/content/blog'
import { mediumArticles } from '@/lib/content/medium'
import { formatDate } from '@/lib/utils'
import Link from 'next/link'
import Card from '@/components/ui/Card'

type Props = {
  posts: BlogPost[]
  totalPages: number
  currentPage: number
  categories: string[]
  tags: string[]
}

export default function BlogListPage({
  posts,
  totalPages,
  currentPage,
  categories,
  tags,
}: Props) {
  return (
    <div className="pt-28 pb-20">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-12">
          <p className="section-eyebrow mb-3">// blog</p>
          <h1 className="heading-xl">Articles & Tutorials</h1>
          <p className="mt-3 max-w-2xl text-cream-600 leading-relaxed">
            Thoughts on AI, machine learning, deep learning, computer vision,
            and building production systems.
          </p>
        </div>

        <div className="grid gap-12 lg:grid-cols-4">
          <div className="lg:col-span-3">
            {posts.length === 0 ? (
              <p className="text-cream-600">No articles published yet.</p>
            ) : (
              <div className="space-y-8">
                {posts.map((post, i) => (
                  <Link key={post.slug} href={`/blog/${post.slug}`}>
                    <Card delay={i * 50}>
                      <div className="flex flex-col sm:flex-row sm:items-start gap-4">
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center gap-2 mb-2">
                            <span className="pill">{post.category}</span>
                            <span className="text-xs text-cream-500 font-mono">
                              {formatDate(post.date)}
                            </span>
                          </div>
                          <h2 className="heading-sm mb-2">{post.title}</h2>
                          <p className="text-sm leading-relaxed text-cream-700 line-clamp-2">
                            {post.description}
                          </p>
                          <div className="flex flex-wrap gap-1.5 mt-3">
                            {post.tags.slice(0, 4).map((tag) => (
                              <span key={tag} className="pill">
                                {tag}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </Card>
                  </Link>
                ))}
              </div>
            )}

            {totalPages > 1 && (
              <div className="mt-12 flex items-center justify-center gap-2">
                {currentPage > 1 && (
                  <Link
                    href={`/blog/page/${currentPage - 1}`}
                    className="inline-flex items-center gap-1 px-3 py-2 text-sm text-cream-600 hover:text-sienna transition-colors"
                  >
                    Previous
                  </Link>
                )}

                {Array.from({ length: totalPages }, (_, i) => i + 1).map(
                  (page) => (
                    <Link
                      key={page}
                      href={`/blog/page/${page}`}
                      className={`inline-flex items-center justify-center w-8 h-8 text-sm rounded-full transition-colors ${
                        page === currentPage
                          ? 'bg-cream-900 text-cream-100'
                          : 'text-cream-600 hover:text-cream-900'
                      }`}
                    >
                      {page}
                    </Link>
                  )
                )}

                {currentPage < totalPages && (
                  <Link
                    href={`/blog/page/${currentPage + 1}`}
                    className="inline-flex items-center gap-1 px-3 py-2 text-sm text-cream-600 hover:text-sienna transition-colors"
                  >
                    Next
                  </Link>
                )}
              </div>
            )}

            <div className="section-rule my-12" />

            <div>
              <div className="flex items-center gap-3 mb-6">
                <h2 className="heading-md">Latest on Medium</h2>
                <span className="inline-flex items-center px-2 py-0.5 text-xs font-mono rounded-full bg-green-100 text-green-700">
                  Medium
                </span>
              </div>

              <div className="space-y-6">
                {mediumArticles.map((article, i) => (
                  <a
                    key={article.slug}
                    href={article.url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Card delay={i * 50}>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2 mb-2">
                          <span className="text-xs text-cream-500 font-mono">
                            {formatDate(article.date)}
                          </span>
                        </div>
                        <h3 className="heading-sm mb-2">{article.title}</h3>
                        <p className="text-sm leading-relaxed text-cream-700 line-clamp-2">
                          {article.description}
                        </p>
                        <div className="flex flex-wrap gap-1.5 mt-3">
                          {article.tags.slice(0, 4).map((tag) => (
                            <span key={tag} className="pill">
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>
                    </Card>
                  </a>
                ))}
              </div>

              <div className="mt-6 text-center">
                <a
                  href="https://medium.com/@charansaiponnada06"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-cream-600 hover:text-sienna transition-colors"
                >
                  View All on Medium
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
                </a>
              </div>
            </div>
          </div>

          <aside className="lg:col-span-1">
            <div className="sticky top-28 space-y-8">
              <div>
                <h3 className="font-mono text-xs uppercase tracking-widest text-cream-600 mb-3">
                  Categories
                </h3>
                <div className="space-y-1">
                  {categories.map((cat) => (
                    <Link
                      key={cat}
                      href={`/blog?category=${cat.toLowerCase()}`}
                      className="block text-sm text-cream-700 hover:text-sienna transition-colors"
                    >
                      {cat}
                    </Link>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="font-mono text-xs uppercase tracking-widest text-cream-600 mb-3">
                  Tags
                </h3>
                <div className="flex flex-wrap gap-1.5">
                  {tags.map((tag) => (
                    <span
                      key={tag}
                      className="pill hover:bg-cream-400 cursor-default"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="font-mono text-xs uppercase tracking-widest text-cream-600 mb-3">
                  Also on
                </h3>
                <div className="space-y-2">
                  <a
                    href="https://medium.com/@charansaiponnada06"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block text-sm text-cream-700 hover:text-sienna transition-colors"
                  >
                    Medium ↗
                  </a>
                  <a
                    href="https://dev.to/charansaiponnada"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block text-sm text-cream-700 hover:text-sienna transition-colors"
                  >
                    Dev.to ↗
                  </a>
                </div>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </div>
  )
}
