import { ArrowRight, BadgeCheck, BarChart3, BriefcaseBusiness, Building2, Check, FileCheck2, MessageCircle, ReceiptText, Sparkles } from "lucide-react"
import { Link } from "react-router-dom"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { SectionHeading } from "@/components/section-heading"
import { whatsappUrl } from "@/lib/site"

const services = [
  { icon: ReceiptText, title: "Impuestos sin vueltas", text: "Monotributo, IVA, Ganancias e Ingresos Brutos con seguimiento claro y vencimientos bajo control.", tag: "Personas y profesionales" },
  { icon: BriefcaseBusiness, title: "Sueldos y empleadores", text: "Altas, liquidaciones, cargas sociales y acompañamiento en cada incorporación de tu equipo.", tag: "Empleadores" },
  { icon: Building2, title: "Sociedades", text: "Constitución, libros, presentaciones y soporte contable para que tu empresa crezca ordenada.", tag: "PyMEs y sociedades" },
  { icon: FileCheck2, title: "Certificaciones", text: "Ingresos, origen de fondos y manifestación de bienes con respaldo profesional y entrega digital.", tag: "Trámites puntuales" },
]

const steps = [
  { number: "01", title: "Nos contás", text: "Escuchamos tu situación y pedimos sólo la información necesaria." },
  { number: "02", title: "Ordenamos", text: "Revisamos la documentación y te damos un plan claro, con tiempos y honorarios." },
  { number: "03", title: "Resolvemos", text: "Gestionamos el trabajo y te mantenemos al tanto, sin que tengas que perseguirnos." },
]

export function HomePage() {
  return (
    <>
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 paper-grid opacity-60" />
        <div className="container relative grid min-h-[700px] items-center gap-12 py-16 lg:grid-cols-[1.08fr_.92fr] lg:py-24">
          <div className="max-w-2xl">
            <div className="mb-7 inline-flex items-center gap-2 rounded-full border bg-white/70 px-3 py-1.5 text-xs font-bold uppercase tracking-[.14em] text-primary shadow-sm"><span className="size-2 rounded-full bg-accent" />Estudio contable · Buenos Aires</div>
            <h1 className="text-balance font-display text-6xl leading-[.92] tracking-[-.045em] md:text-7xl lg:text-[5.4rem]">Tus números, en buenas manos.</h1>
            <p className="mt-7 max-w-xl text-lg leading-8 text-muted-foreground md:text-xl">Somos tres contadoras que trabajan cerca tuyo. Traducimos lo complejo, anticipamos lo importante y hacemos que estar al día se sienta simple.</p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Button asChild size="lg"><Link to="/contacto">Quiero asesoramiento <ArrowRight /></Link></Button>
              <Button asChild size="lg" variant="outline"><Link to="/servicios">Ver servicios</Link></Button>
            </div>
            <div className="mt-10 flex flex-wrap gap-x-6 gap-y-3 text-sm font-medium text-muted-foreground">
              <span className="flex items-center gap-2"><Check className="size-4 text-accent" />Atención personalizada</span>
              <span className="flex items-center gap-2"><Check className="size-4 text-accent" />100% digital</span>
              <span className="flex items-center gap-2"><Check className="size-4 text-accent" />Respuesta ágil</span>
            </div>
          </div>
          <div className="relative mx-auto w-full max-w-[520px]">
            <div className="absolute -left-10 -top-10 size-44 rounded-full bg-accent/15 blur-2xl" />
            <div className="relative aspect-[4/5] overflow-hidden rounded-[2.2rem] bg-primary p-7 text-primary-foreground shadow-2xl sm:p-10">
              <div className="absolute -right-32 -top-32 size-[390px] rounded-full border-[80px] border-white/5" />
              <div className="absolute -bottom-28 -left-24 size-[320px] rounded-full border-[60px] border-accent/25" />
              <div className="relative flex items-center justify-between"><span className="text-xs font-bold uppercase tracking-[.18em] text-white/55">Tu estudio, hoy</span><Sparkles className="size-5 text-accent" /></div>
              <div className="relative mt-12 rounded-[1.6rem] bg-white p-6 text-primary shadow-soft sm:p-7">
                <div className="flex items-center justify-between"><span className="text-sm font-semibold">Estado general</span><span className="rounded-full bg-[#e5f5ee] px-3 py-1 text-xs font-bold text-[#267052]">Todo al día</span></div>
                <div className="mt-7 flex items-end gap-2" aria-hidden="true">{[35,54,46,70,62,86,77,94].map((height, i) => <span key={i} className="flex-1 rounded-t-md bg-primary/10" style={{ height }}><span className="block h-1/2 rounded-t-md bg-accent/80" /></span>)}</div>
                <div className="mt-5 flex items-center justify-between border-t pt-4 text-xs text-muted-foreground"><span>Próximo vencimiento</span><strong className="text-primary">12 SEP</strong></div>
              </div>
              <div className="relative mt-5 grid grid-cols-2 gap-4">
                <div className="rounded-2xl border border-white/15 bg-white/10 p-5 backdrop-blur"><BarChart3 className="size-5 text-accent" /><strong className="mt-5 block text-2xl">+ claridad</strong><span className="text-xs text-white/55">para decidir</span></div>
                <div className="rounded-2xl border border-white/15 bg-white/10 p-5 backdrop-blur"><BadgeCheck className="size-5 text-accent" /><strong className="mt-5 block text-2xl">0 sorpresas</strong><span className="text-xs text-white/55">en tus cuentas</span></div>
              </div>
            </div>
            <div className="absolute -bottom-5 -left-3 flex animate-float items-center gap-3 rounded-2xl border bg-white px-4 py-3 shadow-xl sm:-left-8"><div className="grid size-10 place-items-center rounded-full bg-accent/15"><MessageCircle className="size-5 text-accent" /></div><div><strong className="block text-sm">Respuesta humana</strong><span className="text-xs text-muted-foreground">Sin bots ni tickets</span></div></div>
          </div>
        </div>
      </section>

      <section className="border-y bg-white">
        <div className="container grid divide-y md:grid-cols-3 md:divide-x md:divide-y-0">
          {[ ["3", "contadoras dedicadas"], ["100%", "gestión digital"], ["24 h", "respuesta inicial"] ].map(([value, label]) => <div key={label} className="flex items-baseline justify-center gap-3 py-7"><strong className="font-display text-3xl text-accent">{value}</strong><span className="text-sm text-muted-foreground">{label}</span></div>)}
        </div>
      </section>

      <section className="section-space">
        <div className="container">
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <SectionHeading eyebrow="Qué hacemos" title="Contabilidad que acompaña tu próxima decisión." description="Servicios pensados para resolver lo de hoy y darte orden para lo que viene." />
            <Button asChild variant="outline"><Link to="/servicios">Todos los servicios <ArrowRight /></Link></Button>
          </div>
          <div className="mt-12 grid gap-5 md:grid-cols-2">
            {services.map((service) => <Card key={service.title} className="group shadow-none transition hover:-translate-y-1 hover:shadow-soft"><CardContent className="p-7 md:p-8"><div className="flex items-start justify-between gap-5"><div className="grid size-12 place-items-center rounded-2xl bg-secondary"><service.icon className="size-5" /></div><span className="rounded-full bg-muted px-3 py-1 text-[11px] font-bold uppercase tracking-wide text-muted-foreground">{service.tag}</span></div><h3 className="mt-8 text-2xl font-semibold tracking-tight">{service.title}</h3><p className="mt-3 max-w-lg leading-7 text-muted-foreground">{service.text}</p><Link to={service.title === "Certificaciones" ? "/certificaciones" : "/servicios"} className="mt-7 inline-flex items-center gap-2 text-sm font-bold text-accent">Conocer más <ArrowRight className="size-4 transition group-hover:translate-x-1" /></Link></CardContent></Card>)}
          </div>
        </div>
      </section>

      <section className="section-space bg-primary text-primary-foreground">
        <div className="container grid gap-12 lg:grid-cols-[.8fr_1.2fr]">
          <SectionHeading eyebrow="Cómo trabajamos" title="Simple de entender. Fácil de seguir." description="Un proceso transparente, con una responsable clara y comunicación directa durante todo el camino." className="[&_p]:text-white/60 [&_div]:border-white/15 [&_div]:bg-white/5 [&_div]:text-white" />
          <div className="divide-y divide-white/15 border-y border-white/15">
            {steps.map((step) => <div key={step.number} className="grid gap-3 py-7 sm:grid-cols-[70px_180px_1fr] sm:items-baseline"><span className="font-display text-3xl text-accent">{step.number}</span><h3 className="text-xl font-semibold">{step.title}</h3><p className="text-sm leading-6 text-white/60">{step.text}</p></div>)}
          </div>
        </div>
      </section>

      <section className="section-space">
        <div className="container grid items-center gap-12 lg:grid-cols-2">
          <div className="relative min-h-[460px] overflow-hidden rounded-[2rem] bg-secondary p-8 md:p-10">
            <div className="absolute -bottom-24 -right-24 size-72 rounded-full bg-accent/25" />
            <p className="eyebrow">Tres miradas, un equipo</p>
            <div className="relative mt-16 flex items-end justify-center -space-x-5">
              {["MC", "LV", "SO"].map((initials, i) => <div key={initials} className={`grid aspect-[3/4] w-[31%] place-items-center rounded-t-full border-[6px] border-secondary text-3xl font-display shadow-xl ${i === 1 ? "mb-12 bg-accent text-white" : "bg-primary text-white"}`}><span>{initials}</span></div>)}
            </div>
            <div className="relative mt-8 rounded-2xl bg-white/80 p-5 text-center text-sm font-medium shadow-sm backdrop-blur">Distintas especialidades. La misma forma de acompañarte.</div>
          </div>
          <div>
            <SectionHeading eyebrow="Quiénes somos" title="Nos importan tanto los números como las personas detrás." description="Somos un equipo de contadoras argentinas con experiencia en impuestos, gestión y sociedades. Trabajamos de manera colaborativa para que siempre tengas una mirada completa." />
            <div className="mt-7 space-y-3">{["Lenguaje claro, siempre", "Honorarios transparentes", "Seguimiento proactivo"].map(item => <p key={item} className="flex items-center gap-3 font-medium"><span className="grid size-6 place-items-center rounded-full bg-accent/15"><Check className="size-3.5 text-accent" /></span>{item}</p>)}</div>
            <Button asChild variant="outline" className="mt-8"><Link to="/nosotros">Conocé al equipo <ArrowRight /></Link></Button>
          </div>
        </div>
      </section>

      <section className="pb-20 md:pb-28">
        <div className="container">
          <div className="relative overflow-hidden rounded-[2rem] bg-accent px-7 py-14 text-white md:px-16 md:py-16">
            <div className="absolute -right-24 -top-24 size-80 rounded-full border-[65px] border-white/10" />
            <div className="relative flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-center">
              <div><p className="text-xs font-bold uppercase tracking-[.18em] text-white/70">Empecemos</p><h2 className="mt-4 max-w-2xl font-display text-4xl leading-tight md:text-5xl">¿Hay algo de tus números que te quita tranquilidad?</h2></div>
              <Button asChild size="lg" variant="secondary" className="shrink-0"><a href={whatsappUrl()} target="_blank" rel="noreferrer">Contanos qué necesitás <ArrowRight /></a></Button>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
