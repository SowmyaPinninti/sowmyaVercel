import Image from 'next/image'
import { ArrowRight, ArrowUpRight } from 'lucide-react'
import { LINKEDIN } from '@/lib/content'

export function Hero() {
  return (
    <section id="home" className="relative flex min-h-dvh flex-col pt-16">
      <div className="mx-auto grid w-full max-w-7xl flex-1 items-center gap-12 px-6 py-16 md:px-10 lg:grid-cols-[1.15fr_1fr]">
        <div>
          <p className="flex flex-wrap items-center gap-3 text-xs uppercase tracking-[0.3em] text-muted-foreground">
            Product Management
            <span className="text-coral" aria-hidden="true">
              •
            </span>
            Tech
            <span className="text-coral" aria-hidden="true">
              •
            </span>
            Innovation
          </p>

          <h1 className="mt-8 font-serif text-7xl leading-[0.9] tracking-tight text-balance md:text-8xl lg:text-9xl">
            Sowmya <span className="italic text-coral">Pinninti</span>
          </h1>

          <p className="mt-8 text-3xl leading-tight tracking-tight text-balance md:text-4xl">
            I build ideas into <span className="font-serif italic text-coral">digital</span>{' '}
            <span className="font-serif italic">products.</span>
          </p>

          <p className="mt-6 max-w-xl leading-relaxed text-muted-foreground text-pretty">
            A product-focused professional with a technology background, passionate about solving
            customer problems, making data-informed decisions and creating meaningful digital
            experiences.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href="#projects"
              className="group inline-flex items-center gap-3 bg-coral px-7 py-4 text-xs font-semibold uppercase tracking-[0.2em] text-primary-foreground transition-opacity hover:opacity-90"
            >
              View my work
              <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href="#about"
              className="inline-flex items-center border border-foreground/25 px-7 py-4 text-xs font-semibold uppercase tracking-[0.2em] transition-colors hover:border-foreground"
            >
              More about me
            </a>
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-sm lg:max-w-md">
          <div aria-hidden="true" className="absolute -top-6 -left-6 size-14 rounded-full border border-pink" />
          <div aria-hidden="true" className="absolute top-1/3 -right-4 size-3 rounded-full bg-cyan" />
          <div aria-hidden="true" className="absolute bottom-16 -left-3 size-2 rounded-full bg-coral" />

          <div className="relative aspect-[4/5] overflow-hidden">
            <Image
              src="/images/profile.jpeg"
              alt="Portrait of Sowmya Pinninti"
              fill
              priority
              sizes="(min-width: 1024px) 28rem, 24rem"
              className="object-cover object-top grayscale-[15%]"
            />
            <div
              aria-hidden="true"
              className="absolute inset-0 bg-gradient-to-t from-background via-background/10 to-transparent"
            />
            <p className="absolute bottom-5 left-5 text-xs font-semibold tracking-[0.3em]">
              PM <span className="text-coral">×</span> TECH
            </p>
          </div>
        </div>
      </div>

      <div className="mx-auto flex w-full max-w-7xl items-center justify-between px-6 pb-8 text-xs uppercase tracking-[0.25em] text-muted-foreground md:px-10">
        <span className="flex items-center gap-3">
          <span aria-hidden="true" className="h-px w-10 bg-muted-foreground" />
          Scroll to explore
        </span>
        <a
          href={LINKEDIN}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1 transition-colors hover:text-coral"
        >
          LinkedIn <ArrowUpRight className="size-3.5" />
        </a>
      </div>
    </section>
  )
}
