import styled from "styled-components";
import {
  AiFillFacebook,
  AiFillInstagram,
  AiFillTwitterSquare,
} from "react-icons/ai";
import { FaLinkedin } from "react-icons/fa";
// import AnimateWord from "../../../utils/animateWords";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const Container = styled(motion.div)`
  display: flex;
  padding: 7%;
  position: fixed;
  top: 0;
  left: 0;
  /* right: 0;
  bottom: 0; */
  width: 100vw;
  height: 100%;
  background: #000;
  color: #fff;
  z-index: 998;

  @media screen and (max-width: 900px) {
    padding: 20% 5% 0;
  }
  @media screen and (max-width: 400px) {
    padding: 50% 5% 0;
  }

  /* font-family: "Anton", sans-serif; */
`;
const ExtLinks = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  position: fixed;
  right: 15%;
  bottom: 25%;
  overflow: hidden;
`;
const IntLinks = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
  overflow: hidden;
`;

const Link = styled(motion.a)`
  text-decoration: none;
  color: #fff;
  font-size: clamp(25px, 5vw, 15vw);
  letter-spacing: 1px;

  font-weight: 100;
  display: flex;
  gap: 20px;
  align-items: center;

  @media screen and (max-width: 400px) {
    font-size: 20px;
  }
`;
const Image = styled(motion.div)`
  width: 250px;

  img {
    width: 100%;
  }
`;
const Icon = styled(motion.a)`
  display: block;
  font-size: 30px;
  color: #fff;
  @media screen and (max-width: 400px) {
    font-size: 20px;
  }

  &:hover {
    transform: translateY(-10px);
  }
`;

const internalLinks = [
  {
    url: "/",
    component: "Home page",
    image:
      "https://images.pexels.com/photos/196659/pexels-photo-196659.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    url: "/",
    component: "About Page",
    image:
      "https://images.pexels.com/photos/1181676/pexels-photo-1181676.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    url: "/",
    component: "Contact Page",
    image:
      "https://images.pexels.com/photos/11035385/pexels-photo-11035385.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
];

const socialLinks = [
  {
    url: "https://www.facebook.com/",
    icon: <AiFillFacebook />,
    image: "https://example.com/images/facebook.jpg",
  },
  {
    url: "https://www.instagram.com/",
    icon: <AiFillInstagram />,
    image: "https://example.com/images/instagram.jpg",
  },
  {
    url: "https://twitter.com/",
    icon: <AiFillTwitterSquare />,
    image: "https://example.com/images/twitter.jpg",
  },
  {
    url: "https://www.linkedin.com/",
    icon: <FaLinkedin />,
    image: "https://example.com/images/linkedin.jpg",
  },

];

const Menu = (props) => {
  const { open } = props;
  const [hoveredLink, setHoveredLink] = useState(null);

  return (
    <Container
      open={open}
      initial={{ x: "-100%", opacity: 0 }}
      animate={
        open
          ? {
              x: 0,
              opacity: 1,
            }
          : {}
      }
      transition={{ duration: 0.8, staggerChildren: 0.6 }}
    >
      <AnimatePresence>
        <ExtLinks>
          {socialLinks.map((link, i) => (
            <Icon
              key={link.url}
              href={link.url}
              initial={{
                x: "-50px",
                opacity: 0,
              }}
              animate={
                open
                  ? {
                      x: 0,
                      opacity: 1,
                    }
                  : {}
              }
              transition={{
                type: "spring",
                stiffness: 500,
                damping: 50,
                duration: 0.7,
                delay: i * 0.4,
              }}
            >
              {link.icon}
            </Icon>
          ))}
        </ExtLinks>
      </AnimatePresence>

      <AnimatePresence>
        <IntLinks>
          {internalLinks.map(({ url, component, image }, i) => (
            <div
              style={{ position: "relative", display: "inline-block" }}
              key={url}
            >
              <Link
                href={url}
                initial={{
                  x: "-50px",
                  opacity: 0,
                }}
                animate={
                  open
                    ? {
                        x: 0,
                        opacity: 1,
                      }
                    : {}
                }
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.9 }}
                transition={{
                  type: "spring",
                  stiffness: 500,
                  damping: 50,
                  duration: 0.8,
                  delay: i * 0.6,
                }}
                onMouseOver={(event) =>
                  setHoveredLink({
                    url,
                    image,
                  })
                }
                onMouseOut={() => setHoveredLink(null)}
              >
                {component}
              </Link>
              {hoveredLink && hoveredLink.url === url && (
                <Image
                  initial={{ x: "200px", opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  style={{
                    position: "absolute",
                    top: "-50px",
                    left: "100%",
                    marginLeft: 10,
                  }}
                >
                  <img src={hoveredLink.image} alt="" />
                </Image>
              )}
            </div>
          ))}
        </IntLinks>
      </AnimatePresence>
    </Container>
  );
};

export default Menu;
