import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import Basket from "../icons/basketicon.svg";
import Search from "../icons/searchIcon.svg";

const StyledNavBar = styled.div`
  /* background-color: var(--colour-2); */
  background-image: linear-gradient(var(--colour-2) 90%, var(--colour-1));
  /* box-shadow: 0px -28px 30px 0px var(--colour-1); */
  padding-bottom: 0.2rem;
  list-style-type: none;
  width: 100%;
  border-bottom: 1.5px;
  /* box-shadow: 5px 5px 4px hsl(0, 0%, 80.8%); */
`;

const Ul = styled.ul`
  padding: 0;
`;

const Li = styled.li`
  font-family: var(--title-font);
  color: var(--colour-6);
  font-size: 1rem;
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
  padding-left: 1rem;
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
