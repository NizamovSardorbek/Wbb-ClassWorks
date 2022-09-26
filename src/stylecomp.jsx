import React, { Component } from "react";
import { Box1, Box2, Box3, Wrapper } from "./sylecomponents";

export default class StyleComponents extends Component {
  render() {
    return (
      <Wrapper>
        <Box1 size="large" color="green">
          Sardor
        </Box1>
        <Box1 size="medium" color="red">
          Sardor
        </Box1>
        <Box1 size="small" color="yellow">
          Sardor
        </Box1>
      </Wrapper>
    );
  }
}
