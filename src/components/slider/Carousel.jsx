import React from "react";
import { Container } from "../CommonStyles";
import Slider from "react-slick";
import { ImgSlider, ImgWrap, SlideImg, Wrapper } from "./Carousel.styles";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Carousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  };

  return (
    <Container bgColor="lightgrey">
      <ImgSlider {...settings}>
        <ImgWrap>
          <SlideImg src="http://placekitten.com/g/400/200" />
        </ImgWrap>
        <ImgWrap>
          <SlideImg src="http://placekitten.com/g/400/200" />
        </ImgWrap>
        <ImgWrap>
          <SlideImg src="http://placekitten.com/g/400/200" />
        </ImgWrap>
      </ImgSlider>
    </Container>
  );
};

export default Carousel;
