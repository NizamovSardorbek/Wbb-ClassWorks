import React from "react";
import { NavLink } from "react-router-dom";
import About from "./About";
import Contact from "./Contact";
import Home from "./Home";
import { Wrap, WrapNavbar } from "./RouterStyle";

const RouterNavbar = () => {
  const style = { color: "red", fontSize: 70 };
  return (
    <WrapNavbar>
      <Wrap activeStyle={style} to="/home">
        Home
      </Wrap>
      <Wrap activeStyle={style} to="/about">
        About
      </Wrap>
      <Wrap activeStyle={style} to="/contact">
        Contact
      </Wrap>
      <Wrap activeStyle={{ color: "red", fontSize: 70 }} to="/info">
        info
      </Wrap>
    </WrapNavbar>
  );
};

export default RouterNavbar;
