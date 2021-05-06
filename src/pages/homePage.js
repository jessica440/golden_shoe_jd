import React from "react";
import styled from "styled-components";
import NavBar from "./../components/NavBar";
import { Container } from "./../components/Form";
import HomeImage from "./../components/HomeImage";

const HomePage = () => {
  return (
    <>
      <NavBar />
      <HomeImage />
      <Container></Container>
    </>
  );
};

export default HomePage;
