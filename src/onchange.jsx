import React, { Component } from "react";

class Onchange extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      surname: "",
      email: "",
      info: { name: "sardor", surname: "sar", email: "sars" },
    };
  }
  render() {
    const onchangetitle = (event) => {
      console.log(event);
    };
    const onchangelist = ({ target }) => {
      this.setState({ surname: target.value });
    };
    const onchangeinfo = ({ target }) => {
      this.setState({
        info: { ...this.state.info, name: target.value },
      });
    };
    return (
      <div>
        <h1> State</h1>
        <h3>name:{this.state.name} </h3>
        <h3>surname: {this.state.surname} </h3>
        <h3>email: {this.state.email} </h3>
        <input
          onChange={(event) => {
            onchangetitle(event.target.value);
          }}
          type="text"
          placeholder="First name"
        />
        <input onChange={onchangelist} type="text" placeholder="Last name" />
        <input type="text" placeholder="email" />

        <hr />
        <h1>Info</h1>
        <h3>name:{this.state.info.name} </h3>
        <h3>surname: {this.state.info.surname} </h3>
        <h3>email: {this.state.info.email} </h3>
        <input onChange={onchangeinfo} type="text" placeholder="First name" />
        <input type="text" placeholder="Last name" />
        <input type="text" placeholder="email" />
      </div>
    );
  }
}

export default Onchange;
