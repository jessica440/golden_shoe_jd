import React from "react";
import styled from "styled-components";
import NavBar from "./../components/NavBar";
import { Container } from "./../components/Form";
// import { returns } from "../api/api";
import Label from "../images/returnsLabel.png";

const ReturnsLabel = () => {
  return (
    <>
      <NavBar />
      <Container>
        <h1>Print Out Label</h1>
        <img src={Label} />
      </Container>
    </>
  );
};

export default ReturnsLabel;
