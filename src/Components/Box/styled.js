import styled, { keyframes } from "styled-components";

export const Box = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-right: 30px;
`;

const skew = keyframes`
  0% {
    transform: skew(0deg, 1deg);
  }
  50% {
    transform: translate(0px, 10px) skew(-1deg, 1deg);
  }
  100% {
    transform: skew(0deg, -1deg);
  }
`;

export const BlackFridayImage = styled.img`
  position: relative;
  top: -30px;
  width: 50%;
  animation: ${skew} 2s infinite;
  transform: ${skew}(2deg);
  animation-direction: alternate;
`;