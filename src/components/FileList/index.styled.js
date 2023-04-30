import styled from "styled-components";
export const FileContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 12px;

  ${'' /* Changed */}
  ${'' /* border: 2px solid green; */}
  width: 100%;
  margin: 1rem auto;
  flex-direction: row;
  flex-wrap: wrap;
`;

export const MainContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 16px;
  gap: 24px;
  width: 232px;
  height: 293px;
  background: rgba(235, 235, 235, 0.05);
  backdrop-filter: blur(250px);
  border-radius: 32px;

  ${'' /* Changed */}
  margin: 0.25rem auto;
  padding: 0;
  flex-wrap: wrap;
  ${'' /* border: 2px solid green; */}
`;

export const ImageText = styled.div`
  text-align: center;
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;
  color: #e0e0e0;
  flex: none;
  order: 1;
  align-self: stretch;
  flex-grow: 0;
  z-index: 1;
`;

export const RemoveImage = styled.img`
  position: absolute;
  right: 30px;
  top: 36px;
  cursor: pointer;
`;


