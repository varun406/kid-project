import styled from "styled-components";
import Slider from "react-slick";

export const Wrapper = styled.div`
  width: 100%;
  height: 30rem;
`;

export const ImgSlider = styled(Slider)`
  ul li button {
    &:before {
      font-size: 10px;
      color: rgb(150, 158, 171);
    }
  }

  .slick-list {
  }

  button {
    z-index: 1;
  }
`;

export const ImgWrap = styled.div``;

export const SlideImg = styled.img``;
