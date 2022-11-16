import styled from "styled-components";
export const Wrapper = styled.div`
  width: min(1100px, calc(100% - 40px));
  min-height: 85px;
  margin-inline: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const LogoSection = styled.div`
  max-width: 150px;
  min-height: 80px;
`;

export const Logo = styled.img`
  width: 100%;
  height: 80px;
  object-fit: cover;
`;

export const UserSection = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;

  a {
    text-decoration: none;
  }
`;

export const RegisterButton = styled.button`
  width: 130px;
  min-height: 40px;
  font-size: 16px;
  font-weight: 600;
  color: black;
  cursor: pointer;
  border: 2px solid black;
  background: transparent;
  border-radius: 25px;
  outline: none;
  display: grid;
  place-items: center;
  font-family: "Poppins", sans-serif;
`;

export const LoginButton = styled(RegisterButton)`
  width: min-content;
  background: transparent;
  border: none;
  border-radius: 0;
`;

export const iconStyles = {
  width: "40px",
  height: "40px",
  cursor: "pointer",
};
