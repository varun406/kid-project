import styled from "styled-components";
export const Wrapper = styled.div`
  max-width: 1400px;
  height: 80px;
  margin-inline: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const LogoSection = styled.div`
  width: 200px;
  height: 60px;
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
    font-size: 18px;
    font-weight: 500;
    color: black;

    @media only screen and (max-width: 768px) {
      display: none;
    }
  }
`;

export const UserSection = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
`;

export const iconStyles = {
  width: "40px",
  height: "40px",
  cursor: "pointer",
};
