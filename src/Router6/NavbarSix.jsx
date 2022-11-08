import React from "react";
import { WrapSix } from "./StyleSix";
import { useNavigate } from "react-router-dom";
const NavbarSix = () => {
  const navigate = useNavigate();
  return (
    <WrapSix>
      <h1 onClick={() => navigate("/home")}>Home</h1>
      <h1 onClick={() => navigate("/about")}>About</h1>
      <h1 onClick={() => navigate("/contact")}> Contact</h1>
    </WrapSix>
  );
};

export default NavbarSix;
