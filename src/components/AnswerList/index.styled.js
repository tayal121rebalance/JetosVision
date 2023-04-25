import styled from "styled-components";

export const MainContainer = styled.div`
  width: 1118px;
  height: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background: linear-gradient(
    180deg,
    rgba(48, 48, 48, 0.15) 0%,
    rgba(48, 48, 48, 0) 100%
  );
  backdrop-filter: blur(250px);
  border-radius: 32px;
  border: 1px solid grey;
  padding: 18px;
`;

export const SecondaryContainer = styled.div`
  width: 1054px;
  height: auto;
  background: linear-gradient(
    180deg,
    rgba(48, 48, 48, 0.15) 0%,
    rgba(48, 48, 48, 0) 100%
  );
  backdrop-filter: blur(250px);
  border-radius: 32px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  color: white;
  border: 1px solid grey;
  padding: 8px;
  margin: 8px;
`;

export const Question = styled.div`
  width: auto;
  height: 24px;
  margin: 8px;
  font-family: "Inter";
  font-style: normal;
  font-weight: 600;
  font-size: 20px;
  line-height: 24px;
  color: #e0e0e0;
  padding: 4px;
`;

export const Answer = styled.div`
  width: 993px;
  height: auto;
  margin: 8px;
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 24px;
  color: #bdbdbd;
  padding: 4px;
`;
