import React, { memo } from "react";
import { useState } from "react";

const MemoNavbar = ({ data, dataCall }) => {
  console.log("child render");
  return (
    <div>
      Child
      <h2>{data.title}</h2>
      <h1>Navbar : {dataCall("Home").title} </h1>
      <h1>Navbar : {dataCall("About").title} </h1>
    </div>
  );
};

export default memo(MemoNavbar);
