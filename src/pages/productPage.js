import React, { useState } from "react";
import NavBar from "./../components/NavBar";
import { shoes } from "../data/shoeData";
import { Shoe, ShoeGrid, ShoeLabel } from "../components/ShoeGrid";
// import ShoeInfo from "./../components/shoeInfo";

export const Products = () => {
  const [shoeInfo, setShoeInfo] = useState();
  const [seeCart, setSeeCart] = useState(false);

  const handleSeeCart = () => {
    setSeeCart(!seeCart);
  };
  return (
    <>
      <NavBar />
      {/* <StyledMenu> */}
      {/* <ShoeInfo /> */}
      {Object.entries(shoes).map(([sectionName, shoes]) => (
        <>
          <p>{shoeInfo}</p>
          <ShoeLabel>{sectionName}</ShoeLabel>
          <ShoeGrid>
            {shoes.map((shoes) => (
              <Shoe
                img={shoes.img}
                // onClick={() => {
                //   setShoeInfo(shoes.name);
                // }}
                // onClick={handleSeeCart}
              >
                {shoes.name}
              </Shoe>
            ))}
            {/* {seeCart ? <ShoeInfo /> : null} */}
            <ShoeLabel>{shoes.price}</ShoeLabel>
          </ShoeGrid>
        </>
      ))}
      {/* </StyledMenu> */}
    </>
  );
};

export default Products;
