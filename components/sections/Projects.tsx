'use client'

import Section from '@/components/ui/Section'
import Card from '@/components/ui/Card'
import { getFeaturedProjects } from '@/lib/content/projects'
import Link from 'next/link'

export default function Projects() {
  const projects = getFeaturedProjects()

  return (
    <Section
      id="work"
      eyebrow="// featured work"
      title="Projects & Systems"
      subtitle="Selected projects that showcase my work across AI, ML, research, and full-stack development."
    >
      <div className="space-y-6">
        {projects.map((project, i) => (
          <Link key={project.slug} href={`/projects/${project.slug}`}>
            <Card delay={i * 100}>
              <div className="flex flex-col sm:flex-row sm:items-start gap-4 sm:gap-6">
                <span className="font-mono text-3xl font-light text-cream-400 sm:mt-0 shrink-0">
                  {(i + 1).toString().padStart(2, '0')}
                </span>

                <div className="flex-1 min-w-0">
                  <div className="flex flex-wrap items-center gap-3 mb-2">
                    <h3 className="heading-sm">{project.title}</h3>
                    {project.status === 'in-progress' && (
                      <span className="inline-flex items-center px-2 py-0.5 text-xs font-mono rounded-full border border-blue-200 bg-blue-100 text-blue-700">
                        In Progress
                      </span>
                    )}
                  </div>

                  <p className="text-sm leading-relaxed text-cream-700 mb-3">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-1.5">
                    {project.techStack.slice(0, 6).map((tech) => (
                      <span key={tech} className="pill">
                        {tech}
                      </span>
                    ))}
                    {project.techStack.length > 6 && (
                      <span className="pill text-cream-500">
                        +{project.techStack.length - 6}
                      </span>
                    )}
                  </div>
                </div>

                <div className="hidden sm:flex items-center text-cream-400 group-hover:text-sienna transition-colors shrink-0">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                  >
                    <path
                      d="M4 10h12M11 5l5 5-5 5"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              </div>
            </Card>
          </Link>
        ))}
      </div>

      <div className="mt-8 text-center">
        <Link
          href="/projects"
          className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-cream-600 hover:text-sienna transition-colors"
        >
          View All Projects
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
            <path
              d="M2 6h8M7 3l3 3-3 3"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </Link>
      </div>
    </Section>
  )
}
