import type { ProjectVisual as Visual } from '@/lib/content'

function Badge({ small, big, caption, accent }: { small: string; big: string; caption: string; accent: string }) {
  return (
    <div className={`flex flex-col items-center gap-1 border ${accent} bg-background/60 px-8 py-6 text-center`}>
      <small className="text-[10px] tracking-[0.35em] text-muted-foreground">{small}</small>
      <strong className="font-serif text-4xl font-normal">{big}</strong>
      <span className="text-[10px] tracking-[0.25em] text-muted-foreground">{caption}</span>
    </div>
  )
}

export function ProjectVisual({ visual }: { visual: Visual }) {
  const base =
    'relative flex aspect-[16/10] items-center justify-center overflow-hidden bg-card transition-transform duration-500 group-hover:scale-[1.02]'

  if (visual === 'rapido') {
    return (
      <div className={`${base} bg-[radial-gradient(circle_at_30%_20%,rgba(255,98,93,0.25),transparent_60%)]`}>
        <Badge small="RAPIDO" big="PRO" caption="CAPTAIN SAAS EXPERIENCE" accent="border-coral/50" />
      </div>
    )
  }

  if (visual === 'dashboard') {
    const bars = ['h-1/3', 'h-2/3', 'h-1/2', 'h-5/6', 'h-3/5']
    return (
      <div className={`${base} bg-[radial-gradient(circle_at_70%_30%,rgba(55,220,224,0.18),transparent_60%)]`}>
        <div className="w-3/5 border border-border bg-background/60 p-4">
          <div className="mb-4 flex gap-2">
            <span className="h-2 w-12 bg-cyan/70" />
            <span className="h-2 w-6 bg-muted-foreground/30" />
          </div>
          <div className="flex h-24 items-end gap-3">
            {bars.map((h, i) => (
              <span key={i} className={`flex-1 ${h} ${i === 3 ? 'bg-cyan' : 'bg-muted-foreground/30'}`} />
            ))}
          </div>
        </div>
      </div>
    )
  }

  if (visual === 'insurance') {
    return (
      <div className={`${base} bg-[radial-gradient(circle_at_30%_80%,rgba(238,99,169,0.2),transparent_60%)]`}>
        <Badge small="DIGITAL" big="INSURANCE" caption="PRODUCT EXPERIENCE" accent="border-pink/50" />
      </div>
    )
  }

  return (
    <div className={base}>
      <span aria-hidden="true" className="absolute size-44 rounded-full border border-coral/30" />
      <span aria-hidden="true" className="absolute size-28 rounded-full border border-cyan/40" />
      <span className="relative flex size-16 items-center justify-center rounded-full bg-coral font-serif text-2xl text-primary-foreground">
        AI
      </span>
    </div>
  )
}
