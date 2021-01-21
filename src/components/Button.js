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

const Checkbox = () => {
  return (
    <>
      <input type="checkbox" name="seeText" value="seeText"></input>
    </>
  );
};

export const CollapsibleText = () => {
  const [seeText, setSeeText] = React.useState(false);
  const handleSeeText = () => {
    setSeeText(!seeText);
    console.log("activated");
  };
  return (
    <>
      <Button onClick={() => handleSeeText()}>Delivery</Button>
      {seeText ? (
        <Content>
          <h1>Hello!</h1>
        </Content>
      ) : null}
    </>
  );

  //   return (
  //     <>
  //       <Checkbox
  //         type="checkbox"
  //         name="seeText"
  //         onChange={handleSeeText}
  //       ></Checkbox>
  //       {seeText ? (
  //         <div>
  //           <label htmlFor="seeText">Hi there</label>
  //         </div>
  //       ) : null}
  //     </>
  //   );
};

export default CollapsibleText;
