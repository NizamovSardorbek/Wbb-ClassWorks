import React, { Component } from "react";

class State extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        {
          id: 1,
          name: "eshmat",
        },
        {
          id: 2,
          name: "holmat",
        },
        {
          id: 3,
          name: "shermat",
        },
        {
          id: 4,
          name: "mamariyim",
        },
        {
          id: 5,
          name: "eshmat",
        },
        {
          id: 6,
          name: "Holmat",
        },
        {
          id: 7,
          name: "Horim",
        },
      ],

      Search: "",
      Home: "",
    };
  }
  render() {
    const AddUser = () => {
      this.setState({
        data: [
          ...this.state.data,
          {
            id: this.state.data.length + 1,
            name: this.state.Search,
          },
        ],
      });
    };
    const SearchUser = () => {
      let res = this.state.data.filter((val) =>
        val.name.includes(this.state.Home)
      );
      this.setState({ data: res });
    };
    return (
      <div>
        <h1>
          <input
            onChange={(e) => this.setState({ Home: e.target.value })}
            type="text"
          />
          <button onClick={SearchUser}>Search</button>
          <input
            onChange={(e) => this.setState({ Search: e.target.value })}
            placeholder="Add user"
            type="text"
          />
          <button onClick={AddUser}>Add</button>
          {this.state.data.map((value, index) => (
            <div>
              {index + 1}- {value.name}{" "}
              <button
                onClick={() =>
                  this.setState({
                    data: this.state.data.filter(
                      (vl) => vl.name !== value.name
                    ),
                  })
                }
              >
                delete
              </button>
            </div>
          ))}
        </h1>
      </div>
    );
  }
}

export default State;
