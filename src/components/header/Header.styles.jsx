import styled from "styled-components";
export const Wrapper = styled.div`
  width: 100%;
  max-width: calc(100% - 3rem);
  height: 80px;
  margin-inline: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const LogoSection = styled.div`
  width: 18.75;
  height: 3.75;
`;

export const Logo = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const Navigation = styled.div`
  display: flex;
  gap: 30px;

  a {
    text-decoration: none;
    font-size: 1.2rem;
    font-weight: 500;
    color: black;
  }
`;

export const UserSection = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 30px;
`;

export const iconStyles = {
  width: "2.5rem",
  height: "2.5rem",
  cursor: "pointer",
};
