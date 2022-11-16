import React from "react";
import Card from "../card/Card";
import { Container, SectionHeading } from "../CommonStyles";
import { Wrapper } from "./Course.styles";
import { data } from "./courseData";

const Course = () => {
  return (
    <Container bgColor=" #f7f7f7">
      <SectionHeading>Our Courses</SectionHeading>
      <Wrapper>
        {data.map((course) => {
          return (
            <Card
              title={course.title}
              content={course.content}
              image={course.img}
            />
          );
        })}
      </Wrapper>
    </Container>
  );
};

export default Course;
