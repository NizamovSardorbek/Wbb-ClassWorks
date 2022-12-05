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

// 1 state ochamz va statimzni ikki qiymatga ega birinchisi  oddiy nom ikkinchisida dispatch deymz va
// useReducer() deb tenglab qoyamz
// 2 useReducer ikkia qiymat oladi useRedducer(()=>{}, 0) calback funksiya hamda  initial qiymat
// 3 dispatchni qayerda funksiya ishlatmoqchiu bolsak osha yerga calback funksiya bn funksiya sifatida yozamz
// 3 yani dispatch use reducer deb yaratgan funskyamzga teng
// 4 tepadiga funksiyamz return qiymatiga qaytishi shart
//  tepadagii calback funksyamz oz iciga (state,action) oladi
// 5 pasda dispatchda biz {type: "plus"} yani prop sifatida type beramz obyektda
// 6 biz qaysi funksiyani ishlayotkann bilishmz  ucun switchcase  eng yaxshi vaeriant
// 7 switch caseda biz action.type yani actiondan kelyotkann typeni tekshramz
// 8 biz tepada emas nmaga ozgarishini pasda aytshmz ham mumkin
// 9 pasda biz yana qoshmca parametr beramz yani payload :5
// 10 va tepada action.payload deb qande amal bajarmoqci bolsak oshani yoniga yozamz