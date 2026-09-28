import {
  fadeInUp,
  float,
  forcedColorsText,
  gradientShift,
} from "common/animations";
import { m } from "framer-motion";
import styled from "styled-components";

export const Wrapper = styled.section`
  padding: var(--spacing-3xl) 0;
  margin: var(--spacing-md) 0;
  border-radius: var(--radius-xl);
  position: relative;
  overflow: hidden;

  @media (max-width: ${({ theme }) => theme.breakpoint.lg}) {
    margin: var(--spacing-2xl) 0;
    padding: 10px var(--spacing-lg) var(--spacing-2xl) var(--spacing-lg);
  }
`;

export const TitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: var(--spacing-xs);
  margin-bottom: var(--spacing-xl);
  animation: ${fadeInUp} 0.8s ease-out;

  @media (max-width: ${({ theme }) => theme.breakpoint.xl}) {
    gap: var(--spacing-xs);
    margin-bottom: var(--spacing-lg);
  }
`;

export const Header = styled.h2`
  font-size: clamp(2.5rem, 6vw, 4rem);
  font-weight: 800;
  margin: 0;
  color: var(--color-text-primary);
  line-height: 1.2;
  position: relative;
  padding-bottom: 0.3em;
  padding-left: 16px;
  transform: ${({ $lang }) =>
    $lang === "English"
      ? "translateX(0px)"
      : $lang === "Polish"
        ? "translateX(6px)"
        : "none"};
  background: linear-gradient(
    135deg,
    var(--color-text-primary) 0%,
    var(--color-primary) 50%,
    var(--color-accent) 100%
  );
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-size: 200% 200%;
  animation: ${gradientShift} 15s ease-in-out infinite;
  ${forcedColorsText}

  @media (max-width: ${({ theme }) => theme.breakpoint.xl}) {
    padding-left: 13px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.lg}) {
    transform: ${({ $lang }) =>
      $lang === "English"
        ? "translateX(0px)"
        : $lang === "Polish"
          ? "translateX(1px)"
          : "none"};
  }
`;

export const DragLayer = styled(m.div)`
  width: 100%;
  touch-action: pan-y;
  will-change: transform;
  -webkit-mask-image: linear-gradient(
    90deg,
    transparent,
    rgba(var(--color-black-rgb), 1) 12%,
    rgba(var(--color-black-rgb), 1) 88%,
    transparent
  );
  mask-image: linear-gradient(
    90deg,
    transparent,
    rgba(var(--color-black-rgb), 1) 12%,
    rgba(var(--color-black-rgb), 1) 88%,
    transparent
  );

  @media (max-width: ${({ theme }) => theme.breakpoint.md}) {
    -webkit-mask-image: none;
    mask-image: none;
  }
`;

export const ProjectsWrapper = styled.div`
  position: relative;
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  overflow: hidden;
  /* border-radius: var(--radius-xl); */
  /* border-right: 1px solid var(--color-white); */
`;

export const ProjectIcon = styled.img`
  width: 70px;
  height: 70px;
  margin-bottom: calc(-4 * var(--spacing-sm));
  border-radius: 50%;
  border: 2px solid var(--color-primary);
  box-shadow: var(--shadow-lg);
  animation: ${float} 3s ease-in-out infinite;
  transition: transform var(--transition-normal);

  &:hover {
    transform: scale(1.1);
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.xl}) {
    width: 70px;
    height: 70px;
    margin-bottom: calc(-3 * var(--spacing-sm));
  }
`;

export const ProjectsTrack = styled.div`
  --card-width: 70%;
  --card-gap: 2%;

  display: flex;
  align-items: center;
  gap: var(--card-gap);
  width: 100%;
  padding: var(--spacing-md) 0;
  transform: translateX(
    calc(
      -1 * var(--active-index) * (var(--card-width) + var(--card-gap)) +
        (100% - var(--card-width)) / 2
    )
  );
  transition: transform 0.5s ease;

  @media (max-width: ${({ theme }) => theme.breakpoint.md}) {
    --card-width: 80%;
    --card-gap: 3%;
  }
`;

export const CarouselButton = styled.button`
  position: absolute;
  top: 50%;
  ${({ $left }) =>
    $left ? "left: var(--spacing-md)" : "right: var(--spacing-md)"};
  transform: translateY(-50%);
  z-index: 10;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 44px;
  height: 44px;
  border-radius: 50%;
  border: 1px solid var(--color-border);
  background: var(--color-hero-nav-bg);
  color: var(--color-white);
  backdrop-filter: blur(8px);
  cursor: pointer;
  transition: all var(--transition-fast);
  box-shadow: var(--shadow-lg);

  &:hover {
    background: var(--color-primary);
    border-color: var(--color-primary);
  }

  svg {
    width: 22px;
    height: 22px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.md}) {
    display: none;
  }
`;

export const NavDots = styled.div`
  display: flex;
  justify-content: center;
  gap: var(--spacing-sm);
  margin-top: var(--spacing-xl);
`;

export const NavDot = styled.button`
  width: 24px;
  height: 24px;
  border-radius: 50%;
  border: none;
  padding: 7px;
  background-clip: content-box;
  cursor: pointer;
  background: ${({ $active }) =>
    $active ? "var(--color-primary)" : "var(--color-border)"};
  transition: all var(--transition-fast);

  &:hover {
    background: ${({ $active }) =>
      $active ? "var(--color-primary)" : "var(--color-secondary)"};
  }
`;
