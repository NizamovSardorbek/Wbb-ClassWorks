import React, { useState } from "react";

const Local = () => {
  const [count, setCount] = useState(Number(localStorage.getItem("count")));
  const plus = () => {
    localStorage.setItem("count", count + 1);
    // JSON.stringify({data: count + 1}) bu set qilish yani xotiraga malumot saqlash ucun arrey objectlarga
    setCount(count + 1);
  };
  const minus = () => {
    setCount(count - 1);
  };
  //   console.log(JSON.parse(localStorage.getItem("count"))); bu xotiradagi malumotni tutib olish ucun arrey objektlarga
  return (
    <div>
      <h1>Count : {count}</h1>
      <button onClick={plus}>+</button>
      <button onClick={minus}>-</button>
      <button onClick={() => localStorage.removeItem("count")}>
        delete count
      </button>
      <button onClick={() => localStorage.clear()}>clear</button>
    </div>
  );
};

export default Local;
