import type { NavItem } from "@/types/nav"

interface SiteConfig {
  name: string
  description: string
  mainNav: NavItem[]
  links: {
    facebook: string
    instagram: string
    twitter: string
  }
}

export const siteConfig: SiteConfig = {
  name: "Dabshy",
  description:
    "Achat et vente de vêtements en ligne en Tunisie ! Dabchy.com est le 1er site de vide-dressing en Tunisie.",
  mainNav: [
    {
      title: "Home",
      href: "/",
    },
  ],
  links: {
    facebook: "https://www.facebook.com/dabchycom",
    instagram: "https://www.instagram.com/dabchy_com",
    twitter: "https://twitter.com/dabchy_com",
  },
}
