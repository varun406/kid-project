import styled from "styled-components";

export const Wrapper = styled.div`
  max-width: 330px;
  max-height: 320px;
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 15px;
  box-shadow: -1px -1px 20px -14px rgba(0, 0, 0, 0.75);
`;

export const DetailSection = styled.div`
  width: calc(100% - 20px);
  min-height: 100px;
  margin-inline: auto;
`;

export const CourseDetails = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

export const ImageSection = styled.div`
  width: 100%;
  min-height: 160px;
`;

export const Title = styled.h1`
  font-size: 16px;
  font-weight: 700;
  margin: 0;
`;

export const RatingSection = styled.div`
  width: 100%;
  display: flex;
  gap: 10px;
`;

export const Author = styled.p`
  font-size: 14px;
  font-weight: 400;
  margin: 0;
`;

export const PriceSection = styled.div``;

export const Price = styled.p`
  font-size: 18px;
  font-weight: 700;
  margin: 0;
`;

export const CardButton = styled(Title)`
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
  margin: 0;
`;
