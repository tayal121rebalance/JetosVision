import React from "react";
import styled from "styled-components";

export default function Askmecomp() {
  return (
    <>
    <Blackwrapper>
        <Whitetext>
            Ask me
        </Whitetext>

        <Bluetext>
            Anything
        </Bluetext>
        <Formmain>
            
        </Formmain>
            <Askbutton>
                Ask
            </Askbutton>

        <Createbutton>
            <Textbox3>
                Create assistant
            </Textbox3>

        </Createbutton>
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
height: 1216px;
left: 0px;
top: 116px;

background: rgba(0, 0, 0, 1);
/* Grey/ 90 */


`;
const Whitetext = styled.div`
position: absolute;
width: 651px;
height: 116px;
left: 164px;
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
left: 447.07px;
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

