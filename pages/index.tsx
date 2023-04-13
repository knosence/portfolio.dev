import About from "@/components/About";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import WorkExperience from "@/components/WorkExperience";
import type { NextPage } from "next";
import Head from "next/head";

export default function Home() {
  return (
    <div
      className="
      bg-[rgb(36,36,36)] 
      text-white
      h-screen 
      snap-y 
      snap-mandatory 
      overflow-scroll 
      z-0"
    >
      <Head>
        <title>NaDario&apos;s Portfolio</title>
        <meta name="description" content="The hub for all things NaDario!" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <section id="hero" className="snap-start">
        <Hero />
      </section>

      <section id="about" className="snap-center">
        <About />
      </section>

      {/* Experience */}
      <section id="experience" className="snap-center">
        <WorkExperience />
      </section>

      {/* Skills */}

      {/* project */}

      {/* Contact Me */}
    </div>
  );
}
