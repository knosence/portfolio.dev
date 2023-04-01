import Header from '@/components/Header'
import Hero from '@/components/Hero'
import type { NextPage } from 'next'
import Head from 'next/head'


export default function Home() {
  return (
    <div className="
      bg-[rgb(36,36,36)] 
      text-white
      h-screen 
      snap-y 
      snap-mandatory 
      overflow-scroll 
      z-0">
      <Head>
        <title>NaDario&apos;s Portfolio</title>
        <meta name="description" content="The hub for all things NaDario!" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      {/* Hero */}
      <section id="hero" className="snap-center">
        <Hero />
      </section>

      {/* About */}

      {/* Experience */}

      {/* Skills */}

      {/* project */}

      {/* Contact Me */}
    </div>
  )
}
