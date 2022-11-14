import styled from "styled-components";

export const Heading = styled.h1`
  font-size: 30px;
  font-weight: 500;
  margin-bottom: 12px;
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  gap: 20px;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;
