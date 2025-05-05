import styled, { keyframes } from "styled-components";

const spin = keyframes`
  0% {
    transform: rotate(0deg);
    box-shadow: inset 0 0 0 0.2em #ff0000;
  }
  50% {
    box-shadow: inset 0 0 0 0.5em #ffffff;
  }
  100% {
    transform: rotate(360deg);
    box-shadow: inset 0 0 0 0.2em #000000;
  }
`;

export const StyledSpinner = styled.div`
  margin: 40px auto;
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background: linear-gradient(to bottom, #ff0000 50%, #ffffff 50%);
  position: relative;
  animation: ${spin} 1s linear infinite;
  border: 4px solid #000;

  &::before {
    content: "";
    position: absolute;
    top: 26px;
    left: 26px;
    width: 8px;
    height: 8px;
    background: #000;
    border: 3px solid white;
    border-radius: 50%;
    z-index: 2;
  }

  &::after {
    content: "";
    position: absolute;
    top: 50%;
    left: 0;
    width: 100%;
    height: 4px;
    background: #000;
    transform: translateY(-50%);
    z-index: 1;
  }
`;
