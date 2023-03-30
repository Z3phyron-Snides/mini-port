import React, { useState } from "react";
import styled from "styled-components";

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  ${({ blur }) =>
    blur &&
    `
    backdrop-filter: blur(10px);
  `}
`;

const ModalContainer = styled.div`
  background-color: white;
  border-radius: 10px;
  padding: 20px;
  width: ${({ width }) => (width ? width : "400px")};
  ${({ fullscreen }) =>
    fullscreen &&
    `
    width: 100%;
    height: 100%;
    border-radius: 0;
  `}
  ${({ animated }) =>
    animated &&
    `
    animation: fadeIn 0.5s ease-in-out;
  `}
  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;

const Modal = ({
  open,
  close,
  animated,
  blur,
  preventClose,
  width,
  fullscreen,
  onClose,
  onOpen,
  children,
}) => {
  const [isOpen, setIsOpen] = useState(open);

  const handleClose = () => {
    setIsOpen(false);
    onClose && onClose();
  };

  const handleOpen = () => {
    setIsOpen(true);
    onOpen && onOpen();
  };

  return isOpen ? (
    <Overlay onClick={preventClose ? () => {} : handleClose} blur={blur}>
      <ModalContainer
        onClick={(e) => e.stopPropagation()}
        animated={animated}
        width={width}
        fullscreen={fullscreen}
      >
        {children}
      </ModalContainer>
    </Overlay>
  ) : null;
};

export default Modal;
