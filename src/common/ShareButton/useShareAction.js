import useContent from "common/useContent";
import { useEffect, useRef, useState } from "react";

const SHARE_URL = `${window.location.origin}${process.env.PUBLIC_URL}/`;
const FEEDBACK_MS = 2000;

/**
 * Shared share action: native OS share sheet when available, clipboard copy
 * otherwise. Returns `feedback` ("copied" | "error" | null, auto-clears after
 * FEEDBACK_MS) and the `share` handler. AbortError (sheet dismissal) is a
 * no-op, not an error.
 */
const useShareAction = () => {
  const { nav } = useContent();
  const [feedback, setFeedback] = useState(null);
  const timerRef = useRef(null);

  useEffect(() => () => clearTimeout(timerRef.current), []);

  const showFeedback = (kind) => {
    setFeedback(kind);
    clearTimeout(timerRef.current);
    timerRef.current = setTimeout(() => setFeedback(null), FEEDBACK_MS);
  };

  const legacyCopy = () => {
    const textarea = document.createElement("textarea");
    textarea.value = SHARE_URL;
    textarea.style.position = "fixed";
    textarea.style.opacity = "0";
    document.body.appendChild(textarea);
    textarea.select();
    const ok = document.execCommand("copy");
    textarea.remove();
    return ok;
  };

  const copyLink = async () => {
    try {
      if (navigator.clipboard?.writeText) {
        await navigator.clipboard.writeText(SHARE_URL);
        showFeedback("copied");
      } else {
        showFeedback(legacyCopy() ? "copied" : "error");
      }
    } catch {
      showFeedback("error");
    }
  };

  const share = async () => {
    if (navigator.share) {
      try {
        const payload = {
          title: nav.shareTitle,
          text: nav.shareText,
          url: SHARE_URL,
        };
        // Attach the social preview only on mobile — its share sheets handle
        // "link + image" cleanly. On desktop (Windows share dialog) a file
        // payload hijacks the Copy action: the clipboard gets the image, not
        // the URL, so pasting yields nothing (verified on Windows/Chrome).
        const isMobile =
          navigator.userAgentData?.mobile ??
          window.matchMedia("(pointer: coarse)").matches;
        if (isMobile) {
          try {
            const res = await fetch(
              `${process.env.PUBLIC_URL}/social_preview.jpg`
            );
            const file = new File([await res.blob()], "preview.jpg", {
              type: "image/jpeg",
            });
            if (navigator.canShare?.({ files: [file] })) payload.files = [file];
          } catch {
            // preview fetch failed — fall back to a URL-only share
          }
        }
        await navigator.share(payload);
      } catch (err) {
        if (err?.name !== "AbortError") showFeedback("error");
      }
      return;
    }
    copyLink();
  };

  return { feedback, share, nav };
};

export default useShareAction;
