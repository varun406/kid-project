import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  display: grid;
  place-items: center;
  background: #0d4c92;
`;

export const LoginWrap = styled.div`
  width: min(800px, calc(100% - 20px));
  height: 500px;
  display: flex;
  border-radius: 15px;
  overflow: hidden;
  box-shadow: -1px 2px 15px -10px rgba(0, 0, 0, 0.75);
  background: white;
`;

export const IllustrationSection = styled.div`
  flex: 1;
  background-color: #00abb3;

  @media (max-width: 768px) {
    display: none;
  }
`;

export const IllustrationImage = styled.img`
  max-width: 400px;
  height: 500px;
  object-fit: contain;
`;

export const CredentialSection = styled.div`
  flex: 1;
  display: grid;
  place-items: center;
`;
export const LoginSection = styled.form`
  min-width: 200px;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;
export const HeadingSection = styled.div``;
export const Heading = styled.h1`
  font-size: 26px;
  font-weight: 600;
`;
export const CredentialDetails = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;
export const InputSection = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 7px;
`;

export const Error = styled.p`
  font-size: 14px;
  font-weight: 400;
  color: red;
  margin-top: -5px;
`;

export const InputLabel = styled.p`
  font-size: 15px;
  font-weight: 500;
`;
export const InputField = styled.input`
  max-width: 250px;
  height: 35px;
  outline: none;
  border-radius: 7px;
  background: transparent;
  font-size: 15px;
  font-weight: 400;
  border: 1px solid darkgray;
  padding: 5px 10px;
`;
export const LoginButton = styled.button`
  width: 100%;
  height: 35px;
  border-radius: 7px;
  outline: none;
  border: none;
  text-align: center;
  background-color: darkblue;
  color: white;
  font-weight: 600;
  letter-spacing: 1px;
`;
export const NoticeSection = styled.div``;
export const Notice = styled.p``;
export const Break = styled.span`
  a {
    color: darkblue;
  }
`;
