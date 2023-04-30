import styled from "styled-components";

export const LoadingContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 50px;
  margin-top: 1rem;
  font-size: 1.2rem;
  color: #7577ff;
`;


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

  ${'' /* Changed */}
  font-size: 1.2rem;
  margin: 2rem auto;
  ${'' /* border: 2px solid green; */}

  @media(min-width: 680px) {
    font-size: 1.5rem;
    margin: 1rem 0.5rem;
  }

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

  ${'' /* Changed */}
  width: 90%;
  text-align: center;
  margin: 1rem auto;
  font-size: 1.2rem;

  @media(min-width: 680px) {
    text-align: justify;
    padding-left: 2.5rem;
    font-size: 1.35rem;
  }
`;
export const Blackwrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 0px 128px;
  height: auto;
  
  ${'' /* Changed */}
  ${'' /* border: 2px solid red; */}
  width: 90%;
  margin: 1rem auto;
  padding: 0rem;

  @media(min-width: 680px) {
    justify-content: flex-start;
    align-items: flex-start;
    margin: 4rem auto;
  }
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

  ${'' /* Changed */}
  font-size: 3rem;
  line-height: -1;
  margin: 0.25rem auto;
  ${'' /* border: 2px solid green; */}

  @media(min-width: 680px) {
    font-size: 4.5rem;
    margin: 0.5rem 1rem;
    line-height: 0;
  }
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

  ${'' /* Changed */}
  font-size: 3rem;
  margin: 0.25rem auto;
  ${'' /* border: 2px solid green; */}

  @media(min-width: 680px) {
    font-size: 4.5rem;
    margin: 0.5rem 1rem;
    line-height: -1;
  }

`;

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;

  @media(min-width: 680px) {
    flex-direction: row;
    width: 70%;
    align-items: center;
  }
`;

export const InputContainer = styled.div`
  margin-top: 24px; 
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
  justify-content: center;
  gap: 12px;

  ${'' /* border: 2px solid green; */}

  @media(min-width: 680px) {
    flex-direction: row;
    width: 100%;
  }
`;

export const AnswerContainer = styled.div`
margin-top: 24px; 
display: flex;
flex-direction: row;
width: 100%;
align-items: center;
justify-content: center;
gap: 12px;
border: 2px solid green;
`;
