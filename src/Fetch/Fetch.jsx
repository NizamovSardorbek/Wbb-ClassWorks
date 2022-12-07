import React from "react";
import { useState, useEffect } from "react";

const Fetch = () => {
  const [students, setStudents] = useState([]);
  const [select, setSelect] = useState({});

  const getUsers = (id) => {
    return fetch(
      `https://jsonplaceholder.typicode.com/users/${id ? `/${id}` : ""}`
    ).then((response) => response.json());
  };
  useEffect(() => {
    getUsers().then((response) => setStudents(response));
  }, []);

  const getInfo = (id) => {
    getUsers(id).then((response) => {
      setSelect(response);
    });
  };

  // const getinfo = (id) => {
  //   console.log(id);
  //   fetch(`https://jsonplaceholder.typicode.com/users/${id}`, {
  //     // method: "post",
  //   })
  //     .then((response) => response.json())
  //     .then((response) => {
  //       console.log(response);
  //       setSelect(response);
  //     });
  // };
  return (
    // <div
    //   style={{
    //     display: "flex",
    //   }}
    // >
    //   <div>
    //     {students.map((value) => (
    //       <h1 key={value.id}>
    //         Name : {value.id} {value.name}
    //         <button onClick={() => getinfo(value.id)}>get info</button>
    //       </h1>
    //     ))}
    //   </div>
    //   <div style={{ flex: 1 }}>
    //     <div key={select?.id}>
    //       <h1>Name :{select?.name} </h1>
    //       <h2>Username :{select?.username} </h2>
    //       <h3>Email :{select?.email} </h3>
    //     </div>
    //   </div>
    // </div>
    <div
      style={{
        display: "flex",
      }}
    >
      <div style={{ flex: 1 }}>
        {students.map((value) => (
          <h1 key={value.id}>
            Name : {value.id} {value.name}
            <button onClick={() => getInfo(value.id)}> get info </button>
          </h1>
        ))}
      </div>

      <div style={{ flex: 1 }}>
        <div key={select?.id}>
          <h1>Name : {select?.name}</h1>
          <h2>Username : {select?.username}</h2>
          <h3>Email : {select?.email}</h3>
        </div>
      </div>
    </div>
  );
};

export default Fetch;

// Fetch bzga becenda malumot olib kelish uchun ishlatiladi
// Fetch bu JavaScript fiunksya react emas
// internetda https://jsonplaceholder.typicode.com/ deydigan bolsak bizga suniy tayyor beckend malumotini linkini beradi

// 1 birinchi fetch deb funksya  yozamz va jsonda olgan placeholderni qoyamz va oxirida comda kegn users deb qoyamz
// 2 va yonida .then()qilamz
// 3 then icida calback funksya oladi ()=>{}
// 4 calbcak funksiya icida response degan paramater keladi bu ixtiyoriy nom yani becenddan kelyotkan malumot shu responsni icida
// 5 endi buni ovolishimz ucun pasdan response.json()
// 6 json da kegn yana .then((response)=>{console.log(response)}) koradigan bolsak becenddagi malumotni  olib keladi

// 7 biz malumotni bitta usestatega tenglab qoysak setStudent qilib response beramz lekn bu rerender bolib qayta qayta ishlayveradi
// buni oldini olish ucun esa useEffectga orab qoyamz fetchni yani ikkinci casega bir marta ishledi boldi

////          S      W      A      G      G      E      R          ////
///          S      W      A      G      G      E      R          ////
