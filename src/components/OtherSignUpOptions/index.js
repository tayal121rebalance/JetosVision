import styled from "styled-components";

const OtherSignUpOptions = ({ options }) => {
  return (
    <>
      {options &&
        options.map((option, i) => {
          return (
            <OtherLoginOptionsContainer key={i}>
              <OtherLoginOptionsImage src={option.signUpImage} alt="animg" />
              <OtherLoginOptionsText>{option.signUpText}</OtherLoginOptionsText>
            </OtherLoginOptionsContainer>
          );
        })}
    </>
  );
};

export default OtherSignUpOptions;

export const OtherLoginOptionsContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 4px 18px;
  width: 261px;
  height: 40px;
  linear-gradient(180deg, rgba(255, 255, 255, 0.5) 0%, rgba(255, 255, 255, 0.15) 100%);
  background: linear-gradient(180deg, #121212 0%, rgba(48, 48, 48, 0) 100%);
  backdrop-filter: blur(250px);
  border-radius: 32px;
  border: 1px solid rgba(255, 255, 255, 0.5);
  margin: 8px;
  &:hover {
    background: linear-gradient(180deg, #121212 0%, rgba(48, 48, 48, 0) 100%);
  }
`;

export const OtherLoginOptionsText = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: row;
  align-items: center;
  height: 40px;
  font-family: "Inter";
  font-style: normal;
  font-weight: 300;
  font-size: 16px;
  line-height: 24px;
  color: #ffffff;
`;

export const OtherLoginOptionsImage = styled.img`
  margin: 8px;
`;
