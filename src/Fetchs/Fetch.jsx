import React, { useState } from "react";
import { useEffect } from "react";

const Fetch = () => {
  const [students, setStudents] = useState([]);
  const [selected, setSelected] = useState({});

  const getUser = (id) => {
    return fetch(
      `https://jsonplaceholder.typicode.com/users/${id ? `/${id}` : ""}`
    ).then((res) => res.json());
  };

  useEffect(() => {
    getUser().then((res) => setStudents(res));
  }, []);
  
  const getInfo = (id) => {
    getUser(id).then((res) => {
      setSelected(res);
    });
  };
  return (
    <div
      style={{
        display: "flex",
      }}
    >
      <div style={{ flex: 1 }}>
        {students.map((value) => (
          <div key={value?.id}>
            <h1>
              Name : {value?.id} {value?.name}
              <button onClick={() => getInfo(value.id)}>get info</button>
            </h1>
          </div>
        ))}
      </div>

      <div style={{ flex: 1 }}>
        <div key={selected?.id}>
          <h1>Name : {selected?.name}</h1>
          <h2>UserName : {selected?.username}</h2>
          <h3>Email : {selected?.email}</h3>
        </div>
      </div>
    </div>
  );
};

export default Fetch;
