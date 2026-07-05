import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import HoldersHero from "../components/holders/HoldersHero";
import GamingUtility from "../components/holders/GamingUtility";
import StakingSection from "../components/holders/StakingSection";
import CommunityRewards from "../components/holders/CommunityRewards";
import ScarcitySection from "../components/holders/ScarcitySection";
import FinalCTA from "../components/holders/FinalCTA";

export default function Holders() {
  return (
    <div className="min-h-screen bg-[#060B14] text-white">
      <Navbar active="Holders" />
      <HoldersHero />
      <GamingUtility />
      <StakingSection />
      <CommunityRewards />
      <ScarcitySection />
      <FinalCTA />
      <Footer />
    </div>
  );
}