import Header from "@/app/components/Header";
import Hero from "@/app/components/Hero";
import Apps from "@/app/components/Apps";
import Footer from "@/app/components/Footer";

export default function Home() {
  return (
    <div>
      <div>
        <Header />
        <Hero />
        <Apps />
        <Footer />
      </div>
    </div>
  );
}
