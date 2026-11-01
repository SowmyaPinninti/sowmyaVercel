import { SKILLS } from '@/lib/content'
import { SectionHeading } from './section-heading'

export function Skills() {
  return (
    <section id="skills" aria-labelledby="skills-title" className="border-t border-border">
      <div className="mx-auto max-w-7xl px-6 py-24 md:px-10 md:py-32">
        <SectionHeading id="skills-title" number="04" label="Capabilities" title="What I" accent="bring." />

        <ul className="grid gap-px overflow-hidden border border-border bg-border sm:grid-cols-2 lg:grid-cols-4">
          {SKILLS.map((skill, i) => (
            <li key={skill.title} className="bg-background p-8 transition-colors hover:bg-card">
              <span className="text-xs tracking-[0.25em] text-coral">{String(i + 1).padStart(2, '0')}</span>
              <h3 className="mt-10 font-serif text-3xl">{skill.title}</h3>
              <p className="mt-4 leading-relaxed text-muted-foreground">{skill.description}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
