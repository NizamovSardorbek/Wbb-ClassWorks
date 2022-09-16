import React, { Component } from "react";
import "./index.css";
import Image1 from "./assets/image 11.png";
export class Count extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      money: 102,
      mock: 0,
    };
  }
  render() {
    const plus = () => {
      this.setState({ count: this.state.count + this.state.money });
    };
    const minus = () => {
      this.setState({ count: this.state.count - this.state.money });
    };
 
    return (
      <div className="sardor">
        <div className="top">
          <img className="Image1" src={Image1} alt="" />
          <div className="Id">
            <h2>Barbertion Daisy</h2>
            <h6>SKU: 1995751877966</h6>
          </div>
          <h6 className="Dollor">${this.state.money}</h6>
          <button onClick={plus}>+</button>
          <h2></h2>
          <button onClick={minus} className="ButtonPlus">
            -
          </button>
          <h6>${this.state.count}</h6>
        </div>
      </div>
    );
  }
}

export default Count;
