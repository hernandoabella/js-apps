// import Image from "next/image";
// import { Inter } from "next/font/google";
import Header from "../components/Header/Header";
import Hero from "../components/Hero/Hero";
import Featured from "../components/Featured/Featured";
import Testimonials from "../components/Testimonials/Testimonials";
import Cta from "../components/Cta/Cta";
import Footer from "../components/Footer/Footer";

export default function Home() {
  return <div>
    <Header />
    <Hero />
    <Featured />
    <Testimonials />
    <Cta />
    <Footer />
  </div>;
}