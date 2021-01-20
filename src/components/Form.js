import React from "react";
import styled from "styled-components";
import { returns } from "./../api/api";

export const Container = styled.div`
  padding: 3rem;
  text-align: center;
`;

const Button = styled.button`
  font-size: 1rem;
  font-weight: bold;
`;

const Fieldset = styled.fieldset`
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

const ErrorDiv = styled.div`
  /* font-family: var(--info-font);
  color: ${(props) => props.theme.errorMessageColor}; */
  margin-left: 1ch;
  margin-right: 1ch;
`;

const Form = styled.form`
  width: 60%;
  margin: 5vh auto;
  display: flex;
  justify-content: center;
  flex-direction: column;
`;

export const ReturnsForm = () => {
  const history = useHistory();
  const [errorMessage, setErrorMessage] = React.useState("");
  const handleSubmit = (event) => {
    event.preventDefault();
    const orderNumber = event.target.elements.orderNumber.value;
    const quantity = event.target.elements.quantity.value;
    const reason = event.target.elements.reason.value;
    signUp(orderNumber, quantity, reason)
      .then((res) => {
        if (res.id) {
          window.sessionStorage.setItem("user_id", res.id);
          setOrderNumber(orderNumber);
          history.push("/profile");
        } else {
          //ask to pick another
          console.log(res.message);
          setErrorMessage(res.message);
        }
      })

      .catch((error) => console.log(error));
  };
  return (
    <Form>
      <Fieldset>
        <Label htmlFor="orderNumber">Order Number:</Label>
        <Input
          id="orderNumber"
          type="text"
          placeholder="e.g. 1002871"
          data-cy="orderNumber"
          maxLength="7"
          required
        />
        <ErrorDiv>{errorMessage}</ErrorDiv>
        <Label htmlFor="quantity">Quantity:</Label>
        <Input
          id="quantity"
          type="number"
          min="1"
          max="15"
          placeholder="1"
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
      <Button>CLICK HERE TO GENERATE YOUR RETURNS LABEL</Button>
    </Form>
  );
};

export default ReturnsForm;
