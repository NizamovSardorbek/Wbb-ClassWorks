import React from "react";
import { useState } from "react";
import { useReducer } from "react";
function Raduceruse() {
  const [select, setSelect] = useState(1);
  const [count, dispatch] = useReducer((state, action) => {
    switch (action.type) {
      case "plus":
        return state + 1;
      case "bgs":
        return state + +action.payload;
      default:
        return state;
    }
  }, 0);
  const OnSelect = (e) => {
    setSelect(e.target.value);
    console.log(Number(e.target.value));
  };
  return (
    <div>
      <h1>counter : {count}</h1>
      <button onClick={() => dispatch({ type: "plus" })}>+</button>
      <button onClick={() => dispatch({ type: "bgs", payload: select })}>
        {select}
      </button>

      <select defaultValue={1} onChange={OnSelect} name="" id="">
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
      </select>
    </div>
  );
}

export default Raduceruse;
