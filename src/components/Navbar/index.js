import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import {
  MainConatiner,
  ImageContainer,
  ButtonContainer,
  Textbox1,
} from "./index.styled";
import NavbarLogo from "../../assests/logo/logo.png";

export default function Navbar() {
  const navigate = useNavigate();
  const isAuth = localStorage.getItem("token");
  const [isSignUp, setIsSignUp] = useState();
  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  const handleLogin = (e) => {
    navigate("/login");
  };
  const location = useLocation();

  useEffect(() => {
    if (location.pathname === "/signIn") {
      setIsSignUp(true);
    } else {
      setIsSignUp(false);
    }
  }, [isSignUp]);

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
        ) : isSignUp ? (
          <ButtonContainer onClick={handleLogin}>
            <Textbox1>Log in</Textbox1>
          </ButtonContainer>
        ) : null}
      </MainConatiner>
    </>
  );
}
