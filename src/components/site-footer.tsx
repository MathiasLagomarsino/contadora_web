import { Instagram, Linkedin, Mail, MapPin, MessageCircle } from "lucide-react"
import { Link } from "react-router-dom"
import { BrandMark } from "@/components/brand-mark"
import { Button } from "@/components/ui/button"
import { site, whatsappUrl } from "@/lib/site"

export function SiteFooter() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container py-16">
        <div className="grid gap-12 border-b border-white/15 pb-14 md:grid-cols-[1.2fr_.7fr_1fr]">
          <div className="max-w-sm">
            <div className="flex items-center gap-3"><BrandMark className="bg-white text-primary" /><span className="text-xl font-bold">contadoras.ya</span></div>
            <p className="mt-5 text-sm leading-7 text-white/65">Un estudio contable hecho por tres profesionales que creen en explicar simple, acompañar de cerca y resolver a tiempo.</p>
          </div>
          <div>
            <p className="mb-4 text-sm font-bold uppercase tracking-[.16em] text-white/45">Mapa del sitio</p>
            <div className="grid gap-3 text-sm text-white/75">
              <Link to="/servicios" className="hover:text-white">Servicios</Link><Link to="/certificaciones" className="hover:text-white">Certificaciones</Link><Link to="/nosotros" className="hover:text-white">Nosotras</Link><Link to="/contacto" className="hover:text-white">Contacto</Link>
            </div>
          </div>
          <div className="space-y-4 text-sm text-white/75">
            <p className="mb-4 text-sm font-bold uppercase tracking-[.16em] text-white/45">Contacto</p>
            <a href={`mailto:${site.email}`} className="flex items-center gap-3 hover:text-white"><Mail className="size-4" />{site.email}</a>
            <a href={whatsappUrl()} target="_blank" rel="noreferrer" className="flex items-center gap-3 hover:text-white"><MessageCircle className="size-4" />{site.phoneDisplay}</a>
            <p className="flex items-start gap-3"><MapPin className="mt-0.5 size-4 shrink-0" />{site.address}</p>
            <div className="flex gap-2 pt-2"><Button asChild size="icon" variant="secondary"><a href={site.instagramUrl} target="_blank" rel="noreferrer" aria-label="Instagram"><Instagram /></a></Button><Button asChild size="icon" variant="secondary"><a href={site.linkedinUrl} target="_blank" rel="noreferrer" aria-label="LinkedIn"><Linkedin /></a></Button></div>
          </div>
        </div>
        <div className="flex flex-col gap-3 pt-7 text-xs text-white/45 sm:flex-row sm:items-center sm:justify-between">
          <span>© {new Date().getFullYear()} contadoras.ya. Todos los derechos reservados.</span>
          <span>Sitio de demostración · Datos de contacto pendientes de confirmar</span>
        </div>
      </div>
    </footer>
  )
}
