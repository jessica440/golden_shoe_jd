import React from "react";
// import styled from "styled-components";
// import { ThemeProvider } from "styled-components";
// import { landingPageTheme } from "./../components/themes";
// import { useHistory } from "react-router-dom";
import NavBar from "./../components/NavBar";
import Container from "./../components/Form";

const HomePage = () => {
  return (
    <>
      <NavBar />
      <Container>
        <h1>Home Page</h1>
      </Container>
    </>
  );
};

export default HomePage;
