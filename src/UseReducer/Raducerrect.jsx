import React from "react";
import { useReducer } from "react";

const Raducerreact = () => {
  const reducer = (state, action) => {
    console.log(state, action);
    switch (action.type) {
      case "plus":
        return state + 1;
      case "minus":
        return state - 1;
      case "bymout":
        return state + action.payload;
      default:
        return state;
    }
  };
  const [counter, dispatch] = useReducer(reducer, 0);
  return (
    <div>
      <h1>Counter {counter}</h1>
      <button onClick={() => dispatch({ type: "plus" })}>+</button>
      <button onClick={() => dispatch({ type: "minus" })}>-</button>
      <button onClick={() => dispatch({ type: "bymout", payload: 5 })}>
        5
      </button>{" "}
      <button onClick={() => dispatch({ type: "bymout", payload: 50 })}>
        50
      </button>
    </div>
  );
};

export default Raducerreact;
