import React from "react";
import styled from "styled-components";
import NavBar from "./../components/NavBar";
import { Container } from "./../components/Form";

import Label from "../images/returnsLabel.png";

const Img = styled.img`
  width: 450px;
  @media only screen and (max-width: 590px) {
    width: 300px;
  }
`;

const ReturnsLabel = () => {
  return (
    <>
      <NavBar />
      <Container>
        <h1>Print Out Label</h1>
        <Img src={Label} />
      </Container>
    </>
  );
};

export default ReturnsLabel;
