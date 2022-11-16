import styled from "styled-components";
import Slider from "react-slick";

export const Wrapper = styled.div`
  width: 100%;
  min-height: 540px;
  background-color: #f7f7f7;

  @media (max-width: 768px) {
    min-height: 170px;
  }
`;

export const ImgSlider = styled(Slider)`
  ul li button {
    &:before {
      font-size: 10px;
    }
  }

  li.slick-active button::before {
    color: black;
  }

  .slick-list {
    overflow: visible;
  }

  button {
    z-index: 1;
  }

  .slick-arrow {
    background-color: darkblue;
    border-radius: 50%;
  }
`;

export const ImgWrap = styled.div``;

export const SlideImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;
