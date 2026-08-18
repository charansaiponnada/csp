import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: '404 — Page Not Found',
  description: 'The page you are looking for does not exist.',
  robots: { index: false },
}

export default function NotFound() {
  return (
    <div className="container">
      <h1 className="ptitle">404</h1>
      <div className="psub">this page does not exist, or it moved</div>
      <div>
        Try the <Link href="/">home page</Link>, the <Link href="/projects">projects</Link>, or the{' '}
        <Link href="/research">research</Link>.
      </div>
      <div className="footspace"></div>
    </div>
  )
}
