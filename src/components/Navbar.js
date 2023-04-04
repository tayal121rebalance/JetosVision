import React from "react";
import styled from "styled-components";

export default function Navbar() {
  return (
    <>
    <Blackbackground>
        
        <Leftsection>
            Vision
            
        </Leftsection>

        <Rightsection>
            <Textbox1>
                 Join Beta

            </Textbox1>

        </Rightsection>
    </Blackbackground>
    
    </>
  );
}

const Rightsection = styled.div`
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

background: #FFFFFF;
box-shadow: 5px 5px 50px rgba(70, 27, 194, 0.2);
border-radius: 64px;

/* Inside auto layout */

flex: none;
order: 1;
flex-grow: 0;
}
`;

const Textbox1 = styled.div`
width: 108px;
height: 29px;

font-family: 'Inter';
font-style: normal;
font-weight: 600;
font-size: 24px;
line-height: 29px;
/* identical to box height */
text-align : center;


color: #000000;


/* Inside auto layout */

flex: none;
order: 0;
flex-grow: 0;
}
`;

const Leftsection = styled.div`
box-sizing: border-box;

/* Auto layout */

// display: flex;
// flex-direction: row;
// justify-content: center;
// align-items: center;
// padding: 16px 32px;
// gap: 10px;

width: 172px;
height: 61px;

// background: #FFFFFF;
// box-shadow: 5px 5px 50px rgba(70, 27, 194, 0.2);
// border-radius: 64px;

/* Inside auto layout */

flex: none;
order: 1;
flex-grow: 0;
`;

const Blackbackground = styled.div`
display: flex;
flex-direction: row;
justify-content: space-between;
align-items: center;
padding: 0px 128px;
gap: 917px;

position: absolute;
width: 1278px;
height: 116px;
left: 0px;
top: 0px;

background: rgba(0, 0, 0, 10);
/* Grey/ 90 */

border: 1px solid #333333;
backdrop-filter: blur(12.5px);
/* Note: backdrop-filter has minimal browser support */
}
`;


const BlueBackground = styled.div`
width:70vw;
height:80%;
position:absolute;
z-index: 0;
@media (max-width: 960px) {
  width:100%;
}
`;

