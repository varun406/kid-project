import { CallMade } from "@mui/icons-material";
import React from "react";
import {
  Container,
  Error,
  GlobalStyles,
  InputLabel,
  InputSection,
  PhoneError,
} from "../../components/CommonStyles";
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import {
  Break,
  ContactWrap,
  StyledFormButton,
  StyledHeading,
  StyledInputField,
  TextAreaField,
  TextAreaSection,
  Wrapper,
} from "./Contact.styles";

import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import Pulse from "react-reveal/Pulse";
// import { contactSchema } from "./contactSchema";

const Contact = () => {
  const {
    register,
    watch,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmitt = (d) => {
    console.log(d);
    alert(JSON.stringify(d));
    reset();
  };

  console.log(watch("name"));

  return (
    <Container>
      <GlobalStyles />
      <Header />
      <Wrapper>
        <Pulse>
          <StyledHeading>
            Love to hear from you,
            <Break /> Get in touch👋
          </StyledHeading>
        </Pulse>
        <ContactWrap onSubmit={handleSubmit(onSubmitt)}>
          <InputSection>
            <InputLabel>Your name</InputLabel>
            <StyledInputField type="text" {...register("name")} />
            <Error>{errors.name?.message}</Error>
          </InputSection>
          <InputSection>
            <InputLabel>Your email</InputLabel>
            <StyledInputField type="email" {...register("email")} />
            <Error>{errors.email?.message}</Error>
          </InputSection>
          <InputSection>
            <InputLabel>Phone no.</InputLabel>
            <StyledInputField type="tel" {...register("phone")} />
            <PhoneError>{errors.phone?.message}</PhoneError>
          </InputSection>
          <InputSection>
            <InputLabel>City</InputLabel>
            <StyledInputField type="text" {...register("city")} />
            <Error>{errors.city?.message}</Error>
          </InputSection>
          <TextAreaSection>
            <InputLabel>Message</InputLabel>
            <TextAreaField row="8" {...register("message")} />
            <Error>{errors.message?.message}</Error>
          </TextAreaSection>
        </ContactWrap>
        <StyledFormButton type="submit">
          Just Send
          <CallMade />
        </StyledFormButton>
      </Wrapper>
      <Footer />
    </Container>
  );
};

export default Contact;
