import React from "react";
import { useReducer } from "react";

function Raducer() {
  const [counter, dispatch] = useReducer((state, action) => {
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
    return;
  }, 0);
  return (
    <div>
      <h1>counter :{counter}</h1>
      <button onClick={() => dispatch({ type: "plus" })}>+</button>
      <button onClick={() => dispatch({ type: "minus" })}>-</button>
      <button onClick={() => dispatch({ type: "bymout", payload: 5 })}>
        5
      </button>
      <button onClick={() => dispatch({ type: "bymout", payload: 50 })}>
        50
      </button>
    </div>
  );
}

export default Raducer;

// 1 yasalishi useraducerni reactda chaqrb olamz va bita state yaratab oshanga reducerni tenglan olamz
// yani odatiy state count va odatda ikkinci qiymat dispatch deyiladi
// 2 userdeucer uziga ikkita qiymat oladi birinchi qiymat callback ikkinchisi initial state yani boshlangic xolat
// 3 useraducer doim return qiymatiga qaytishi shart yani bir marta return qilganmzda callbackdagi funksya ishledi
// 4  yani nmaga retrurn qilsak count yani birinci qiymat ana shunga teng boladis
// 5 callback funksya state hamda actionni iciga oladi
// 6 state counterga teng
// 7 action esa bu dispatchda berlgan paramater yani prop deylik
