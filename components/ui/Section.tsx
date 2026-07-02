'use client'

import { ReactNode, useRef, useEffect, useState } from 'react'
import { cn } from '@/lib/utils'

type SectionProps = {
  id: string
  children: ReactNode
  className?: string
  containerClassName?: string
  eyebrow?: string
  title?: string
  subtitle?: string
}

export default function Section({
  id,
  children,
  className,
  containerClassName,
  eyebrow,
  title,
  subtitle,
}: SectionProps) {
  const ref = useRef<HTMLElement>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          observer.unobserve(el)
        }
      },
      { threshold: 0.1 }
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <section
      id={id}
      ref={ref}
      className={cn('py-20 sm:py-28', className)}
    >
      <div className={cn('mx-auto max-w-6xl px-6', containerClassName)}>
        {(eyebrow || title) && (
          <div
            className={cn(
              'mb-12 transition-all duration-700',
              visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            )}
          >
            {eyebrow && (
              <p className="section-eyebrow mb-3">{eyebrow}</p>
            )}
            {title && (
              <h2 className="heading-lg text-balance">{title}</h2>
            )}
            {subtitle && (
              <p className="mt-3 max-w-2xl text-cream-600 leading-relaxed">
                {subtitle}
              </p>
            )}
          </div>
        )}
        <div
          className={cn(
            'transition-all duration-700 delay-150',
            visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          )}
        >
          {children}
        </div>
      </div>
    </section>
  )
}
