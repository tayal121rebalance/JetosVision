import styled from "styled-components";

export const Askbutton = styled.button`
  box-sizing: border-box;
  display: flex;
  font-family: "Inter";
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 16px 32px;
  font-family: "Inter";
  font-style: normal;
  font-weight: 600;
  font-size: 24px;
  line-height: 29px;
  text-align: center;
  width: 110px;
  height: 61px;
  left: 1179px;
  top: 461px;
  background: #ffffff;
  box-shadow: 5px 5px 50px rgba(70, 27, 194, 0.2);
  border-radius: 64px;
  transition: 0.2s ease-in-out 0s;
  &:hover {
    transform: scale(1.1);
  }
`;

export const Formmain = styled.input`
  
  box-sizing: border-box;
  color: white;
  width: 900px;
  height: 77px;
  left: 161px;
  top: 443px;
  font-size: 24px;

  background: linear-gradient(
    180deg,
    rgba(48, 48, 48, 0.5) 0%,
    rgba(48, 48, 48, 0) 100%
  );
  backdrop-filter: blur(250px);
  box-shadow: 5px 5px 50px rgba(70, 27, 194, 0.9);
  border-radius: 63px;
  padding-left: 18px;
`;
export const Blackwrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 0px 128px;
  height: auto;
`;
export const Whitetext = styled.div`
  margin: 8px;
  font-family: "Inter";
  font-style: normal;
  font-weight: 700;
  font-size: 96px;
  line-height: 116px;
  color: rgba(255, 255, 255, 0.95);
  text-align: center;
`;

export const Bluetext = styled.div`
  margin: 8px;
  font-family: "Inter";
  font-style: normal;
  font-weight: 700;
  font-size: 96px;
  line-height: 106px;
  text-align: center;
  background: linear-gradient(180deg, #7577ff 0%, #4c4dbb 100%);
  -webkit-background-clip: text;
  color: transparent;
`;

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column
  width: 100%
`;

export const InputContainer = styled.div`
  margin-top: 24px; 
  display: flex;
  flex-direction: row;
  width: 100%;
  align-items: center;
  justify-content: center;
  gap: 12px;
`;

export const AnswerContainer = styled.div`
margin-top: 24px; 
display: flex;
flex-direction: row;
width: 100%;
align-items: center;
justify-content: center;
gap: 12px;
`;
