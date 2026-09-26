import styled from "styled-components";

export const ShareWrapper = styled.div`
  position: relative;
  display: flex;
`;

export const ShareIconButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  background: none;
  border: none;
  border-radius: var(--radius-md);
  padding: var(--spacing-sm);
  width: 40px;
  height: 40px;
  flex-shrink: 0;
  cursor: pointer;
  color: var(--color-text-primary);
  transition: color var(--transition-fast);

  &:hover {
    color: var(--color-primary);
  }

  svg {
    font-size: 1.2rem;
  }
`;

export const ShareTooltip = styled.span`
  position: absolute;
  top: calc(100% + var(--spacing-xs));
  right: 0;
  white-space: nowrap;
  font-size: 0.8rem;
  font-weight: 600;
  padding: var(--spacing-xs) var(--spacing-sm);
  background: var(--color-surface);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-md);
  box-shadow: var(--shadow-lg);
  color: var(--color-text-primary);
  opacity: 0;
  visibility: hidden;
  transform: translateY(-4px);
  transition:
    opacity var(--transition-fast),
    transform var(--transition-fast),
    visibility var(--transition-fast);
  pointer-events: none;

  &.visible {
    opacity: 1;
    visibility: visible;
    transform: translateY(0);
  }

  @media (prefers-reduced-motion: reduce) {
    transition: none;
  }
`;

/* Mirrors Navigation's MobileNavItem row style as a real button, with a
   divider separating it from the nav links above. */
export const ShareMenuButton = styled.button`
  display: flex;
  align-items: center;
  gap: var(--spacing-md);
  width: 100%;
  padding: var(--spacing-md) var(--spacing-lg);
  margin-top: var(--spacing-xs);
  padding-top: var(--spacing-md);
  border: none;
  border-top: 1px solid var(--color-border);
  border-radius: 0 0 var(--radius-md) var(--radius-md);
  background: none;
  cursor: pointer;
  color: var(--color-text-primary);
  font: inherit;
  font-weight: 600;
  font-size: 1rem;
  min-height: 48px;
  text-align: left;
  white-space: nowrap;
  transition: color var(--transition-fast);

  svg {
    font-size: 1.2rem;
    color: var(--color-primary);
    flex-shrink: 0;
    width: 20px;
    transition: color var(--transition-fast);
  }

  &:hover {
    color: var(--color-primary);
  }

  ${(p) =>
    p.$feedback &&
    `
      color: var(--color-primary);
      svg {
        color: var(--color-accent);
      }
    `}
`;
