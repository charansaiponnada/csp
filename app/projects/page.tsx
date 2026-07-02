import { PROJECTS } from '@/lib/constants'
import { projects } from '@/lib/content/projects'
import { generateMetadata } from '@/lib/metadata'
import ProjectsList from './ProjectsList'

export const metadata = generateMetadata({
  title: 'Projects',
  description: PROJECTS.description,
  path: '/projects',
})

export default function ProjectsPage() {
  return <ProjectsList projects={projects} />
}
