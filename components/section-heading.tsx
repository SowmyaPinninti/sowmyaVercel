export function SectionHeading({
  number,
  label,
  title,
  accent,
  id,
}: {
  number: string
  label: string
  title: string
  accent: string
  id: string
}) {
  return (
    <div className="mb-16">
      <p className="flex items-center gap-4 text-xs uppercase tracking-[0.3em] text-muted-foreground">
        <span className="text-coral">{number}</span>
        <span aria-hidden="true" className="h-px w-10 bg-border" />
        {label}
      </p>
      <h2 id={id} className="mt-6 max-w-4xl font-serif text-5xl leading-[0.95] tracking-tight text-balance md:text-7xl">
        {title} <span className="italic text-coral">{accent}</span>
      </h2>
    </div>
  )
}
