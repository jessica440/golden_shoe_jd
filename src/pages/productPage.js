import React from "react";
import styled from "styled-components";
// import { useHistory } from "react-router-dom";
// import { navBarTheme } from "../themes";
// import { ThemeProvider } from "styled-components";
// import { Container } from "../components/Form";
import NavBar from "./../components/NavBar";
import { Container } from "./../components/Form";

// const Product = () => {
//   return (
//     <Container>
//       <h1>Product</h1>
//     </Container>
//   );
// };

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
