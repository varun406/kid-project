import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  border-radius: ${(props) => props.borderRadius || 0};
  background-color: ${(props) => props.bgColor || "white"};
`;
