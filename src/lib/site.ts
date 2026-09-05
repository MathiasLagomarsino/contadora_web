export const site = {
  name: "contadoras.ya",
  email: "hola@contadorasya.com.ar",
  phoneDisplay: "+54 9 11 3412-8318",
  phone: "5491134128318",
  address: "Av. Corrientes 1234, CABA",
  instagram: "@contadoras.ya",
  linkedin: "contadoras-ya",
  instagramUrl: "https://instagram.com/contadoras.ya",
  linkedinUrl: "https://linkedin.com/company/contadoras-ya",
}

export const whatsappUrl = (message = "Hola, vi la web de contadoras.ya y quisiera hacer una consulta.") =>
  `https://wa.me/${site.phone}?text=${encodeURIComponent(message)}`
