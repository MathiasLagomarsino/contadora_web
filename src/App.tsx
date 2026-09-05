import { Route, Routes } from "react-router-dom"
import { Layout } from "@/components/layout"
import { HomePage } from "@/pages/home"
import { ServicesPage } from "@/pages/services"
import { CertificationsPage } from "@/pages/certifications"
import { AboutPage } from "@/pages/about"
import { ContactPage } from "@/pages/contact"
import { NotFoundPage } from "@/pages/not-found"

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="servicios" element={<ServicesPage />} />
        <Route path="certificaciones" element={<CertificationsPage />} />
        <Route path="nosotros" element={<AboutPage />} />
        <Route path="contacto" element={<ContactPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  )
}
