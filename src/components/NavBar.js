import React from "react";
import styled from "styled-components";
import {
  Link,
  // useHistory
} from "react-router-dom";
import { navBarTheme } from "./themes";
import { ThemeProvider } from "styled-components";

const StyledNavBar = styled.nav`
  background-color: var(--colour-1);
  padding: 0;
  list-style-type: none;
  margin-bottom: 4rem;
  width: 100%;
`;

const Ul = styled.ul`
  padding-left: 0;
`;

const Li = styled.li`
  font-family: var(--info-font);
  font-size: 1.2rem;
  list-style-type: none;
  display: inline-block;
  width: 50%;
`;

const InlineDiv = styled.div`
  display: flex;
  justify-content: space-between;
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
              <Link to="/about">ABOUT</Link>
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
