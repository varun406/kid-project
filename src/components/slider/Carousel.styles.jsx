import styled from "styled-components";
import Slider from "react-slick";

export const Wrapper = styled.div`
  width: 100%;
  height: 300px;
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

  .slick-arrow {
    background-color: darkblue;
    border-radius: 50%;
  }

  button {
    z-index: 1;
  }
`;

export const ImgWrap = styled.div``;

export const SlideImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;
