import React from "react";
import { useState } from "react";

const HookReact = () => {
  const [count, setCount] = useState(0);
  const [title, setTitle] = useState({ number: 1, title: "state" });

  const plus = (e) => {
    setTitle({
      ...title,
      number: e.target.name === "plus" ? title.number + 1 : title.number - 1,
    });
  };

  return (
    <div>
      <h1>
        Counter :{title.number}
        <button name="plus" onClick={plus}>
          +
        </button>{" "}
        <button name="minus" onClick={plus}>
          -
        </button>
      </h1>
      <input
        type="text"
        onChange={({ target: { value } }) => setTitle({ title: value })}
      />
      <h1>{title.title}</h1>
    </div>
  );
};

export default HookReact;
