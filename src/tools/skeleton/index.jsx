import React from "react";
import styled from "styled-components";

const SkeletonWrapper = styled.div`
  background-color: lightgray;
  width: ${({ width }) => width || "100%"};
  height: ${({ height }) => height || "100%"};
  border-radius: ${({ borderRadius, circle }) =>
    circle ? "50%" : borderRadius || "5px"};
  display: flex;
  flex-direction: ${({ flexDirection }) => flexDirection || "column"};
  align-items: ${({ alignItems }) => alignItems || "stretch"};
  margin-left: ${({ marginLeft }) => marginLeft || "0"};
  margin-top: ${({ marginTop }) => marginTop || "0"};
  animation: ${({ animation }) =>
    animation === "pulse"
      ? "pulse 1s ease-in-out infinite"
      : animation === "wave"
      ? "wave 1s ease-in-out infinite"
      : "none"};

  @keyframes pulse {
    0% {
      opacity: 0.6;
    }
    100% {
      opacity: 1;
    }
  }

  @keyframes wave {
    0% {
      transform: translateX(-100%);
    }
    100% {
      transform: translateX(100%);
    }
  }
`;

const Skeleton = ({
  count = 1,
  circle = false,
  width,
  height,
  borderRadius,
  flexDirection,
  marginLeft,
  marginTop,
  alignItems,
  animation,
}) => {
  return (
    <>
      {Array.from({ length: count }).map((_, index) => (
        <SkeletonWrapper
          key={index}
          circle={circle}
          width={width}
          height={height}
          borderRadius={borderRadius}
          flexDirection={flexDirection}
          marginLeft={marginLeft}
          marginTop={marginTop}
          alignItems={alignItems}
          animation={animation}
        />
      ))}
    </>
  );
};

export default Skeleton;
