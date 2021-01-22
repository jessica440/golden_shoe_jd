import React from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";

export const Container = styled.div`
  padding: 3rem;
  text-align: center;
`;

const Button = styled.button`
  font-size: 1rem;
  font-weight: bold;
`;

const InfoButton = styled.button`
  width: 1.5rem;
`;

export const Fieldset = styled.fieldset`
  border-style: solid;
  padding: 0.75rem;
  border-radius: 5px;
  display: flex;
  justify-content: space-around;
  flex-direction: column;
  /* border-color: ${(props) => props.theme.formColor}; */
`;

const Label = styled.label`
  font-family: var(--info-font);
  font-size: 1.2rem;
  margin-top: 1rem;
  /* color: ${(props) => props.theme.labelColor}; */
`;

const Input = styled.input`
  /* font-family: var(--info-font); */
  margin: 1ch;
  font-size: 1.2rem;
  padding: 0.2rem;
  /* color: ${(props) => props.theme.formColor}; */
  background: transparent;
  border-radius: 5px;
  text-align: center;
  /* border-color: ${(props) => props.theme.formColor};
  scrollbar-arrow-color: ${(props) => props.theme.formColor}; */
`;

const Select = styled.select`
  margin: 1ch;
  font-size: 1.2rem;
  padding: 0.2rem;
  border-radius: 5px;
  text-align: center;
`;

// const Select = styled.select`
//   font-family: var(--info-font);
//   margin: 1rem;
//   font-size: 1.2rem;
//   padding: 0.2rem;
//   /* color: ${(props) => props.theme.formColor}; */
//   background: transparent;
//   border-radius: 5px;
//   text-align: center;
//   /* border-color: ${(props) => props.theme.formColor}; */
// `;

// const Option = styled.option``;
// //   background-color: ${(props) => props.theme.optionColor};
// //   color: ${(props) => props.theme.btnTextColor};
// // `;

// const ErrorDiv = styled.div`
//   /* font-family: var(--info-font);
//   color: ${(props) => props.theme.errorMessageColor}; */
//   margin-left: 1ch;
//   margin-right: 1ch;
// `;

const Form = styled.form`
  width: 60%;
  margin: 5vh auto;
  display: flex;
  justify-content: center;
  flex-direction: column;
`;

export const ReturnsForm = () => {
  const history = useHistory();
  const handleSubmit = (event) => {
    event.preventDefault();
    history.push("/label");
  };
  return (
    <Form onSubmit={(event) => handleSubmit(event)}>
      <Fieldset>
        <Label htmlFor="orderNumber">Order Number:</Label>
        <InfoButton
          onClick={() =>
            alert(
              "Your Order Number is the 7 digit number at the top of your invoice"
            )
          }
        >
          ?
        </InfoButton>
        <Input
          id="orderNumber"
          type="text"
          placeholder="e.g. 1002871"
          maxLength="7"
          required
        />

        <Label htmlFor="quantity">Quantity:</Label>
        <Input
          id="quantity"
          type="number"
          min="1"
          max="15"
          placeholder="0"
          required
        />
        <Label htmlFor="reason">Returns Reason:</Label>
        <Select id="reason" name="reason">
          <option value="late">Arrived too late</option>
          <option value="incorrect">Incorrect item received</option>
          <option value="different">Looks different to image on site</option>
          <option value="multiple">Ordered multiple sizes</option>
          <option value="fit">Didn't fit</option>
          <option value="dislike">Didn't like</option>
        </Select>
      </Fieldset>
      <Container>
        <Button>CLICK HERE TO GENERATE YOUR RETURNS LABEL</Button>
      </Container>
    </Form>
  );
};

export default ReturnsForm;
