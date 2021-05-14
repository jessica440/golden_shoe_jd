import React from "react";
import styled from "styled-components";
import Shoes from "../icons/shoe_image.png";

const Img = styled.img`
  width: 100vw;
`;

export const HomeImage = () => {
  return (
    <>
      <Img src={Shoes} />
    </>
  );
};

export default HomeImage;
