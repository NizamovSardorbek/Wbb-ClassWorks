import React, { Component } from "react";
import Count from "./Count";

export class Parentcount extends Component {
  render() {
    return (
      <div>
        <Count />
        <Count />
        <Count />
      </div>
    );
  }
}

export default Parentcount;
