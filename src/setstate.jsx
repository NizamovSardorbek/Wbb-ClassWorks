import React, { Component } from "react";
export class SetState extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        {
          id: 1,
          name: "Eshmat",
        },
        {
          id: 2,
          name: "Holmat",
        },
        {
          id: 3,
          name: "Shahmat",
        },
        {
          id: 4,
          name: "Shermat",
        },
        {
          id: 5,
          name: "Mamarayim",
        },
      ],
      add: "",
      search: "",
    };
  }
  render() {
    const AddUser = () => {
      this.setState({
        data: [
          ...this.state.data,
          { id: this.state.data.length + 1, name: this.state.add },
        ],
      });
    };

    const SearchUser = () => {
      let res = this.state.data.filter((val) =>
        val.name.toLowerCase().includes(this.state.search.toLowerCase())
      );
      this.setState({ data: res });
    };
    return (
      <div>
        <input
          onChange={(e) => this.setState({ add: e.target.value })}
          type="text"
          placeholder="add user"
        />
        <button onClick={() => AddUser()}>add</button>
        <input
          type="text"
          onChange={(e) => this.setState({ search: e.target.value })}
        />
        <button onClick={SearchUser}>Search</button>
        {this.state.data.map((value, index) => {
          return (
            <div>
              <h1>
                {index + 1} - {value.name}
                <button
                  onClick={() =>
                    this.setState({
                      data: this.state.data.filter(
                        (val) => val.id !== value.id
                      ),
                    })
                  }
                >
                  delete
                </button>
              </h1>
            </div>
          );
        })}
      </div>
    );
  }
}

export default SetState;
