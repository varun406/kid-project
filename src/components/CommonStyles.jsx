import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    html,body{
        margin:0;
        padding:0;
        box-sizing: border-box;
        font-family: 'Poppins', sans-serif;
    }
`;

export const Container = styled.div`
  width: 100%;
  border-radius: ${(props) => props.borderRadius || 0};
  background-color: ${(props) => props.bgColor || "white"};
  overflow: hidden;
`;

export const SectionHeading = styled.h1`
  font-size: 40px;
  font-weight: bold;
  line-height: 2;
`;
export const SectionDesc = styled.p`
  font-size: 20px;
  font-weight: 400;
  line-height: 1.7;
  text-align: justify;
`;
