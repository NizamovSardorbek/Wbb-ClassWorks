import React from "react";
import { useState } from "react";

function Hook() {
  const [count, setCount] = useState(1);
  const [title, setTitle] = useState("");
  const plus = () => {
    setCount(count + 1);
  };
  const minus = () => {
    setCount(count - 1);
  };
  return (
    <div>
      Hello world ...
      <h1>{title}</h1>
      <h1>{count}</h1>
      <button onClick={plus}>+</button>
      <button onClick={minus}>-</button>
      <input
        onChange={({ target: { value } }) => setTitle(value)}
        type="text"
      />
    </div>
  );
}

export default Hook;

// 1  Usestate birinci elemnti arrey ikkinchi funksya boladi
// 2  use stateda bergan qiymatmz birinchi paramaterga teng yani arrayga
// 3 ikkinchi elementi this.setState bn bir xil vazifani bajaradi yani qiymatni ozgartiradi
// 4 malumotlarmzni chiqarmoqchi bolsak {} qavsda yozamz this ishlatilmedi arrowda
// 5 yani javascriptda organganmzde arrow funktion da this ishlatilmedi
// 6 useState bitta clean code yani qoida emas lekn hamma ucuu  odat va tushnarli bulib qolgan usestate ikkinchi paramterga
// birinchi paramaterga mos kelishi ucun set qoshib yozsak szni codiz tushinarli boladi
// 7 endi countni ozgartrmoqchimz setcount deymzda count + 1 deb funksya yozamz
// 8 va yana bir qoida Hooksda biz componentni nomini kicik harfda yozaolmemz
// 9 inputni icidagi qiymatni olish ucun ham classdagindek setTitlega beramz qiymatni va inputdagini chiqarsh ucun titleni pasdan beramz
// 10 props bu yerda tepada ocgan compinentmzda () oddiy qavsini icida propsni beramz va qayerda props kerak bolsa props. nomini yozamz boldi