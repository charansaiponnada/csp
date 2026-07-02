import {
  personJsonLd,
  websiteJsonLd,
  webPageJsonLd,
  breadcrumbJsonLd,
  articleJsonLd,
  scholarlyArticleJsonLd,
  blogPostingJsonLd,
  faqJsonLd,
  organizationJsonLd,
  creativeWorkJsonLd,
  researchProjectJsonLd,
} from '@/lib/json-ld'

type JsonLdProps = {
  type:
    | 'Person'
    | 'Website'
    | 'WebPage'
    | 'BreadcrumbList'
    | 'Article'
    | 'ScholarlyArticle'
    | 'BlogPosting'
    | 'FAQ'
    | 'Organization'
    | 'CreativeWork'
    | 'ResearchProject'
  data?: Record<string, unknown>
}

function generateJsonLd(type: JsonLdProps['type'], data?: Record<string, unknown>) {
  switch (type) {
    case 'Person':
      return personJsonLd()
    case 'Website':
      return websiteJsonLd()
    case 'Organization':
      return organizationJsonLd()
    case 'WebPage':
      return webPageJsonLd(
        (data?.title as string) || '',
        (data?.description as string) || '',
        (data?.path as string) || '/'
      )
    case 'BreadcrumbList':
      return breadcrumbJsonLd(
        (data?.items as { name: string; path: string }[]) || []
      )
    case 'Article':
      return articleJsonLd(
        (data?.article as Parameters<typeof articleJsonLd>[0]) || {} as any
      )
    case 'ScholarlyArticle':
      return scholarlyArticleJsonLd(
        (data?.paper as Parameters<typeof scholarlyArticleJsonLd>[0]) || {} as any
      )
    case 'BlogPosting':
      return blogPostingJsonLd(
        (data?.post as Parameters<typeof blogPostingJsonLd>[0]) || {} as any
      )
    case 'FAQ':
      return faqJsonLd(
        (data?.questions as { question: string; answer: string }[]) || []
      )
    case 'CreativeWork':
      return creativeWorkJsonLd(
        (data?.work as Parameters<typeof creativeWorkJsonLd>[0]) || {} as any
      )
    case 'ResearchProject':
      return researchProjectJsonLd(
        (data?.project as Parameters<typeof researchProjectJsonLd>[0]) || {} as any
      )
    default:
      return null
  }
}

export default function JsonLd({
  type,
  data,
}: JsonLdProps) {
  const jsonLd = generateJsonLd(type, data)
  if (!jsonLd) return null

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  )
}
