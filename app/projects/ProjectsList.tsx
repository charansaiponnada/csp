'use client'

import Link from 'next/link'
import Card from '@/components/ui/Card'
import { Project } from '@/lib/content/projects'

type Props = { projects: Project[] }

const categoryLabels: Record<string, string> = {
  research: 'Research',
  'ai-ml': 'AI / ML',
  'full-stack': 'Full Stack',
  'open-source': 'Open Source',
}

export default function ProjectsList({ projects }: Props) {
  return (
    <div className="pt-28 pb-20">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-12">
          <p className="section-eyebrow mb-3">// projects</p>
          <h1 className="heading-xl">All Projects</h1>
          <p className="mt-3 max-w-2xl text-cream-600 leading-relaxed">
            AI/ML projects, research implementations, and full-stack systems I
            have built.
          </p>
        </div>

        <div className="space-y-6">
          {projects.map((project, i) => (
            <Link key={project.slug} href={`/projects/${project.slug}`}>
              <Card delay={i * 50}>
                <div className="flex flex-col sm:flex-row sm:items-start gap-4 sm:gap-6">
                  <span className="font-mono text-3xl font-light text-cream-400 shrink-0">
                    {(i + 1).toString().padStart(2, '0')}
                  </span>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="font-mono text-xs uppercase tracking-widest text-cream-600">
                        {categoryLabels[project.category]}
                      </span>
                      {project.status === 'in-progress' && (
                        <span className="inline-flex items-center px-2 py-0.5 text-xs font-mono rounded-full border border-blue-200 bg-blue-100 text-blue-700">
                          In Progress
                        </span>
                      )}
                    </div>
                    <h2 className="heading-sm mb-2">{project.title}</h2>
                    <p className="text-sm leading-relaxed text-cream-700 mb-3">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-1.5">
                      {project.techStack.map((tech) => (
                        <span key={tech} className="pill">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}
