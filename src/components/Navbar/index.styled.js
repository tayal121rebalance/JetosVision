import styled from "styled-components";

export const MainConatiner = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  padding: 24px;
`;

export const ImageContainer = styled.div``;

export const ButtonContainer = styled.div`
  box-sizing: border-box;
  /* Auto layout */
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 16px 32px;
  gap: 10px;
  width: 172px;
  height: 61px;
  background: #ffffff;
  box-shadow: 5px 5px 50px rgba(70, 27, 194, 0.2);
  border-radius: 64px;
  /* Inside auto layout */
  flex: none;
  order: 1;
  flex-grow: 0;
`;

export const Textbox1 = styled.div`
width: 108px;
height: 29px;
font-family: 'Inter';
font-style: normal;
font-weight: 600;
font-size: 24px;
line-height: 29px;
text-align : center;
color: #000000;
flex: none;
order: 0;
flex-grow: 0;

}
`;
