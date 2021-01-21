import React from "react";
// import styled from "styled-components";
import NavBar from "./../components/NavBar";
import { Container, ReturnsForm } from "./../components/Form";
// import { useHistory } from "react-router-dom";

const About = () => {
  //   const history = useHistory();
  //   history.push("/");
  return (
    <>
      <NavBar />
      <Container>
        <h1>FAQs</h1>
        <ReturnsForm />
      </Container>
    </>
  );
};

export default About;
