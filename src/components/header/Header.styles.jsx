import styled from "styled-components";
export const Wrapper = styled.div`
  width: min(1100px, calc(100% - 40px));
  min-height: 85px;
  margin-inline: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const MenuSection = styled.div`
  display: none;

  @media (max-width: 992px) {
    display: flex;
  }
`;

export const LogoSection = styled.div`
  min-height: 70px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
`;

export const Logo = styled.img`
  width: 100%;
  height: 60px;
  object-fit: cover;
`;

export const UserSection = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;

  a {
    text-decoration: none;
  }
`;

export const RegisterButton = styled.button`
  width: 130px;
  min-height: 40px;
  font-size: 16px;
  font-weight: 600;
  color: #487bb6;
  cursor: pointer;
  border: 2px solid #5a9cbf;
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
  color: black;
`;
