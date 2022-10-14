import React, { useContext, useState } from "react";
import { ContextData } from "./ContextData";
import { WrapBody } from "./contextstyle";
import { Sardorbek } from "./MainContext";
const ContextBody = () => {
  const [Data, SetData] = useState(ContextData);
  const [state, dispatch] = useContext(Sardorbek);
  // const onDelete = (idd) => {
  //   setState(state.filter((vale) => vale.id !== idd));
  // };

  return (
    <div>
      <h1>
        {state.map((value, index) => (
          <WrapBody>
            <h5>{index + 1}</h5>
            <h5>{value.name}</h5>
            <button
              onClick={() => dispatch({ type: "delete", todo: value.id })}
            >
              delete
            </button>
          </WrapBody>
        ))}
      </h1>
    </div>
  );
};

export default ContextBody;
