import React from "react";
import { Container } from "../CommonStyles";
import {
  BrowseMoreButton,
  CourseDetails,
  CourseImage,
  Desc,
  Title,
  Wrapper,
} from "./Card.styles";

const Card = ({ title, content, image }) => {
  return (
    <Wrapper>
      <CourseImage src={image} alt="course_img" />
      <CourseDetails>
        <Title>{title}</Title>
        <Desc>{content}</Desc>
        <BrowseMoreButton>Browse More</BrowseMoreButton>
      </CourseDetails>
    </Wrapper>
  );
};

export default Card;
