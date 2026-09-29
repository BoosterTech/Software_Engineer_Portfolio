import { m } from "framer-motion";
import styled, { css, keyframes } from "styled-components";

const comingSoonPulse = keyframes`
  0% {
    box-shadow: 0 0 0 0 rgba(var(--color-primary-rgb), 0.45);
  }
  70% {
    box-shadow: 0 0 0 8px rgba(var(--color-primary-rgb), 0);
  }
  100% {
    box-shadow: 0 0 0 0 rgba(var(--color-primary-rgb), 0);
  }
`;

const comingSoonShimmer = keyframes`
  0% {
    transform: translateX(-120%);
  }
  60%,
  100% {
    transform: translateX(280%);
  }
`;

export const ComingSoonBadge = styled(m.div)`
  position: relative;
  display: inline-flex;
  align-items: center;
  gap: var(--spacing-xs);
  padding: var(--spacing-xs) var(--spacing-sm);
  border-radius: var(--radius-xl);
  overflow: hidden;
  border: 1px solid rgba(var(--color-primary-rgb), 0.35);
  background: rgba(var(--color-surface-rgb), 0.78);
  backdrop-filter: blur(8px);
  box-shadow: var(--shadow-lg);
  color: var(--color-text-primary);
  font-size: 0.72rem;
  font-weight: 700;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  white-space: nowrap;
  pointer-events: none;

  &::before {
    content: "";
    width: 7px;
    height: 7px;
    border-radius: 50%;
    background: var(--color-primary);
    animation: ${comingSoonPulse} 2.2s ease-out infinite;
  }

  &::after {
    content: "";
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    width: 40%;
    background: linear-gradient(
      90deg,
      transparent,
      rgba(var(--color-primary-rgb), 0.18),
      transparent
    );
    animation: ${comingSoonShimmer} 3s ease-in-out infinite;
  }

  ${({ $inline }) =>
    $inline
      ? css`
          display: flex;
          width: fit-content;
          margin: 0 auto;
        `
      : css`
          position: absolute;
          bottom: var(--spacing-md);
          left: 50%;
          transform: translateX(-50%);
          z-index: 3;
        `}

  @media (prefers-reduced-motion: reduce) {
    &::before,
    &::after {
      animation: none;
    }

    &::after {
      display: none;
    }
  }
`;
