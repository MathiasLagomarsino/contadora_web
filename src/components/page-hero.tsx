import type { ReactNode } from "react"
import { Badge } from "@/components/ui/badge"

export function PageHero({ eyebrow, title, description, children }: { eyebrow: string; title: string; description: string; children?: ReactNode }) {
  return (
    <section className="relative overflow-hidden border-b bg-secondary/45">
      <div className="absolute -right-32 -top-28 size-[430px] rounded-full border-[90px] border-accent/10" />
      <div className="container relative py-20 md:py-28">
        <div className="max-w-3xl">
          <Badge>{eyebrow}</Badge>
          <h1 className="mt-6 text-balance font-display text-5xl leading-[.98] tracking-[-.03em] md:text-7xl">{title}</h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-muted-foreground md:text-xl">{description}</p>
          {children && <div className="mt-8 flex flex-wrap gap-3">{children}</div>}
        </div>
      </div>
    </section>
  )
}
