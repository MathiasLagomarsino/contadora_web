import { ArrowRight, Building2, Calculator, Check, FileBadge2, Landmark, ReceiptText, Users } from "lucide-react"
import { Link } from "react-router-dom"
import { PageHero } from "@/components/page-hero"
import { SectionHeading } from "@/components/section-heading"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

const services = [
  { icon: ReceiptText, title: "Impuestos y monotributo", text: "Altas, recategorizaciones, declaraciones juradas y planificación para profesionales, comercios y prestadores de servicios.", items: ["Monotributo", "IVA y Ganancias", "Ingresos Brutos"] },
  { icon: Users, title: "Sueldos y empleadores", text: "Administración laboral mensual con acompañamiento en cada alta, novedad y desvinculación.", items: ["Liquidación de sueldos", "Cargas sociales", "Altas y bajas"] },
  { icon: Building2, title: "Sociedades", text: "Soporte contable y societario para empezar ordenado y sostener el cumplimiento en el tiempo.", items: ["Constitución", "Balances", "Presentaciones"] },
  { icon: FileBadge2, title: "Certificaciones contables", text: "Documentación profesional para presentar ante bancos, inmobiliarias, registros y organismos.", items: ["Ingresos", "Origen de fondos", "Bienes"], featured: true },
  { icon: Calculator, title: "Gestión para PyMEs", text: "Información contable útil para conocer márgenes, ordenar el flujo de fondos y decidir con más contexto.", items: ["Tableros", "Flujo de fondos", "Reportes"] },
  { icon: Landmark, title: "Regularizaciones", text: "Revisión de deudas, planes de pago y puesta al día de situaciones fiscales pendientes.", items: ["Diagnóstico fiscal", "Moratorias", "Planes de pago"] },
]

export function ServicesPage() {
  return (
    <>
      <PageHero eyebrow="Servicios" title="Soluciones contables para cada etapa." description="Desde tu primera factura hasta el balance de tu sociedad: te ayudamos a cumplir, ordenar y decidir con tranquilidad.">
        <Button asChild size="lg"><Link to="/contacto">Consultar mi caso <ArrowRight /></Link></Button>
      </PageHero>
      <section className="section-space">
        <div className="container">
          <SectionHeading eyebrow="Áreas de trabajo" title="Todo lo importante, bajo una misma mirada." description="Podés contratarnos para una gestión puntual o para un acompañamiento mensual integral." align="center" />
          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => <Card key={service.title} className={`flex flex-col shadow-none ${service.featured ? "border-accent bg-accent text-white" : ""}`}><CardContent className="flex h-full flex-col p-7"><div className={`grid size-12 place-items-center rounded-2xl ${service.featured ? "bg-white/15" : "bg-secondary"}`}><service.icon className="size-5" /></div><h2 className="mt-7 text-2xl font-semibold tracking-tight">{service.title}</h2><p className={`mt-3 leading-7 ${service.featured ? "text-white/75" : "text-muted-foreground"}`}>{service.text}</p><div className={`my-6 h-px ${service.featured ? "bg-white/20" : "bg-border"}`} /><ul className="mb-7 space-y-3 text-sm">{service.items.map(item => <li key={item} className="flex items-center gap-2"><Check className="size-4" />{item}</li>)}</ul><Button asChild variant={service.featured ? "secondary" : "outline"} className="mt-auto"><Link to={service.featured ? "/certificaciones" : "/contacto"}>{service.featured ? "Ver certificaciones" : "Consultar"} <ArrowRight /></Link></Button></CardContent></Card>)}
          </div>
        </div>
      </section>
      <section className="section-space border-t bg-white">
        <div className="container grid items-center gap-12 lg:grid-cols-[.9fr_1.1fr]">
          <div className="rounded-[2rem] bg-primary p-8 text-white md:p-12"><p className="eyebrow">Planes mensuales</p><h2 className="mt-5 font-display text-4xl leading-tight md:text-5xl">Una contadora que ya conoce tu historia.</h2><p className="mt-5 leading-7 text-white/65">El acompañamiento mensual evita empezar de cero en cada consulta. Seguimos tu actividad, anticipamos vencimientos y te avisamos lo que importa.</p></div>
          <div className="space-y-5">{[ ["Independientes", "Para profesionales y prestadores que necesitan facturar, pagar impuestos y estar al día."], ["Emprendimientos", "Para equipos que empiezan a crecer y necesitan ordenar costos, cobros y obligaciones."], ["PyMEs", "Para empresas que buscan gestión contable, sueldos e información para decidir."] ].map(([title,text], i) => <div key={title} className="grid gap-4 border-b pb-5 sm:grid-cols-[48px_1fr]"><span className="font-display text-3xl text-accent">0{i+1}</span><div><h3 className="text-xl font-semibold">{title}</h3><p className="mt-2 text-sm leading-6 text-muted-foreground">{text}</p></div></div>)}</div>
        </div>
      </section>
    </>
  )
}
