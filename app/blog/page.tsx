import { blogPosts, getBlogCategories, getBlogTags, paginatePosts } from '@/lib/content/blog'
import { BLOG } from '@/lib/constants'
import { generateMetadata } from '@/lib/metadata'
import BlogListPage from './BlogListPage'

export const metadata = generateMetadata({
  title: 'Blog',
  description: BLOG.description,
  path: '/blog',
})

export default function Blog() {
  const { posts, totalPages, currentPage } = paginatePosts(blogPosts, 1, 9)
  const categories = getBlogCategories()
  const tags = getBlogTags()

  return (
    <BlogListPage
      posts={posts}
      totalPages={totalPages}
      currentPage={currentPage}
      categories={categories}
      tags={tags}
    />
  )
}
