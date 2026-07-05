import { useRef, useState } from "react";
import { Volume2, VolumeX } from "lucide-react";

export default function MusicToggle({ src = "/audio/theme.mp3" }) {
  const audioRef = useRef(null);
  const [playing, setPlaying] = useState(false);

  const toggle = () => {
    const audio = audioRef.current;
    if (!audio) return;

    if (playing) {
      audio.pause();
    } else {
      audio.play().catch(() => {});
    }
    setPlaying((p) => !p);
  };

  return (
    <>
      <audio ref={audioRef} src={src} loop preload="none" />
      <button
        onClick={toggle}
        aria-label={playing ? "Mute music" : "Play music"}
        className="fixed bottom-6 right-6 z-50 flex h-11 w-11 items-center justify-center rounded-full border border-cyan-400/30 bg-[#060B14]/90 text-cyan-300 shadow-[0_0_20px_rgba(34,211,238,0.25)] backdrop-blur-md transition hover:border-cyan-400/60"
      >
        {playing ? <Volume2 className="h-4 w-4" /> : <VolumeX className="h-4 w-4" />}
      </button>
    </>
  );
}