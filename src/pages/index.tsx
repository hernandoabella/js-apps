import Header from "../components/Header/Header";
import Hero from "../components/Hero/Hero";
import About from "../components/About/About";
import Featured from "../components/Featured/Featured";
import Faq from "../components/Faq/Faq";
import Cta from "../components/Cta/Cta";
import Footer from "../components/Footer/Footer";

export default function Home() {
  return (
    <div>
      <Header />
      <Hero />
      {/* <About /> */}
      {/* <Featured /> */}
      {/* <Testimonials /> */}
      {/* <Faq /> */}
      <Cta />
      <Footer />
    </div>
  );
}
