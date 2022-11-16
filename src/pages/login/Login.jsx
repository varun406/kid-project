import React from "react";
import Auth from "../../components/auth/Auth";
import { Container } from "../../components/CommonStyles";

const Login = () => {
  return (
    <Container>
      <Auth method="login" />
    </Container>
  );
};

export default Login;
