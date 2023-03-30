import React, { useState } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 1rem;
  position: relative;
`;

const Label = styled.label`
  font-weight: bold;
  margin-bottom: 0.5rem;
  position: absolute;
  top: ${props => props.focused || props.value ? '-1.5rem' : '0.5rem'};
  left: ${props => props.iconLeft ? '1.5rem' : '0.5rem'};
  transition: all 0.2s ease-in-out;
  pointer-events: none;
`;

const InputStyled = styled.input`
  width: ${props => props.fullWidth ? '100%' : props.width};
  padding: ${props => props.padding};
  border-radius: ${props => props.borderRadius};
  border: ${props => props.bordered ? `1px solid ${props.borderColor}` : 'none'};
  background: ${props => props.background};
  font-size: ${props => props.sizes[props.status]};
  border-bottom: ${props => props.underlined ? `1px solid ${props.borderColor}` : 'none'};
  
  &:focus {
    outline: none;
  }
`;

const Input = (props) => {
  const [focused, setFocused] = useState(false);

  const handleFocus = (e) => {
    setFocused(true);
    props.onFocus && props.onFocus(e);
  };

  const handleBlur = () => {
    setFocused(false);
  };

  return (
    <Container>
      {props.iconLeft && <props.iconLeft />}
      <Label htmlFor={props.name} focused={focused} value={props.value}>
        {props.label}
      </Label>
      <InputStyled
        type={props.type}
        id={props.name}
        name={props.name}
        value={props.value}
        onChange={props.onChange}
        placeholder={props.placeholder}
        fullWidth={props.fullWidth}
        width={props.width}
        padding={props.padding}
        borderRadius={props.borderRadius}
        borderColor={props.borderColor}
        background={props.background}
        sizes={props.sizes}
        status={props.status}
        bordered={props.bordered}
        underlined={props.underlined}
        onFocus={handleFocus}
        onBlur={handleBlur}
      />
      {props.contentRight && <props.contentRight />}
    </Container>
  );
};

Input.defaultProps = {
  type: "text",
  width: "auto",
  padding: "0.5rem 1rem",
  borderRadius: "0.25rem",
  borderColor: "#ccc",
  background: "#fff",
  sizes: {
    small: "0.875rem",
    medium: "1rem",
    large: "1.125rem",
  },
  status: "medium",
  bordered: true,
  underlined: false,
  placeholder: "",
};

export default Input;
