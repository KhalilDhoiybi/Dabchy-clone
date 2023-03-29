import type { NextPage } from "next"
import Head from "next/head"
import MainLayout from "@/layouts/mainLayout"

const Home: NextPage = () => {
  return (
    <>
      <MainLayout>
        <Head>
          <title>Home | Dabchy</title>
          <meta
            name="description"
            content="Achat et vente de vêtements en ligne en Tunisie ! Dabchy.com est le 1er site de vide-dressing en Tunisie."
          />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <main>test</main>
      </MainLayout>
    </>
  )
}

export default Home
