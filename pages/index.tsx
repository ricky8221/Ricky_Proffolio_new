import Head from "next/head";
import { Inter } from "@next/font/google";
import styles from "@/styles/Home.module.css";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import ContactMe from "@/components/ContactMe";


const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div className="bg-[rgb(36,36,36)] text-white h-screen snap-y snap-mandatory overflow-scroll z-0">
      <Head>
        <title>Ricky's Portfolio</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* Header */}
      <Header/>

      {/* Hero */}
      <section id='hero' className="snap-center">
        <Hero />
      </section>

      {/* About */}
      <section id='about' className="snap-start">
        <About/>
      </section>

      {/* Experience */}
      <section id='experience' className="snap-start">
        <Experience/>
      </section>

      {/* Skills */}
      <section id='skills' className="snap-start">
        <Skills/>
      </section>

      {/* Projects */}
      <section id='projects' className="snap-start">
        <Projects/>
      </section>

      {/* Contact Me */}
    </div>
  );
}
