import Link from 'next/link'
import { Project } from '@/lib/content/projects'

type Props = { projects: Project[] }

export default function ProjectsList({ projects }: Props) {
  return (
    <div className="container">
      <Link href="/" className="back">
        ← Charan Sai Ponnada
      </Link>

      <h1 className="ptitle">projects</h1>
      <div className="psub">AI/ML systems, research implementations and full-stack builds</div>

      {projects.map((p) => (
        <div className="project" key={p.slug}>
          <div className="pico">
            {p.image ? (
              // eslint-disable-next-line @next/next/no-img-element
              <img src={p.image} alt={p.title} />
            ) : (
              <div className="pmono">{p.title.charAt(0)}</div>
            )}
          </div>
          <div className="pdesc">
            <Link href={`/projects/${p.slug}`}>{p.title}</Link>
            {p.status === 'in-progress' && <span className="dim"> (in progress)</span>}{' '}
            {p.description}
            <div className="meta">{p.techStack.join(' · ')}</div>
          </div>
          <div className="pend"></div>
        </div>
      ))}

      <div className="footspace"></div>
    </div>
  )
}
