import { cn } from "@/lib/utils"

export function BrandMark({ className }: { className?: string }) {
  return (
    <div className={cn("relative grid size-10 place-items-center overflow-hidden rounded-[13px] bg-primary text-primary-foreground", className)} aria-hidden="true">
      <span className="absolute -right-2 -top-2 size-7 rounded-full bg-accent" />
      <svg viewBox="0 0 40 40" className="relative size-7" fill="none">
        <path d="M10 27V15.5C10 13.6 11.6 12 13.5 12S17 13.6 17 15.5V27M17 27V18.5C17 16.6 18.6 15 20.5 15S24 16.6 24 18.5V27M24 27V16.5C24 14.6 25.6 13 27.5 13S31 14.6 31 16.5V27" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" />
      </svg>
    </div>
  )
}
