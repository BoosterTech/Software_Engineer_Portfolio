import { fadeIn, forcedColorsText, gradientDrift } from "common/animations";
import { m } from "framer-motion";
import { Link } from "react-scroll";
import styled from "styled-components";

export const StyledList = styled.nav`
  width: 100vw;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1000;
  display: flex;
  flex-direction: row;
  list-style: none;
  align-items: center;
  justify-content: space-between;
  background-color: var(--color-surface);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  padding: var(--spacing-sm) var(--spacing-xl);
  margin: 0;
  font-weight: 600;
  font-size: 0.95rem;
  box-shadow: var(--shadow-sm);
  border-bottom: 1px solid var(--color-border);
  transition: transform var(--transition-normal);
  animation: ${fadeIn} 0.6s ease-out;

  &.nav-hidden {
    transform: translateY(-100%);
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.lg}) {
    padding: var(--spacing-md) var(--spacing-lg);
    font-size: 0.9rem;
  }
`;

export const TopRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex: 0 0 auto;
  gap: var(--spacing-md);

  @media (max-width: ${({ theme }) => theme.breakpoint.lg}) {
    justify-content: flex-start;
  }
`;

export const StyledListItem = styled.div`
  color: var(--color-text-primary);
  transition:
    color var(--transition-fast),
    background-color var(--transition-fast),
    border-color var(--transition-fast);
  border: 1px solid transparent;
  padding: var(--spacing-sm) var(--spacing-lg);
  border-radius: 20px;
  cursor: pointer;
  position: relative;

  @media (hover: hover) {
    &:hover {
      color: var(--color-primary);
      background-color: var(--color-surface);
      border-color: var(--color-border);
    }
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.xl2}) {
    padding: 10px 14px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.lg}) {
    padding: var(--spacing-sm) var(--spacing-md);
  }
`;

export const StyledScrollLink = styled(Link)`
  text-decoration: none;
  white-space: nowrap;

  &.active ${StyledListItem} {
    color: var(--color-white);
  }
`;

export const ActivePill = styled(m.span)`
  position: absolute;
  inset: 0;
  z-index: 0;
  border-radius: 20px;
  border: 1px solid var(--color-primary);
  background: linear-gradient(
    135deg,
    var(--color-primary),
    var(--color-accent)
  );

  @media (max-width: ${({ theme }) => theme.breakpoint.xl2}) {
    border-radius: 50%;
  }
`;

export const ItemLabel = styled.span`
  position: relative;
  z-index: 1;
  display: inline-flex;
  align-items: center;
`;

export const DevWrapper = styled.div`
  color: var(--color-text-primary);
  font-weight: 800;
  font-size: 1.5rem;
  padding: var(--spacing-sm) var(--spacing-md);
  border-radius: var(--radius-md);
  transition: filter var(--transition-fast);
  cursor: pointer;
  flex-shrink: 0;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: linear-gradient(
    135deg,
    var(--color-primary),
    var(--color-accent)
  );
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-size: 200% 200%;
  ${gradientDrift}
  ${forcedColorsText}
  z-index: 10;
  display: flex;
  flex-wrap: nowrap;

  &::before {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  &:hover {
    filter: brightness(1.1);
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.lg}) {
    font-size: 1.2rem;
    padding: var(--spacing-sm) var(--spacing-md);
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.sm}) {
    font-size: 1rem;
  }
`;

export const MenuContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
  flex: 0 1 auto;
  gap: var(--spacing-sm);

  @media (max-width: ${({ theme }) => theme.breakpoint.lg}) {
    display: none;
  }
`;

export const HamburgerButton = styled.button`
  display: none;
  background: none;
  border: none;
  border-radius: var(--radius-md);
  padding: var(--spacing-sm);
  width: 40px;
  height: 40px;
  flex-shrink: 0;
  cursor: pointer;
  color: var(--color-text-primary);
  align-items: center;
  justify-content: center;
  transition: color var(--transition-fast);

  &:hover {
    color: var(--color-primary);
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.lg}) {
    display: flex;
  }
`;

export const MobileMenuBackdrop = styled.div`
  display: none;
  position: absolute;
  top: 100%;
  left: 0;
  width: 100%;
  height: calc(100vh - var(--nav-height-actual, var(--nav-height-mobile)));
  background: rgba(var(--color-black-rgb), 0.4);
  opacity: 0;
  visibility: hidden;
  transition:
    opacity var(--transition-normal),
    visibility var(--transition-normal);
  z-index: 1;

  &.open {
    opacity: 1;
    visibility: visible;
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.lg}) {
    display: block;
  }
`;

export const MobileMenuPanel = styled.div`
  display: none;
  position: absolute;
  top: 100%;
  left: 0;
  width: 100%;
  background: var(--color-surface);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  border-bottom: 1px solid var(--color-border);
  box-shadow: var(--shadow-lg);
  padding: var(--spacing-md) var(--spacing-lg);
  flex-direction: column;
  gap: var(--spacing-xs);
  transform: translateY(-10px);
  opacity: 0;
  visibility: hidden;
  pointer-events: none;
  transition:
    opacity var(--transition-normal),
    transform var(--transition-normal),
    visibility var(--transition-normal);
  z-index: 2;

  &.open {
    transform: translateY(0);
    opacity: 1;
    visibility: visible;
    pointer-events: auto;
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.lg}) {
    display: flex;
  }
`;

export const MobileNavItem = styled(Link)`
  text-decoration: none;
  display: flex;
  align-items: center;
  gap: var(--spacing-md);
  padding: var(--spacing-md) var(--spacing-lg);
  border-radius: var(--radius-md);
  cursor: pointer;
  color: var(--color-text-primary);
  font-weight: 600;
  font-size: 1rem;
  min-height: 48px;
  transition:
    color var(--transition-fast),
    background-color var(--transition-fast);
  white-space: nowrap;

  svg {
    font-size: 1.2rem;
    color: var(--color-primary);
    flex-shrink: 0;
    width: 20px;
  }

  &.active {
    background: linear-gradient(
      135deg,
      var(--color-primary),
      var(--color-accent)
    );
    color: var(--color-white);

    svg {
      color: var(--color-white);
    }
  }
`;
