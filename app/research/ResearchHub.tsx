import Link from 'next/link'
import { publications } from '@/lib/content/publications'

const statusLabel: Record<string, string> = {
  published: '',
  'in-review': ' (under review)',
  'in-progress': ' (in progress)',
}

export default function ResearchHub() {
  return (
    <div className="container">
      <Link href="/" className="back">
        ← Charan Sai Ponnada
      </Link>

      <h1 className="ptitle">research</h1>
      <div className="psub">computer vision, LLMs, and genomic sequence modeling</div>

      {publications.map((pub) => (
        <div className="pub" key={pub.slug}>
          <div className="pub-title">
            <Link href={`/research/${pub.slug}`}>{pub.title}</Link>
          </div>{' '}
          <div className="pub-venue">
            {pub.venueShort}
            {statusLabel[pub.status]}
          </div>
          <div className="pub-authors">{pub.authors.join(', ')}</div>
        </div>
      ))}

      <div>
        <br />
        Abstracts, metrics and BibTeX are on the{' '}
        <Link href="/publications">publications page</Link>.
      </div>

      <div className="footspace"></div>
    </div>
  )
}
