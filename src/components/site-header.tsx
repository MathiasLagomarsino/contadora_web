import { Menu } from "lucide-react"
import { Link, NavLink } from "react-router-dom"
import { BrandMark } from "@/components/brand-mark"
import { Button } from "@/components/ui/button"
import { Sheet, SheetClose, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { whatsappUrl } from "@/lib/site"
import { cn } from "@/lib/utils"

const links = [
  { to: "/", label: "Inicio" },
  { to: "/servicios", label: "Servicios" },
  { to: "/certificaciones", label: "Certificaciones" },
  { to: "/nosotros", label: "Nosotras" },
  { to: "/contacto", label: "Contacto" },
]

function Logo() {
  return (
    <Link to="/" className="flex items-center gap-3" aria-label="contadoras.ya — Inicio">
      <BrandMark />
      <span className="text-lg font-bold tracking-[-.03em]">contadoras.ya</span>
    </Link>
  )
}

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-border/70 bg-background/90 backdrop-blur-xl">
      <div className="container flex h-[76px] items-center justify-between">
        <Logo />
        <nav className="hidden items-center gap-1 lg:flex" aria-label="Navegación principal">
          {links.map((link) => (
            <NavLink key={link.to} to={link.to} className={({ isActive }) => cn("rounded-full px-4 py-2 text-sm font-medium text-muted-foreground transition hover:bg-muted hover:text-foreground", isActive && "bg-muted text-foreground")}>{link.label}</NavLink>
          ))}
        </nav>
        <Button asChild className="hidden lg:inline-flex"><a href={whatsappUrl()} target="_blank" rel="noreferrer">Hablemos</a></Button>
        <Sheet>
          <SheetTrigger asChild><Button variant="outline" size="icon" className="lg:hidden" aria-label="Abrir menú"><Menu /></Button></SheetTrigger>
          <SheetContent>
            <div className="pt-1"><Logo /></div>
            <nav className="mt-14 flex flex-col" aria-label="Navegación móvil">
              {links.map((link) => (
                <SheetClose asChild key={link.to}><NavLink to={link.to} className={({ isActive }) => cn("border-b py-4 text-xl font-semibold", isActive ? "text-accent" : "text-foreground")}>{link.label}</NavLink></SheetClose>
              ))}
            </nav>
            <Button asChild size="lg" className="mt-8 w-full"><a href={whatsappUrl()} target="_blank" rel="noreferrer">Escribinos por WhatsApp</a></Button>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  )
}
