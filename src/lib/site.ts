export const site = {
  name: "nexacontadoras",
  email: "contacto@nexacontadoras.com",
  phoneDisplay: "+54 9 11 3412-8318",
  phone: "5491134128318",
  instagram: "@contadoras.ya",
  linkedin: "contadoras-ya",
  instagramUrl: "https://instagram.com/contadoras.ya",
  linkedinUrl: "https://linkedin.com/company/contadoras-ya",
}

export const whatsappUrl = (message = "Hola, vi la web de nexacontadoras y quisiera hacer una consulta.") =>
  `https://wa.me/${site.phone}?text=${encodeURIComponent(message)}`
