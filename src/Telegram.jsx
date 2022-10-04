import React, { Component } from "react";

export default class Telegram extends Component {
  constructor(props) {
    super(props);
    this.stat = {
      contain: false,
    };
  }
  render() {
    const onclick = () => {
      this.setState({ contain: !this.stat.contain });
    };
    return (
      <div>
        <h1>
          Hello world <button onClick={!onclick}>Click</button>
          {this.stat.contain ?    <ul>
              <li>About</li>
              <li>About</li>
              <li>Home</li>
              <li>About</li>
            </ul> : ""}
        </h1>
      </div>
    );
  }
}
