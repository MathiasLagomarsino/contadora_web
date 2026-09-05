import { Clock3, Mail, MapPin, MessageCircle } from "lucide-react"
import { ContactForm } from "@/components/contact-form"
import { PageHero } from "@/components/page-hero"
import { Card, CardContent } from "@/components/ui/card"
import { site, whatsappUrl } from "@/lib/site"

export function ContactPage() {
  return (
    <>
      <PageHero eyebrow="Contacto" title="Empecemos por tu consulta." description="Contanos qué necesitás y una de nosotras te responde con los próximos pasos, sin tecnicismos ni vueltas." />
      <section className="section-space">
        <div className="container grid items-start gap-8 lg:grid-cols-[.72fr_1.28fr]">
          <div className="space-y-4">
            <Card className="shadow-none"><CardContent className="flex gap-4 p-5"><div className="grid size-11 shrink-0 place-items-center rounded-xl bg-secondary"><MessageCircle className="size-5" /></div><div><p className="text-sm font-semibold">WhatsApp</p><a className="mt-1 block text-sm text-muted-foreground hover:text-accent" href={whatsappUrl()} target="_blank" rel="noreferrer">{site.phoneDisplay}</a></div></CardContent></Card>
            <Card className="shadow-none"><CardContent className="flex gap-4 p-5"><div className="grid size-11 shrink-0 place-items-center rounded-xl bg-secondary"><Mail className="size-5" /></div><div><p className="text-sm font-semibold">Email</p><a className="mt-1 block text-sm text-muted-foreground hover:text-accent" href={`mailto:${site.email}`}>{site.email}</a></div></CardContent></Card>
            <Card className="shadow-none"><CardContent className="flex gap-4 p-5"><div className="grid size-11 shrink-0 place-items-center rounded-xl bg-secondary"><MapPin className="size-5" /></div><div><p className="text-sm font-semibold">Estudio</p><p className="mt-1 text-sm text-muted-foreground">{site.address}</p></div></CardContent></Card>
            <Card className="shadow-none"><CardContent className="flex gap-4 p-5"><div className="grid size-11 shrink-0 place-items-center rounded-xl bg-secondary"><Clock3 className="size-5" /></div><div><p className="text-sm font-semibold">Horario</p><p className="mt-1 text-sm text-muted-foreground">Lun a vie · 9:00 a 18:00</p></div></CardContent></Card>
            <div className="rounded-2xl bg-secondary/70 p-5 text-xs leading-5 text-muted-foreground">Los datos de email, domicilio, redes y horario son demostrativos. El WhatsApp fue provisto por el cliente.</div>
          </div>
          <ContactForm />
        </div>
      </section>
      <section className="border-t bg-white py-14">
        <div className="container grid gap-5 text-center sm:grid-cols-3">{[["01", "Recibimos tu mensaje"], ["02", "Evaluamos tu caso"], ["03", "Te proponemos próximos pasos"]].map(([n,t]) => <div key={n} className="rounded-2xl border p-6"><span className="font-display text-3xl text-accent">{n}</span><p className="mt-2 text-sm font-semibold">{t}</p></div>)}</div>
      </section>
    </>
  )
}
