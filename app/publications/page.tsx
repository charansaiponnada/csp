import { PUBLICATIONS } from '@/lib/constants'
import { generateMetadata } from '@/lib/metadata'
import PublicationsList from './PublicationsList'

export const metadata = generateMetadata({
  title: 'Publications',
  description: PUBLICATIONS.description,
  path: '/publications',
})

export default function PublicationsPage() {
  return <PublicationsList />
}
