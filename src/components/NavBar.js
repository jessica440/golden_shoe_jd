import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { navBarTheme } from "./themes";
import { ThemeProvider } from "styled-components";
// import Basket from "./../images/basketicon";

const StyledNavBar = styled.nav`
  background-color: var(--colour-1);
  padding: 0;
  list-style-type: none;
  margin-bottom: 4rem;
  width: 100%;
  /* display: flex;
  justify-content: space-evenly; */
`;

const Ul = styled.ul`
  padding: 0;
`;

const Li = styled.li`
  font-family: var(--info-font);
  font-size: 2rem;
  list-style-type: none;
  display: inline-block;
  padding-left: 8rem;
`;

const InlineDiv = styled.div`
  display: flex;
  justify-content: space-evenly;
`;

const NavBar = () => {
  return (
    <ThemeProvider theme={navBarTheme}>
      <StyledNavBar>
        <InlineDiv>
          <Ul>
            <Li>
              <Link to="/">HOME</Link>
            </Li>
            <Li>
              <Link to="/products">PRODUCTS</Link>
            </Li>
            <Li>
              <Link to="/faqs">FAQs</Link>
            </Li>
            <Li>
              <Link to="/contact">CONTACT</Link>
            </Li>
          </Ul>
        </InlineDiv>
      </StyledNavBar>
    </ThemeProvider>
  );
};

export default NavBar;
