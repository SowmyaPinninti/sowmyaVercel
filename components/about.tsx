import { SectionHeading } from './section-heading'

export function About() {
  return (
    <section id="about" aria-labelledby="about-title" className="border-t border-border">
      <div className="mx-auto max-w-7xl px-6 py-24 md:px-10 md:py-32">
        <SectionHeading
          id="about-title"
          number="01"
          label="About me"
          title="Technology background × product mindset ="
          accent="me."
        />
        <div className="grid gap-8 text-lg leading-relaxed text-muted-foreground md:grid-cols-3">
          <p>
            I am an MBA candidate with a technology background and experience in software
            development.
          </p>
          <p>
            My interest lies at the intersection of business, technology and customer needs —
            understanding problems, identifying opportunities and turning ideas into useful digital
            products.
          </p>
          <p>
            I enjoy combining technical understanding, structured thinking and data-informed
            decision-making to create better product experiences.
          </p>
        </div>
      </div>
    </section>
  )
}
