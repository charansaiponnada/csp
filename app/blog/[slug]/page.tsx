import { notFound } from 'next/navigation'
import { getBlogPostBySlug, blogPosts, getRelatedPosts } from '@/lib/content/blog'
import { generateMetadata as genMeta } from '@/lib/metadata'
import BlogPostContent from './BlogPostContent'

type Props = { params: Promise<{ slug: string }> }

export async function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }))
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params
  const post = getBlogPostBySlug(slug)
  if (!post) return {}
  return genMeta({
    title: post.title,
    description: post.description,
    path: `/blog/${post.slug}`,
    ogType: 'article',
    publishedTime: post.date,
    tags: post.tags,
  })
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params
  const post = getBlogPostBySlug(slug)
  if (!post) notFound()

  const related = getRelatedPosts(post, 3)

  return <BlogPostContent post={post} related={related} />
}
