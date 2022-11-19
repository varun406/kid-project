import Slider from "react-slick";
import styled from "styled-components";

export const Heading = styled.h1`
  font-size: 30px;
  font-weight: 500;
  margin-bottom: 12px;
`;

export const Wrapper = styled.div`
  max-width: 100%;
  min-height: 350px;
`;

export const CourseSlider = styled(Slider)`
  button {
    z-index: 999;
    background-color: black;
    border-radius: 50%;
  }

  button:hover {
    background-color: black;
    border-radius: 50%;
    opacity: 0.8;
  }

  .slick-prev {
    left: 3% !important;
    z-index: 1;
  }
  .slick-next {
    right: 3% !important;
    z-index: 1;
  }

  .slick-slide > div {
    margin: 0 10px;
  }
  .slick-list {
    margin: 0 -10px;
  }
`;

export const CardSection = styled.div``;
