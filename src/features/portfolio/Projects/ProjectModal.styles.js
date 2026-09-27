import { Button } from "common/Button";
import { m } from "framer-motion";
import styled, { css } from "styled-components";

export const Backdrop = styled(m.div)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 1100;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgb(var(--color-black-rgb) / 0.8);
  backdrop-filter: blur(6px);
  padding: var(--spacing-lg);

  @media (max-width: ${({ theme }) => theme.breakpoint.lg}) {
    padding: 0;
  }
`;

export const Modal = styled(m.div)`
  position: relative;
  width: 100%;
  max-width: 800px;
  max-height: 90vh;
  overflow: hidden;
  border-radius: var(--radius-xl);
  background: var(--color-surface);
  border: 1px solid var(--color-border);
  box-shadow: 0 24px 80px rgb(var(--color-black-rgb) / 0.5);

  @media (max-width: ${({ theme }) => theme.breakpoint.lg}) {
    max-width: 100%;
    height: 100%;
    max-height: none;
    border-radius: 0;
    border: none;
  }
`;

export const ModalScroll = styled.div`
  overflow-y: auto;
  overflow-x: hidden;
  overscroll-behavior: contain;
  touch-action: pan-y;
  max-height: 90vh;
  height: 100%;

  &::-webkit-scrollbar {
    width: 8px;
  }

  &::-webkit-scrollbar-track {
    background: transparent;
  }

  &::-webkit-scrollbar-thumb {
    background: var(--color-border);
    border-radius: 4px;
  }
  @media (max-width: ${({ theme }) => theme.breakpoint.lg}) {
    max-height: none;
  }
`;

const modalButtonChrome = css`
  position: absolute;
  z-index: 10;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  border: 1px solid var(--color-border);
  background: rgba(var(--color-surface-rgb), 0.9);
  color: var(--color-text-primary);
  cursor: pointer;
  transition:
    background-color var(--transition-fast),
    border-color var(--transition-fast),
    color var(--transition-fast);
  backdrop-filter: blur(8px);

  &:hover {
    background: var(--color-primary);
    color: var(--color-white);
    border-color: var(--color-primary);
  }

  svg {
    width: 18px;
    height: 18px;
  }
`;

export const CloseButton = styled.button`
  ${modalButtonChrome}
  top: max(var(--spacing-md), env(safe-area-inset-top, 0px));
  right: max(var(--spacing-md), env(safe-area-inset-right, 0px));
`;

export const ModalNavButton = styled.button`
  ${modalButtonChrome}
  top: 50%;
  transform: translateY(-50%);
  ${({ $left }) =>
    $left ? "left: var(--spacing-md);" : "right: var(--spacing-md);"}

  @media (max-width: ${({ theme }) => theme.breakpoint.lg}) {
    display: none;
  }
`;

export const ModalSwap = styled(m.div)`
  position: relative;
  overflow: clip;
`;

export const ModalBody = styled(m.div)`
  background: var(--color-surface);
`;

export const ModalImageWrapper = styled.div`
  position: relative;
  border-bottom: 1px solid var(--color-border);

  @media (max-width: ${({ theme }) => theme.breakpoint.lg}) {
    &::before,
    &::after {
      content: "";
      position: absolute;
      top: 0;
      bottom: 0;
      width: 72px;
      z-index: 2;
      pointer-events: none;
    }

    &::before {
      left: 0;
      background: linear-gradient(
        90deg,
        rgb(var(--color-black-rgb) / 0.55) 0%,
        transparent 100%
      );
    }

    &::after {
      right: 0;
      background: linear-gradient(
        -90deg,
        rgb(var(--color-black-rgb) / 0.55) 0%,
        transparent 100%
      );
    }
  }
`;

export const ModalImage = styled.img`
  width: 100%;
  height: auto;
  max-height: 450px;
  object-fit: contain;
  object-position: top center;
  display: block;
  border-radius: var(--radius-xl) var(--radius-xl) 0 0;
  background: var(--color-terminal-bg);
  opacity: ${({ $loaded }) => ($loaded ? 1 : 0)};
  transition: opacity 0.3s ease;

  @media (prefers-reduced-motion: reduce) {
    transition: none;
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.lg}) {
    border-radius: 0;
  }

  @media (max-height: 500px) {
    max-height: 200px;
  }
`;

export const ModalContent = styled.div`
  padding: var(--spacing-xl) var(--spacing-xl) var(--spacing-2xl);

  @media (max-width: ${({ theme }) => theme.breakpoint.sm}) {
    padding: var(--spacing-lg);
  }

  @media (max-height: 500px) {
    padding: var(--spacing-md);
  }
`;

export const ModalTitle = styled.h2`
  font-size: clamp(1.5rem, 3vw, 2rem);
  font-weight: 800;
  color: var(--color-text-primary);
  margin: 0 0 var(--spacing-md) 0;
  line-height: 1.3;
`;

export const ModalDescription = styled.div`
  font-size: 1rem;
  line-height: 1.8;
  color: var(--color-text-secondary);

  p {
    margin: 0 0 var(--spacing-md) 0;
  }

  p:last-child {
    margin-bottom: 0;
  }

  ul {
    margin: 0;
    padding-left: var(--spacing-lg);
  }

  li {
    margin-bottom: var(--spacing-xs);
  }

  li:last-child {
    margin-bottom: 0;
  }
`;

export const ModalTechBadges = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: var(--spacing-xs);
  margin: var(--spacing-lg) 0;
`;

export const ModalTechBadge = styled.span`
  display: inline-flex;
  align-items: center;
  padding: var(--spacing-xxs) var(--spacing-sm);
  font-size: 0.8rem;
  font-weight: 600;
  color: var(--color-text-primary);
  background: rgba(var(--color-text-primary-rgb), 0.08);
  border: 1px solid rgba(var(--color-text-primary-rgb), 0.18);
  border-radius: var(--radius-md);
`;

export const ModalCTAContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: var(--spacing-sm);
  margin-top: var(--spacing-lg);
`;

export const ModalCTAButton = styled(Button)`
  min-height: 36px;
  padding: var(--spacing-xs) var(--spacing-md);
  font-size: 0.9rem;
  transition:
    background-color 0.3s ease,
    border-color 0.3s ease,
    color 0.3s ease;

  ${({ $secondary }) =>
    $secondary
      ? css`
          color: var(--color-text-primary);
          background: transparent;
          border: 1px solid rgba(var(--color-text-primary-rgb), 0.35);

          &:hover {
            background: rgba(var(--color-text-primary-rgb), 0.1);
            border-color: var(--color-text-primary);
          }
        `
      : css`
          color: var(--color-on-primary);
          background: var(--color-primary);
          border: 1px solid var(--color-primary);

          &:hover {
            color: var(--color-white);
            background: var(--color-primary-hover);
            border-color: var(--color-white);
          }
        `}

  svg {
    width: 16px;
    height: 16px;
  }
`;
