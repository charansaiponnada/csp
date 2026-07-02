import { RESEARCH } from '@/lib/constants'
import { generateMetadata } from '@/lib/metadata'
import ResearchHub from './ResearchHub'

export const metadata = generateMetadata({
  title: 'Research',
  description: RESEARCH.description,
  path: '/research',
})

export default function ResearchPage() {
  return <ResearchHub />
}
