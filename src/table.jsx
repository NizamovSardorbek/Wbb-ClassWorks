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
      selected: "",
      newName: "",
      newAge: "",
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
    };
    const Searching = () => {
      let res = this.state.data.filter((item) =>
        item.name.toLowerCase().includes(this.state.search.toLowerCase())
      );
      this.setState({ data: res });
    };
    const Edit = (value) => {
      this.setState({ selected: value });
    };
    const Cancel = () => {
      this.setState({ selected: "" });
    };
    const Save = () => {
      let res = this.state.data.map((value) =>
        value.id === this.state.selected?.id
          ? { ...value, name: this.state.newName, age: this.state.newAge }
          : value
      );
      this.setState({
        data: res,
        selected: null,
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
                  <td>
                    {this.state.selected?.id === value.id ? (
                      <input
                        onChange={(e) =>
                          this.setState({ newName: e.target.value })
                        }
                        type="text"
                        defaultValue={this.state.selected.name}
                      />
                    ) : (
                      value.name
                    )}
                  </td>
                  <td>
                    {this.state.selected?.id === value.id ? (
                      <input
                        onChange={(e) =>
                          this.setState({ newAge: e.target.value })
                        }
                        defaultValue={this.state.selected.age}
                        type="number"
                      />
                    ) : (
                      value.age
                    )}
                  </td>
            
                  <td>
                    {this.state.selected?.id === value.id ? (
                        <>
                        <button onClick={Save}>save</button>
                        <button onClick={Cancel}>cancel</button>
                      </>
                    ) : (
                        <>
                        <button onClick={() => onDelete(value.id)}>delete</button>
                        <button onClick={() => Edit(value)}>Edit</button>
                      </>
                    )}
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
