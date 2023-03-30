import React from "react";
import styled, { keyframes } from "styled-components";

const spin = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

const Points = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: ${({ size }) => size};
  & > div {
    width: 10px;
    height: 10px;
    margin: 0 5px;
    border-radius: 50%;
    display: inline-block;
    animation: ${spin} 1s ease-in-out infinite;
  }
`;

const PointsOpacity = styled(Points)`
  & > div {
    width: 8px;
    height: 8px;
    animation-delay: 0s;
    &:nth-child(1) {
      animation-delay: 0.1s;
    }
    &:nth-child(2) {
      animation-delay: 0.2s;
    }
    &:nth-child(3) {
      animation-delay: 0.3s;
    }
  }
`;

const Gradient = styled.div`
  border: 4px solid #f3f3f3;
  border-top: 4px solid ${({ color }) => color};
  border-radius: 50%;
  width: ${({ size }) => size};
  height: ${({ size }) => size};
  animation: ${spin} 1s linear infinite;
`;

const Spinner = styled.div`
  border: 4px solid #f3f3f3;
  border-top: 4px solid ${({ color }) => color};
  border-radius: 50%;
  width: ${({ size }) => size};
  height: ${({ size }) => size};
  animation: ${spin} 1s linear infinite;
`;

const PreLoader = ({ type = "default", size = "50px", color = "#3498db" }) => {
  switch (type) {
    case "points":
      return (
        <Points size={size}>
          <div />
          <div />
          <div />
        </Points>
      );
    case "points-opacity":
      return (
        <PointsOpacity size={size}>
          <div />
          <div />
          <div />
        </PointsOpacity>
      );
    case "gradient":
      return <Gradient size={size} color={color} />;
    case "spinner":
      return <Spinner size={size} color={color} />;
    default:
      return <Spinner size={size} color={color} />;
  }
};

export default PreLoader;
