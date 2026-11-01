'use client'

import { useEffect, useState } from 'react'
import { Menu, X } from 'lucide-react'
import { EMAIL, NAV_LINKS } from '@/lib/content'

export function SiteHeader() {
  const [open, setOpen] = useState(false)

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    if (!open) return
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setOpen(false)
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [open])

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-border bg-background/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6 md:px-10">
        <a href="#home" className="text-sm font-semibold tracking-[0.25em]">
          SOWMYA<span className="text-coral">.</span>
        </a>

        <nav aria-label="Primary" className="hidden lg:block">
          <ul className="flex items-center gap-8">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="text-xs uppercase tracking-[0.2em] text-muted-foreground transition-colors hover:text-foreground"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-5">
          <a
            href={`mailto:${EMAIL}`}
            className="hidden text-xs text-muted-foreground transition-colors hover:text-coral md:block"
          >
            {EMAIL}
          </a>
          <button
            type="button"
            onClick={() => setOpen(true)}
            className="lg:hidden"
            aria-label="Open menu"
            aria-expanded={open}
            aria-controls="mobile-menu"
          >
            <Menu className="size-6" />
          </button>
        </div>
      </div>

      {open && (
        <div
          id="mobile-menu"
          role="dialog"
          aria-modal="true"
          aria-label="Menu"
          className="fixed inset-0 z-50 flex h-dvh flex-col bg-background px-6 py-5"
        >
          <div className="flex items-center justify-between">
            <span className="text-sm font-semibold tracking-[0.25em]">
              SOWMYA<span className="text-coral">.</span>
            </span>
            <button type="button" onClick={() => setOpen(false)} aria-label="Close menu">
              <X className="size-6" />
            </button>
          </div>
          <nav aria-label="Mobile" className="mt-16">
            <ul className="flex flex-col gap-6">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="font-serif text-5xl transition-colors hover:text-coral"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
          <a href={`mailto:${EMAIL}`} className="mt-auto text-sm text-muted-foreground">
            {EMAIL}
          </a>
        </div>
      )}
    </header>
  )
}
