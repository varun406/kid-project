import styled, { createGlobalStyle } from "styled-components";
import { Container } from "../../components/CommonStyles";

export const Box = styled(Container)`
  width: 100vw;
  background-color: #f7f7f7;
`;

export const Wrapper = styled.div`
  margin-inline: auto;
  width: min(calc(100% - 3rem), 1100px);
  display: flex;
  flex-direction: column;
  gap: 30px;
`;

export const GlobalStyles = createGlobalStyle`
    *{
        margin:0;
        padding:0;
        box-sizing: border-box;
        font-family: 'Inter', sans-serif;
    }
`;
