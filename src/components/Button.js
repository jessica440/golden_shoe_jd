import React from "react";
import styled from "styled-components";
import ReturnsForm from "../components/Form";

const Button = styled.button`
  font-size: 1rem;
  font-weight: bold;
`;

export const Content = styled.div`
  font-size: 2rem;
  /* display: none; */
`;

// export const CollapsibleText = () => {
//   const collapse = () => {
//     console.log("click");
//     if (Content.display === "none") {
//       Content.display = "block";
//     } else {
//       Content.display = "none";
//     }
//   };

// const Checkbox = () => {
//   return (
//     <>
//       <input type="checkbox" name="seeText" value="seeText"></input>
//     </>
//   );
// };

export const CollapsibleText = () => {
  const [seeText, setSeeText] = React.useState(false);
  const [seeForm, setSeeForm] = React.useState(false);
  const handleSeeText = () => {
    setSeeText(!seeText);
    console.log("activated");
  };
  const handleSeeForm = () => {
    setSeeForm(!seeForm);
  };
  return (
    <>
      <Content>
        <Button onClick={() => handleSeeText()}>Delivery</Button>
        {seeText ? (
          <Content>
            <h1>Hello!</h1>
          </Content>
        ) : null}
      </Content>
      <Content>
        <Button onClick={() => handleSeeForm()}>Returns</Button>
        {seeForm ? (
          <Content>
            <h1>Hello!</h1>
            <ReturnsForm />
          </Content>
        ) : null}
      </Content>
    </>
  );
};

export default CollapsibleText;
