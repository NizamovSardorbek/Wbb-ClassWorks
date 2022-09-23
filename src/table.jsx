import React, { Component } from "react";

export class Table extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        { id: 1, name: "Sardor", age: 21 },
        { id: 2, name: "Aziz", age: 18 },
        { id: 3, name: "Bekzod", age: 22 },
      ],
      name: "",
      age: "",
      search: "",
      active: null,
    };
  }
  render() {
    const onDelete = (id) => {
      let res = this.state.data.filter((value) => id !== value.id);
      this.setState({ data: res });
    };
    const onAdd = () => {
      let user = {
        id: Date.now(),
        name: this.state.name,
        age: this.state.age,
      };
      this.setState({ data: [...this.state.data, user], name: "", age: "" });
      console.log(user);
    };
    const Searching = () => {
      let res = this.state.data.filter((item) =>
        item.name.toLowerCase().includes(this.state.search.toLowerCase())
      );
      this.setState({ data: res });
    };
    const Edit = (id, name, age) => {
      this.setState({
        active: { id, name, age },
      });
    };
    return (
      <div>
        <input
          onChange={(e) => this.setState({ search: e.target.value })}
          type="text"
          placeholder="Search Users"
        />
        <button onClick={Searching}>Search</button>
        <hr /> <br /> <br />
        <br />
        <input
          value={this.state.name}
          onChange={(e) => this.setState({ name: e.target.value })}
          name="Name"
          type="text"
          placeholder="Add Name"
        />
        <input
          value={this.state.age}
          onChange={(e) => this.setState({ age: e.target.value })}
          name="Age"
          type="number"
          placeholder="Add Age"
        />
        <button onClick={onAdd}>Add</button>
        <table border="1" width="30%">
          <thead>
            <tr>
              <th>ID</th>
              <th>Surname</th>
              <th>Age</th>
            </tr>
          </thead>
          <tbody>
            {this.state.data.length ? (
              this.state.data.map((value, index) => (
                <tr key={value.id}>
                  <td>{index + 1}</td>
                  <td>{value.name}</td>
                  <td>{value.age}</td>
                  <td>
                    <button onClick={() => onDelete(value.id)}>delete</button>
                  </td>
                  <td>
                    <button
                      onClick={() => Edit(value.id, value.age, value.name)}
                    >
                      {this.state.active?.id === value.id ? " save" : "edit"}
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={3}>
                  <h1>No data</h1>
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    );
  }
}

export default Table;
