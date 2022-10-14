import React, { createContext, useReducer, useState } from "react";
import { ContextData } from "./ContextData";

export const Sardorbek = createContext();

function MainContext({ children }) {
  const Reducers = (state, action) => {
    switch (action.type) {
      case "delete":
        const newList = state.filter((item) => item.id !== action.todo);
        return newList;
    }
  };
  console.log(state);
  const [state, dispatch] = useReducer(Reducers, 0);
  return (
    <Sardorbek.Provider value={[state, dispatch]}>
      {children}
    </Sardorbek.Provider>
  );
}

export default MainContext;
