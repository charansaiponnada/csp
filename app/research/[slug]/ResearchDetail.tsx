import Link from 'next/link'
import { Publication } from '@/lib/content/publications'

type Props = { pub: Publication }

const longDate = (iso: string) =>
  new Date(iso).toLocaleDateString('en-US', { month: 'long', year: 'numeric' })

export default function ResearchDetail({ pub }: Props) {
  return (
    <div className="container">
      <Link href="/research" className="back">
        ← research
      </Link>

      <h1 className="ptitle">{pub.title}</h1>
      <div className="psub">{pub.authors.join(', ')}</div>

      <div className="kv">
        <b>venue</b> {pub.venue}
      </div>
      <div className="kv">
        <b>date</b> {longDate(pub.date)}
      </div>
      <div className="kv">
        <b>status</b> {pub.status}
      </div>
      {pub.doi && (
        <div className="kv">
          <b>doi</b> <a href={`https://doi.org/${pub.doi}`}>{pub.doi}</a>
        </div>
      )}
      {pub.arxiv && (
        <div className="kv">
          <b>arxiv</b> <a href={pub.arxiv}>{pub.arxiv}</a>
        </div>
      )}

      <hr />

      <div className="ctitle">abstract</div>
      <div className="article">{pub.abstract}</div>

      <div className="ctitle">at a glance</div>
      <ul>
        {pub.metrics.map((m) => (
          <li key={m.label}>
            <span className="dim">{m.label}</span> — {m.value}
          </li>
        ))}
      </ul>

      <div className="ctitle">keywords</div>
      <div>{pub.keywords.join(', ')}</div>

      <div className="ctitle">bibtex</div>
      <div className="bib">{pub.bibtex}</div>

      <div className="footspace"></div>
    </div>
  )
}
