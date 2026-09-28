import { css, keyframes } from "styled-components";

// Keeps gradient-clipped text readable in Windows forced-colors mode,
// where -webkit-text-fill-color: transparent would otherwise hide it.
export const forcedColorsText = css`
  @media (forced-colors: active) {
    forced-color-adjust: none;
    background: none;
    color: CanvasText;
    -webkit-text-fill-color: CanvasText;
  }
`;

export const gradientFade = keyframes`
  0%, 100% {
    opacity: 0;
  }
  50% {
    opacity: 1;
  }
`;

// Composited gradient-text drift: the element's own gradient stays pinned
// at position 0%; the ::before clones the same text (data-text attr) and
// gradient (background: inherit) at position 100%, and only its opacity
// animates — GPU-composited, no per-frame text repaint. `content: / ""`
// keeps the clone out of the a11y tree; forced-colors drops it entirely
// since backgrounds are stripped there. Element needs non-static position
// and a data-text attribute matching its rendered text.
export const gradientDrift = css`
  background-position: 0% 50%;

  &::before {
    content: attr(data-text) / "";
    position: absolute;
    inset: 0;
    padding: inherit;
    background: inherit;
    background-position: 100% 50%;
    background-clip: text;
    -webkit-background-clip: text;
    opacity: 0;
    animation: ${gradientFade} 15s ease-in-out infinite;
    pointer-events: none;

    @media (forced-colors: active) {
      content: none;
    }
  }
`;

export const waveHand = keyframes`
  0% { transform: rotate(0deg) scale(1.1); }
  10% { transform: rotate(20deg) scale(1.1); }
  20% { transform: rotate(-10deg) scale(1.1); }
  30% { transform: rotate(20deg) scale(1.1); }
  40% { transform: rotate(-10deg) scale(1.1); }
  50% { transform: rotate(20deg) scale(1.1); }
  60% { transform: rotate(-10deg) scale(1.1); }
  70% { transform: rotate(20deg) scale(1.1); }
  80% { transform: rotate(-10deg) scale(1.1); }
  90% { transform: rotate(10deg) scale(1.1); }
  100% { transform: rotate(0deg) scale(1.1); }
`;

export const fadeInUp = keyframes`
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

export const slideInLeft = keyframes`
  from {
    opacity: 0;
    transform: translateX(-50px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`;

export const slideInRight = keyframes`
  from {
    opacity: 0;
    transform: translateX(50px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`;

export const spin = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

export const float = keyframes`
  0%, 100% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-5px);
  }
`;

export const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;
