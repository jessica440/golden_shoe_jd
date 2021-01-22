import React from "react";
import styled from "styled-components";
import NavBar from "./../components/NavBar";
import { Container } from "./../components/Form";
// import { useHistory } from "react-router-dom";

const NotFoundPage = () => {
  //   const history = useHistory();
  //   history.push("/");
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
