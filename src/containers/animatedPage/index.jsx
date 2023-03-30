import Header from "./components/header";
import Intro from "./components/intro";
import "@fontsource/anton";

import styled from "styled-components";
import ContactBtn from "./components/contactBtn";
import MenuBtn from "./components/menuBtn";
import Menu from "./components/menu";
import MenuManager from "./context/menumanager";
import { useState } from "react";

const Container = styled.div`
  width: 100%;
  height: 80vh;
  position: relative;

  .content {
    margin-left: 5%;
    border-left: 1px solid;
    height: 100vh;
    overflow: hidden;
    @media screen and (max-width: 900px) {
      margin-left: 0;
      padding: 5%;
    }

   
  }

  main {
    display: flex;
    justify-content: space-between;
    align-items: end;
    height: 100vh;
  }
`;

const AnimatedPage = () => {
  const [open, setOpen] = useState(false);
  return (
    <Container>
      <MenuBtn setOpen={setOpen} open={open} />
      <Menu setOpen={setOpen} open={open} />
      <MenuManager>
        <div className="content">
          <Header />
          <main>
            <Intro />
            <ContactBtn setOpen={setOpen} open={open} />
          </main>
        </div>
      </MenuManager>
    </Container>
  );
};

export default AnimatedPage;
