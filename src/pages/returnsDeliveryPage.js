import React from "react";
import NavBar from "./../components/NavBar";
import { Container } from "./../components/Form";
import { CollapsibleText } from "./../components/Button";
import Shoe from "../icons/sideShoe.jpg";
import { Img } from "./contactPage.js";

const DeliveryReturns = () => {
  return (
    <>
      <NavBar />
      <Img scr={Shoe} />
      <Container>
        <CollapsibleText />
      </Container>
    </>
  );
};

export default DeliveryReturns;
