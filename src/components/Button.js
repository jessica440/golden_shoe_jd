import React from "react";
import styled from "styled-components";

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

export const CollapsibleText = () => {
  const [seeText, setSeeText] = React.useState(false);
  const handleSeeText = () => {
    setSeeText(!seeText);
  };

  return (
    <>
      <Button onClick={() => handleSeeText()}>Button</Button>
      <Content>
        <h1>Hello!</h1>
      </Content>
    </>
  );
};

export default CollapsibleText;
