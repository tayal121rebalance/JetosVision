import styled from "styled-components";

export const FileInput = styled.input`
  opacity: 0;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  cursor: pointer;
`;

export const Textboxdrop = styled.div`
  font-family: "Inter";
  font-style: normal;
  padding-top: 10px;
  font-weight: 400;
  font-size: 20px;
  line-height: 24px;
  color: #f2f2f2;
`;

export const Blackwrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  
`;
export const Whitetext = styled.div`
  
  width: 651px;
  height: 116px;
  left: 384px;
  top: 188px;

  font-family: "Inter";
  font-style: normal;
  font-weight: 700;
  font-size: 96px;
  line-height: 116px;

  color: rgba(255, 255, 255, 0.95);
  text-align: center;
`;
export const Bluetext = styled.div`
 
  width: 886.63px;
  height: 74.83px;
  left: 267.07px;
  top: 345px;

  font-family: "Inter";
  font-style: normal;
  font-weight: 1000;
  font-size: 96px;
  line-height: 76px;
  text-align: center;

  background: linear-gradient(180deg, #7577ff 0%, #4c4dbb 100%);
  -webkit-background-clip: text;
  color: transparent;
`;
export const Textbox2 = styled.div`
  width: 548px;
  height: 24px;
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 24px;
  color: #bdbdbd;
  margin-top: 22px
`;

export const CreateButton = styled.button`
  margin-top: 50px;
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

  width: 255px;
  height: 61px;

  font-family: "Inter";
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 19px;
 
  transition: 0.2s ease-in-out 0s;
  &:hover {
    transform: scale(1.1);
  }
`;

export const FileInputContainer = styled.div`
  margin-top: 36px;
  display: flex;
  justify-content: center;
  align-items: center;
  height: auto;
  width: 1118px;
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
 width: 72px,
 height: 84px
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
`;

export const FileInputPlaceholder = styled.div`
  position: relative;
  z-index: -1;
  user-select: none;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 500px;
  flex-direction: column;
`;

export const FileListContainer = styled.div`
  margin: 8px
`;
