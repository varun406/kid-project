import React from "react";
import Slider from "react-slick";
import Card from "../card/Card";
import { Container, SectionHeading, StyledSlider } from "../CommonStyles";
import { CourseSlider, Wrapper } from "./Course.styles";
import { data } from "./courseData";
import { settings } from "./sliderSettings";

const Course = ({ heading }) => {
  return (
    <Container bgColor=" #f7f7f7">
      <Wrapper>
        <SectionHeading>{heading}</SectionHeading>
        <CourseSlider {...settings}>
          {data.map((course) => {
            return (
              <Card
                title={course.title}
                author={course.author}
                image={course.img}
              />
            );
          })}
        </CourseSlider>
      </Wrapper>
    </Container>
  );
};

export default Course;
