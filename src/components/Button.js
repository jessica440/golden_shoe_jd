import React from "react";
import styled from "styled-components";
import ReturnsForm from "../components/Form";

const Button = styled.button`
  font-size: 1rem;
  font-weight: bold;
`;

export const Content = styled.div`
  font-size: 1.2rem;
  padding: 1rem;
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
