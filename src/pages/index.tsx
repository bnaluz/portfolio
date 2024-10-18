import Navbar from "../components/Navbar";
import Head from "next/head";
import Main from "@/components/Main";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import ToasterProvider from "@/providers/ToasterProvider";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Bobby Naluz | Web Developer</title>
        <meta name='description' content='Generated by create next app'/>
        <link rel='icon' href='/navbarLogo.png'/>
      </Head>
   
   <ToasterProvider/>
    <Main/>
    <About/>
    <Skills/>
    <Projects/>
    <Contact/>
    </div>
  );
}
