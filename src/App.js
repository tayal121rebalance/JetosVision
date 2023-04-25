import React from "react";
import styled from "styled-components";
import Navbar from "./components/Navbar";
import FileUpload from "./components/FileUpload";
import { Route, Routes } from "react-router-dom";
import AskMe from "./components/AskMe";

const MainContainer = styled.div`
  background: rgba(0, 0, 0, 0.1);
`;

function App() {
  return (
    <MainContainer>
      <Navbar />
      <Routes>
       
        <Route exact path="/" element={<FileUpload />} />
        <Route exact path="/askme" element={<AskMe />} />
        
      </Routes>
    </MainContainer>
  );
}

export default App;
