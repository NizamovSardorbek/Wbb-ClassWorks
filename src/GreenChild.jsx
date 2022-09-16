import React, { Component } from "react";
import "./Grenn.css";

class GreenChild extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      counter: 0,
      title: "",
    };
  }

  render() {
    const plus = () => {
      this.setState({
        count: this.state.count + 1,
      });
    };
    const minus = () => {
      this.setState({
        count: this.state.count - 1,
      });
    };

    return (
      <div>
        <div className="Wrapper">
          <img src={this.props.ParentImage} alt="" />
          <div className="Wrap">
            <h2>{this.props.home}</h2>

            <h5>{this.props.number}</h5>
          </div>
          <h3>{this.props.price}$</h3>
          <button onClick={plus}>+</button>
          <h3>{this.state.count}</h3>

          <button onClick={minus}>-</button>

          {/* <h4>${this.state.counter}</h4> */}
          <h3>{this.props.price * this.state.count}$</h3>
        </div>
        <h1>{this.state.title} </h1>
        {/* <input
          onChange={(e) => this.setState({ title: e.target.value })}
          type="text"
        /> */}
      </div>
    );
  }
}

export default GreenChild;
