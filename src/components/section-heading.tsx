import { Badge } from "@/components/ui/badge"
import { cn } from "@/lib/utils"

export function SectionHeading({ eyebrow, title, description, align = "left", className }: { eyebrow: string; title: string; description?: string; align?: "left" | "center"; className?: string }) {
  return (
    <div className={cn("max-w-2xl", align === "center" && "mx-auto text-center", className)}>
      <Badge>{eyebrow}</Badge>
      <h2 className="mt-5 font-display text-4xl leading-[1.03] tracking-[-.025em] md:text-5xl">{title}</h2>
      {description && <p className="mt-5 text-base leading-7 text-muted-foreground md:text-lg">{description}</p>}
    </div>
  )
}
