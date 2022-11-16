import React from "react";
import { Link } from "react-router-dom";
import { Container } from "../CommonStyles";
import { CTAButton, CTATitle, Wrapper } from "./CTA.styles";

const CTA = ({ CTAHeading, CTACall, to }) => {
  return (
    <Container bgColor="#BCCEF8" borderRadius="20px">
      <Wrapper>
        <CTATitle>{CTAHeading}</CTATitle>
        <Link to={to}>
          <CTAButton>{CTACall}</CTAButton>
        </Link>
      </Wrapper>
    </Container>
  );
};

export default CTA;
