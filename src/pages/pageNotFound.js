import React from "react";
import NavBar from "./../components/NavBar";
import { Container } from "./../components/Form";

const NotFoundPage = () => {
  return (
    <>
      <NavBar />
      <Container>
        <h1>Page not found</h1>
      </Container>
    </>
  );
};

export default NotFoundPage;
