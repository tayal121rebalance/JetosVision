import styled from "styled-components";
export const FileContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 12px;
`;

export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 16px;
  gap: 24px;
  width: 232px;
  height: 293px;
  background: rgba(235, 235, 235, 0.05);
  backdrop-filter: blur(250px);
  border-radius: 32px;
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


