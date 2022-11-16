import styled from "styled-components";

export const NavigationSection = styled.div`
  display: flex;
  flex-direction: ${(props) =>
    props.direction === "column" ? "column" : "row"};
  gap: 30px;

  a {
    text-decoration: none;
    font-size: 18px;
    font-weight: 500;
    color: #393e46;

    @media (max-width: 768px) {
      display: none;
    }
  }

  a.active {
    font-weight: 600;
    color: black;
  }
`;
