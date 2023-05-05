import styled from "styled-components";

export const FileInput = styled.input`
  opacity: 0;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  cursor: pointer;

  ${'' /* Changed */}
`;

export const Textboxdrop = styled.div`
  font-family: "Inter";
  font-style: normal;
  padding-top: 10px;
  font-weight: 400;
  font-size: 20px;
  line-height: 24px;
  color: #f2f2f2;

  ${'' /* Changed */}
  margin: 1rem auto;
  ${'' /* border: 2px solid white; */}

  @media(min-width: 680px) {
    font-size: 1.5rem;
  }

`;

export const Blackwrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  ${'' /* Changed */}
  ${'' /* border: 2px solid green; */}
  width: 90%;
  margin: 0rem auto;
  height: 100%;

  @media(min-width: 680px) {
    margin: 0.5rem auto;
  }

  @media(min-width: 1290px) {
  width: 80%;
  margin: 1rem auto;
}
  
`;
export const Whitetext = styled.div`
  
  ${'' /* height: 116px; */}
  
  font-family: "Inter";
  font-style: normal;
  font-weight: 700;

  color: rgba(255, 255, 255, 0.95);
  text-align: center;

  ${'' /* Changed */}
  font-size: 1.5rem;
  width: 90%;
  margin: 0rem auto;
  padding: 0;
  line-height: 1.7;
  ${'' /* border: 2px solid red; */}

  @media(min-width: 680px) {
    font-size: 2.5rem;
    margin: 0.5rem auto;
  }

`;
export const Bluetext = styled.div`
 
  font-family: "Inter";
  font-style: normal;
  font-weight: 1000;
  text-align: center;

  ${'' /* Changed */}
  width: 90%;
  margin: 0rem auto;
  font-size: 2rem;
  line-height: 1.7;
  ${'' /* border: 2px solid gray; */}


  background: linear-gradient(180deg, #7577ff 0%, #4c4dbb 100%);
  -webkit-background-clip: text;
  color: transparent;

  @media(min-width: 680px) {
    height: 4rem;
    font-size: 3rem;
    line-height: 1;
    margin: 0.5rem auto;
  }

`;
export const Textbox2 = styled.div`
  ${'' /* width: 548px; */}
  height: 24px;
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  ${'' /* font-size: 20px; */}
  line-height: 24px;
  color: #bdbdbd;
  margin-top: 22px;

  ${'' /* Changed */}
  text-align: center;
  font-size: 1.25rem;
  line-height: 1.5;
  height: 4rem;
  width: 90%;
  ${'' /* border: 2px solid green; */}

  @media(min-width: 680px) {
    font-size: 1.5rem;
  }

`;

export const CreateButton = styled.button`
  ${'' /* margin-top: 50px; */}

  ${'' /* Changed */}
  width: 80%;
  margin-top: 1.25rem;
  ${'' /* border: 2px solid green; */}

  /* Buttons */

  box-sizing: border-box;

  /* Auto layout */
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 16px 32px;

  width: 255px;
  height: 255px;

 
  box-shadow: 5px 5px 50px rgba(70, 27, 194, 0.2);
  border-radius: 64px;

  ${'' /* width: 255px; */}
  height: 61px;

  ${'' /* Changed */}
  font-size: 1.25rem;
  width: 15rem;
  margin: 2rem auto;
  ${'' /* border: 2px solid blue; */}

  font-family: "Inter";
  font-style: normal;
  font-weight: 600;
  ${'' /* font-size: 18px; */}
  line-height: 19px;

  @media(min-width: 680px) {
    width: 20rem;
    margin: 4rem auto;
    font-size: 1.5rem;
  }
 
  transition: 0.2s ease-in-out 0s;
  &:hover {
    transform: scale(1.1);
  }
`;

export const FileInputContainer = styled.div`
  ${'' /* margin-top: 36px; */}
  display: flex;
  justify-content: center;
  align-items: center;
  height: auto;
  ${'' /* width: 1118px; */}

  ${'' /* Changed */}
  ${'' /* border: 2px solid green; */}
  width: 80%;
  margin: 2rem auto;

  min-height: 360px;
  border: 4px solid #03045e;
  flex-direction: column;
  background: linear-gradient(
    180deg,
    rgba(48, 48, 48, 0.15) 0%,
    rgba(48, 48, 48, 0) 100%
  );
  backdrop-filter: blur(250px);
  box-shadow: 5px 5px 50px rgba(70, 27, 194, 0.9);
  position: relative;
  border-radius: 63px;
`;

export const ImageIcon = styled.img`
 width: 72px;
 height: 84px;
 margin: 1rem auto;

 ${'' /* border: 2px solid green; */}

 @media(min-width: 680px) {
  width: 100px;
  height: 105px;
 }
`;
export const FileInputDropBox = styled.div`
  width: 1118px;
  min-height: 360px;
  border-radius: 20px;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  width: 80%;

  ${'' /* Changed */}
  ${'' /* border: 2px solid blue; */}
  width: 100%;
  height: 100%;
  border-radius: 63px;
  ${'' /* border: 2px solid green; */}
`;

export const FileInputPlaceholder = styled.div`
  position: relative;
  z-index: -1;
  user-select: none;
  display: flex;
  align-items: center;
  justify-content: center;
  ${'' /* width: 500px; */}
  flex-direction: column;

  ${'' /* Changed */}
  width: 90%;
  margin: 0rem auto;
  ${'' /* border: 4px solid brown; */}
`;

export const FileListContainer = styled.div`
  margin: 8px
`;






// Work Section




export const HowItWorks = styled.div`
  width: 90%;
  height: auto;
  margin: 1rem auto;
  font-family: 'Inter';
  font-style: normal;
  font-weight: 400;
  font-size: 1rem;
  line-height: 1;
  text-transform: uppercase;

  color: #BDBDBD;
  flex: none;
  order: 0;
  flex-grow: 0;

  @media(min-width: 1290px) {
    width: 100%;
    border:
    margin: 1rem auto;
  }
`;

export const HowItWorksText = styled.div`

  font-family: 'Inter';
  font-style: normal;
  font-weight: 600;
  font-size: 1.5rem;
  line-height: 3;
  text-align: center;

  color: #E0E0E0;

  flex: none;
  order: 0;
  flex-grow: 0;
  z-index: 0;

  @media(min-width: 620px) {
    font-size: 2.25rem;
  }
  
  @media(min-width: 1290px) {
    font-size: 3rem;
  }
`;

export const WorksContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: flex-start;
  padding: 0px;
  gap: 21px;
  width: 90%;
  margin: 1rem auto;
  height: auto;

  flex: none;
  order: 1;
  align-self: stretch;
  flex-grow: 0;

  
`;


export const WorksContainerItem = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 2rem 1rem;
  margin: 2rem auto;
  gap: 10px;
  width: 253.75px;
  height: 280px;

  background: linear-gradient(180deg, #121212 0%, rgba(48, 48, 48, 0.25) 100%);
  backdrop-filter: blur(250px);
  border-radius: 32px;
`;

export const WorksContainerText = styled.div`
  
  font-family: 'Inter';
  font-style: normal;
  font-weight: 600;
  font-size: 0.75rem;
  line-height: 2;
  color: #E0E0E0;
  text-align: center;
  
  flex: none;
  order: 0;
  flex-grow: 0;
  z-index: 0;
  position: relative;

  @media(min-width: 620px) {
    font-size: 0.9rem;
  }
  @media(min-width: 1290px) {
    font-size: 1rem;
  }
`;

export const WorkIcon = styled.div`
  height: 5rem;
  width: 5rem;
  margin: 0.2rem auto;
  position: relative;

  ${'' /* position: absolute;
  left: 8.33%;
  right: 8.33%;
  top: 8.33%;
  bottom: 8.33%; */}

  ${'' /* background: linear-gradient(180deg, rgba(255, 255, 255, 0.25) 0%, rgba(255, 255, 255, 0) 100%); */}
  opacity: 0.75;

  ${'' /* position: absolute;
  left: 27.58%;
  right: 27.63%;
  top: 57.46%;
  bottom: 36.29%; */}

  ${'' /* position: absolute;
  left: 35%;
  right: 45%;
  top: 40%;
  bottom: 8.33%; */}

  img {
    height: 100%;
    width: 100%;
    position: absolute;
    top: 0;

    
  }

`;

export const WorkNum = styled.div`
  
box-sizing: border-box;

/* Auto layout */

display: flex;
flex-direction: column;
align-items: center;
padding: 14px 10px;
gap: 10px;

position: absolute;
width: auto;
height: auto;
left: calc(50% - 52px/2 + 0.12px);
top: -29px;

background: linear-gradient(180deg, #121212 0%, #121212 100%);
box-shadow: 0px 0px 25px #000000;
backdrop-filter: blur(250px);
/* Note: backdrop-filter has minimal browser support */

border-radius: 32px;

/* Inside auto layout */

flex: none;
order: 2;
flex-grow: 0;
z-index: 2;
 span {
  
  width: auto;
  height: auto;

  font-family: 'Inter';
  font-style: normal;
  font-weight: 700;
  font-size: 1.25rem;
  line-height: 1;

  background: linear-gradient(180deg, #7577FF 0%, #4C4DBB 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  text-fill-color: transparent;
  flex: none;
  order: 0;
  flex-grow: 0;
}

`;




export const AboutSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 90%;
  margin: 2rem auto;
  height: auto;

  @media(min-width: 1290px) {
  width: 80%;
  margin: 1rem auto;
}
`;

export const ItemSecion = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;

  width: 100%;
  height: auto;
  margin: 1rem auto;

  flex: none;
  order: 0;
  align-self: stretch;
  flex-grow: 0;

  color: white;
`;

export const ItemIcon = styled.div`
  width: 5rem;
  height: 5rem;

  ${'' /* background: linear-gradient(180deg, rgba(94, 96, 218, 0.5) 0%, rgba(117, 119, 255, 0) 100%); */}

  flex: none;
  order: 0;
  flex-grow: 0;

  img {
    height: 100%;
    width: 100%;
  }

  @media(min-width: 1290px) {
    height: 7rem;
    width: 7rem;
  }

`;

export const ItemHead = styled.div` 
  
  font-family: 'Inter';
  font-style: normal;
  font-weight: 700;
  font-size: 2rem;
  line-height: 1;
  leading-trim: both;
  text-edge: cap;
  margin: 1rem 0rem;
  text-align: justify;

  color: rgba(255, 255, 255, 0.95);

  @media(min-width: 1290px) {
    font-size: 2.5rem;
  }
`;

export const ItemPara =styled.div`
  
font-family: 'Inter';
font-style: normal;
font-weight: 400;
font-size: 1.4rem;
line-height: 1.25;
margin: 1rem 0rem;
color: #BDBDBD;

flex: none;
order: 2;
align-self: stretch;
flex-grow: 0;

@media(min-width: 1290px) {
    font-size: 1.75rem;
  }
`;



export const FaqSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 24px;

  width: 95%;
  margin: 1rem auto;
  height: auto;

@media(min-width: 1290px) {
  width: 80%;
  margin: 1rem auto;
}

`;

export const FaqHead = styled.div`
  width: auto;
  height: auto;

font-family: 'Inter';
font-style: normal;
font-weight: 400;
font-size: 1rem;
line-height: 1;
text-transform: uppercase;
color: #BDBDBD;

@media(min-width: 1290px) {
  font-size: 1.25rem;
}

`;

export const FaqList = styled.div`
box-sizing: border-box;

/* Auto layout */

display: flex;
flex-direction: column;
align-items: flex-start;
gap: 10px;

width: 100%;
height: auto;
overflow-y: scroll;

background: linear-gradient(180deg, rgba(48, 48, 48, 0.2) 0%, rgba(48, 48, 48, 0.2) 100%);
backdrop-filter: blur(250px);
border-radius: 32px;


`;

export const ListItem = styled.div`
  box-sizing: border-box;

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0.9rem;
  margin: 1rem auto;
  gap: 10px;

  width: 100%;
  height: auto;

  background: linear-gradient(180deg, rgba(48, 48, 48, 0.2) 0%, rgba(48, 48, 48, 0.2) 100%);
  backdrop-filter: blur(250px);

  border-radius: 24px;
  @media(min-width: 620px) {
    padding: 1rem;
  }

`;

export const Question = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
width: 100%;
height: auto;

font-family: 'Inter';
font-style: normal;
font-weight: 600;
font-size: 1.1rem;
line-height: 2;
color: #E0E0E0;

@media(min-width: 620px) {
  font-size: 1.25rem;
}

@media(min-width: 1290px) {
  font-size: 1.5rem;
}

`;


export const Answer = styled.div`
width: 100%;
height: auto;

font-family: 'Inter';
font-style: normal;
font-weight: 400;
font-size: 1.1rem;
line-height: 2;
color: #BDBDBD;

@media(min-width: 620px) {
  font-size: 1.25rem;
}

@media(min-width: 1290px) {
  font-size: 1.5rem;
}
`;


export const ArrowBox = styled.div`
  box-sizing: border-box;

/* Auto layout */

display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
padding: 0.2rem;
gap: 10px;

width: 40px;
height: 40px;

background: linear-gradient(180deg, rgba(48, 48, 48, 0.15) 0%, rgba(0, 0, 0, 0.15) 100%);
box-shadow: 0px 0px 25px #000000;
backdrop-filter: blur(250px);
/* Note: backdrop-filter has minimal browser support */

border-radius: 96px;

`;

export const Arrow = styled.div`
 
font-size: 2.5rem;


`;