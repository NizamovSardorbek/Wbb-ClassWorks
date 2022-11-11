import React from "react";
import { useRef } from "react";
import { useState } from "react";

const Uncontroller = () => {
  const title = useRef("");
  return (
    <div>
      <h1>Uncontroller</h1>
      <input ref={title} type="text" />

      <button onClick={() => alert(title.current.value)}>Click</button>
    </div>
  );
};

export default Uncontroller;
