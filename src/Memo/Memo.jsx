import React from "react";
import { useCallback } from "react";
import { useMemo } from "react";
import { useState } from "react";
import MemoNavbar from "./MemoNavbar";

const Memo = () => {
  console.log("parent render");
  const [count, setCounter] = useState(0);
  const data = useMemo(() => {
    return { title: "webrba" };
  }, []);
  const dataCall = useCallback((param) => {
    return { title: param };
  }, []);
  return (
    <div>
      <MemoNavbar dataCall={dataCall} data={data} />
      <hr /> Parent
      <h3>Counter : {count}</h3>
      <button onClick={() => setCounter(count + 1)}>+</button>
      <button onClick={() => setCounter(count - 1)}>-</button>
    </div>
  );
};

export default Memo;

// biz parentni ozgartrsak child ham render boladi buni oldini olish uchun memo ishlatamz yani
// 1  childni export qilyotkan joyimzdan memo(MemoNavbar) qip oreymiz
// 2 hamma narsani memo yani xotiraga olishdan mano yoq yani faqat uzimzga kerakligini va childni olishimiz kerak
// shunda biz parentni ozgartirganmzda child render bolishini oldini olamz
// 3 ikkita qoidasi bolishi kerak memoni ishlatishimiz uchun birinchisi child bolishi kerak
// 4 va rerender boladigan bir malumot bolishi kerak parentda
// 5 useMemo parentda ishlatiladi yani parentda props sifatida bir malumotni
// childga yuborsak va biz parentda malumotni ozgartirsak child ham render boladi
// 6 buni oldini olish ucun  const data = useMemo(() => {
//   return { title: "Webbrain" };
// }, []); va props qilib yuboryotkan  joyimzda datani yuboramz
// 7 use memo doim valuega return qiladi yani obyektni malumotlariga
// 8 memo bn use memoni asosiy farqi memo childga beriladi usememo esa parentga
// 9 useCalback funksionga return qiladi use memo esa valuega
// 10 useCalback bn useMemoni yana asosiy farqi biz memoda tutib olganmzdan kegn uni ozgartirib bolmedi lekn useCalbackda esa
// biz qoshimca parametr qilib <h1>Navbar : {dataCall("About").title} </h1> yani yerda parentga malumot yuborishmz va parentda
// const dataCall = useCallback((param) => {
//   return { title: param };
// }, []); bundey tarzda tutib  olishimz mumkin
