import React, { Component } from "react";
import Count from "./Count";

export class Parentcount extends Component {
  render() {
    return (
      <div>
        <Count type= "large"/>
        <Count type="medium" />
        <Count type="small" />
      </div>
    );
  }
}

export default Parentcount;
