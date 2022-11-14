import styled from "styled-components";

export const Wrapper = styled.div`
  width: 330px;
  border-radius: 20px;
  background-color: #fff;
  padding-block: 16px;
  display: grid;
  place-items: center;
  box-shadow: -1px -1px 14px -10px rgba(0, 0, 0, 0.75);
`;

export const Cards = styled.div`
  max-width: 320px;
  display: flex;
  justify-content: space-evenly;
  flex-direction: column;
  gap: 10px;

  @media (max-width: 768px) {
    flex-direction: row;
  }

  @media (max-width: 600px) {
    flex-direction: column;
  }
`;

export const ImageSection = styled.div`
  display: grid;
  place-items: center;
`;

export const CourseImage = styled.img`
  width: calc(100% - 20px);
  margin-inline: auto;
  height: 240px;
  object-fit: cover;
  border-radius: 20px;

  @media (max-width: 768px) {
    flex-direction: row;
    height: 160px;
  }
`;

export const DetailSection = styled.div`
  max-width: 320px;
`;

export const CourseDetails = styled.div`
  width: calc(100% - 20px);
  margin-inline: auto;
  display: flex;
  justify-content: center;
  flex-direction: column;
  gap: 10px;
`;
export const Title = styled.h1`
  font-size: 18px;
  font-weight: 700;
`;
export const Desc = styled.p`
  text-align: justify;
`;

export const BrowseMoreButton = styled(Title)`
  max-width: 150px;
  height: 40px;
  font-size: 16px;
  background-color: black;
  color: white;
  cursor: pointer;
  border-radius: 25px;
  outline: none;
  border: none;
  display: grid;
  place-items: center;
`;
