import React, { useState } from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 60px;
  background-color: ${(props) => props.color || "#fff"};
  box-shadow: ${(props) =>
    props.zoomed ? "0px 4px 8px rgba(0, 0, 0, 0.2)" : "0px 2px 4px rgba(0, 0, 0, 0.1)"};
  border-radius: ${(props) => (props.bordered ? "10px" : "0px")};
  padding: 10px;
  transition: all 0.3s ease;
`;

const Avatar = styled.div`
  width: ${(props) => props.size || "50px"};
  height: ${(props) => props.size || "50px"};
  border-radius: ${(props) => (props.bordered ? "50%" : "0px")};
  background-color: #ccc;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 18px;
  color: ${(props) => props.textColor || "#fff"};
  background-image: ${(props) => (props.src ? `url(${props.src})` : "none")};
  background-size: cover;
  background-position: center;
  border: ${(props) => (props.bordered ? "2px solid #fff" : "none")};
  animation: ${(props) => (props.animated ? "pulse 1s ease infinite" : "none")};

  @keyframes pulse {
    0% {
      transform: scale(1);
    }
    50% {
      transform: scale(1.05);
    }
    100% {
      transform: scale(1);
    }
  }
`;

const Dropdown = styled.select`
  appearance: none;
  background-color: transparent;
  border: none;
  font-size: 14px;
  color: ${(props) => props.textColor || "#333"};
`;

const Icon = styled.i`
  font-size: 20px;
  color: ${(props) => props.textColor || "#333"};
  margin-right: 10px;
`;



const AvatarComponent = ({
  color = "#f2f2f2",
  textColor = "#000000",
  src,
  initials = "",
  text = "",
  alt = "",
  size = 100,
  bordered,
  zoomed,
  icon,
  borderRadius = 0,
  animated,
  options,
}) => {
  const [selectedOption, setSelectedOption] = useState(
    options ? options[0] : null
  );

  const handleChange = (event) => {
    setSelectedOption(event.target.value);
  };

  return (
    <Container color={color} zoomed={zoomed}>
      <Avatar
        src={src}
        size={size}
        bordered={bordered}
        borderRadius={borderRadius}
        textColor={textColor}
        animated={animated}
      >
        {src ? "" : initials}
      </Avatar>
      <div>
        {text && <p style={{ color: textColor }}>{text}</p>}
        {icon && <Icon className={icon} textColor={textColor} />}
        {options && (
          <Dropdown
            textColor={textColor}
            onChange={handleChange}
            value={selectedOption}
          >
            {options.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </Dropdown>
        )}
      </div>
    </Container>
  );
};

export default AvatarComponent;
