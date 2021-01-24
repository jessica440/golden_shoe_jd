import React from "react";
// import styled from "styled-components";
import NavBar from "../components/NavBar";
import { Container } from "./../components/Form";
import { Link } from "react-router-dom";

const Contact = () => {
  return (
    <>
      <NavBar />
      <Container>
        <h1>Get in touch!</h1>
        <p>
          Getting in touch with us is easy. Just fill in the form, and we will
          be happy to help.
          <br />
          Don't like forms? Email us on info@goldenshoe.co.uk after checking our{" "}
          <Link to="/faqs">Frequently Asked Questions.</Link>
        </p>
      </Container>
    </>
  );
};

export default Contact;
