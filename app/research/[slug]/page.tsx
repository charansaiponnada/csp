import { notFound } from 'next/navigation'
import { publications, getPublicationBySlug } from '@/lib/content/publications'
import { generateMetadata as genMeta } from '@/lib/metadata'
import ResearchDetail from './ResearchDetail'

type Props = { params: Promise<{ slug: string }> }

export async function generateStaticParams() {
  return publications.map((pub) => ({ slug: pub.slug }))
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params
  const pub = getPublicationBySlug(slug)
  if (!pub) return {}
  return genMeta({
    title: pub.title,
    description: pub.description,
    path: `/research/${pub.slug}`,
    ogType: 'article',
    publishedTime: pub.date,
    tags: pub.keywords,
  })
}

export default async function ResearchDetailPage({ params }: Props) {
  const { slug } = await params
  const pub = getPublicationBySlug(slug)
  if (!pub) notFound()

  return <ResearchDetail pub={pub} />
}
