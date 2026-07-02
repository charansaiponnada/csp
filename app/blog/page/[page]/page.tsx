import { notFound, redirect } from 'next/navigation'
import { blogPosts, getBlogCategories, getBlogTags, paginatePosts } from '@/lib/content/blog'
import { BLOG } from '@/lib/constants'
import { generateMetadata as genMeta } from '@/lib/metadata'
import BlogListPage from '../../BlogListPage'

type Props = { params: Promise<{ page: string }> }

export async function generateMetadata({ params }: Props) {
  const { page } = await params
  const pageNum = parseInt(page, 10)
  if (isNaN(pageNum) || pageNum < 1) return {}
  return genMeta({
    title: `Blog${pageNum > 1 ? ` — Page ${pageNum}` : ''}`,
    description: `Articles on AI, Machine Learning, Deep Learning, and Computer Vision.${pageNum > 1 ? ` Page ${pageNum}.` : ''}`,
    path: `/blog/page/${pageNum}`,
  })
}

export default async function BlogPaginatedPage({ params }: Props) {
  const { page } = await params
  const pageNum = parseInt(page, 10)

  if (isNaN(pageNum) || pageNum < 1) notFound()

  const result = paginatePosts(blogPosts, pageNum, 9)

  if (pageNum === 1) redirect('/blog')
  if (pageNum > result.totalPages) notFound()

  const categories = getBlogCategories()
  const tags = getBlogTags()

  return (
    <BlogListPage
      posts={result.posts}
      totalPages={result.totalPages}
      currentPage={result.currentPage}
      categories={categories}
      tags={tags}
    />
  )
}
