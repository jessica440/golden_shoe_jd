import React from "react";
import NavBar from "./../components/NavBar";
import { shoes } from "../data/shoeData";
import { Shoe, ShoeGrid, ShoeLabel } from "../components/ShoeGrid";

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
            <ShoeLabel>{shoes.price}</ShoeLabel>
          </ShoeGrid>
        </>
      ))}
      {/* </StyledMenu> */}
    </>
  );
};

export default Products;
