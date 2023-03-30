import { useState } from "react"
import Image from "next/image"
import Link from "next/link"

import { siteConfig } from "@/config/site"
import { cn } from "@/lib/utils"
import logo from "../../assets/images/logo-192x192.png"

const Navbar = () => {
  const items = siteConfig.mainNav
  const [selectedItem, SetSelectedItem] = useState(0)

  return (
    <header className="sticky top-0 z-40 w-full bg-costume-green">
      <div className="container flex h-20 items-center space-x-4 sm:justify-between sm:space-x-0">
        <div className="flex gap-6 md:gap-10">
          <Link href="/" className="hidden items-center space-x-2 md:flex h-">
            <Image
              className="rounded-full"
              src={logo}
              alt={siteConfig.name}
              width={40}
              height={40}
            />
            <span className="hidden font-semibold text-3xl font-nunito sm:inline-block">
              {siteConfig.name}
            </span>
          </Link>
          {items?.length ? (
            <nav className="hidden gap-6 md:flex">
              {items?.map(
                (item, index) =>
                  item.href && (
                    <Link
                      key={index}
                      href={item.href}
                      onClick={() => SetSelectedItem(index)}
                      className={cn(
                        "flex items-center text-2 font-semibold hover:text-costume-lightPink text-slate-100 sm:text-lg",
                        item.disabled && "cursor-not-allowed opacity-80",
                        selectedItem === index &&
                          "underline underline-offset-2 decoration-2 text-costume-pink"
                      )}
                    >
                      {item.title}
                    </Link>
                  )
              )}
            </nav>
          ) : null}
        </div>
        <div></div>
      </div>
    </header>
  )
}

export default Navbar
