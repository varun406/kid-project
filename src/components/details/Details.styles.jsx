import styled from "styled-components";
export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  gap: 30px;
  background-color: #f7f7f7;

  @media only screen and (min-width: 600px) {
    flex-direction: row;
    height: 22rem;
  }
`;

export const LeftSection = styled.div``;

export const Picture = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 20px;
  object-fit: cover;

  @media only screen and (min-width: 600px) {
    width: 22rem;
    height: 22rem;
  }
`;

export const RightSection = styled.div`
  width: calc(100% - 2rem);
  margin-inline: auto;
  display: grid;
  place-items: center;
`;

export const DetailsSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const DetailsTitle = styled.h1``;

export const DetailsInfo = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  gap: 20px;
`;

export const ParaOne = styled.p`
  text-align: justify;
`;
export const ParaTwo = styled(ParaOne)``;
