import React from "react";
import Course from "../../components/course/Course";
import Details from "../../components/details/Details";
import Header from "../../components/header/Header";
import { Box, GlobalStyles, Wrapper } from "./Home.styles";

const Home = () => {
  return (
    <Box>
      <GlobalStyles />
      {/* <Header /> */}
      <Wrapper>
        <Details />
        <Course />
      </Wrapper>
    </Box>
  );
};

export default Home;
