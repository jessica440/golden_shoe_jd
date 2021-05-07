import React from "react";
import styled from "styled-components";
import ReturnsForm from "../components/Form";

const Button = styled.button`
  font-family: var(--info-font);
  font-size: 2.2rem;
  font-weight: bold;
  width: 90vw;
  background-color: var(--colour-2);
  border: none;
  padding: 0.3rem;
  margin: 1rem;
  &:hover {
    border-bottom: 1.5px;
    box-shadow: 5px 5px 4px hsl(0, 0%, 80.8%);
  }
`;

export const Content = styled.div`
  font-size: 1rem;
  padding: 1rem;
  /* text-align: center; */
`;

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
            <p>
              FREE Standard Delivery on orders over £30 as well as available
              express delivery options. Please allow up to 5 working Days.
            </p>
          </Content>
        ) : null}
      </Content>
      <Content>
        <Button onClick={() => handleSeeForm()}>Returns</Button>
        {seeForm ? (
          <Content>
            <p>
              You can return items within 28 days of receipt of your order. As
              always, we offer a range of FREE and easy ways to return including
              contactless collection from your home. <br />
              To start a return, please fill in the form below.
            </p>
            <ReturnsForm />
          </Content>
        ) : null}
      </Content>
    </>
  );
};

export default CollapsibleText;
