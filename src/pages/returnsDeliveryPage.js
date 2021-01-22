import React from "react";
import styled from "styled-components";
import NavBar from "./../components/NavBar";
import { Container } from "./../components/Form";
// import { useHistory } from "react-router-dom";
import { CollapsibleText, Content } from "./../components/Button";

const DeliveryReturns = () => {
  //   const history = useHistory();
  //   history.push("/");
  return (
    <>
      <NavBar />
      <Container>
        <Content>
          <h1>FAQs</h1>
        </Content>
        <CollapsibleText />
      </Container>
    </>
  );
};

export default DeliveryReturns;
