import React, { useContext } from "react";
import { ContextData } from "./ContextData";
import { WrapNavbar } from "./contextstyle";
import { Sardorbek } from "./MainContext";

const ContextNavbar = () => {
  const [state, setState] = useContext(Sardorbek);

  return (
    <div>
      <WrapNavbar>
        <h1>Home</h1>
        <h1>About</h1>
        <h1>CONTACT</h1>
        <h1>Count  :: {state.length}</h1>
      </WrapNavbar>
    </div>
  );
};

export default ContextNavbar;
