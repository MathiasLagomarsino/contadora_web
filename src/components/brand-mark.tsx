import { cn } from "@/lib/utils"
import nexaLogo from "../../NEXA_CONTADORAS_EXACTO.svg"

export function BrandMark({ className }: { className?: string }) {
  return (
    <img src={nexaLogo} alt="NEXA Contadoras" className={cn("h-auto w-[10.5rem] object-contain", className)} />
  )
}
