import React, { Component } from "react";

class State extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 1,
      title: "",
    };
  }
  render() {
    const plus = () => {
      if (this.state.count <= 10) {
        this.setState({ count: this.state.count + 1 });
      }
    };
    const minus = () => {
      if (this.state.count >= 1) this.setState({ count: this.state.count - 1 });
    };
    const Onchange = (e) => {
      console.log(e.target.value);
      this.setState({ title: e.target.value });
    };

    return (
      <div>
        <h1>{this.state.title}</h1>
        <div style={{ display: "flex" }}>
          <button  onClick={plus}>+</button>
          <h1>State : {this.state.count}</h1>
          <button onClick={minus}>-</button>
        </div>
        <input onChange={Onchange} type="text" placeholder="name" />
      </div>
    );
  }
}

export default State;
