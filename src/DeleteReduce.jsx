import React from "react";
import { useReducer } from "react";

const DeleteReduce = () => {
  const data = [
    { id: 1, name: "sardor" },
    { id: 2, name: "Aziz" },
    { id: 3, name: "sardor" },
    { id: 4, name: "Aziz" },
  ];

  function reducer(state, action) {
    switch (action.type) {
      case "delete":
        const newList = state.filter((item) => item.id !== action.id);
        return newList;
    }
  }

  const [state, dispatch] = useReducer(reducer, data);
  return (
    <div>
      {state.map((value, index) => (
        <span key={value.id} style={{ display: "flex", alignItems: "center" }}>
          <h1>{index + 1}</h1>
          <h1>{value.name}</h1>
          <button onClick={() => dispatch({ type: "delete", id: value.id })}>
            delete
          </button>
        </span>
      ))}
    </div>
  );
};

export default DeleteReduce;
