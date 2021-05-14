import React, { useState } from "react";
import styled from "styled-components";

const Info = styled.div`
  width: 300px;
  height: 100%;
  background-color: var(--colour-1);
  position: fixed;
  top: 0;
  z-index: 10;
  right: 0;
`;

// const Banner = styled.div`
//   min-height: 200px;
//   margin-bottom: 20px;
//   ${({ img }) => `background-image: url(${img})`}
// `;

const InfoShadow = styled.div`
  position: fixed;
  height: 100%;
  width: 100%;
  top: 0px;
  background-color: var(--colour-4);
  opacity: 0.6;
  z-index: 10;
`;

export const ShoeInfo = () => {
  const [seeCart, setSeeCart] = useState(false);

  const handleSeeCart = () => {
    setSeeCart(!seeCart);
  };

  return (
    <>
      <InfoShadow onClick={handleSeeCart} />
      <Info>info</Info>
    </>
  );
};

export default ShoeInfo;
