import React from "react";
import { useNavigate } from "react-router-dom";
import {
  MainConatiner,
  ImageContainer,
  ButtonContainer,
  Textbox1,
} from "./index.styled";
import NavbarLogo from "../../assests/logo/logo.png";

export default function Navbar() {
  const  navigate= useNavigate()
  const isAuth = localStorage.getItem("token");
  const  handleLogout= ()=>{
    localStorage.removeItem('token')
    navigate('/login')
  }
  return (
    <>
      <MainConatiner>
        <ImageContainer>
          <img src={NavbarLogo} alt="navbar_logo" />
        </ImageContainer>
        {isAuth ? (
          <ButtonContainer onClick={handleLogout}>
            <Textbox1>Logout</Textbox1>
          </ButtonContainer>
        ) : null}
      </MainConatiner>
    </>
  );
}
