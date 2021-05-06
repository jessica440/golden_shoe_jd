import React from "react";
import styled from "styled-components";
import NavBar from "./../components/NavBar";
import { shoes } from "../data/shoeData";
import { Shoe, ShoeGrid } from "../components/ShoeGrid";

export const Products = () => {
  return (
    <>
      <NavBar />
      {/* <StyledMenu> */}
      {Object.entries(shoes).map(([sectionName, shoes]) => (
        <>
          <h1>{sectionName}</h1>
          <ShoeGrid>
            {shoes.map((shoes) => (
              <Shoe img={shoes.img}>{shoes.name}</Shoe>
            ))}
          </ShoeGrid>
        </>
      ))}
      {/* </StyledMenu> */}
    </>
  );
};

export default Products;
