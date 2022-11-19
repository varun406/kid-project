import styled from "styled-components";

export const Wrapper = styled.div`
  width: min(1100px, calc(100% - 48px));
  margin-inline: auto;
  display: flex;
  flex-direction: column;
  gap: 50px;
  padding-block: 50px;
`;

export const InfoSection = styled.div`
  display: flex;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const LeftSection = styled.div`
  flex: 1;
`;
export const RightSection = styled.div`
  flex: 1;

  @media (max-width: 768px) {
    display: none;
  }
`;
export const InfoTitle = styled.h1`
  font-size: 40px;
`;
export const InfoDesc = styled.p``;
export const EnrollButton = styled.button`
  min-width: 200px;
  min-height: 40px;
  font-size: 16px;
  background-color: #5a9cbf;
  color: white;
  cursor: pointer;
  border-radius: 7px;
  outline: none;
  border: none;
  display: grid;
  place-items: center;
  font-family: "Poppins", sans-serif;
`;

export const ImageSection = styled.div`
  width: 100%;
  height: 100%;
`;
export const DisplayImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;
