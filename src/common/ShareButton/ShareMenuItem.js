import { FaCheck } from "react-icons/fa";
import { IoMdShare } from "react-icons/io";

import { ShareMenuButton } from "./styled";
import useShareAction from "./useShareAction";

/**
 * Labeled share row for the mobile hamburger menu. Same share action as the
 * desktop icon button; feedback swaps the row's icon and label in place —
 * the menu stays open so the user sees the confirmation.
 */
const ShareMenuItem = () => {
  const { feedback, share, nav } = useShareAction();

  const label =
    feedback === "copied"
      ? nav.shareCopied
      : feedback === "error"
        ? nav.shareError
        : nav.shareLabel;

  return (
    <ShareMenuButton
      onClick={share}
      $feedback={feedback}
      data-testid="mobile-share-item"
      aria-live="polite"
    >
      {feedback === "copied" ? (
        <FaCheck aria-hidden />
      ) : (
        <IoMdShare aria-hidden />
      )}
      {label}
    </ShareMenuButton>
  );
};

export default ShareMenuItem;
