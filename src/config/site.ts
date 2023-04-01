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
  name: "Dabchy",
  description:
    "Online purchase and sale of clothes in Tunisia! Dabchy.com is the 1st online marketplace for second-hand clothing in Tunisia.",
  mainNav: [
    {
      title: "Home",
      href: "/",
    },
    {
      title: "Shopping",
      href: "/#shopping",
    },
    {
      title: "Benefits",
      href: "/#benefits",
    },
    {
      title: "FAQ",
      href: "/#faq",
    },
  ],
  links: {
    facebook: "https://www.facebook.com/dabchycom",
    instagram: "https://www.instagram.com/dabchy_com",
    twitter: "https://twitter.com/dabchy_com",
  },
}
