import React, { useState } from "react";
import { useEffect } from "react";

const UseEffect = () => {
  const [count, setCount] = useState(0);
  const [title, setTitle] = useState("");
  const plus = () => {
    setCount(count + 1);
  };
  const minus = () => {
    setCount(count - 1);
  };

  //   useEffect(() => {
  //     console.log("case 1");
  //   });

  useEffect(() => {
    console.log("case 2");
  }, []);

  useEffect(() => {
    console.log("case 3");
  }, [count]);

    useEffect(() => {
      console.log("case 4");
    }, [count]);

  return (
    <div>
      <h1>Hello world</h1>
      <h1>{title}</h1>
      <h2>{count}</h2>
      <button onClick={plus}>+</button>
      <button onClick={minus}>-</button>
      <input
        onChange={({ target: { value } }) => setTitle(value)}
        type="text"
      />
    </div>
  );
};

export default UseEffect;

// 1 UseEffect componentni icidagi birorta state ozgarganida yoki prop kelsa ana shu use Effectni uzi ishledi
// 2 UseEffectni bir tort hil caseda ishlataolamz
// 3 UseEffect doim callback funksya sifatida ishlatiladi
// 4 Case 1 biz stateni ozgartamzmi inputga malumot yozamzmi bizda case 1 ishledi
// 5 Case 2 biz beckenddan malumot keladi yani biz case ikkinchini ishlatshmz ucun
// ikkinchi paramater qoyishmz kerak shunda case ikki boladi
// yani birinchi paramater callback funksya ikkinchisi ess arrey arrey qoymasak
// yani ikkinchi paramter bolmasa bu birinchi casee bolib qoladi
// 6 case ikki component yurganda boshida bir marta yuradi boldi
// 7 case bu dependensis yani bogliqlik yani biz arreyni iciga bir state 
// yoki ozgartradigan narsamzni yozamz va osha ozgarsa case 3 ishledi yana
// ham tushinarli aytadgan bolsa case uc qaysi qiymatni berb qoygan bolsa osha pzgarganda
// ishledi boshqa bir state yoki boshqa narsa ozgarganda ishleamde
// 8 casee 4  case 3ni multiple xolati yani arreyga bir 
// qanca stateni biriktrb qoyamz va yozgnlarmzda case 4 ishledi