import React from "react";
import Course from "../../components/course/Course";
import CTA from "../../components/cta/CTA";
import Details from "../../components/details/Details";
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import Carousel from "../../components/slider/Carousel";
import { Box, GlobalStyles, Wrapper } from "./Home.styles";

const Home = () => {
  return (
    <Box>
      <GlobalStyles />
      <Header />
      <Wrapper>
        {/* <Carousel /> */}
        <Details />
        <Course />
        <CTA />
      </Wrapper>
      <Footer />
    </Box>
  );
};

export default Home;
