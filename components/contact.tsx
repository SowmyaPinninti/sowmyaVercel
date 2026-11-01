import { ArrowUp, ArrowUpRight, Mail } from 'lucide-react'
import { EMAIL, LINKEDIN } from '@/lib/content'

export function Contact() {
  return (
    <section id="contact" aria-labelledby="contact-title" className="border-t border-border">
      <div className="mx-auto max-w-7xl px-6 py-24 text-center md:px-10 md:py-36">
        <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground">Have an opportunity?</p>
        <h2 id="contact-title" className="mx-auto mt-6 max-w-4xl font-serif text-6xl leading-[0.95] tracking-tight text-balance md:text-8xl">
          {"Let's build"} <span className="italic text-coral">something useful.</span>
        </h2>

        <div className="mt-12 flex flex-col items-center justify-center gap-4 text-muted-foreground sm:flex-row sm:gap-10">
          <a href={`mailto:${EMAIL}`} className="inline-flex items-center gap-2 transition-colors hover:text-foreground">
            <Mail className="size-4" /> {EMAIL}
          </a>
          <a
            href={LINKEDIN}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 transition-colors hover:text-foreground"
          >
            LinkedIn <ArrowUpRight className="size-4" />
          </a>
        </div>

        <a
          href={`mailto:${EMAIL}`}
          className="mt-12 inline-flex items-center gap-3 bg-coral px-10 py-5 text-xs font-semibold uppercase tracking-[0.25em] text-primary-foreground transition-opacity hover:opacity-90"
        >
          Get in touch <ArrowUpRight className="size-4" />
        </a>
      </div>
    </section>
  )
}

export function SiteFooter() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 py-8 text-xs uppercase tracking-[0.25em] text-muted-foreground md:flex-row md:px-10">
        <span className="font-semibold text-foreground">
          SOWMYA<span className="text-coral">.</span>
        </span>
        <span>
          Product Management <span className="text-coral">•</span> Technology <span className="text-coral">•</span>{' '}
          Innovation
        </span>
        <a href="#home" className="inline-flex items-center gap-2 transition-colors hover:text-foreground">
          Back to top <ArrowUp className="size-3.5" />
        </a>
      </div>
    </footer>
  )
}
