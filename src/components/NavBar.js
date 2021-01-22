import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { navBarTheme } from "./themes";
import { ThemeProvider } from "styled-components";
import Basket from "../images/basketicon.svg";
import Search from "../images/searchIcon.svg";

const StyledNavBar = styled.nav`
  background-color: var(--colour-1);
  padding: 0;
  list-style-type: none;
  margin-bottom: 4rem;
  width: 100%;
  /* display: flex;
  @media (max-width: 1035px) {
    flex-direction: column;
  } */
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

const Img = styled.img`
  padding: 1rem;
`;

const NavBar = () => {
  return (
    <ThemeProvider theme={navBarTheme}>
      <StyledNavBar>
        <Img src={Basket} />
        <Img src={Search} />
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
