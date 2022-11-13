import React from "react";
import { Container } from "../CommonStyles";
import {
  DetailsInfo,
  DetailsSection,
  DetailsTitle,
  LeftSection,
  ParaOne,
  ParaTwo,
  Picture,
  RightSection,
  Wrapper,
} from "./Details.styles";

const Details = () => {
  return (
    <Container>
      <Wrapper>
        <LeftSection>
          <Picture
            src="https://cdn.shopify.com/s/files/1/0533/7084/7416/t/6/assets/pf-434435b0--class-Edited.jpg?v=1613802583"
            alt="detail-image"
          />
        </LeftSection>
        <RightSection>
          <DetailsSection>
            <DetailsTitle>What We Excel In</DetailsTitle>
            <DetailsInfo>
              <ParaOne>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged. It was
                popularised in the 1960s with the release of Letraset sheets
                containing Lorem Ipsum passages, and more recently with desktop
                publishing software like Aldus PageMaker including versions of
                Lorem Ipsum.
              </ParaOne>
              <ParaTwo>
                It is a long established fact that a reader will be distracted
                by the readable content of a page when looking at its layout.
                The point of using Lorem Ipsum is that it has a more-or-less
                normal distribution of letters, as opposed to using 'Content
                here, content here', making it look like readable English. Many
                desktop publishing packages and web page editors now use Lorem
                Ipsum as their default model text, and a search for 'lorem
                ipsum' will uncover many web sites still in their infancy.
                Various versions have evolved over the years, sometimes by
                accident, sometimes on purpose (injected humour and the like).
              </ParaTwo>
            </DetailsInfo>
          </DetailsSection>
        </RightSection>
      </Wrapper>
    </Container>
  );
};

export default Details;
