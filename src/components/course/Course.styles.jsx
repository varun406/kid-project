import styled from "styled-components";
import { Container } from "../CommonStyles";

export const styleContainer = styled(Container)`
  width: calc(100% - 3rem);
  margin-inline: auto;

  @media only screen and (min-width: 768px) {
    width: 100%;
  }
`;

export const Heading = styled.h1`
  font-size: 2.5rem;
  font-weight: 500;
  margin-bottom: 0.7rem;
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  gap: 20px;

  @media only screen and (min-width: 600px) {
    display: flex;
    justify-content: space-between;
    flex-direction: row;
  }
`;
