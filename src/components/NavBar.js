import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import Basket from "../images/basketicon.svg";
import Search from "../images/searchIcon.svg";

const StyledNavBar = styled.div`
  background-color: var(--colour-1);
  padding-bottom: 1rem;
  list-style-type: none;
  width: 100%;
`;

const Ul = styled.ul`
  padding: 0;
`;

const Li = styled.li`
  font-family: var(--title-font);
  color: var(--colour-6);
  font-size: 1.5rem;
  list-style-type: none;
  display: inline-block;
  padding-left: 4rem;
  color: var(--colour-2);
  @media only screen and (max-width: 918px) {
    display: flex;
    flex-direction: column;
    align-items: left;
  }
`;

const InlineDiv = styled.div`
  display: flex;
  justify-content: space-evenly;
`;

const Icons = styled.div`
  padding: 0.5rem;
`;

const Img = styled.img`
  padding: 0.5rem;
`;

const NavBar = () => {
  return (
    <StyledNavBar>
      <Icons>
        <Link to="/basket">
          <Img src={Basket} />
        </Link>
        <Img src={Search} />
      </Icons>
      <InlineDiv>
        <Ul>
          <Li>
            <Link
              style={{ textDecoration: "none", color: "var(--colour-6)" }}
              to="/"
            >
              HOME
            </Link>
          </Li>
          <Li>
            <Link
              style={{ textDecoration: "none", color: "var(--colour-6)" }}
              to="/products"
            >
              PRODUCTS
            </Link>
          </Li>
          <Li>
            <Link
              style={{ textDecoration: "none", color: "var(--colour-6)" }}
              to="/deliveryreturns"
            >
              DELIVERY / RETURNS
            </Link>
          </Li>
          <Li>
            <Link
              style={{ textDecoration: "none", color: "var(--colour-6)" }}
              to="/contact"
            >
              CONTACT
            </Link>
          </Li>
        </Ul>
      </InlineDiv>
    </StyledNavBar>
  );
};

export default NavBar;
