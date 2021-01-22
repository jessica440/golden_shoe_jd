import React from "react";
import styled from "styled-components";
import NavBar from "./../components/NavBar";
import { Container, ReturnsForm } from "./../components/Form";
// import { useHistory } from "react-router-dom";
import { CollapsibleText, Content } from "./../components/Button";

const Faqs = () => {
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
        <ReturnsForm />
      </Container>
    </>
  );
};

export default Faqs;
