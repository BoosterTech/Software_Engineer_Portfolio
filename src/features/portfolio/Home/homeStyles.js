import { fadeInUp, slideInLeft, slideInRight, spin } from "common/animations";
import styled, { keyframes } from "styled-components";

const imageBorderAnimation = keyframes`
   0%{
  border-radius: 65% 35% 67% 33% / 65% 36% 64% 35%  ;
}
50%{
   border-radius: 34% 66% 31% 69% / 36% 61% 39% 64%  ;
}
100%{
    border-radius: 65% 35% 67% 33% / 65% 36% 64% 35%  ;
}
`;

export const HomeWrapper = styled.section`
  padding: var(--nav-height-actual, var(--nav-height)) 0 var(--spacing-3xl) 0;

  @media (max-width: ${({ theme }) => theme.breakpoint.lg}) {
    padding: var(--nav-height-actual, var(--nav-height-mobile)) 0
      var(--spacing-2xl) 0;
  }
  width: 100%;
  animation: ${fadeInUp} 0.8s ease-out;
`;

export const ContentImageContainer = styled.div`
  display: grid;
  grid-template-columns: minmax(0, 1fr) auto;
  gap: var(--spacing-3xl);
  align-items: center;
  align-content: center;
  min-height: calc(100vh - var(--nav-height-actual, var(--nav-height)));
  margin-bottom: var(--spacing-3xl);

  @media (max-width: ${({ theme }) => theme.breakpoint.xl2}) {
    grid-template-columns: minmax(0, 1fr);
    gap: var(--spacing-2xl);
    min-height: calc(
      100vh - var(--nav-height-actual, var(--nav-height-mobile))
    );
    text-align: center;
    padding-top: var(--spacing-xl);
  }

  @media (max-height: 500px) {
    min-height: auto;
  }
`;

export const ContentContainer = styled.div`
  min-width: 0;
  animation: ${slideInLeft} 0.8s ease-out 0.2s both;

  @media (max-width: ${({ theme }) => theme.breakpoint.xl2}) {
    order: 2;
    animation: ${fadeInUp} 0.8s ease-out 0.4s both;
  }
`;

export const ImageContainer = styled.div`
  width: 300px;
  height: 300px;
  position: relative;
  box-shadow:
    0 8px 32px rgba(var(--color-black-rgb), 0.18),
    0 2px 8px rgba(var(--color-black-rgb), 0.08);
  animation:
    ${slideInRight} 0.8s ease-out 0.3s both,
    ${imageBorderAnimation} 12s ease-in-out infinite 1s;

  &::before {
    content: "";
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 280px;
    height: 280px;
    background: radial-gradient(
      circle,
      rgba(var(--color-white-rgb), 0.45) 0%,
      var(--color-primary) 25%,
      var(--color-accent) 60%,
      rgba(var(--color-black-rgb), 0.08) 85%,
      transparent 100%
    );
    border-radius: 50%;
    z-index: -1;
    opacity: 0.38;
    filter: blur(32px);
    animation: spin 20s linear infinite;
  }

  @keyframes spin {
    from {
      transform: translate(-50%, -50%) rotate(0deg);
    }
    to {
      transform: translate(-50%, -50%) rotate(360deg);
    }
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.xl2}) {
    order: 1;
    margin: 0 auto var(--spacing-xl) auto;
    animation:
      ${fadeInUp} 0.8s ease-out 0.2s both,
      ${imageBorderAnimation} 12s ease-in-out infinite 1s;
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.sm}) {
    width: 230px;
    height: 230px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.xxs}) {
    width: 190px;
    height: 190px;
  }
`;

export const ProfileImage = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  z-index: 2;
  width: 100%;
  height: 100%;
  object-fit: cover;
  box-shadow:
    0 0 40px 14px rgba(var(--color-tooltip-rgb), 0.35),
    0 8px 32px rgba(var(--color-white-rgb), 0.18),
    0 2px 8px rgba(var(--color-black-rgb), 0.08);
  border-radius: inherit;
  border: 1px solid var(--color-primary);
  transition:
    opacity 0.4s ease,
    transform var(--transition-normal);
`;

const portraitPulse = keyframes`
  0% {
    transform: scale(1);
    opacity: 0.7;
  }
  40%,
  100% {
    transform: scale(1.6);
    opacity: 0;
  }
`;

export const PortraitVideo = styled.video`
  position: absolute;
  inset: 0;
  z-index: 3;
  width: 100%;
  height: 100%;
  object-fit: cover;
  /* No box-shadow here — ProfileImage underneath casts the identical glow;
     a second stack would double the halo intensity. */
  /* Inherits the blob's animated radius while idle (video is paused — the
     re-clip is just paint). During playback .portrait-playing freezes the
     parent animation mid-pose, giving this an effectively static clip —
     which keeps the media pipeline fed on low-end Android (verified). */
  border-radius: inherit;
  will-change: transform, opacity;
  border: 1px solid var(--color-primary);
  cursor: pointer;
  /* The theme-matched ProfileImage stays the portrait's face while idle;
     the clip fades in only for playback, then melts back to the still. */
  opacity: ${(p) => (p.$active ? 1 : 0)};
  pointer-events: ${(p) => (p.$active ? "auto" : "none")};
  transition: opacity 0.35s ease;

  @media (prefers-reduced-motion: reduce) {
    transition: none;
  }
`;

export const PortraitCaption = styled.p`
  position: absolute;
  top: calc(100% + var(--spacing-md));
  left: 50%;
  transform: translateX(-50%);
  z-index: 4;
  width: max-content;
  max-width: 320px;
  margin: 0;
  padding: var(--spacing-xs) var(--spacing-md);
  border-radius: var(--radius-xl);
  border: 1px solid var(--color-border);
  background: rgba(var(--color-surface-rgb), 0.85);
  backdrop-filter: blur(8px);
  -webkit-backdrop-filter: blur(8px);
  color: var(--color-text-primary);
  font-size: 0.8rem;
  line-height: 1.4;
  text-align: center;
  pointer-events: none;
  opacity: 1;
  transition:
    opacity 0.5s ease,
    transform 0.5s ease;

  ${(p) => p.$fading && `opacity: 0; transform: translateX(-50%) translateY(6px);`}

  /* Speech-bubble tail pointing up at the portrait */
  &::before {
    content: "";
    position: absolute;
    top: -5px;
    left: 50%;
    transform: translateX(-50%) rotate(45deg);
    width: 10px;
    height: 10px;
    background: rgba(var(--color-surface-rgb), 0.85);
    border-left: 1px solid var(--color-border);
    border-top: 1px solid var(--color-border);
  }

  @media (prefers-reduced-motion: reduce) {
    transition: none;
  }
`;

export const PortraitPlayButton = styled.button`
  position: absolute;
  right: var(--spacing-sm);
  bottom: var(--spacing-sm);
  z-index: 4;
  width: 44px;
  height: 44px;
  border-radius: 50%;
  border: 1px solid var(--color-border);
  background: rgba(var(--color-surface-rgb), 0.85);
  color: var(--color-white);
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  backdrop-filter: blur(8px);
  -webkit-backdrop-filter: blur(8px);
  transition:
    background-color var(--transition-fast),
    border-color var(--transition-fast);

  &::after {
    content: "";
    position: absolute;
    inset: -4px;
    border-radius: 50%;
    border: 2px solid rgba(var(--color-primary-rgb), 0.6);
    animation: ${portraitPulse} 6s ease-out infinite;
    pointer-events: none;
  }

  &:hover {
    background: var(--color-primary);
    border-color: var(--color-primary);
  }

  &:focus-visible {
    outline: 2px solid var(--color-primary);
    outline-offset: 2px;
  }

  &:disabled {
    cursor: wait;
  }

  svg {
    width: 14px;
    height: 14px;
    margin-left: 2px;
  }

  .spinner {
    width: 16px;
    height: 16px;
    border-radius: 50%;
    border: 2px solid var(--color-border);
    border-top-color: var(--color-primary);
    animation: ${spin} 0.8s linear infinite;
  }

  @media (prefers-reduced-motion: reduce) {
    &::after {
      animation: none;
      opacity: 0;
    }

    .spinner {
      animation-duration: 1.6s;
    }
  }
`;
