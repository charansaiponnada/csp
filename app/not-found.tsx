import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: '404 — Page Not Found',
  description: 'The page you are looking for does not exist.',
  robots: { index: false },
}

export default function NotFound() {
  return (
    <div className="flex min-h-screen items-center justify-center">
      <div className="text-center px-6">
        <p className="font-mono text-6xl font-light text-cream-400 mb-4">
          404
        </p>
        <h1 className="heading-md mb-4">Page Not Found</h1>
        <p className="text-cream-600 mb-8 max-w-md mx-auto">
          The page you are looking for does not exist or has been moved.
        </p>
        <Link
          href="/"
          className="inline-flex items-center gap-2 rounded-lg bg-cream-900 px-6 py-3 text-sm font-medium text-cream-100 transition-all hover:bg-cream-800"
        >
          Back to Home
        </Link>
      </div>
    </div>
  )
}
