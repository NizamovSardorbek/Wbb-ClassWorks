import React, { Component } from "react";
import Props from "./Props";

export class App extends Component {
  render() {
    console.log(this.props);
    const students = [
      {
        id: 1,
        name: "Sardor",
      },
      {
        id: 2,
        name: "Aziz",
      },
      {
        id: 3,
        name: "Sardor",
      },
    ];
    return (
      <div>
        {/* <Props data={{ status: "Activelar", title: "Reactlar" }} />
        <Props title="Vue" />
        <Props title="Angular" /> */}

        {/* <Props title="Angular" status="React">
          <h1>I'm the child</h1>
          <h1>I'm the boy</h1>
        </Props> */}

        {students.map((value) => (
          <Props data={value} />
        ))}
      </div>
    );
  }
}

export default App;
