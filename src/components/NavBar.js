import React from "react";
import styled from "styled-components";
import { navBarTheme } from "./themes";

export const StyledNavBar = styled.nav`
  background-color: var(--colour-3);
  padding: 0
  list-style-type: none;
  /* margin-bottom: 1rem; */
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

export const NavBar = () => {
  return (
    <StyledNavBar>
      <Ul>
        <Li>Hello!</Li>
      </Ul>
    </StyledNavBar>
  );
};

export default NavBar;
