import React from "react";
import styled from "styled-components";

import NavBar from "./../components/NavBar";
import { Container } from "./../components/Form";
import HomeImage from "./../components/HomeImage";
import Trainers from "../icons/trainersBackground.jpg";

export const Img = styled.img`
  width: 100vw;
  opacity: 0.5;
  position: absolute;
  z-index: -1;
`;

const HomePage = () => {
  return (
    <>
      <NavBar />
      <Img scr={Trainers} />

      <HomeImage />
      <Container></Container>
    </>
  );
};

export default HomePage;
