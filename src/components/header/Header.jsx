import React from "react";

import { Container } from "../CommonStyles";
import { Link } from "react-router-dom";
import { AccountCircle, ShoppingCart } from "@mui/icons-material";
import {
  iconStyles,
  Logo,
  LogoSection,
  Navigation,
  UserSection,
  Wrapper,
} from "./Header.styles";

const Header = () => {
  return (
    <Container>
      <Wrapper>
        <LogoSection>
          <Logo src="./assets/logo.jpg" alt="logo" />
        </LogoSection>

        <Navigation>
          <Link to={"/about"}>Home</Link>
          <Link to={"/about"}>About</Link>
          <Link to={"/about"}>Contact Us</Link>
          <Link to={"/about"}>Services</Link>
          <Link to={"/about"}>Products</Link>
        </Navigation>
        <UserSection>
          <AccountCircle sx={iconStyles} />
          <ShoppingCart sx={iconStyles} />
        </UserSection>
      </Wrapper>
    </Container>
  );
};

export default Header;
