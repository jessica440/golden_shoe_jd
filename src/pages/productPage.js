import React from "react";
import styled from "styled-components";
import NavBar from "./../components/NavBar";
import { Container } from "./../components/Form";

export const Products = () => {
  // const history = useHistory();
  // history.push("/");
  return (
    <>
      <NavBar />
      <Container>
        <h1>Products Page</h1>
      </Container>
    </>
  );
};

export default Products;
