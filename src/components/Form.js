import React from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";
// import { returns } from "../api/api";

export const Container = styled.div`
  padding: 3rem;
  align-items: center;
  text-align: center;
  z-index: 9;
`;

const Button = styled.button`
  font-size: 1rem;
  font-family: var(--title-font);
  /* font-weight: bold; */
  width: 260px;
  border-radius: 5px;
  padding: 0.5rem;
  background-color: var(--colour-2);
`;

const InfoButton = styled.button`
  width: 1.5rem;
`;

export const Fieldset = styled.fieldset`
  border-style: none;
  padding: 0.75rem;
  border-radius: 5px;
  display: flex;
  justify-content: space-around;
  flex-direction: column;
`;

const Label = styled.label`
  font-family: var(--info-font);
  font-size: 1.2rem;
  margin-top: 1rem;
`;

const Input = styled.input`
  font-family: var(--info-font);
  margin: 1ch;
  font-size: 1.2rem;
  padding: 0.2rem;
  background: white;
  border-radius: 5px;
  text-align: center;
  border-color: var(--colour-1);
`;

const Select = styled.select`
  margin: 1ch;
  font-size: 1.2rem;
  padding: 0.2rem;
  border-radius: 5px;
  text-align: center;
`;

const Form = styled.form`
  width: 300px;
  margin: 5vh auto;
  display: flex;
  justify-content: center;
  flex-direction: column;
`;

export const ContactForm = () => {
  const history = useHistory();
  const handleSubmit = (event) => {
    event.preventDefault();

    const contactForm = {
      reason: event.target.elements.reason.value,
      name: event.target.elements.name.value,
      email: event.target.elements.email.value,
      message: event.target.elements.message.value,
      contact: event.target.elements.contact.value,
    };
    console.log("contact form", contactForm);
    history.push("/thankyou");
  };
  return (
    <>
      <Form
        onSubmit={(event) => handleSubmit(event)}
        style={{ width: "500px" }}
      >
        <Fieldset>
          <Label htmlFor="reason">What are you contacting us about?</Label>
          <Select id="reason" name="reason">
            <option value="hello">Just to say hi!</option>
            <option value="compliment">Compliment</option>
            <option value="complaint">Complaint</option>
            <option value="product">Product query</option>
            <option value="order">Order query</option>
            <option value="other">Other</option>
          </Select>
          <Label htmlFor="name">Your Name:</Label>
          <Input id="name" type="text" maxLength="30" required />
          <Label htmlFor="email">Your Email:</Label>
          <Input id="email" type="text" maxLength="30" required />
          <Label htmlFor="message">Message:</Label>
          <Input
            id="message"
            type="text"
            maxLength="300"
            required
            style={{ height: "100px" }}
          />
          <Label htmlFor="reason">
            How would you like us to get back in touch?
          </Label>
          <Select id="contact" name="contact">
            <option value="phone">Phone</option>
            <option value="email">Email</option>
          </Select>
        </Fieldset>
        <Container>
          <Button>SEND MESSAGE</Button>
        </Container>
      </Form>
    </>
  );
};

export const ReturnsForm = () => {
  const history = useHistory();

  const handleSubmit = (event) => {
    event.preventDefault();

    const returnsForm = {
      orderNumber: event.target.elements.orderNumber.value,
      quantity: event.target.elements.quantity.value,
      reason: event.target.elements.reason.value,
    };

    // returns(returnsForm);
    console.log("returns form", returnsForm);

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
          // pattern="/\d{7}/"
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
          <option value="other">Other</option>
        </Select>
      </Fieldset>
      <Container>
        <Button>CLICK HERE TO GENERATE YOUR RETURNS LABEL</Button>
      </Container>
    </Form>
  );
};

export default ReturnsForm;
