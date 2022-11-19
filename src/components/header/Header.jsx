import React, { useContext } from "react";
import { Container, GlobalStyles, iconStyles } from "../CommonStyles";
import { AccountCircle, Menu, ShoppingCart } from "@mui/icons-material";
import {
  LoginButton,
  Logo,
  LogoSection,
  MenuSection,
  RegisterButton,
  UserSection,
  Wrapper,
} from "./Header.styles";
import Navigation from "../navigation/Navigation";
import { Link } from "react-router-dom";
import { SidebarContext } from "../../App";

const Header = () => {
  const { setSidebarOpen } = useContext(SidebarContext);

  const handleSidebar = () => {
    setSidebarOpen((prev) => !prev);
  };

  return (
    <Container>
      <GlobalStyles />
      <Wrapper>
        <LogoSection>
          <MenuSection>
            <Menu sx={iconStyles} onClick={handleSidebar} />
          </MenuSection>
          <Link to="/">
            <Logo src="./assets/logo1.png" alt="logo" />
          </Link>
        </LogoSection>

        <Navigation direction="row" />
        <UserSection>
          <Link to="/login">
            <LoginButton>Login</LoginButton>
          </Link>
          <Link to="/signup">
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
