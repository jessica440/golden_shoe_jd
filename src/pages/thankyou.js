import React from "react";
import styled from "styled-components";
import NavBar from "./../components/NavBar";
import { Container } from "./../components/Form";

export const ThankYou = () => {
  return (
    <>
      <NavBar />
      <Container>
        <h1>Thank you for your message!</h1>
        <p>
          A member of our team will be in touch shortly.
          <br /> Our office hours are 9am - 5pm, Monday to Friday.
        </p>
      </Container>
    </>
  );
};

export default ThankYou;
