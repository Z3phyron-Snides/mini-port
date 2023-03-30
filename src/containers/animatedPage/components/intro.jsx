import styled from "styled-components";
import AnimateWord from "../../../utils/animateWords";

const Container = styled.div`
  margin-top: auto;

  font-size: clamp(25px, 5vw, 15vw);
  width: 70vw;
  letter-spacing: 1px;
  text-transform: uppercase;
  font-family: "Anton", sans-serif;

 
`;

const Intro = () => {
  const variants = {
    hidden: { opacity: 0, y: "100%" },
    visible: { opacity: 1, y: 0 },
  };

  const transition = {
    type: "spring",
    stiffness: 500,
    damping: 50,
    duration: 1,
  };
  return (
    <Container>
      <AnimateWord
        tag="h1"
        text="Ricketts Rowland Oluwadamilare"
        variants={variants}
        transition={transition}
        stagger={0.05}
      />
    </Container>
  );
};

export default Intro;
