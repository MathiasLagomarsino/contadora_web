import { AlertCircle, ArrowRight, BadgeCheck, Banknote, BriefcaseBusiness, Building, CalendarClock, Check, FileCheck2, Home, MessageCircle, ShieldCheck } from "lucide-react"
import { ContactForm } from "@/components/contact-form"
import { SectionHeading } from "@/components/section-heading"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { whatsappUrl } from "@/lib/site"

const certificationTypes = [
  { icon: BriefcaseBusiness, title: "Certificación de ingresos", text: "Para alquileres, créditos, migraciones u otros trámites que requieren acreditar tus ingresos como independiente." },
  { icon: Banknote, title: "Origen lícito de fondos", text: "Para justificar el dinero destinado a la compra de un inmueble, vehículo u otra operación de monto relevante." },
  { icon: Home, title: "Manifestación de bienes", text: "Para certificar la composición de tu patrimonio ante entidades financieras, licitaciones u organismos." },
]

const prices = [
  { title: "Ingresos para alquiler", price: "$150.000", icon: Building },
  { title: "Ingresos para migración", price: "$200.000", icon: CalendarClock },
  { title: "Manifestación de bienes", price: "$250.000", icon: Home },
  { title: "Origen de fondos", price: "$300.000", icon: Banknote },
]

const faqs = [
  ["¿Qué es una certificación contable?", "Es un informe emitido por una contadora pública que valida información económica a partir de documentación respaldatoria. Luego puede legalizarse ante el Consejo Profesional correspondiente."],
  ["¿Cuánto demora?", "El plazo depende del tipo de certificación y de que la documentación esté completa. En la consulta inicial confirmamos el tiempo estimado antes de comenzar."],
  ["¿Sirve para bancos e inmobiliarias?", "Sí, estas certificaciones suelen solicitarse para trámites bancarios, contratos de alquiler, operaciones registrables y otros procesos. Conviene validar previamente los requisitos de la entidad receptora."],
  ["¿Qué documentación necesito?", "Varía según la certificación: facturación, movimientos bancarios, comprobantes de compra, declaraciones juradas o documentación de bienes. Te enviamos una lista exacta para tu caso."],
  ["¿El trámite puede hacerse online?", "Sí. Recibimos la documentación de forma digital, coordinamos las firmas necesarias y entregamos el archivo final por medios electrónicos."],
]

export function CertificationsPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-primary text-white">
        <div className="absolute inset-0 paper-grid opacity-10" />
        <div className="container relative grid items-center gap-12 py-20 md:py-28 lg:grid-cols-[1.08fr_.92fr]">
          <div>
            <Badge className="border-white/15 bg-white/10 text-white">Certificaciones contables</Badge>
            <h1 className="mt-7 text-balance font-display text-5xl leading-[.95] tracking-[-.035em] md:text-7xl">La certificación que necesitás, sin perder tiempo.</h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-white/65">Revisamos tu caso, te pedimos la documentación justa y preparamos una certificación profesional lista para presentar.</p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row"><Button asChild size="lg" variant="accent"><a href="#solicitar">Solicitar certificación <ArrowRight /></a></Button><Button asChild size="lg" variant="secondary"><a href={whatsappUrl("Hola, quisiera consultar por una certificación contable.")} target="_blank" rel="noreferrer"><MessageCircle /> Consultar por WhatsApp</a></Button></div>
            <div className="mt-9 flex flex-wrap gap-5 text-sm text-white/60"><span className="flex items-center gap-2"><ShieldCheck className="size-4 text-accent" />Respaldo profesional</span><span className="flex items-center gap-2"><BadgeCheck className="size-4 text-accent" />Entrega digital</span></div>
          </div>
          <div className="relative mx-auto w-full max-w-md">
            <div className="absolute -inset-5 rotate-3 rounded-[2rem] border border-white/15" />
            <Card className="relative border-0 shadow-2xl"><CardContent className="p-7 md:p-9"><div className="flex items-center justify-between"><div className="grid size-12 place-items-center rounded-2xl bg-accent/15"><FileCheck2 className="text-accent" /></div><span className="rounded-full bg-[#e5f5ee] px-3 py-1 text-xs font-bold text-[#267052]">Proceso simple</span></div><h2 className="mt-7 text-2xl font-semibold">¿Cómo empezamos?</h2><div className="mt-6 space-y-5">{["Nos contás para qué la necesitás", "Validamos requisitos y documentación", "Te confirmamos honorarios y plazo"].map((item, i) => <div key={item} className="flex gap-4"><span className="grid size-7 shrink-0 place-items-center rounded-full bg-primary font-display text-sm text-white">{i+1}</span><p className="text-sm leading-6 text-muted-foreground">{item}</p></div>)}</div><div className="mt-7 rounded-xl bg-muted p-4 text-sm font-medium">Sin compromiso: evaluamos tu caso antes de comenzar.</div></CardContent></Card>
          </div>
        </div>
      </section>

      <section className="section-space">
        <div className="container">
          <SectionHeading eyebrow="Qué certificamos" title="Tres soluciones, un proceso claro." description="Identificamos el informe que corresponde según el destino y la documentación disponible." align="center" />
          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {certificationTypes.map(item => <Card key={item.title} className="shadow-none"><CardContent className="p-7"><div className="grid size-12 place-items-center rounded-2xl bg-secondary"><item.icon className="size-5" /></div><h3 className="mt-7 text-xl font-semibold">{item.title}</h3><p className="mt-3 text-sm leading-7 text-muted-foreground">{item.text}</p></CardContent></Card>)}
          </div>
          <div className="mx-auto mt-8 flex max-w-4xl gap-4 rounded-2xl border bg-white p-5 text-sm leading-6 text-muted-foreground"><AlertCircle className="mt-0.5 size-5 shrink-0 text-accent" /><p><strong className="text-foreground">Alcance del servicio:</strong> certificamos la información respaldada por la documentación presentada. La aceptación final depende de la entidad u organismo receptor.</p></div>
        </div>
      </section>

      <section className="section-space border-y bg-white">
        <div className="container">
          <div className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between"><SectionHeading eyebrow="Honorarios orientativos" title="Sabé el punto de partida." description="Valores de referencia. El presupuesto final se confirma después de revisar el caso y la documentación." /><p className="rounded-full bg-muted px-4 py-2 text-xs font-bold text-muted-foreground">Válidos hasta 30/09/2026</p></div>
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {prices.map(item => <Card key={item.title} className="shadow-none"><CardContent className="p-6"><item.icon className="size-5 text-accent" /><h3 className="mt-6 min-h-12 font-semibold leading-6">{item.title}</h3><p className="mt-6 text-xs uppercase tracking-wide text-muted-foreground">Desde</p><p className="mt-1 font-display text-3xl">{item.price}</p><div className="my-5 h-px bg-border" /><p className="text-xs leading-5 text-muted-foreground">Legalización del Consejo Profesional no incluida. Se calcula según el monto certificado.</p></CardContent></Card>)}
          </div>
        </div>
      </section>

      <section className="section-space">
        <div className="container grid gap-12 lg:grid-cols-[.75fr_1.25fr]">
          <SectionHeading eyebrow="Preguntas frecuentes" title="Antes de empezar, despejemos las dudas." description="Si tu situación no aparece acá, escribinos. La primera orientación es sin compromiso." />
          <Accordion type="single" collapsible className="border-t">
            {faqs.map(([q,a], i) => <AccordionItem value={`item-${i}`} key={q}><AccordionTrigger>{q}</AccordionTrigger><AccordionContent>{a}</AccordionContent></AccordionItem>)}
          </Accordion>
        </div>
      </section>

      <section id="solicitar" className="section-space bg-secondary/55 scroll-mt-20">
        <div className="container grid items-start gap-12 lg:grid-cols-[.8fr_1.2fr]">
          <div className="lg:sticky lg:top-28"><SectionHeading eyebrow="Solicitar certificación" title="Contanos qué necesitás presentar." description="Con estos datos podemos orientarte sobre el tipo de certificación, documentación, honorarios y plazo estimado." /><div className="mt-8 space-y-4">{["Evaluación inicial sin compromiso", "Lista de documentación personalizada", "Seguimiento directo con una contadora"].map(item => <p key={item} className="flex items-center gap-3 text-sm font-medium"><span className="grid size-6 place-items-center rounded-full bg-accent text-white"><Check className="size-3.5" /></span>{item}</p>)}</div></div>
          <ContactForm certification />
        </div>
      </section>
    </>
  )
}
