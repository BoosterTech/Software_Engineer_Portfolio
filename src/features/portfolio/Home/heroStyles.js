import { forcedColorsText, gradientDrift } from "common/animations";
import { ScrollButton, Button } from "common/Button";
import styled from "styled-components";

export { ScrollButton as ViewMyWorkButton, Button as DownloadCVButton };

export const WelcomeLabel = styled.span`
  display: inline-flex;
  align-items: center;
  gap: var(--spacing-xs);
  padding: 0.45rem 1rem;
  font-size: 0.8rem;
  font-weight: 600;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: transparent;
  background: linear-gradient(
    135deg,
    var(--color-primary) 0%,
    var(--color-accent) 100%
  );
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  border: 1px solid var(--color-border);
  border-radius: 50px;
  margin-bottom: var(--spacing-md);
  ${forcedColorsText}

  svg {
    color: var(--color-primary);
    width: 0.75rem;
    height: 0.75rem;
    flex-shrink: 0;
  }
`;

export const HeroTitle = styled.h1`
  font-size: clamp(1.5rem, 8vw, 4.5rem);
  font-weight: 800;
  line-height: 1.05;
  color: var(--color-text-primary);
  margin: 0 0 var(--spacing-sm) 0;
`;

export const GradientText = styled.span`
  display: inline-block;
  position: relative;
  padding-block-end: 0.15em;
  margin-block-end: -0.15em;
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
`;

export const TechStackText = styled.p`
  font-size: 1.1rem;
  font-weight: 500;
  color: var(--color-primary);
  margin: 0 0 var(--spacing-md) 0;
`;

export const HeroDescription = styled.p`
  font-size: clamp(1.1rem, 2.5vw, 1.35rem);
  font-weight: 400;
  color: var(--color-text-secondary);
  line-height: 1.6;
  margin: var(--spacing-xl) 0 0 0;
  max-width: 520px;

  @media (max-width: ${({ theme }) => theme.breakpoint.xl2}) {
    max-width: none;
  }
`;

export const LocationSpan = styled.span`
  color: var(--color-primary);
  font-weight: 600;
`;

export const ButtonsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: var(--spacing-md);
  margin-top: var(--spacing-xl);

  @media (max-width: ${({ theme }) => theme.breakpoint.xl2}) {
    justify-content: center;
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.md}) {
    flex-direction: column;
    align-items: stretch;
  }
`;
