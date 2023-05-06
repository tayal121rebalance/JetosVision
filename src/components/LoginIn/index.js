import { useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
const LoginIn = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [token, setToken] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new URLSearchParams();
    formData.append("username", email);
    formData.append("password", password);
    const response = await fetch("http://0.0.0.0:8083/token", {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: formData.toString(),
    });

    const data = await response.json();

    if (response.ok) {
      console.log(data);
      localStorage.setItem("token", data.access_token);
      navigate("/");
    } else {
      console.error("Error logging in");
    }
  };

  return (
    <MainContainer>
      <SecondaryContainer>
        <InputContainer>
          <TextLabel>Email</TextLabel>
          <TextInput
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            type="text"
          ></TextInput>
        </InputContainer>
        <InputContainer>
          <TextLabel>Password</TextLabel>
          <TextInput
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            type="password"
          ></TextInput>
        </InputContainer>

        <ButtonContainer onClick={handleSubmit}>Login</ButtonContainer>
      </SecondaryContainer>
    </MainContainer>
  );
};

export default LoginIn;

export const MainContainer = styled.div`
  margin-top: 92px;
  display: flex;
  justify-content: center;
  height: auto;
  width: auto;
  color: red;
  align-items: center;
`;

export const SecondaryContainer = styled.div`
  display: flex;
  align-self: center;
  border: 4px solid #03045e;
  height: 500px;
  width: 600px;
  color: red;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: blue;
  background: linear-gradient(
    180deg,
    rgba(48, 48, 48, 0.15) 0%,
    rgba(48, 48, 48, 0) 100%
  );

  border-radius: 63px;
`;

export const TextInput = styled.input`
  width: 400px;
  height: 40px;
  border-radius: 18px;
  margin-top: 4px;
`;

export const TextLabel = styled.label`
  font-family: "inter";
  font-size: 18px;
  color: white;
  margin-top: 2x;
`;

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 18px;
`;

export const ButtonContainer = styled.button`
  margin-top: 14px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 16px 32px;
  gap: 10px;
  width: 172px;
  height: 61px;

  border-radius: 64px;
  /* Inside auto layout */
  flex: none;
  order: 1;
  flex-grow: 0;
  font-size: 18px;
  ${"" /* Changed */}
  border: 4px solid #03045e;
  width: 10rem;
  height: 3.5rem;
  padding: 0.9rem;
`;
