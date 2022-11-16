import React from "react";
import Auth from "../../components/auth/Auth";
import { Container } from "../../components/CommonStyles";

const Signup = () => {
  return (
    <Container>
      <Auth method="signup" />
    </Container>
  );
};

export default Signup;
