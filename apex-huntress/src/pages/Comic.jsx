import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import ComicHero from "../components/comic/ComicHero";
import LatestChapter from "../components/comic/LatestChapter";
import ReadMoreCTA from "../components/comic/ReadMoreCTA";
import FeatureHighlights from "../components/comic/FeatureHighlights";
import ChapterTimeline from "../components/comic/ChapterTimeline";

export default function Comic() {
  return (
    <div className="min-h-screen bg-[#060B14] text-white">
      <Navbar active="Comic" />
      <ComicHero />
      <LatestChapter />
      <ReadMoreCTA />
      <FeatureHighlights />
      <ChapterTimeline />
      <Footer />
    </div>
  );
}