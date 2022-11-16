import styled from "styled-components";
import { Container } from "../../components/CommonStyles";

export const Box = styled(Container)`
  width: 100vw;
  background-color: #f7f7f7;
`;

export const Wrapper = styled.div`
  width: min(calc(100% - 48px), 1100px);
  margin-inline: auto;
  display: flex;
  flex-direction: column;
  gap: 80px;
  padding-block: 50px;
`;
