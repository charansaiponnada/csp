import { notFound } from 'next/navigation'
import { projects, getProjectBySlug } from '@/lib/content/projects'
import { generateMetadata as genMeta } from '@/lib/metadata'
import ProjectDetail from './ProjectDetail'

type Props = { params: Promise<{ slug: string }> }

export async function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }))
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params
  const project = getProjectBySlug(slug)
  if (!project) return {}
  return genMeta({
    title: project.title,
    description: project.description,
    path: `/projects/${project.slug}`,
    tags: project.tags,
  })
}

export default async function ProjectDetailPage({ params }: Props) {
  const { slug } = await params
  const project = getProjectBySlug(slug)
  if (!project) notFound()

  return <ProjectDetail project={project} />
}
