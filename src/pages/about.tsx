import { ArrowRight, HeartHandshake, Lightbulb, Scale } from "lucide-react"
import { Link } from "react-router-dom"
import { PageHero } from "@/components/page-hero"
import { SectionHeading } from "@/components/section-heading"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

const team = [
  { initials: "YB", name: "Yanina Basili", role: "Contadora pública", color: "bg-primary" },
  { initials: "VL", name: "Valeria Lagomarsino", role: "Contadora pública", color: "bg-accent" },
  { initials: "MS", name: "Mariana Sanchez", role: "Contadora pública", color: "bg-primary/80" },
]

export function AboutPage() {
  return (
    <>
      <PageHero eyebrow="Nosotras" title="Tres contadoras. Una manera más cercana de trabajar." description="Hacemos simple lo complejo, con respuestas claras, seguimiento cercano y una mirada integral de tu negocio.">
        <Button asChild size="lg"><Link to="/contacto">Conocernos en una llamada <ArrowRight /></Link></Button>
      </PageHero>
      <section className="section-space border-y bg-white">
        <div className="container">
          <SectionHeading eyebrow="El equipo" title="Especialistas cuando hace falta. Equipo siempre." description="Estos perfiles son demostrativos y pueden reemplazarse por los nombres, fotos y matrículas reales." align="center" />
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {team.map(person => <Card key={person.name} className="overflow-hidden shadow-none"><div className={`relative grid aspect-[4/3] place-items-center ${person.color} text-white`}><div className="absolute size-40 rounded-full border border-white/20" /><div className="absolute size-56 rounded-full border border-white/10" /><span className="relative font-display text-6xl">{person.initials}</span></div><CardContent className="p-6"><h2 className="text-xl font-semibold">{person.name}</h2><p className="mt-1 text-sm text-muted-foreground">{person.role}</p></CardContent></Card>)}
          </div>
        </div>
      </section>
      <section className="section-space">
        <div className="container">
          <SectionHeading eyebrow="Nuestros valores" title="Cómo se siente trabajar con nosotras." align="center" />
          <div className="mt-12 grid gap-8 md:grid-cols-3">{[ { icon: Lightbulb, title: "Claridad", text: "Explicamos lo complejo en palabras simples y dejamos cada próximo paso por escrito." }, { icon: HeartHandshake, title: "Cercanía", text: "Conocemos tu actividad, tu momento y tus prioridades. No sos un número de cliente." }, { icon: Scale, title: "Responsabilidad", text: "Cuidamos la precisión, los plazos y la confidencialidad de toda tu información." } ].map(value => <div key={value.title} className="text-center"><div className="mx-auto grid size-14 place-items-center rounded-2xl bg-secondary"><value.icon className="size-5" /></div><h3 className="mt-6 text-xl font-semibold">{value.title}</h3><p className="mx-auto mt-3 max-w-xs text-sm leading-6 text-muted-foreground">{value.text}</p></div>)}</div>
        </div>
      </section>
    </>
  )
}
