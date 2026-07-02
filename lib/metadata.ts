import { Metadata } from 'next'
import { SITE } from './constants'

type PageMeta = {
  title?: string
  description?: string
  path?: string
  ogImage?: string
  ogType?: 'website' | 'article' | 'profile'
  publishedTime?: string
  modifiedTime?: string
  tags?: string[]
  noIndex?: boolean
  canonical?: string
}

export function generateMetadata({
  title,
  description,
  path = '/',
  ogImage,
  ogType = 'website',
  publishedTime,
  modifiedTime,
  tags,
  noIndex,
  canonical,
}: PageMeta): Metadata {
  const fullTitle = title
    ? `${title} | Charan Sai Ponnada`
    : SITE.title

  const desc = description || SITE.description
  const url = `${SITE.url}${path}`
  const image = ogImage
    ? `${SITE.url}${ogImage}`
    : `${SITE.url}${SITE.logo}`
  const canonicalUrl = canonical || url

  return {
    title: fullTitle,
    description: desc,
    metadataBase: new URL(SITE.url),
    alternates: { canonical: canonicalUrl },
    openGraph: {
      title: fullTitle,
      description: desc,
      url,
      siteName: SITE.shortTitle,
      locale: SITE.locale,
      type: ogType,
      ...(ogType === 'article' && {
        article: {
          publishedTime,
          modifiedTime,
          tags,
          authors: [SITE.url],
        },
      }),
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: title || SITE.shortTitle,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: fullTitle,
      description: desc,
      images: [image],
      creator: '@charansaiponnada',
      site: '@charansaiponnada',
    },
    robots: {
      index: !noIndex,
      follow: !noIndex,
      googleBot: {
        index: !noIndex,
        follow: !noIndex,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
    verification: {
      google: 'YOUR_GOOGLE_VERIFICATION',
      yandex: 'YOUR_YANDEX_VERIFICATION',
    },
    icons: {
      icon: [
        { url: '/favicon.ico' },
        { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
        { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      ],
      apple: [
        { url: '/apple-touch-icon.png' },
      ],
    },
    manifest: '/manifest.webmanifest',
    other: {
      'google-site-verification': 'YOUR_GOOGLE_VERIFICATION',
    },
  }
}

export const homeMetadata = generateMetadata({})

export function blogListMetadata(page: number) {
  return generateMetadata({
    title: `Blog${page > 1 ? ` — Page ${page}` : ''}`,
    description: `Articles on AI, Machine Learning, Deep Learning, and Computer Vision by Charan Sai Ponnada.${page > 1 ? ` Page ${page}.` : ''}`,
    path: page > 1 ? `/blog/page/${page}` : '/blog',
  })
}

export function blogPostMetadata(post: {
  title: string
  description: string
  slug: string
  date: string
  tags?: string[]
  image?: string
}) {
  return generateMetadata({
    title: post.title,
    description: post.description,
    path: `/blog/${post.slug}`,
    ogImage: post.image,
    ogType: 'article',
    publishedTime: post.date,
    modifiedTime: post.date,
    tags: post.tags,
  })
}
