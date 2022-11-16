import React from "react";
import Navigation from "../navigation/Navigation";
import { MenuSection, MenuWrap, Wrapper } from "./Sidebar.styles";

const Sidebar = () => {
  return (
    <Wrapper>
      <MenuWrap>
        <MenuSection>MENU</MenuSection>
        <Navigation direction="column" />
      </MenuWrap>
    </Wrapper>
  );
};

export default Sidebar;
