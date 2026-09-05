import { Outlet, useLocation } from "react-router-dom"
import { useEffect } from "react"
import { MessageCircle } from "lucide-react"
import { SiteFooter } from "@/components/site-footer"
import { SiteHeader } from "@/components/site-header"
import { whatsappUrl } from "@/lib/site"

export function Layout() {
  const location = useLocation()
  useEffect(() => { window.scrollTo({ top: 0, behavior: "instant" }) }, [location.pathname])
  return (
    <div className="min-h-screen overflow-x-hidden">
      <SiteHeader />
      <main><Outlet /></main>
      <SiteFooter />
      <a href={whatsappUrl()} target="_blank" rel="noreferrer" aria-label="Hablar por WhatsApp" className="fixed bottom-5 right-5 z-30 grid size-14 place-items-center rounded-full bg-[#25D366] text-white shadow-xl transition hover:-translate-y-1 hover:shadow-2xl"><MessageCircle className="size-6" /></a>
    </div>
  )
}
