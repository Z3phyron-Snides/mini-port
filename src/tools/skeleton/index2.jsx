import React from "react";
import styled from "styled-components";

const SkeletonContainer = styled.div`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  border-radius: ${(props) => props.borderRadius};
  display: flex;
  flex-direction: ${(props) => props.flexDirection};
  margin-left: ${(props) => props.marginLeft};
  margin-top: ${(props) => props.marginTop};
  align-items: ${(props) => props.alignItems};
  animation: ${(props) =>
    props.animation === "pulse"
      ? "pulse 1s infinite"
      : props.animation === "wave"
      ? "wave 1s infinite"
      : ""};
`;

const Skeleton = ({
  count = 1,
  circle = false,
  width = "100%",
  height = "100%",
  borderRadius = "5px",
  flexDirection = "column",
  marginLeft = "0",
  marginTop = "0",
  alignItems = "stretch",
  animation = false,
}) => {
  const skeletons = Array.from({ length: count }, (_, i) => (
    <SkeletonContainer
      key={i}
      width={width}
      height={height}
      borderRadius={circle ? "50%" : borderRadius}
      flexDirection={flexDirection}
      marginLeft={marginLeft}
      marginTop={marginTop}
      alignItems={alignItems}
      animation={animation}
    />
  ));

  return <>{skeletons}</>;
};

export default Skeleton;
