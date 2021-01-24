import React from "react";
import styled from "styled-components";
import NavBar from "./../components/NavBar";
import { Container } from "./../components/Form";
import { CollapsibleText, Content } from "./../components/Button";

const DeliveryReturns = () => {
  return (
    <>
      <NavBar />
      <Container>
        <CollapsibleText />
      </Container>
    </>
  );
};

export default DeliveryReturns;
