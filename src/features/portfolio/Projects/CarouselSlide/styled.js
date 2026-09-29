import { Button } from "common/Button";
import { m } from "framer-motion";
import styled, { css } from "styled-components";

export const Slide = styled(m.div)`
  position: relative;
  flex: 0 0 var(--card-width);
  aspect-ratio: 16 / 10;
  border-radius: var(--radius-xl);
  overflow: hidden;
  border: 1px solid var(--color-border);
  box-shadow: var(--shadow-lg);
  cursor: pointer;
  background: var(--color-surface);
  transition:
    transform 0.45s ease,
    transform-origin 0.45s ease,
    opacity 0.45s ease,
    filter 0.45s ease,
    border-color 0.45s ease,
    box-shadow 0.45s ease;

  ${({ $isActive, $position }) =>
    $isActive
      ? css`
          z-index: 2;
          border-color: var(--color-primary);
          box-shadow: 0 8px 24px rgba(var(--color-primary-rgb), 0.18);
        `
      : css`
          transform: perspective(1200px)
            ${
              $position === "left"
                ? "rotateY(-14deg)"
                : $position === "right"
                  ? "rotateY(14deg)"
                  : "scale(0.92)"
            }
            scale(0.88);
          transform-origin: ${
            $position === "left"
              ? "right center"
              : $position === "right"
                ? "left center"
                : "center"
          };
          opacity: 0.5;
          filter: brightness(0.72);
        `}

  @media (max-width: ${({ theme }) => theme.breakpoint.md}) {
    aspect-ratio: 16 / 9;
  }
`;

export const SlideImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
  object-position: top center;
  display: block;
  pointer-events: none;
`;

export const Overlay = styled(m.div)`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  align-items: flex-end;
  background: linear-gradient(180deg, transparent 0%, var(--color-surface) 40%);

  @media (max-width: ${({ theme }) => theme.breakpoint.md}) {
    display: none;
  }
`;

export const BottomBar = styled.div`
  position: relative;
  z-index: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: var(--spacing-xs);
  width: 100%;
  padding: clamp(4px, 1.2cqw, var(--spacing-sm));
  background: transparent;
  container-type: inline-size;

  @media (max-width: ${({ theme }) => theme.breakpoint.lg}) {
    padding-bottom: var(--spacing-xs);
  }
`;

export const BottomRow = styled.div`
  display: flex;
  align-items: center;
  gap: var(--spacing-md);
  min-width: 0;
`;

export const CTAContainer = styled.div`
  position: relative;
  z-index: 1;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: clamp(4px, 1cqw, var(--spacing-sm));
  margin-left: auto;

  @media (max-width: ${({ theme }) => theme.breakpoint.md}) {
    display: none;
  }
`;

export const CTAButton = styled(Button)`
  min-height: 0;
  height: clamp(22px, 4.5cqw, 34px);
  padding: clamp(0px, 0.5cqw, var(--spacing-xs))
    clamp(6px, 1.6cqw, var(--spacing-sm));
  font-size: clamp(0.65rem, 1.8cqw, 0.85rem);
  transition: all 0.3s ease;

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
    width: clamp(11px, 2cqw, 14px);
    height: clamp(11px, 2cqw, 14px);
  }
`;

export const ExpandButton = styled.button`
  position: absolute;
  top: var(--spacing-sm);
  right: var(--spacing-sm);
  z-index: 4;
  width: 32px;
  height: 32px;
  border-radius: 50%;
  border: 1px solid var(--color-border);
  background: rgba(var(--color-surface-rgb), 0.85);
  color: var(--color-text-primary);
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition:
    background var(--transition-fast),
    color var(--transition-fast),
    border-color var(--transition-fast);

  &:hover {
    color: var(--color-primary);
    border-color: var(--color-primary);
  }

  &:focus-visible {
    outline: 2px solid var(--color-primary);
    outline-offset: 2px;
  }

  svg {
    width: 14px;
    height: 14px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.lg}) {
    display: none;
  }
`;
