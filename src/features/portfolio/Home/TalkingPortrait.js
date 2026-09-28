import useContent from "common/useContent";
import { useEffect, useRef, useState } from "react";
import { FaPlay } from "react-icons/fa";

import { PortraitPlayButton, PortraitVideo } from "./homeStyles";

const TALKING_PORTRAIT_SRC = `${import.meta.env.BASE_URL}talking-portrait/profile-dark-en.mp4`;

/**
 * Click-to-play AI talking portrait, layered over the still in every
 * language/theme variant. Always mounted but not preloaded — `preload`
 * stays at "metadata" so the ~1.2 MB MP4 only downloads on tap;
 * ProfileImage underneath keeps swaps flicker-free.
 * Tap calls play(); on end/stop it seeks back to the first frame.
 *
 * While playing, a `portrait-playing` class on <html> freezes every CSS
 * animation mid-pose — the cumulative animation load starves the media
 * pipeline into a waiting-state stall on low-end Android (verified on-device).
 *
 * @param {{ poster: string }} props - still shown before the first frame decodes
 */
const TalkingPortrait = ({ poster }) => {
  const { home } = useContent();
  const videoRef = useRef(null);
  const [status, setStatus] = useState("idle");
  const loading = status === "loading";

  useEffect(() => {
    document.documentElement.classList.toggle(
      "portrait-playing",
      status === "playing"
    );
    return () => document.documentElement.classList.remove("portrait-playing");
  }, [status]);

  const handlePlay = () => {
    setStatus("loading");
    try {
      videoRef.current?.play()?.catch(() => setStatus("idle"));
    } catch {
      setStatus("idle");
    }
  };

  const stopAndReset = () => {
    const video = videoRef.current;
    if (video) {
      video.pause();
      video.currentTime = 0;
    }
    setStatus("idle");
  };

  return (
    <>
      <PortraitVideo
        ref={videoRef}
        data-testid="talking-portrait-video"
        src={TALKING_PORTRAIT_SRC}
        poster={poster}
        playsInline
        preload="metadata"
        $active={status === "playing"}
        aria-label={home.hearMeLabel}
        aria-hidden={status !== "playing"}
        onPlaying={() => setStatus("playing")}
        onEnded={stopAndReset}
        onError={() => setStatus("idle")}
        onClick={stopAndReset}
      />
      {status !== "playing" && (
        <PortraitPlayButton
          onClick={handlePlay}
          aria-label={home.hearMeLabel}
          aria-busy={loading}
          disabled={loading}
        >
          {loading ? <span className="spinner" /> : <FaPlay aria-hidden />}
        </PortraitPlayButton>
      )}
    </>
  );
};

export default TalkingPortrait;
