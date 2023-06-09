import type { NextPage } from "next"
import Head from "next/head"

import HeroSection from "@/components/home/hero-section"
import MileStoneSection from "@/components/home/milestone-section"
import Navbar from "@/components/home/navbar"
import ShoppingSection from "@/components/home/shopping-section"

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Home | Dabchy</title>
        <meta
          name="description"
          content="Online purchase and sale of clothes in Tunisia! Dabchy.com is the 1st online marketplace for second-hand clothing in Tunisia."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <main>
        <HeroSection />
        <MileStoneSection />
        <ShoppingSection />
      </main>
    </>
  )
}

export default Home
