import React from "react";
import styled from "styled-components";
import { ThemeProvider } from "styled-components";
import { landingPageTheme } from "./components/themes";
import { useHistory } from "react-router-dom";
import NavBar from "./components/NavBar";

const HomePage = () => {
  return <NavBar />;
};
