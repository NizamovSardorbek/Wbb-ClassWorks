import React, { Component } from "react";
import { Home, Parents } from "./ParentStyle";

export class Children extends Component {
  render() {
    return (
      <div>
        <Home>
          <Parents>Home</Parents>
          
        </Home>
        {/* {this.props.title}
        {this.props.status} */}
        {/* <h2>About</h2>
        <h2>Contact</h2> */}
      </div>
    );
  }
}

export default Children;
