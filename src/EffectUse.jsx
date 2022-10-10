import React from "react";
import { useEffect } from "react";
import { useState } from "react";

function EffectUse() {
  const [count, setCount] = useState(0);
  const [title, setTitle] = useState("");
  const plus = () => {
    setCount(count + 1);
  };
  const minus = () => {
    setCount(count - 1);
  };
  //   useEffect(() => {
  //     console.log("case 1");
  //   });
  useEffect(() => {
    console.log("case 2");
  }, []);
  useEffect(() => {
    console.log("case 3");
  }, [count]);
  useEffect(() => {
    console.log("case 4");
  }, [count, title]);
  return (
    <div>
      <input
        onChange={({ target: { value } }) => setTitle(value)}
        type="text"
      />
      <h1>{title}</h1>
      <h1>Count {count}</h1>
      <button onClick={plus}>+</button>
      <button onClick={minus}>-</button>
    </div>
  );
}

export default EffectUse;
