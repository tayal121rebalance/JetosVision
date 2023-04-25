import React from "react";
import styled from "styled-components";
import Navbar from "./components/Navbar";
import FileUpload from "./components/FileUpload";


const MainContainer = styled.div`
  background: rgba(0, 0, 0, 0.1);
`;

function App() {
  return (
    <MainContainer>
      <Navbar />
      <FileUpload />
    </MainContainer>
  );
}

export default App;
