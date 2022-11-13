import styled, { createGlobalStyle } from "styled-components";
import { Container } from "../../components/CommonStyles";

export const Box = styled(Container)`
  width: 100vw;
  background-color: #f7f7f7;
`;

export const Wrapper = styled.div`
  width: calc(100% - 3rem);
  margin-inline: auto;
  max-width: 1100px;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const GlobalStyles = createGlobalStyle`
    *{
        margin:0;
        padding:0;
        box-sizing: border-box;
        font-family: 'Inter', sans-serif;
    }
`;
