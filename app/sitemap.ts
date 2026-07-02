import { MetadataRoute } from 'next'
import { SITE } from '@/lib/constants'
import { blogPosts } from '@/lib/content/blog'
import { publications } from '@/lib/content/publications'
import { projects } from '@/lib/content/projects'

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages = [
    { url: SITE.url, lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 1.0 },
    { url: `${SITE.url}/blog`, lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.9 },
    { url: `${SITE.url}/research`, lastModified: new Date(), changeFrequency: 'monthly' as const, priority: 0.8 },
    { url: `${SITE.url}/publications`, lastModified: new Date(), changeFrequency: 'monthly' as const, priority: 0.8 },
    { url: `${SITE.url}/projects`, lastModified: new Date(), changeFrequency: 'monthly' as const, priority: 0.7 },
  ]

  const blogUrls = blogPosts.map((post) => ({
    url: `${SITE.url}/blog/${post.slug}`,
    lastModified: new Date(post.modifiedDate || post.date),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }))

  const researchUrls = publications.map((pub) => ({
    url: `${SITE.url}/research/${pub.slug}`,
    lastModified: new Date(pub.date),
    changeFrequency: 'yearly' as const,
    priority: 0.8,
  }))

  const projectUrls = projects.map((project) => ({
    url: `${SITE.url}/projects/${project.slug}`,
    lastModified: new Date(project.date),
    changeFrequency: 'monthly' as const,
    priority: 0.6,
  }))

  return [
    ...staticPages,
    ...blogUrls,
    ...researchUrls,
    ...projectUrls,
  ]
}
