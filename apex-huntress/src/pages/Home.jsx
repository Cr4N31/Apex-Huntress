import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import Hero from "../components/home/Hero";
import CollectionOverview from "../components/home/CollectionOverview";
import HuntressGallery from "../components/home/HuntressGallery";
import WhySection from "../components/home/WhySection";
import StatsBar from "../components/home/StatsBar";
import Roadmap from "../components/home/Roadmap";
import FeaturedHunter from "../components/home/FeaturedHunter";
import ClaimCTA from "../components/home/ClaimCTA";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#060B14] text-white">
      <Navbar active="Home" />
      <Hero />
      <CollectionOverview />
      <HuntressGallery />
      <WhySection />
      <StatsBar />
      <Roadmap />
      <FeaturedHunter />
      <ClaimCTA />
      <Footer />
    </div>
  );
}