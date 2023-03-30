import type { NextPage } from "next"
import Head from "next/head"

import Navbar from "@/components/home/navbar"

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Home | Dabchy</title>
        <meta
          name="description"
          content="Achat et vente de vêtements en ligne en Tunisie ! Dabchy.com est le 1er site de vide-dressing en Tunisie."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <main>Home</main>
    </>
  )
}

export default Home
