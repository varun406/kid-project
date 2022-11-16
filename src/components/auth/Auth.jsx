import React from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import {
  Container,
  Error,
  FormButton,
  GlobalStyles,
  InputField,
  InputLabel,
  InputSection,
  PhoneError,
} from "../CommonStyles";
import {
  Break,
  CredentialDetails,
  CredentialSection,
  Heading,
  HeadingSection,
  IllustrationImage,
  IllustrationSection,
  LoginSection,
  LoginWrap,
  Notice,
  NoticeSection,
  Wrapper,
} from "./Auth.styles";
import { yupResolver } from "@hookform/resolvers/yup";
import { schema } from "./validator";

const Auth = ({ method }) => {
  const {
    register,
    watch,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({ resolver: yupResolver(schema) });

  const onSubmit = (d) => {
    alert(JSON.stringify(d));
    console.log(d);
    reset();
  };

  // console.log(watch("password"));

  return (
    <Container>
      <Wrapper>
        <GlobalStyles />
        <LoginWrap>
          <CredentialSection>
            <LoginSection onSubmit={handleSubmit(onSubmit)}>
              <HeadingSection>
                <Heading>{method === "signup" ? "Sign up" : "Login"}</Heading>
              </HeadingSection>
              <CredentialDetails>
                {method === "signup" ? (
                  <>
                    <InputSection>
                      <InputLabel>Name</InputLabel>
                      <InputField
                        type="text"
                        placeholder="Enter your name"
                        {...register("name", {
                          pattern: /^[A-Za-z]+$/i,
                        })}
                      />
                      <Error>{errors.name?.message || "error"}</Error>
                    </InputSection>
                    <InputSection>
                      <InputLabel>Phone</InputLabel>
                      <InputField
                        type="tel"
                        placeholder="7030XXXXXX"
                        {...register("phone")}
                      />
                      <PhoneError>{errors.phone?.message}</PhoneError>
                    </InputSection>
                  </>
                ) : null}
                <InputSection>
                  <InputLabel>Email</InputLabel>
                  <InputField
                    type="email"
                    placeholder="Enter your email"
                    {...register("email")}
                  />
                  <Error>{errors.email?.message}</Error>
                </InputSection>
                <InputSection>
                  <InputLabel>Password</InputLabel>
                  <InputField
                    type="password"
                    placeholder="Enter your password"
                    {...register("password")}
                  />
                  <Error>{errors.password?.message}</Error>
                </InputSection>
              </CredentialDetails>
              <FormButton method={method} type="submit">
                {method === "signup" ? "Sign up" : "Login"}
              </FormButton>
              <NoticeSection>
                <Notice>
                  {method === "signup"
                    ? "Already have an account? "
                    : "Don't have an account? "}
                  <Break>
                    {method === "signup" ? (
                      <Link to="/login">Login</Link>
                    ) : (
                      <Link to="/signup">Sign up</Link>
                    )}
                  </Break>
                </Notice>
              </NoticeSection>
            </LoginSection>
          </CredentialSection>
          <IllustrationSection>
            <IllustrationImage
              src={
                method === "signup"
                  ? "./assets/online-learning2.svg"
                  : "./assets/online-learning.svg"
              }
            />
          </IllustrationSection>
        </LoginWrap>
      </Wrapper>
    </Container>
  );
};

export default Auth;
