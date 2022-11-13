import styled from "styled-components";

export const Wrapper = styled.div`
  width: 18rem;
  border-radius: 20px;
  background-color: #d8d8d8;
  display: flex;
  justify-content: center;
  flex-direction: column;
  gap: 10px;
  padding-block: 1rem;

  @media only screen and (min-width: 600px) {
    width: 24rem;
  }
`;
export const CourseImage = styled.img`
  width: calc(100% - 2rem);
  margin-inline: auto;
  height: 15rem;
  object-fit: cover;
  border-radius: 20px;
`;
export const CourseDetails = styled.div`
  width: calc(100% - 2rem);
  margin-inline: auto;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;
export const Title = styled.h1`
  font-size: 1.4rem;
  font-weight: 700;
`;
export const Desc = styled.p`
  text-align: justify;
`;

export const BrowseMoreButton = styled.button`
  width: calc(100% - 6rem);
  margin-inline: auto;
  height: 2.5rem;
  font-size: 1.2rem;
  font-weight: 700;
  background-color: black;
  color: white;
  cursor: pointer;
  border-radius: 15px;
  outline: none;
  border: none;
`;
