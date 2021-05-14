import styled from "styled-components";
import { Title } from "../styles/fonts";

export const ShoeGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 35px;
  margin: 1.5rem;
`;

export const Shoe = styled.h1`
  font-family: var(--label-font);
  height: 300px;
  min-width: 200px;
  padding: 10px;
  margin-top: 5px;
  color: black;
  font-size: 1.2rem;
  /* text-shadow: 2px 2px 6px hsl(0, 0%, 69.8%); */
  background-image: ${({ img }) => `url(${img});`};
  background-size: cover;
  filter: contrast(75%);
  transition-property: box-shadow;
  transition-duration: 0.4s;
  /* border-radius: 7px; */
  box-shadow: 2px 2px 10px hsl(0, 0%, 69.8%);
  &:hover {
    cursor: pointer;
    filter: contrast(100%);
    /* margin-top: 0px;
    margin-bottom: 5px; */
    /* opacity: 0.7; */
    box-shadow: 0px 0px 10px 0px hsl(0, 0%, 69.8%);
  }
`;

export const ShoeLabel = styled.p`
  background-color: rgba(256, 256, 256, 0.8);
  padding-left: 25px;
  font-family: var(--label-font);
  font-size: 1.5rem;
`;
