import React from "react";
import { Cards, CourseImage, GlobalStyles } from "../CommonStyles";
import {
  Author,
  CourseDetails,
  DetailSection,
  ImageSection,
  Price,
  PriceSection,
  RatingSection,
  Title,
  Wrapper,
} from "./Card.styles";
import Rating from "@mui/material/Rating";

const Card = ({ title, author, image }) => {
  return (
    <Wrapper>
      <GlobalStyles />
      <Cards>
        <ImageSection>
          <CourseImage src={image} alt="course_img" />
        </ImageSection>
        <DetailSection>
          <CourseDetails>
            <Title>{title}</Title>
            <RatingSection>
              <Author>{author}</Author>
              <Rating value={4} size="medium" readOnly />
            </RatingSection>
            <PriceSection>
              <Price>999₹</Price>
            </PriceSection>
          </CourseDetails>
        </DetailSection>
      </Cards>
    </Wrapper>
  );
};

export default Card;
