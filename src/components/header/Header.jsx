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
          <Logo
            src="https://cdn.shopify.com/s/files/1/0533/7084/7416/files/logoDL7_2560L_200x.jpg?v=1613721070"
            alt="logo"
          />
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
