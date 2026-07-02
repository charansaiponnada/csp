'use client'

import Link from 'next/link'
import JsonLd from '@/components/seo/JsonLd'
import { Project } from '@/lib/content/projects'

type Props = { project: Project }

export default function ProjectDetail({ project }: Props) {
  return (
    <>
      <JsonLd
        type="CreativeWork"
        data={{
          work: {
            name: project.title,
            description: project.description,
            url: `/projects/${project.slug}`,
            dateCreated: project.date,
          },
        }}
      />
      <JsonLd
        type="BreadcrumbList"
        data={{
          items: [
            { name: 'Home', path: '/' },
            { name: 'Projects', path: '/projects' },
            { name: project.title, path: `/projects/${project.slug}` },
          ],
        }}
      />

      <article className="pt-28 pb-20">
        <div className="mx-auto max-w-3xl px-6">
          <Link
            href="/projects"
            className="inline-flex items-center gap-1 font-mono text-xs uppercase tracking-widest text-cream-600 hover:text-sienna transition-colors mb-6"
          >
            <svg
              width="12"
              height="12"
              viewBox="0 0 12 12"
              fill="none"
              className="rotate-180"
            >
              <path
                d="M2 6h8M7 3l3 3-3 3"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            Back to Projects
          </Link>

          <h1 className="heading-xl text-balance mb-4">{project.title}</h1>

          <p className="text-lg leading-relaxed text-cream-600 mb-8">
            {project.longDescription}
          </p>

          <div className="flex flex-wrap gap-3 mb-8">
            {project.techStack.map((tech) => (
              <span key={tech} className="tag-sienna">
                {tech}
              </span>
            ))}
          </div>

          {project.github || project.demo ? (
            <div className="flex flex-wrap gap-3 mb-10">
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-lg bg-cream-900 px-5 py-2.5 text-sm font-medium text-cream-100 transition-all hover:bg-cream-800"
                >
                  View on GitHub
                </a>
              )}
              {project.demo && (
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-lg border border-cream-400 px-5 py-2.5 text-sm font-medium text-cream-700 transition-all hover:border-cream-500 hover:text-cream-900"
                >
                  Live Demo
                </a>
              )}
            </div>
          ) : null}

          <div className="section-rule mb-10" />

          <div className="prose-custom">
            <h2>Problem</h2>
            <p>{project.problem}</p>

            <h2>Solution</h2>
            <p>{project.solution}</p>

            <h2>Architecture</h2>
            <ol>
              {project.architecture.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ol>

            <h2>Results</h2>
            <p>{project.results}</p>

            {project.faqs.length > 0 && (
              <>
                <h2>FAQs</h2>
                {project.faqs.map((faq, i) => (
                  <div key={i}>
                    <h3>{faq.question}</h3>
                    <p>{faq.answer}</p>
                  </div>
                ))}
              </>
            )}
          </div>
        </div>
      </article>
    </>
  )
}
