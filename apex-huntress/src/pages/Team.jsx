import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import TeamHero from "../components/team/TeamHero";
import TeamGrid from "../components/team/TeamGrid";
import JoinPride from "../components/team/JoinPride";

export default function Team() {
  return (
    <div className="min-h-screen bg-[#060B14] text-white">
      <Navbar active="Team" />
      <TeamHero />
      <TeamGrid />
      <JoinPride />
      <Footer />
    </div>
  );
}