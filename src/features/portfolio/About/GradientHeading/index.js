import { waveHand } from "common/animations";
import styled from "styled-components";

const GradientHeading = styled.h1`
  font-size: clamp(2rem, 4vw, 3.2rem);
  font-weight: 800;
  margin: 0;
  color: var(--color-text-primary);
  line-height: 1.1;
  position: relative;

  &:hover img {
    animation: ${waveHand} 4s infinite;
  }
`;

export default GradientHeading;
