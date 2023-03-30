import styled from "styled-components";
import AnimateWord from "../../../utils/animateWords";

const Container = styled.div`
  position: absolute;
  top: 10%;
  right: 5%;
  font-size: clamp(15px, 2vw, 14vw);
  width: 50%;
  text-align: right;
  font-weight: 400;
  /* letter-spacing: 1px; */
  @media screen and (max-width: 600px) {
    width: 80%;
    /* font-size: 20px; */
  }
`;

const Header = () => {
  const variants = {
    hidden: { opacity: 0, y: "100%" },
    visible: { opacity: 1, y: 0 },
  };

  const transition = {
    type: "spring",
    stiffness: 500,
    damping: 50,
    duration: 0.7,
  };
  return (
    <Container>
      <AnimateWord
        text="Full-Stack developer at Tractive Engine. "
        variants={variants}
        transition={transition}
        stagger={0.05}
      />
      <AnimateWord
        text="based in Lagos state, Nigeria."
        variants={variants}
        transition={transition}
        stagger={0.5}
      />
    </Container>
  );
};

export default Header;
