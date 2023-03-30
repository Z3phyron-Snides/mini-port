import React, { useState } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { FaSearch, FaTimes } from "react-icons/fa";

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Circle = styled(motion.div)`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: #333;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

const InputContainer = styled(motion.div)`
  position: relative;
`;

const Input = styled.input`
  padding: 10px;
  border: none;
  background-color: #f2f2f2;
  border-radius: 5px;
  width: 250px;
  font-size: 16px;
`;

const Dropdown = styled(motion.div)`
  position: absolute;
  top: 45px;
  left: 0;
  right: 0;
  background-color: #f2f2f2;
  padding: 10px;
  border-radius: 5px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const variants = {
  open: {
    scale: 1.2,
    rotate: 180,
    transition: {
      duration: 0.3,
    },
  },
  closed: {
    scale: 1,
    rotate: 0,
    transition: {
      duration: 0.3,
    },
  },
};

const Search = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const [results, setResults] = useState([]);

  const handleInput = (e) => {
    setInputValue(e.target.value);
    if (e.target.value.length > 2) {
      setResults(["Result 1", "Result 2", "Result 3"]);
    } else {
      setResults([]);
    }
  };

  return (
    <Container>
      <Circle
        variants={variants}
        animate={isOpen ? "open" : "closed"}
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? (
          <FaTimes color="#fff" size={16} />
        ) : (
          <FaSearch color="#fff" size={16} />
        )}
      </Circle>
      <InputContainer>
        <Input
          type="text"
          placeholder="Search..."
          value={inputValue}
          onChange={handleInput}
          onFocus={() => setIsOpen(true)}
          onBlur={() => setIsOpen(false)}
        />
        {results.length > 0 && isOpen && (
          <Dropdown initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
            {results.map((result) => (
              <div key={result}>{result}</div>
            ))}
          </Dropdown>
        )}
      </InputContainer>
    </Container>
  );
};

export default Search;
