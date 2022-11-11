import React, { memo } from "react";

const MemoNavbar = () => {
  console.log("child render");
  return (
    <div>
      <h1>Navbar</h1>
    </div>
  );
};

export default memo(MemoNavbar) ;
