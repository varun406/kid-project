import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  margin-inline: auto;
  background-color: #f7f7f7;
  margin-top: 20px;
`;

export const DetailSection = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  gap: 50px;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 20px;
  }
`;

export const LeftSection = styled.div`
  flex: 1;
  border-radius: 20px;
  overflow: hidden;
`;

export const Picture = styled.img`
  width: max(320px, 100%);
  max-height: 350px;
  border-radius: 20px;
  object-fit: cover;
`;

export const RightSection = styled.div`
  flex: 1;
  display: grid;
  place-items: center;
`;

export const DetailsSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const DetailsInfo = styled.div`
  display: flex;
  flex-direction: column;
`;
