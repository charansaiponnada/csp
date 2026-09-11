import {
  personJsonLd,
  websiteJsonLd,
  webPageJsonLd,
  organizationJsonLd,
} from '@/lib/json-ld'

type JsonLdProps = {
  type:
    | 'Person'
    | 'Website'
    | 'WebPage'
    | 'Organization'
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
