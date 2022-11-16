import React from "react";
import { Link, NavLink } from "react-router-dom";
import { activeStyle } from "../header/Header.styles";
import { NavigationSection } from "./Navigation.styles";

const Navigation = ({ direction }) => {
  return (
    <NavigationSection direction={direction}>
      <NavLink to={"/"}>Home</NavLink>
      <NavLink to={"/about"}>About</NavLink>
      <NavLink to={"/contactus"}>Contact Us</NavLink>
      <NavLink to={"/services"}>Services</NavLink>
      <NavLink to={"/products"}>Products</NavLink>
    </NavigationSection>
  );
};

export default Navigation;
