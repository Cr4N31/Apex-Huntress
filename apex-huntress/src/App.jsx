import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Home from "./pages/Home";
import Holders from "./pages/Holders";
import Comic from "./pages/Comic";
import ComicReader from "./pages/ComicReader";
import Team from "./pages/Team";
import { useEffect } from "react";
import MusicToggle from "./components/shared/MusicToggle";
import AOS from "aos";
import "aos/dist/aos.css";

function AosRefreshOnNavigate() {
  const location = useLocation();
  useEffect(() => {
    AOS.refresh();
  }, [location.pathname]);
  return null;
}

export default function App() {
  useEffect(() => {
    AOS.init({
      duration: 700,
      once: true,
      offset: 80,
      easing: "ease-out-cubic",
    });
  }, []);

  return (
    <BrowserRouter>
    <MusicToggle />
      <AosRefreshOnNavigate />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/holders" element={<Holders />} />
        <Route path="/comic" element={<Comic />} />
        <Route path="/comic/read/:chapterId" element={<ComicReader />} />
        <Route path="/team" element={<Team />} />
      </Routes>
    </BrowserRouter>
  );
}