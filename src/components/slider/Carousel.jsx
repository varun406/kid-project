import React from "react";
import { Container, StyledSlider } from "../CommonStyles";
import { ImgWrap, SlideImg, Wrapper } from "./Carousel.styles";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Pulse from "react-reveal/Pulse";

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
    <Pulse>
      <Container>
        <Wrapper>
          <StyledSlider {...settings}>
            <ImgWrap>
              <SlideImg src="http://placekitten.com/g/1100/500" />
            </ImgWrap>
            <ImgWrap>
              <SlideImg src="http://placekitten.com/g/1100/500" />
            </ImgWrap>
            <ImgWrap>
              <SlideImg src="http://placekitten.com/g/1100/500" />
            </ImgWrap>
          </StyledSlider>
        </Wrapper>
      </Container>
    </Pulse>
  );
};

export default Carousel;
