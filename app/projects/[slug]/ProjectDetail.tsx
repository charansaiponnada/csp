import Link from 'next/link'
import { Project } from '@/lib/content/projects'

type Props = { project: Project }

export default function ProjectDetail({ project }: Props) {
  return (
    <div className="container">
      <Link href="/projects" className="back">
        ← projects
      </Link>

      <h1 className="ptitle">{project.title}</h1>
      <div className="psub">{project.description}</div>

      <div className="kv">
        <b>status</b> {project.status}
      </div>
      <div className="kv">
        <b>stack</b> {project.techStack.join(', ')}
      </div>
      {project.github && (
        <div className="kv">
          <b>code</b> <a href={project.github}>{project.github}</a>
        </div>
      )}
      {project.demo && (
        <div className="kv">
          <b>demo</b> <a href={project.demo}>{project.demo}</a>
        </div>
      )}

      <hr />

      <div className="article">{project.longDescription}</div>

      <div className="ctitle">problem</div>
      <div className="article">{project.problem}</div>

      <div className="ctitle">solution</div>
      <div className="article">{project.solution}</div>

      <div className="ctitle">architecture</div>
      <ul>
        {project.architecture.map((line) => (
          <li key={line}>{line}</li>
        ))}
      </ul>

      <div className="ctitle">results</div>
      <div className="article">{project.results}</div>

      {project.faqs.length > 0 && (
        <>
          <div className="ctitle">questions</div>
          {project.faqs.map((faq) => (
            <div className="pub" key={faq.question}>
              <div className="pub-title">{faq.question}</div>
              <div className="pub-authors">{faq.answer}</div>
            </div>
          ))}
        </>
      )}

      <div className="footspace"></div>
    </div>
  )
}
