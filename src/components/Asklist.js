import React from "react";
import styled from "styled-components";

export default function Askmelist() {
  return (
    <>
    <Blackwrapper>
        <Whitetext>
            Ask me
        </Whitetext>

        <Bluetext>
            Anything
        </Bluetext>
        <Documents>
            <H1>Add documents</H1>
        </Documents>
                <Formmain>
                </Formmain>
            <Askbutton>
                Ask
            </Askbutton>
        
        <Bigwrapper>
            <Smallbox>
                <Questiontext>
                What is the number of times Dhoni hit a six in World cup 2010?
                </Questiontext>

                <Answertext>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </Answertext>
            </Smallbox>
            <Smallbox>
                <Questiontext>
                What is the number of times Dhoni hit a six in World cup 2010?
                </Questiontext>

                <Answertext>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </Answertext>
            </Smallbox>
            <Smallbox>
                <Questiontext>
                What is the number of times Dhoni hit a six in World cup 2010?
                </Questiontext>

                <Answertext>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </Answertext>
            </Smallbox>
            
        </Bigwrapper>
        
    </Blackwrapper>
    
    </>
  );
}

const Askbutton = styled.div`
box-sizing: border-box;

/* Auto layout */

display: flex;
font-family: 'Inter';
flex-direction: row;
justify-content: center;
align-items: center;
padding: 16px 32px;
gap: 10px;
font-family: 'Inter';
font-style: normal;
font-weight: 600;
font-size: 24px;
line-height: 29px;
/* identical to box height */
text-align : center;

position: absolute;
width: 110px;
height: 61px;
left: 1179px;
top: 461px;

/* White */

background: #FFFFFF;
box-shadow: 5px 5px 50px rgba(70, 27, 194, 0.2);
border-radius: 64px;


`;

const Bigwrapper = styled.div`
box-sizing: border-box;

/* Auto layout */

display: flex;
flex-direction: column;
align-items: flex-start;
padding: 32px;
gap: 10px;

position: absolute;
width: 1118px;
height: 702px;
left: 181px;
top: 650px;
overflow-y: scroll;
box-shadow: 5px 5px 50px rgba(94, 96, 218, 0.8);

background: linear-gradient(180deg, rgba(48, 48, 48, 0.15) 0%, rgba(48, 48, 48, 0) 100%);
backdrop-filter: blur(250px);
/* Note: backdrop-filter has minimal browser support */

border-radius: 32px;

`;
const Smallbox = styled.div`
box-sizing: border-box;

/* Auto layout */

display: flex;
flex-direction: column;
align-items: flex-start;
padding: 32px;
gap: 10px;

width: 1054px;
height: 170px;

background: linear-gradient(180deg, rgba(48, 48, 48, 0.15) 0%, rgba(48, 48, 48, 0) 100%);
opacity: 1.0;
backdrop-filter: blur(250px);
box-shadow: 5px 5px 50px rgba(94, 96, 218, 0.5);
/* Note: backdrop-filter has minimal browser support */

border-radius: 24px;

/* Inside auto layout */

flex: none;
order: 1;
align-self: stretch;
flex-grow: 0;

`;
const Questiontext = styled.div`
width: 603px;
height: 24px;

font-family: 'Inter';
font-style: normal;
font-weight: 600;
font-size: 20px;
line-height: 24px;

/* Grey/ 25 */

color: white;


/* Inside auto layout */

flex: none;
// order: 0;
// flex-grow: 0;

`;
const Answertext = styled.div`
width: 993px;
height: 72px;

font-family: 'Inter';
font-style: normal;
font-weight: 400;
font-size: 20px;
line-height: 24px;

/* Grey/ 40 */

color: white;


/* Inside auto layout */

flex: none;
// order: 1;
// flex-grow: 0;

`;
const Documents = styled.div`
box-sizing: border-box;

/* Auto layout */

display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
padding: 16px 32px;
gap: 10px;

position: absolute;
width: 282px;
height: 61px;
left: 1109px;
top: 320px;

/* Black */

background: #000000;
box-shadow: 5px 5px 50px rgba(94, 96, 218, 0.7);
border-radius: 64px;

`;
const H1 = styled.div`
width: 184px;
height: 29px;

font-family: 'Inter';
font-style: normal;
font-weight: 600;
font-size: 24px;
line-height: 29px;
/* identical to box height */


/* Grey/ 25 */

color: #E0E0E0;


/* Inside auto layout */

flex: none;
order: 0;
flex-grow: 0;
`;
const Formmain = styled.div`
box-sizing: border-box;

position: absolute;
width: 976px;
height: 77px;
left: 161px;
top: 443px;

background: linear-gradient(180deg, rgba(48, 48, 48, 0.5) 0%, rgba(48, 48, 48, 0) 100%);
backdrop-filter: blur(250px);
/* Note: backdrop-filter has minimal browser support */
box-shadow: 5px 5px 50px rgba(70, 27, 194, 0.9);
border-radius: 63px;


`;
const Blackwrapper = styled.div`
display: flex;
flex-direction: row;
justify-content: space-between;
align-items: center;
padding: 0px 128px;
gap: 917px;

position: absolute;
width: 1278px;
height: 1716px;
left: 0px;
top: 116px;

background: rgba(0, 0, 0, 1);
/* Grey/ 90 */


`;
const Whitetext = styled.div`
position: absolute;
width: 651px;
height: 116px;
left: 134px;
top: 288px;

font-family: 'Inter';
font-style: normal;
font-weight: 700;
font-size: 96px;
line-height: 116px;

color: rgba(255, 255, 255, 0.95);
text-align : center;
`;
const Submitimage = styled.div`
position: absolute;
left: 14.58%;
right: 14.58%;
top: 8.33%;
bottom: 8.33%;

/* Grey/ 40 */

background: #BDBDBD;
opacity: 0.5;
`;
const Bluetext = styled.div`
position: absolute;
width: 886.63px;
height: 116px;
left: 417.07px;
top: 293px;

font-family: 'Inter';
font-style: normal;
font-weight: 700;
font-size: 96px;
line-height: 106px;
text-align : center;

background: linear-gradient(180deg, #7577FF 0%, #4C4DBB 100%);
-webkit-background-clip: text;
color: transparent;

`;
const Textbox2 = styled.div`
position: absolute;
width: 548px;
height: 24px;
left: 447px;
top: 468px;

font-family: 'Inter';
font-style: normal;
font-weight: 400;
font-size: 20px;
line-height: 24px;

/* Grey/ 40 */

color: #BDBDBD;

`;
const Rectangle = styled.div`
box-sizing: border-box;

position: absolute;
width: 1118px;
height: 360px;
left: 161px;
top: 547px;

background: linear-gradient(180deg, rgba(48, 48, 48, 0.15) 0%, rgba(48, 48, 48, 0) 100%);
backdrop-filter: blur(250px);
box-shadow: 5px 5px 50px rgba(70, 27, 194, 0.9);


/* Note: backdrop-filter has minimal browser support */

border-radius: 63px;

`;
const Createbutton = styled.div`
box-sizing: border-box;

/* Auto layout */

display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
padding: 16px 32px;
gap: 10px;

position: absolute;
width: 255px;
height: 61px;
left: 592.5px;
top: 979px;

background: #1B1B1B;
box-shadow: 5px 5px 50px rgba(70, 27, 194, 0.5);
border-radius: 64px;

`;
const Textbox3 = styled.div`
width: 191px;
height: 29px;

font-family: 'Inter';
font-style: normal;
font-weight: 600;
font-size: 24px;
line-height: 29px;
/* identical to box height */


/* Grey/60 */

color: #828282;


/* Inside auto layout */

flex: none;
order: 0;
flex-grow: 0;

`;

