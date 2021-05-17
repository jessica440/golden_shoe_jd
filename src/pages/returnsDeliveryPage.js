import React from "react";
import styled from "styled-components";
import NavBar from "./../components/NavBar";
import { Container } from "./../components/Form";
import { CollapsibleText } from "./../components/Button";
import Trainers from "../icons/trainersBackground.jpg";

export const Img = styled.img`
  width: 100vw;
  opacity: 0.5;
  position: absolute;
  z-index: -1;
`;

const DeliveryReturns = () => {
  return (
    <>
      <NavBar />
      <Img scr={Trainers} />
      <Container>
        <CollapsibleText />
      </Container>
    </>
  );
};

export default DeliveryReturns;
