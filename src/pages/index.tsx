import Head from 'next/head'
import Hero from "@/components/home-page/hero";
export default function Home() {
  return (
    <>
      <Head>
        <title>Sample Blog</title>
        <meta name="description" content="Sample Blog" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
          <Hero/>
      </main>
    </>
  )
}
