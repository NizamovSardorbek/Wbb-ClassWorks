import React from "react";
import { useRef } from "react";

const Uncontroller = () => {
  const title = useRef("");
  return (
    <div>
      <h1>Uncontroller</h1>
      <input ref={title} type="text" />

      <button onClick={() => alert(title.current.value)}>Click</button>
    </div>
  );
};

export default Uncontroller;



// 1 controller hamda uncontrollerni rootga opkelamz biz solishtrishmz ucun
// 2 bizga ekranda malumot yangilanishi kerakmi useref ishlatamz  
// 3 biz bir ozgaruvci ocamz  va useRef("") deb belglab qoyamz   const title = useRef("");
// 4 inputga ref={title} yani ref deb malumotni ozgaruvciga yani userefga saqlab olamz
// 5 endi biz yozgan malumotimzni kormoqci bolsak 
// <button onClick={() => alert(title.current.value)}>Click</button>; yani title teng useRefga
// titleni icida current keladi currentni icida value


// buni biz shu ekranga malumotni chiqarshni hohlamasak va shunga oxshash xolatlarda ishlatamz


