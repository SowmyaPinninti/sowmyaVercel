import { ArrowUpRight } from 'lucide-react'
import { PROJECTS } from '@/lib/content'
import { ProjectVisual } from './project-visual'
import { SectionHeading } from './section-heading'

export function Projects() {
  return (
    <section id="projects" aria-labelledby="projects-title" className="border-t border-border">
      <div className="mx-auto max-w-7xl px-6 py-24 md:px-10 md:py-32">
        <SectionHeading id="projects-title" number="02" label="Selected work" title="Ideas into" accent="products." />

        <div className="grid gap-x-10 gap-y-16 md:grid-cols-2">
          {PROJECTS.map((project, i) => (
            <article key={project.title} className="group border-t border-foreground/20 pt-5">
              <div className="mb-5 flex justify-between text-xs uppercase tracking-[0.25em] text-muted-foreground">
                <span>{String(i + 1).padStart(2, '0')}</span>
                <span>{project.domain}</span>
              </div>

              <div className="overflow-hidden">
                <ProjectVisual visual={project.visual} />
              </div>

              <p className="mt-6 text-xs uppercase tracking-[0.25em] text-coral">{project.category}</p>
              <h3 className="mt-3 font-serif text-3xl md:text-4xl">{project.title}</h3>
              <p className="mt-3 leading-relaxed text-muted-foreground text-pretty">{project.description}</p>

              {project.href ? (
                <a
                  href={project.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.25em] transition-colors hover:text-coral"
                >
                  View case study <ArrowUpRight className="size-4" />
                  <span className="sr-only">for {project.title} (opens in new tab)</span>
                </a>
              ) : (
                <p className="mt-6 text-xs uppercase tracking-[0.25em] text-muted-foreground">
                  Case study in progress
                </p>
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
