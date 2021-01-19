// import React from "react";
import styled from "styled-components";

export const Container = styled.div`
  padding: 3rem;
  text-align: center;
`;

// const Fieldset = styled.fieldset`
//   color: ${(props) => props.theme.formColor};
//   border-style: solid;
//   padding: 0.75rem;
//   border-radius: 5px;
//   display: flex;
//   justify-content: space-around;
//   flex-direction: column;
//   border-color: ${(props) => props.theme.formColor};
// `;

// export const Label = styled.label`
//   font-family: var(--info-font);
//   font-size: 1.2rem;
//   margin-top: 1ch;
//   color: ${(props) => props.theme.labelColor};
// `;

// const Input = styled.input`
//   font-family: var(--info-font);
//   margin: 1ch;
//   font-size: 1.2rem;
//   padding: 0.2rem;
//   color: ${(props) => props.theme.formColor};
//   background: transparent;
//   border-radius: 5px;
//   text-align: center;
//   border-color: ${(props) => props.theme.formColor};
//   scrollbar-arrow-color: ${(props) => props.theme.formColor};
// `;

// const Select = styled.select`
//   font-family: var(--info-font);
//   margin: 1ch;
//   font-size: 1.2rem;
//   padding: 0.2rem;
//   color: ${(props) => props.theme.formColor};
//   background: transparent;
//   border-radius: 5px;
//   text-align: center;
//   border-color: ${(props) => props.theme.formColor};
// `;

// const Option = styled.option`
//   background-color: ${(props) => props.theme.optionColor};
//   color: ${(props) => props.theme.btnTextColor};
// `;

// const ErrorDiv = styled.div`
//   font-family: var(--info-font);
//   color: ${(props) => props.theme.errorMessageColor};
//   margin-left: 1ch;
//   margin-right: 1ch;
// `;

// const Form = styled.form`
//   width: 60%;
//   margin: 5vh auto;
//   display: flex;
//   justify-content: center;
//   flex-direction: column;
// `;

// export const ReturnsForm = () => {
//   return (
//     <Form onSubmit={(event) => handleSubmit(event)}>
//       <Fieldset>
//         <Label htmlFor="agent">Agent:</Label>
//         <Input
//           id="agent"
//           type="text"
//           placeholder="BrownFox"
//           data-cy="agent"
//           maxLength="8"
//           required
//         />
//         <ErrorDiv>{errorMessage}</ErrorDiv>
//         <Label htmlFor="age">Age:</Label>
//         <Input
//           id="age"
//           type="number"
//           min="8"
//           max="18"
//           placeholder="8"
//           required
//         />
//         <Label htmlFor="country">Location:</Label>
//         <Countries id="country" required />
//       </Fieldset>
//       <Button>CLICK HERE TO BUILD YOUR PROFILE</Button>
//     </Form>
//   );
// };

export default Container;
