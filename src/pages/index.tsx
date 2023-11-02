import Image from "next/image";
import { Inter } from "next/font/google";
import Header from "../components/Header/Header";
import Hero from "../components/Hero/Hero";
import About from "../components/About/About";
import Featured from "../components/Featured/Featured";
import Testimonials from "../components/Testimonials/Testimonials";
import Faq from "../components/Faq/Faq";
import Cta from "../components/Cta/Cta";
import Projects from "../components/Projects/Projects";
import Footer from "../components/Footer/Footer";

export default function Home() {
  return (
    <div>
      <Header />
      <Hero />
      <About />
      <Featured />
      <Testimonials />
      <Faq />
      <Cta />
      <Footer />
    </div>
  );
}
