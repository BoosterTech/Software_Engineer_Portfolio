import useContent from "common/useContent";
import { useEffect, useRef, useState } from "react";
import { FaPlay } from "react-icons/fa";

import {
  PortraitCaption,
  PortraitPlayButton,
  PortraitVideo,
} from "./homeStyles";

const TALKING_PORTRAIT_SRC = `${import.meta.env.BASE_URL}talking-portrait/profile-dark-en.mp4`;
const TALKING_PORTRAIT_CAPTIONS = `${import.meta.env.BASE_URL}talking-portrait/profile-dark-en.vtt`;
const CAPTION_LINGER_MS = 3500;
const CAPTION_FADE_MS = 500;

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
  const captionTimerRef = useRef(null);
  const [status, setStatus] = useState("idle");
  const [caption, setCaption] = useState("");
  const [captionFading, setCaptionFading] = useState(false);
  const loading = status === "loading";

  useEffect(() => () => clearTimeout(captionTimerRef.current), []);

  useEffect(() => {
    document.documentElement.classList.toggle(
      "portrait-playing",
      status === "playing"
    );
    return () => document.documentElement.classList.remove("portrait-playing");
  }, [status]);

  // The track is driven in "hidden" mode — cues surface through this
  // listener into the styled pill below the portrait instead of the
  // browser's in-video captions, which the circular crop would clip.
  useEffect(() => {
    if (status !== "playing") return undefined;
    const track = videoRef.current?.textTracks?.[0];
    if (!track) return undefined;
    track.mode = "hidden";
    const onCueChange = () => setCaption(track.activeCues?.[0]?.text ?? "");
    onCueChange();
    track.addEventListener("cuechange", onCueChange);
    return () => track.removeEventListener("cuechange", onCueChange);
  }, [status]);

  const handlePlay = () => {
    clearTimeout(captionTimerRef.current);
    setCaption("");
    setCaptionFading(false);
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
    // Let the final line linger as a visual nudge, then fade out before
    // clearing — the element must stay mounted for the transition to run.
    captionTimerRef.current = setTimeout(() => {
      setCaptionFading(true);
      captionTimerRef.current = setTimeout(() => {
        setCaption("");
        setCaptionFading(false);
      }, CAPTION_FADE_MS);
    }, CAPTION_LINGER_MS);
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
      >
        <track
          kind="captions"
          srcLang="en"
          label={home.captionsLabel}
          src={TALKING_PORTRAIT_CAPTIONS}
        />
      </PortraitVideo>
      <PortraitCaption
        aria-live="polite"
        aria-atomic="true"
        hidden={!caption}
        $fading={captionFading}
      >
        {caption}
      </PortraitCaption>
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
