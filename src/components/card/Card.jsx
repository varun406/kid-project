import React from "react";
import { Container } from "../CommonStyles";
import {
  BrowseMoreButton,
  Cards,
  CourseDetails,
  CourseImage,
  Desc,
  DetailSection,
  ImageSection,
  Title,
  Wrapper,
} from "./Card.styles";

const Card = ({ title, content, image }) => {
  return (
    <Wrapper>
      <Cards>
        <ImageSection>
          <CourseImage src={image} alt="course_img" />
        </ImageSection>
        <DetailSection>
          <CourseDetails>
            <Title>{title}</Title>
            <Desc>{content}</Desc>
            <BrowseMoreButton>Browse More</BrowseMoreButton>
          </CourseDetails>
        </DetailSection>
      </Cards>
    </Wrapper>
  );
};

export default Card;
