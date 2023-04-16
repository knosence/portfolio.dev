import About from "@/components/About";
import ContactMe from "@/components/ContactMe";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import WorkExperience from "@/components/WorkExperience";
import type { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";

export default function Home() {
  return (
    <div
      className="
      bg-[rgb(36,36,36)] 
      text-white
      h-screen 
      snap-y 
      snap-mandatory 
      overflow-y-scroll
      overflow-x-hidden
      z-0 
      scrollbar-thin
      scrollbar-track-gray-400/20 
      scrollbar-thumb-[#815af5]/80
      "
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

      <section id="experience" className="snap-center">
        <WorkExperience />
      </section>

      <section id="skills" className="snap-start">
        <Skills />
      </section>

      <section id="projects" className="snap-start">
        <Projects />
      </section>

      {/* Contact Me */}
      <section id="contact" className="snap-start">
        <ContactMe />
      </section>

      <Link href="#hero">
        <footer className="sticky bottom-5 w-full cursor-pointer">
          <div className="flex items-center justify-center">
            <img
              className="h-20 w-20 filter grayscale hover:grayscale-0 cursor-pointer"
              src="/images/Rf7eda97de5d2afb34651b658c84adf91(3).png"
              alt=""
            />
          </div>
        </footer>
      </Link>
    </div>
  );
}
