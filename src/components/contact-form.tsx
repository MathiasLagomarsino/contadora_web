import { useState, type FormEvent } from "react"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { site } from "@/lib/site"
import { cn } from "@/lib/utils"

export function ContactForm({ compact = false, certification = false }: { compact?: boolean; certification?: boolean }) {
  const [submitted, setSubmitted] = useState(false)
  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const data = new FormData(event.currentTarget)
    const message = `Hola, soy ${data.get("name")}. Quisiera consultar por ${data.get("service") || "servicios contables"}. ${data.get("message") || ""}`
    window.open(`https://wa.me/${site.phone}?text=${encodeURIComponent(message)}`, "_blank", "noopener,noreferrer")
    setSubmitted(true)
  }
  const fieldClass = "space-y-2"
  return (
    <form onSubmit={handleSubmit} className={cn("grid gap-5", !compact && "rounded-[1.6rem] border bg-card p-6 shadow-soft md:p-8")}>
      <div className="grid gap-5 sm:grid-cols-2">
        <div className={fieldClass}><Label htmlFor="name">Nombre y apellido</Label><Input id="name" name="name" placeholder="Tu nombre" required /></div>
        <div className={fieldClass}><Label htmlFor="phone">WhatsApp</Label><Input id="phone" name="phone" type="tel" placeholder="+54 9 11..." required /></div>
      </div>
      <div className={fieldClass}><Label htmlFor="email">Email</Label><Input id="email" name="email" type="email" placeholder="nombre@ejemplo.com" required /></div>
      <div className={fieldClass}>
        <Label htmlFor="service">{certification ? "Tipo de certificación" : "¿En qué podemos ayudarte?"}</Label>
        <select id="service" name="service" defaultValue="" required className="flex h-11 w-full rounded-xl border border-input bg-background px-3.5 text-sm outline-none focus:border-primary/50 focus:ring-4 focus:ring-primary/5">
          <option value="" disabled>Elegí una opción</option>
          {certification ? <><option>Certificación de ingresos</option><option>Origen lícito de fondos</option><option>Manifestación de bienes</option><option>Otra certificación</option></> : <><option>Impuestos y monotributo</option><option>Sueldos y empleadores</option><option>Sociedades</option><option>Certificaciones contables</option><option>Otra consulta</option></>}
        </select>
      </div>
      {certification && <div className="grid gap-5 sm:grid-cols-2"><div className={fieldClass}><Label htmlFor="amount">Monto a certificar</Label><Input id="amount" name="amount" placeholder="$ / USD" /></div><div className={fieldClass}><Label htmlFor="entity">Entidad de destino</Label><Input id="entity" name="entity" placeholder="Banco, inmobiliaria..." /></div></div>}
      <div className={fieldClass}><Label htmlFor="message">Mensaje</Label><Textarea id="message" name="message" placeholder="Contanos brevemente qué necesitás..." /></div>
      <Button type="submit" size="lg" className="w-full sm:w-fit">Enviar consulta <ArrowRight /></Button>
      {submitted && <p className="text-sm font-medium text-accent">Abrimos WhatsApp con tu consulta lista para enviar.</p>}
      <p className="text-xs leading-5 text-muted-foreground">Al enviar, continuás la conversación por WhatsApp. No almacenamos datos en este sitio.</p>
    </form>
  )
}
