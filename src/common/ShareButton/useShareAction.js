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
        // Attach the social preview when the platform supports file sharing —
        // the image rides inside the share, not just as a link card.
        const payload = {
          title: nav.shareTitle,
          text: nav.shareText,
          url: SHARE_URL,
        };
        try {
          const res = await fetch(
            `${process.env.PUBLIC_URL}/social_preview.png`
          );
          const file = new File([await res.blob()], "preview.png", {
            type: "image/png",
          });
          if (navigator.canShare?.({ files: [file] })) payload.files = [file];
        } catch {
          // preview fetch failed — fall back to a URL-only share
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
