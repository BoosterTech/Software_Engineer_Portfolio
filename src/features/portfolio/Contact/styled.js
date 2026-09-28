import { fadeInUp, forcedColorsText, gradientDrift } from "common/animations";
import Card from "common/Card";
import styled from "styled-components";

export const Wrapper = styled.section`
  max-width: var(--container-max-width);
  margin: var(--spacing-3xl) auto;
  padding: var(--spacing-3xl) var(--spacing-2xl);
  text-align: center;
  border-radius: 18px;
  border: 1px solid rgba(var(--color-cyan-rgb), 0.18);
  background: linear-gradient(
    135deg,
    rgba(var(--color-panel-rgb), 0.88) 0%,
    rgba(var(--color-panel-rgb), 0.68) 100%
  );
  box-shadow:
    0 24px 64px var(--color-contact-shadow),
    inset 0 1px 0 rgba(var(--color-white-rgb), 0.06);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  position: relative;
  overflow: hidden;
  z-index: 1;
  animation: ${fadeInUp} 0.8s ease-out;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 4px;
    background: linear-gradient(
      90deg,
      transparent,
      var(--color-cyan),
      transparent
    );
    box-shadow: 0 0 20px rgba(var(--color-cyan-rgb), 0.6);
  }

  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-image:
      linear-gradient(rgba(var(--color-cyan-rgb), 0.06) 1px, transparent 1px),
      linear-gradient(
        90deg,
        rgba(var(--color-cyan-rgb), 0.06) 1px,
        transparent 1px
      );
    background-size: 40px 40px;
    pointer-events: none;
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.lg}) {
    margin: var(--spacing-2xl) var(--spacing-lg);
    padding: var(--spacing-2xl) var(--spacing-lg);
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.md}) {
    margin: var(--spacing-xl) var(--spacing-md);
    padding: 48px var(--spacing-md) var(--spacing-xl);
    border-radius: 14px;
  }

  @media (prefers-reduced-motion: reduce) {
    animation: none;
  }
`;

export const Eyebrow = styled.div`
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  margin-bottom: var(--spacing-md);
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: var(--color-cyan);
  box-shadow: 0 0 10px var(--color-cyan);

  &::before,
  &::after {
    content: "";
    position: absolute;
    top: 50%;
    width: 80px;
    height: 1px;
    transform: translateY(-50%);
  }

  &::before {
    right: calc(100% + var(--spacing-sm));
    background: linear-gradient(270deg, var(--color-cyan), transparent);
  }

  &::after {
    left: calc(100% + var(--spacing-sm));
    background: linear-gradient(90deg, var(--color-cyan), transparent);
  }
`;

export const Header = styled.h2`
  font-size: clamp(2rem, 5vw, 3rem);
  font-weight: 800;
  margin: 0 0 var(--spacing-sm) 0;
  color: var(--color-off-white);
  position: relative;
  z-index: 1;

  span {
    display: inline-block;
    position: relative;
    background: linear-gradient(
      135deg,
      var(--color-text-secondary) 0%,
      var(--color-primary) 40%,
      var(--color-accent) 100%
    );
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-size: 200% 200%;
    ${gradientDrift}
    ${forcedColorsText}
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.md}) {
    font-size: clamp(1.5rem, 6vw, 2.25rem);
  }
`;

export const Subtitle = styled.p`
  font-size: clamp(1rem, 2vw, 1.25rem);
  color: var(--color-slate);
  margin: 0 auto var(--spacing-2xl) auto;
  max-width: 520px;
  position: relative;
  z-index: 1;

  @media (max-width: ${({ theme }) => theme.breakpoint.md}) {
    margin-bottom: var(--spacing-xl);
  }
`;

export const CardsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: var(--spacing-lg);
  position: relative;
  z-index: 1;
  text-align: left;

  @media (max-width: ${({ theme }) => theme.breakpoint.lg}) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.sm}) {
    grid-template-columns: 1fr;
  }
`;

export const ContactTile = styled(Card).attrs({ as: "a" })`
  position: relative;
  padding: var(--spacing-lg);
  border-radius: 14px;
  background: var(--color-contact-tile-bg);
  border: 1px solid var(--color-contact-tile-border);
  text-decoration: none;
  transition: all 0.35s ease;

  &:hover,
  &:focus-visible {
    border-color: ${({ $accent }) => $accent};
    box-shadow:
      0 16px 40px var(--color-contact-shadow),
      0 0 20px ${({ $accent }) => $accent}33;
  }

  &:focus-visible {
    outline: 2px solid ${({ $accent }) => $accent};
    outline-offset: 2px;
  }

  @media (prefers-reduced-motion: reduce) {
    transition: border-color 0.2s ease;

    &:hover,
    &:focus-visible {
      transform: none;
    }
  }
`;

export const Arrow = styled.div`
  position: absolute;
  top: var(--spacing-lg);
  right: var(--spacing-lg);
  width: 28px;
  height: 28px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  color: var(--color-slate);
  transition: all 0.3s ease;

  svg {
    width: 18px;
    height: 18px;
  }

  ${ContactTile}:hover &,
  ${ContactTile}:focus-visible & {
    color: ${({ $accent }) => $accent};
  }
`;

export const IconFrame = styled.div`
  width: 64px;
  height: 64px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: ${({ $id }) => ($id === "gitHub" || $id === "email" ? "50%" : "14px")};
  background: var(--color-contact-tile-bg);
  border: 1px solid ${({ $accent }) => $accent};
  box-shadow:
    inset 0 0 16px ${({ $accent }) => $accent}33,
    0 0 20px ${({ $accent }) => $accent}22;
  transition: all 0.35s ease;

  &::before {
    content: "";
    position: absolute;
    inset: -8px;
    border: 1px dashed ${({ $accent }) => $accent}55;
    border-radius: ${({ $id }) => ($id === "gitHub" || $id === "email" ? "50%" : "18px")};
    pointer-events: none;
  }

  img {
    width: 32px;
    height: 32px;
    object-fit: contain;
    border-radius: ${({ $id }) => ($id === "gitHub" ? "50%" : "0")};
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.md}) {
    width: 56px;
    height: 56px;

    img {
      width: 28px;
      height: 28px;
    }
  }
`;

export const ContactName = styled.h3`
  font-size: 1.1rem;
  font-weight: 700;
  color: var(--color-off-white);
  margin: var(--spacing-xs) 0 0 0;
`;

export const ContactLabel = styled.p`
  font-size: 0.85rem;
  color: var(--color-slate);
  margin: 0;
`;
