import styled from "styled-components";

export const MainConatiner = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
  padding: 24px;

  ${'' /* Changed */}
  padding: 1rem 0rem;
  width: 90%;
  margin: 0rem auto;
  ${'' /* border: 2px solid green; */}

  @media(min-width: 680px) {
    margin: 0.5rem auto;
  }

`;

export const ImageContainer = styled.div`
  height: 3.2rem;
  width: 3.2rem;
  ${'' /* border: 2px solid red; */}

  img {
    height: 100%;
    width: 100%;
  }
`;

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

  ${'' /* Changed */}
  border: 2px solid black;
  width: 10rem;
  height: 3.5rem;
  padding: 0.9rem;
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

${'' /*  Changed */}
width: 100%;
height: 100%;
font-size: 1.15rem;
line-height: 1.5rem;
${'' /* border: 2px solid black; */}

@media(min-width: 680px) {
  font-size: 1.35rem;
}
`;
