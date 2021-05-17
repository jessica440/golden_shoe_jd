import React, { useState } from "react";
import NavBar from "./../components/NavBar";
import { shoes } from "../data/shoeData";
import { Shoe, ShoeGrid, ShoeLabel } from "../components/ShoeGrid";

export const Products = () => {
  const [shoeInfo, setShoeInfo] = useState();
  // const [seeCart, setSeeCart] = useState(false);

  // const handleSeeCart = () => {
  //   setSeeCart(!seeCart);
  // };
  return (
    <>
      <NavBar />
      {Object.entries(shoes).map(([sectionName, shoes]) => (
        <>
          <p>{shoeInfo}</p>
          <ShoeLabel>{sectionName}</ShoeLabel>
          <ShoeGrid>
            {shoes.map((shoes) => (
              <Shoe img={shoes.img}>{shoes.name}</Shoe>
            ))}
            <ShoeLabel>{shoes.price}</ShoeLabel>
          </ShoeGrid>
        </>
      ))}
    </>
  );
};

export default Products;
