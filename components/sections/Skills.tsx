'use client'

import Section from '@/components/ui/Section'
import { getSkillsByCategory, skillCategories } from '@/lib/content/skills'

export default function Skills() {
  const grouped = getSkillsByCategory()

  return (
    <Section
      id="skills"
      eyebrow="// skills"
      title="Tech Stack & Expertise"
      subtitle="Technologies I work with daily and tools I reach for when building AI systems."
    >
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {skillCategories.map((cat) => {
          const catSkills = grouped[cat.slug]
          if (!catSkills) return null

          return (
            <div
              key={cat.slug}
              className="rounded-lg border border-cream-400 bg-cream-100 p-5"
            >
              <h3 className="font-mono text-xs uppercase tracking-widest text-cream-600 mb-4">
                {cat.name}
              </h3>
              <div className="flex flex-wrap gap-2">
                {catSkills.map((skill) => (
                  <span
                    key={skill.name}
                    className={`inline-flex items-center px-2.5 py-1 text-xs font-mono rounded-full border ${
                      skill.level === 'expert'
                        ? 'border-sienna/30 bg-sienna/5 text-sienna'
                        : skill.level === 'advanced'
                          ? 'border-cream-400 bg-cream-200 text-cream-700'
                          : 'border-cream-400 bg-cream-200/50 text-cream-600'
                    }`}
                  >
                    {skill.name}
                  </span>
                ))}
              </div>
            </div>
          )
        })}
      </div>
    </Section>
  )
}
