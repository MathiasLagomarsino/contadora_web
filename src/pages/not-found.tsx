import { ArrowLeft } from "lucide-react"
import { Link } from "react-router-dom"
import { Button } from "@/components/ui/button"

export function NotFoundPage() {
  return <section className="container grid min-h-[65vh] place-items-center py-24 text-center"><div><p className="font-display text-8xl text-accent">404</p><h1 className="mt-4 text-3xl font-semibold">Esta página no existe.</h1><p className="mt-3 text-muted-foreground">Volvamos a un lugar conocido.</p><Button asChild className="mt-7"><Link to="/"><ArrowLeft /> Ir al inicio</Link></Button></div></section>
}
