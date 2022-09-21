import React, { Component } from "react";

class Info extends Component {
  constructor(props) {
    super(props);
    this.state = {
      first: "",
      last: "",
      email1: "",
      first2: "",
      last2: "",
      email2: "",
    };
  }
  render() {
    return (
      <div>
        <h1>Name</h1>
        <h2>First Name : {this.state.first}</h2>
        <h2>Last Name : {this.state.last}</h2>
        <h2>Email Addres : {this.state.email1}</h2>
        <input
          placeholder="check your First name"
          onChange={(e) => this.setState({ first: e.target.value })}
          type="text"
        />
        <input
          placeholder="check your Last name"
          onChange={(e) => this.setState({ last: e.target.value })}
          type="text"
        />
        <input
          placeholder="check your email addreess"
          onChange={(e) => this.setState({ email1: e.target.value })}
          type="email"
        />

        <hr />
        <h1>Info</h1>
        <h2> Name : {this.state.first2}</h2>
        <h2>Surname : {this.state.last2}</h2>
        <h2>Email Addres : {this.state.email2}</h2>
        <input
          type="text"
          placeholder="check your infoo"
          onChange={(e) => this.setState({ first2: e.target.value })}
        />
        <input
          placeholder="check your surnamee"
          type="text"
          onChange={(e) => this.setState({ last2: e.target.value })}
        />
        <input
          placeholder="check your email info"
          type="email"
          onChange={(e) => this.setState({ email2: e.target.value })}
        />
      </div>
    );
  }
}

export default Info;
