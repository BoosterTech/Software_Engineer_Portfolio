import styled, { keyframes } from "styled-components";

const twinkle = keyframes`
  0%, 100% { opacity: 0.3; transform: scale(1); }
  50% { opacity: 1; transform: scale(1.4); }
`;

export const StarField = styled.div`
  position: fixed;
  inset: 0;
  pointer-events: none;
  z-index: -1;
  overflow: hidden;

  span {
    position: absolute;
    width: 2px;
    height: 2px;
    background: rgba(var(--color-white-rgb), 0.7);
    border-radius: 50%;
    animation: ${twinkle} 3s ease-in-out infinite;
    box-shadow: 0 0 6px 1px rgba(var(--color-white-rgb), 0.3);
  }

  @media (prefers-reduced-motion: reduce) {
    span {
      animation: none;
    }
  }
`;
