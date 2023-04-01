import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import useScroll from "@/hooks/useScroll"

import { siteConfig } from "@/config/site"
import { cn } from "@/lib/utils"
import logo from "../../assets/images/logo-192x192.png"
import { Icons } from "../icons/icons"
import { Button } from "../ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu"
import { ThemeToggle } from "./home-theme-toggle"

const Navbar = () => {
  const items = siteConfig.mainNav
  const [selectedItem, SetSelectedItem] = useState(0)
  const scrollPostion = useScroll()

  return (
    <header
      className={cn(
        "sticky top-0 z-40 w-full",
        scrollPostion > 0
          ? "bg-costume-green shadow-md transition-all duration-500"
          : "bg-costume-lightGreen py-4 transition-all duration-200"
      )}
    >
      <div className="container flex h-20 items-center space-x-4 justify-between sm:space-x-0">
        <div className="flex gap-6">
          <Link href="/" className="hidden items-center space-x-2 md:flex">
            <Image
              className="rounded-full"
              src={logo}
              alt={siteConfig.name}
              width={40}
              height={40}
            />
            <span className="hidden font-semibold text-3xl text-white font-nunito sm:inline-block">
              {siteConfig.name}
            </span>
          </Link>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                variant="homeNav"
                className="-ml-4 text-base focus:ring-0 md:hidden"
              >
                <Image
                  className="rounded-full mr-2"
                  src={logo}
                  alt={siteConfig.name}
                  width={28}
                  height={28}
                />
                <span className="font-bold">Menu</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent
              align="start"
              sideOffset={10}
              className="w-[300px] overflow-scroll"
            >
              <DropdownMenuLabel>
                <Link href="/" className="flex items-center">
                  <Image
                    className="rounded-full mr-2"
                    src={logo}
                    alt={siteConfig.name}
                    width={16}
                    height={16}
                  />
                  {siteConfig.name}
                </Link>
              </DropdownMenuLabel>
              <DropdownMenuSeparator />
              {items?.map(
                (item, index) =>
                  item.href && (
                    <DropdownMenuItem key={index} asChild>
                      <Link href={item.href}>{item.title}</Link>
                    </DropdownMenuItem>
                  )
              )}
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
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
                        "underline underline-offset-8 decoration-2 text-costume-pink"
                    )}
                  >
                    {item.title}
                  </Link>
                )
            )}
          </nav>
        ) : null}
        <div className="flex gap-4 items-center">
          <Button variant="homeNav" size="sm" className="flex gap-1">
            <Icons.facebook className="w-4 h-4" />
            <span>Sign In</span>
          </Button>
          <ThemeToggle />
        </div>
      </div>
    </header>
  )
}

export default Navbar
