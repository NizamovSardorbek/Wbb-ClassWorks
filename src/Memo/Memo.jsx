import React, { memo } from "react";
import { useMemo } from "react";
import { useState } from "react";
import MemoNavbar from "./MemoNavbar";

const Memo = () => {
  console.log("parent render");
  const [count, setCounter] = useState(0);
  const data = useMemo(() => {
    return;
  }, [count]);
  return (
    <div>
      <MemoNavbar />
      <h3>Counter : {count}</h3>
      <button onClick={() => setCounter(count + 1)}>+</button>
      <button onClick={() => setCounter(count - 1)}>-</button>
    </div>
  );
};

export default Memo;
