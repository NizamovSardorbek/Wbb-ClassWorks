import React from "react";
import { useState } from "react";

const Controller = () => {
  const [title, setTitle] = useState("");
  console.log("controller");
  return (
    <div>
      <h1>Controller : {title}</h1>
      <input onChange={(e) => setTitle(e.target.value)} type="text" />
      <hr />
    </div>
  );
};

export default Controller;



