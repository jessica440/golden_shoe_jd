import React from "react";
import styled from "styled-components";
import NavBar from "../components/NavBar";
import { Container, ContactForm } from "./../components/Form";
import { Link } from "react-router-dom";
import Shoe from "../icons/sideShoe.jpg";

export const Img = styled.img`
  width: 100vw;
  opacity: 0.5;
  position: absolute;
  z-index: -1;
`;

const Contact = () => {
  return (
    <>
      <NavBar />
      <Img src={Shoe} />
      <Container style={{ paddingTop: "10rem" }}>
        <h1>Get in touch!</h1>
        <p>
          Getting in touch with us is easy. Just fill in the form, and we will
          be happy to help.
          <br />
          Don't like forms? Email us at info@goldenshoe.co.uk after checking our{" "}
          <Link to="/faqs">Frequently Asked Questions.</Link>
        </p>
        <ContactForm />
        <p>
          Our customer service helpline is also open between 9am-5pm
          Monday-Friday <br /> (+44) 20 123 4567
        </p>
      </Container>
    </>
  );
};

export default Contact;
