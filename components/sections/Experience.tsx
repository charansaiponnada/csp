'use client'

import Section from '@/components/ui/Section'
import Card from '@/components/ui/Card'
import { experiences } from '@/lib/content/experience'

const typeLabels: Record<string, string> = {
  work: 'Work',
  education: 'Education',
  research: 'Research',
  achievement: 'Achievement',
}

export default function Experience() {
  const sorted = [...experiences].sort(
    (a, b) => new Date(b.startDate).getTime() - new Date(a.startDate).getTime()
  )

  return (
    <Section
      id="experience"
      eyebrow="// experience"
      title="Timeline"
      subtitle="My journey through AI engineering, research, and education."
    >
      <div className="relative">
        <div className="absolute left-[7px] top-2 bottom-2 w-px bg-cream-400 hidden sm:block" />

        <div className="space-y-8">
          {sorted.map((exp, i) => (
            <div key={exp.id} className="relative pl-0 sm:pl-8">
              <div className="absolute left-0 top-2 hidden sm:block">
                <div className="h-3.5 w-3.5 rounded-full border-2 border-cream-400 bg-cream-200" />
              </div>

              <Card delay={i * 100}>
                <div className="flex flex-wrap items-center gap-3 mb-3">
                  <span className="font-mono text-xs uppercase tracking-widest text-cream-600">
                    {typeLabels[exp.type]}
                  </span>
                  {exp.current && (
                    <span className="inline-flex items-center gap-1.5 px-2 py-0.5 text-xs font-mono rounded-full bg-green-100 text-green-700">
                      <span className="h-1.5 w-1.5 rounded-full bg-green-500 animate-pulse" />
                      Current
                    </span>
                  )}
                </div>

                <h3 className="heading-sm mb-1">{exp.role}</h3>

                <p className="text-sm text-cream-600 mb-3">
                  {exp.organization}
                  {exp.location && ` · ${exp.location}`}
                  <span className="text-cream-500">
                    {' '}
                    · {exp.startDate}
                    {exp.endDate ? ` – ${exp.endDate}` : ' – Present'}
                  </span>
                </p>

                <p className="text-sm leading-relaxed text-cream-700 mb-3">
                  {exp.description}
                </p>

                <ul className="space-y-1.5 mb-3">
                  {exp.highlights.map((h, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-2 text-sm text-cream-700"
                    >
                      <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-sienna" />
                      {h}
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-1.5">
                  {exp.tags.map((tag) => (
                    <span
                      key={tag}
                      className="pill"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </Section>
  )
}
