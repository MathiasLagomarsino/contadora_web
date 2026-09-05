import * as React from "react"
import { cn } from "@/lib/utils"

export const Input = React.forwardRef<HTMLInputElement, React.ComponentProps<"input">>(
  ({ className, type, ...props }, ref) => <input type={type} className={cn("flex h-11 w-full rounded-xl border border-input bg-background px-3.5 py-2 text-sm outline-none transition placeholder:text-muted-foreground/70 focus:border-primary/50 focus:ring-4 focus:ring-primary/5", className)} ref={ref} {...props} />,
)
Input.displayName = "Input"
