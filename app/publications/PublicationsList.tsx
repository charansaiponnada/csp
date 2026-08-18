import Link from 'next/link'
import { publications } from '@/lib/content/publications'
import { SITE } from '@/lib/constants'

const longDate = (iso: string) =>
  new Date(iso).toLocaleDateString('en-US', { month: 'long', year: 'numeric' })

export default function PublicationsList() {
  return (
    <div className="container">
      <Link href="/" className="back">
        ← Charan Sai Ponnada
      </Link>

      <h1 className="ptitle">publications</h1>
      <div className="psub">peer-reviewed work, with abstracts and BibTeX</div>

      {publications.map((pub) => (
        <div key={pub.slug}>
          <div className="pub">
            <div className="pub-title">
              <Link href={`/research/${pub.slug}`}>{pub.title}</Link>
            </div>{' '}
            <div className="pub-venue">
              {pub.venue} · {longDate(pub.date)}
              {pub.status === 'in-review' ? ' (under review)' : ''}
            </div>
            <div className="pub-authors">{pub.authors.join(', ')}</div>
          </div>
          <div className="article" style={{ fontSize: '15px', marginBottom: '10px' }}>
            {pub.abstract}
          </div>
          {pub.doi && (
            <div className="kv">
              <b>doi</b> <a href={`https://doi.org/${pub.doi}`}>{pub.doi}</a>
            </div>
          )}
          <div className="bib" style={{ marginBottom: '30px' }}>
            {pub.bibtex}
          </div>
        </div>
      ))}

      <div>
        Code and released models are on <a href={SITE.social.github}>GitHub</a> and{' '}
        <a href={SITE.social.huggingface}>HuggingFace</a>.
      </div>

      <div className="footspace"></div>
    </div>
  )
}
