'use client'

import { ReactNode, useRef, useEffect, useState } from 'react'
import { cn } from '@/lib/utils'
import Link from 'next/link'

type CardProps = {
  children: ReactNode
  className?: string
  href?: string
  external?: boolean
  delay?: number
}

export default function Card({
  children,
  className,
  href,
  external,
  delay = 0,
}: CardProps) {
  const ref = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setVisible(true), delay)
          observer.unobserve(el)
        }
      },
      { threshold: 0.1 }
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [delay])

  const classes = cn(
    'group block rounded-lg border border-cream-400 bg-cream-100 p-6 transition-all duration-300',
    href && 'hover:border-sienna/30 hover:shadow-sm hover:-translate-y-0.5',
    visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4',
    className
  )

  if (href) {
    if (external) {
      return (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className={classes}
          ref={ref as any}
        >
          {children}
        </a>
      )
    }

    return (
      <Link href={href} className={classes} ref={ref as any}>
        {children}
      </Link>
    )
  }

  return (
    <div ref={ref} className={classes}>
      {children}
    </div>
  )
}
