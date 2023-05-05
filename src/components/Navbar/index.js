import React from "react";
import {
  MainConatiner,
  ImageContainer,
  ButtonContainer,
  Textbox1,
} from "./index.styled";
import NavbarLogo from "../../assests/logo/logo.png";

export default function Navbar() {
  return (
    <>
      <MainConatiner>
        <ImageContainer>
          <img src={NavbarLogo} alt="navbar_logo" />
        </ImageContainer>
        {/* <ButtonContainer>
          <Textbox1>Join Beta</Textbox1>
        </ButtonContainer> */}
      </MainConatiner>
    </>
  );
}
