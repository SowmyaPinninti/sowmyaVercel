import { EXPERIENCE } from '@/lib/content'
import { SectionHeading } from './section-heading'

export function Experience() {
  return (
    <section id="experience" aria-labelledby="experience-title" className="border-t border-border">
      <div className="mx-auto max-w-7xl px-6 py-24 md:px-10 md:py-32">
        <SectionHeading
          id="experience-title"
          number="03"
          label="Experience"
          title="From technology"
          accent="to product."
        />

        <ol className="border-b border-border">
          {EXPERIENCE.map((item) => (
            <li
              key={item.role}
              className="grid gap-4 border-t border-border py-10 transition-colors hover:bg-card/50 md:grid-cols-[200px_1fr] md:gap-10"
            >
              <p className="text-xs uppercase tracking-[0.25em] text-coral md:pt-3">{item.period}</p>
              <div>
                <h3 className="font-serif text-3xl md:text-4xl">{item.role}</h3>
                <p className="mt-2 text-xs uppercase tracking-[0.25em] text-muted-foreground">{item.org}</p>
                <p className="mt-4 max-w-2xl leading-relaxed text-muted-foreground text-pretty">{item.description}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
