import * as DialogPrimitive from "@radix-ui/react-dialog"
import { X } from "lucide-react"
import type { ReactNode } from "react"
import { cn } from "@/lib/utils"

export const Sheet = DialogPrimitive.Root
export const SheetTrigger = DialogPrimitive.Trigger
export const SheetClose = DialogPrimitive.Close

export function SheetContent({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <DialogPrimitive.Portal>
      <DialogPrimitive.Overlay className="fixed inset-0 z-50 bg-primary/30 backdrop-blur-sm data-[state=open]:animate-in" />
      <DialogPrimitive.Content className={cn("fixed inset-y-0 right-0 z-50 w-[86%] max-w-sm border-l bg-background p-6 shadow-2xl outline-none", className)}>
        <DialogPrimitive.Title className="sr-only">Menú</DialogPrimitive.Title>
        <DialogPrimitive.Close className="absolute right-5 top-5 grid size-10 place-items-center rounded-full border bg-background hover:bg-muted" aria-label="Cerrar menú"><X className="size-4" /></DialogPrimitive.Close>
        {children}
      </DialogPrimitive.Content>
    </DialogPrimitive.Portal>
  )
}
