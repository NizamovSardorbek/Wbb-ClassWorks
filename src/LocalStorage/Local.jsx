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

// biz bir pagega kirganmzda oxirgi manzil qande bolsa shunde  qolishi ucun localstorage kerak boladi

// 1 malumotni set yani broweserga saqlash ucun localstorage.setItem('count' , count + 1) yani bitta ixtiyoriy nom beramz yani browserda saqlash ucun
// va qaysi malumotni qande xolatida saqlanishini beramiz

// 2 endi  bz broweserga saqlagan malumotimizni qayerda chiqarmoqci bolsak yani misol ucun pasda chiqarmoqcimz u yerda yozmemz
// yani ozgargan qiymat stateda boladi stateni initial xolatiga beramz  
// cont [count,setCount] = useState(0), edi buni , const [count, setCount] = useState(Number(localStorage.getItem("count"))); qilb ozgartramz

// 3 endi biz xotiradagi malumotni ucrb tashlashmz ucun  bitta buttonga onclik funksiyasida   onClick={() => localStorage.removeItem("count")}
// beramz yani xotiradagi qaysi malumotni ucrmoqci ekanmzni beramz biz delete bosganmzda malumot xotirada ocadi lekn yana malumotni yangilasak 
// eski malumot keladi yani yangitta boshlamedi boshlashi ucun esa refreshni bosamz

// 4 endi bizda localstorega malumotlar kop bolsa buttonga onClick={() => localStorage.clear()} bersak har qande maalumot ocadi

// 5 Object hamda arreylarga malumotni biz huddi number stringlarda qayerda set qilgan bolsak osha yerda
// JSON.stringify({data: count + 1})  yani xotiraga saqlash

// 6 cJSON.parse(localStorage.getItem("count")); bu xotiradagi malumotni tutib olish ucun arrey objektlarga

