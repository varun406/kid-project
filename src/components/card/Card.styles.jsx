import styled from "styled-components";

export const Wrapper = styled.div`
  max-width: 330px;
  background-color: white;
  display: grid;
  place-items: center;
  border-radius: 15px;
  box-shadow: -1px -1px 20px -14px rgba(0, 0, 0, 0.75);
`;

export const Cards = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 15px;
  padding: 15px;
`;

export const ImageSection = styled.div`
  display: grid;
  place-items: center;
`;

export const CourseImage = styled.img`
  width: calc(100% - 20px);
  height: 100%;
  object-fit: cover;
  border-radius: 15px;
`;

export const DetailSection = styled.div`
  width: calc(100% - 20px);
  margin-inline: auto;
  display: grid;
  place-items: center;
`;

export const CourseDetails = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  gap: 10px;
`;
export const Title = styled.h1`
  font-size: 20px;
  font-weight: 700;
  line-height: 1.5;
`;
export const Desc = styled.p`
  font-size: 14px;
  font-weight: 400;
`;

export const BrowseMoreButton = styled(Title)`
  max-width: 150px;
  min-height: 40px;
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
