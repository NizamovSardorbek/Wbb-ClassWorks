import React, { Component } from "react";
import GreenChild from "./GreenChild";
import Image1 from "./assets/image 11.png";
import Image2 from "./assets/image 15.png";
import Image3 from "./assets/image 16.png";

export class GreenParent extends Component {
  render() {
    return (
      <div>
        <GreenChild
          home="Barberton Daisy"
          number="SKU: 1995751877966"
          price="119"
          ParentImage={Image1}
        />

        <GreenChild
          home="Blushing Bromeliad"
          number="SKU: 19957518757065"
          price="179"
          ParentImage={Image2}
        />

        <GreenChild
          home="Barberton Daisy"
          number="SKU: 1995751877786"
          ParentImage={Image3}
          price="139"
        />
      </div>
    );
  }
}

export default GreenParent;
