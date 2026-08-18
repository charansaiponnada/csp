import type { Metadata, Viewport } from 'next'
import { SITE } from '@/lib/constants'
import './globals.css'
import JsonLd from '@/components/seo/JsonLd'

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: SITE.themeColor,
}

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    template: `%s | ${SITE.shortTitle}`,
    default: SITE.title,
  },
  description: SITE.description,
  keywords: [
    'Charan Sai',
    'Charan Sai Ponnada',
    'AI Engineer',
    'Machine Learning Engineer',
    'Deep Learning Researcher',
    'Computer Vision Engineer',
    'ML Researcher',
    'IEEE Author',
    'Python Developer',
    'Full Stack AI Developer',
    'Data Scientist',
    'Genomic AI',
    'RAG Systems',
    'LLM Hallucination Detection',
    'Vision Language Models',
  ],
  authors: [{ name: SITE.name, url: SITE.url }],
  creator: SITE.name,
  publisher: SITE.name,
  openGraph: {
    type: 'website',
    locale: SITE.locale,
    siteName: SITE.shortTitle,
    title: SITE.title,
    description: SITE.description,
    url: SITE.url,
    images: [{ url: `${SITE.url}${SITE.logo}`, width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: SITE.shortTitle,
    description: SITE.description,
    images: [`${SITE.url}${SITE.logo}`],
    creator: '@charansaiponnada',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'YOUR_GOOGLE_VERIFICATION',
  },
  alternates: {
    canonical: SITE.url,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        {children}

        <JsonLd type="Person" />
        <JsonLd type="Website" />
        <JsonLd type="Organization" />
      </body>
    </html>
  )
}
