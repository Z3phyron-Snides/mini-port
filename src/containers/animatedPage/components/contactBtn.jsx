import styled from "styled-components";
import { motion } from "framer-motion";
import { AiOutlinePlus } from "react-icons/ai";

const Container = styled.div`
  position: absolute;
  bottom: 15vh;
  right: 5%;

  @media screen and (max-width: 900px) {
    z-index: 999;
    bottom: -10vh;
  }
`;
const Button = styled(motion.button)`
  outline: none;
  border: none;
  padding: 10px 25px;
  background: ${({ open }) => (open ? "#fff" : "#000")};
  color: ${({ open }) => (open ? "#000000" : "#fff")};
  font-size: 18px;
  letter-spacing: 1px;
  display: flex;
  align-items: center;
  gap: 5px;
  z-index: 999;

  .icon {
    font-size: 20px;
  }

  @media screen and (max-width: 900px) {
    border-radius: 50px;
    padding: 7px 20px;
    span {
      display: none;
    }
  }
`;

const ContactBtn = (props) => {
  const { open, setOpen } = props;

  const handleClick = () => {
    setOpen(!open);
  };
  return (
    <Container>
      <Button
        open={open}
        onClick={handleClick}
        initial={{ x: "100%", opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{
          duration: 0.5,
          type: "spring",
          stiffness: 500,
          damping: 50,
        }}
      >
        <span>Contact</span> <AiOutlinePlus className="icon" />
      </Button>
    </Container>
  );
};

export default ContactBtn;
