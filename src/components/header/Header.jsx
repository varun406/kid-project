import React from "react";
import { Container } from "../CommonStyles";
import { AccountCircle, ShoppingCart } from "@mui/icons-material";
import {
  iconStyles,
  LoginButton,
  Logo,
  LogoSection,
  RegisterButton,
  UserSection,
  Wrapper,
} from "./Header.styles";
import Navigation from "../navigation/Navigation";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <Container>
      <Wrapper>
        <LogoSection>
          <Logo src="./assets/logo1.png" alt="logo" />
        </LogoSection>

        <Navigation direction="row" />
        <UserSection>
          <Link>
            <LoginButton>Login</LoginButton>
          </Link>
          <Link>
            <RegisterButton>Register</RegisterButton>
          </Link>
          {/* <AccountCircle sx={iconStyles} />
          <ShoppingCart sx={iconStyles} /> */}
        </UserSection>
      </Wrapper>
    </Container>
  );
};

export default Header;
