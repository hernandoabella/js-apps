import Header from "@/app/landing-page/Header";
import Hero from "@/app/landing-page/Hero";
import HowItWorks from "@/app/landing-page/HowItWorks";
import About from "@/app/landing-page/About";
import Featured from "@/app/landing-page/Featured";
import LevelsRoadmap from "@/app/landing-page/LevelsRoadmap";
import ProgressPreview from "@/app/landing-page/ProgressPreview";
import TechStack from "@/app/landing-page/TechStack";
import GithubStats from "@/app/landing-page/GithubStats";
import Cta from "@/app/landing-page/Cta";
import Faq from "@/app/landing-page/Faq";
import SectionNav from "@/app/components/SectionNav";
import BackToTop from "@/app/components/BackToTop";

export default function Home() {
  return (
    <div>
      <Header />
      <SectionNav />
      <Hero />
      <section id="how-it-works"><HowItWorks /></section>
      <section id="features"><About /></section>
      <section id="roadmap"><LevelsRoadmap /></section>
      <section id="projects"><Featured /></section>
      <section id="tech-stack"><TechStack /></section>
      <section id="gamification"><ProgressPreview /></section>
      <GithubStats />
      <Cta />
      <section id="faq"><Faq /></section>
      <BackToTop />
    </div>
  );
}
