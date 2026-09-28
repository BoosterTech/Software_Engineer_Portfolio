import { forcedColorsText, gradientDrift } from "common/animations";
import Card from "common/Card";
import RichText from "common/RichText";
import { m } from "framer-motion";
import styled from "styled-components";

export const Wrapper = styled.article`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: var(--spacing-3xl);
  align-items: center;
  padding: var(--spacing-3xl) 0;
  position: relative;

  @media (max-width: ${({ theme }) => theme.breakpoint.xl2}) {
    grid-template-columns: minmax(0, 1fr);
    gap: var(--spacing-2xl);
    padding: 10px 0 var(--spacing-2xl) 0;
  }
`;

export const TerminalColumn = styled(m.div)`
  min-width: 0;

  @media (max-width: ${({ theme }) => theme.breakpoint.xl2}) {
    order: 1;
  }
`;

export const ContentColumn = styled(m.div)`
  display: flex;
  flex-direction: column;
  gap: var(--spacing-lg);
  min-width: 0;
`;

export const JourneyLabel = styled.span`
  display: inline-flex;
  align-items: center;
  gap: var(--spacing-sm);
  padding: 0.45rem 1rem;
  font-size: 0.8rem;
  font-weight: 700;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  color: var(--color-primary);
  border: 1px solid var(--color-border);
  border-radius: 50px;
  align-self: flex-start;

  svg {
    width: 0.75rem;
    height: 0.75rem;
    flex-shrink: 0;
  }
`;

export const PlainHeadingPart = styled.span`
  display: inline-block;
  color: var(--color-text-primary);
  -webkit-text-fill-color: var(--color-text-primary);
`;

export const GradientHeadingPart = styled.span`
  display: inline-block;
  position: relative;
  padding-block-end: 0.15em;
  margin-block-end: -0.15em;
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
  ${gradientDrift}
  ${forcedColorsText}
`;

export const JourneyParagraph = styled(RichText)`
  font-size: clamp(1rem, 1.4vw, 1.2rem);
  line-height: 1.6;
  color: var(--color-text-secondary);
  max-width: min(500px, 100%);

  p {
    margin: 0 0 var(--spacing-md) 0;
  }

  p:last-child {
    margin-bottom: 0;
  }
`;

export const FeaturesGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: var(--spacing-md);

  @media (max-width: ${({ theme }) => theme.breakpoint.md}) {
    grid-template-columns: 1fr;
    gap: 0;
  }
`;

export const FeatureCard = styled(Card).attrs({
  $glass: true,
  $hoverable: true,
  as: m.div,
})`
  min-width: 0;

  svg {
    width: 24px;
    height: 24px;
    color: var(--color-primary);
    flex-shrink: 0;
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.md}) {
    flex-direction: row;
    align-items: flex-start;
    gap: var(--spacing-md);
    text-align: left;
    padding: var(--spacing-md) 0;
    background: transparent;
    border: none;
    border-bottom: 1px solid var(--color-border);
    border-radius: 0;
    backdrop-filter: none;

    &:last-child {
      border-bottom: none;
    }
  }
`;

export const FeatureText = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2px;
  min-width: 0;
`;

export const FeatureTitle = styled.h3`
  font-size: 1rem;
  font-weight: 700;
  color: var(--color-text-primary);
  margin: 0;
`;

export const FeatureDescription = styled.p`
  font-size: 0.85rem;
  line-height: 1.5;
  color: var(--color-text-secondary);
  margin: 0;
`;

export const CodeTerminalWindow = styled.div`
  position: relative;
  background: var(--color-terminal-bg);
  border: 1px solid var(--color-terminal-border);
  border-radius: var(--radius-xl);
  box-shadow: 0 24px 60px var(--color-terminal-shadow);
  overflow: hidden;
`;

export const CodeTerminalHeader = styled.div`
  display: flex;
  align-items: center;
  gap: var(--spacing-md);
  padding: 14px 18px;
  background: var(--color-terminal-header-bg);
  border-bottom: 1px solid var(--color-terminal-border);
`;

export const CodeDots = styled.div`
  display: flex;
  gap: 8px;
`;

export const CodeDot = styled.span`
  width: 12px;
  height: 12px;
  border-radius: 50%;

  &:nth-child(1) {
    background: var(--color-code-red);
  }

  &:nth-child(2) {
    background: var(--color-code-yellow);
  }

  &:nth-child(3) {
    background: var(--color-code-green);
  }
`;

export const CodeTerminalTitle = styled.span`
  font-family: "Fira Code", "Courier New", monospace;
  font-size: 0.85rem;
  color: var(--color-text-secondary);

  span {
    color: var(--color-primary);
    margin-right: 6px;
  }
`;

export const CodeTerminalBody = styled.pre`
  margin: 0;
  padding: 24px;
  font-family: "Fira Code", "Courier New", monospace;
  font-size: clamp(0.7rem, 2vw, 0.8rem);
  line-height: 1.7;
  color: var(--color-code-text);
  overflow: auto;
  tab-size: 2;

  .comment {
    color: var(--color-code-comment);
  }

  .keyword {
    color: var(--color-code-keyword);
  }

  .type {
    color: var(--color-code-type);
  }

  .string {
    color: var(--color-code-string);
  }

  .property {
    color: var(--color-code-property);
  }

  .boolean {
    color: var(--color-code-boolean);
  }

  .variable {
    color: var(--color-code-variable);
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.sm}) {
    padding: 18px;
  }
`;
