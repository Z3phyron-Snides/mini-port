import React from "react";
import styled from "styled-components";

const TooltipContainer = styled.div`
  position: relative;
`;

const TooltipText = styled.div`
  display: none;
  position: absolute;
  ${(props) => {
    switch (props.placement) {
      case "top":
        return "top: calc(100% + 8px);";
      case "bottom":
        return "bottom: calc(100% + 8px);";
      case "left":
        return "left: calc(100% + 8px);";
      case "right":
        return "right: calc(100% + 8px);";
      default:
        return "bottom: calc(100% + 8px);";
    }
  }};
  left: 50%;
  transform: translateX(-50%);
  padding: 8px;
  background-color: black;
  color: white;
  border-radius: 4px;
  border: ${(props) => (props.bordered ? "1px solid white" : "none")};
  transition: all 0.3s ease-in-out;
  ${(props) =>
    props.animated
      ? "opacity: 0; transform: translate(-50%, -8px);"
      : ""} &:hover {
    ${(props) =>
      props.animated ? "opacity: 1; transform: translate(-50%, 0);" : ""}
  }
`;

const TooltipTrigger = styled.span`
  position: relative;
  &:hover + ${TooltipText} {
    display: inline-block;
  }
`;

interface TooltipProps {
  content: string | React.ReactNode;
  animated?: boolean;
  placement?: "top" | "bottom" | "left" | "right";
  bordered?: boolean;
}

const Tooltip: React.FC<TooltipProps> = ({
  content,
  children,
  animated = false,
  placement = "bottom",
  bordered = false,
}) => {
  return (
    <TooltipContainer>
      <TooltipTrigger>{children}</TooltipTrigger>
      <TooltipText
        placement={placement}
        bordered={bordered}
        animated={animated}
      >
        {content}
      </TooltipText>
    </TooltipContainer>
  );
};

export default Tooltip;
