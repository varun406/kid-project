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
import { schema } from "../../components/auth/validator";
import { useForm } from "react-hook-form";

const Contact = () => {
  const {
    register,
    watch,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({ resolver: yupResolver(schema) });

  const onSubmit = (d) => {
    console.log(d);
    alert(JSON.stringify(d));
    reset();
  };

  return (
    <Container>
      <GlobalStyles />
      <Header />
      <Wrapper>
        <StyledHeading>
          Love to hear from you,
          <Break /> Get in touch👋
        </StyledHeading>
        <ContactWrap onSubmit={handleSubmit(onSubmit)}>
          <InputSection>
            <InputLabel>Your name</InputLabel>
            <StyledInputField
              type="text"
              {...register("name", {
                pattern: /^[A-Za-z]+$/i,
              })}
            />
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
        <StyledFormButton>
          Just Send
          <CallMade />
        </StyledFormButton>
      </Wrapper>
      <Footer />
    </Container>
  );
};

export default Contact;
