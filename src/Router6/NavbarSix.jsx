import React from "react";
import { WrapSix } from "./StyleSix";
import { Link, useNavigate } from "react-router-dom";
const NavbarSix = () => {
  const navigate = useNavigate();
  return (
    <WrapSix>
      <Link to="/home">
        <h1 onClick={() => navigate("/home")}>Home</h1>
      </Link>
      <Link to="/about">
        <h1 onClick={() => navigate("/about")}>About</h1>
      </Link>
      <Link to="contact">
        <h1 onClick={() => navigate("/contact")}> Contact</h1>
      </Link>
    </WrapSix>
  );
};

export default NavbarSix;
