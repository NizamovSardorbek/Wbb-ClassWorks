import React, { Component } from "react";

import Children from "./children";

class Parent extends Component {
  render() {
    return (
      <div>
        <Children title="Shoaziz" status="Big">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam quis
          ipsam dignissimos explicabo impedit harum culpa quidem velit excepturi
          cumque.
        </Children>
      </div>
    );
  }
}

export default Parent;
