import React from "react";
import Card from "../card/Card";
import { Container } from "../CommonStyles";
import { Heading, Wrapper } from "./Course.styles";
import { data } from "./courseData";

const Course = () => {
  return (
    <Container bgColor=" #f7f7f7">
      <Heading>Our Courses</Heading>
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
