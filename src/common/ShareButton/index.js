import { FaCheck } from "react-icons/fa";
import { IoMdShare } from "react-icons/io";

import { ShareIconButton, ShareTooltip, ShareWrapper } from "./styled";
import useShareAction from "./useShareAction";

/**
 * One-tap share affordance for the nav utility cluster (desktop only — on
 * mobile the action lives as a labeled row inside the hamburger menu).
 * Native share sheet when available; otherwise copies the canonical URL and
 * shows an inline "copied" tooltip — no menu.
 */
const ShareButton = () => {
  const { feedback, share, nav } = useShareAction();

  return (
    <ShareWrapper>
      <ShareIconButton
        onClick={share}
        aria-label={nav.shareLabel}
        data-testid="share-button"
      >
        {feedback === "copied" ? (
          <FaCheck aria-hidden />
        ) : (
          <IoMdShare aria-hidden />
        )}
      </ShareIconButton>
      <ShareTooltip
        className={feedback ? "visible" : ""}
        aria-live="polite"
        data-testid="share-tooltip"
      >
        {feedback === "copied"
          ? nav.shareCopied
          : feedback === "error"
            ? nav.shareError
            : ""}
      </ShareTooltip>
    </ShareWrapper>
  );
};

export default ShareButton;
