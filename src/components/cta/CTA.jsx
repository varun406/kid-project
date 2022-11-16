import React from "react";
import { Container, SectionHeading } from "../CommonStyles";
import { CTAButton, CTATitle, Wrapper } from "./CTA.styles";

const CTA = () => {
  return (
    <Container bgColor="#BCCEF8" borderRadius="20px">
      <Wrapper>
        <CTATitle>
          Each student needs something different to shine. Let's find out
          together.
        </CTATitle>
        <CTAButton>Get Started</CTAButton>
      </Wrapper>
    </Container>
  );
};

export default CTA;
