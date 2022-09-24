import React, { Component } from "react";

class Crud extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        {
          id: 1,
          name: "Sardor",
          age: 21,
        },
        {
          id: 2,
          name: "Shoaziz",
          age: 17,
        },
        {
          id: 3,
          name: "Hojiakbar",
          age: 18,
        },
        {
          id: 4,
          name: "Ruqiya",
          age: 19,
        },
      ],
      Adding: "",
      AddName: "",
      AddAge: "",
      selected: null,
      NewName: "",
      NewAge: "",
    };
  }
  render() {
    const onDelete = (ids) => {
      this.setState({ data: this.state.data.filter((val) => val.id !== ids) });
    };
    const onSearch = ({ target: { value } }) => {
      let res = this.state.data.filter((val) =>
        val.name.toLowerCase().includes(value.toLowerCase())
      );
      this.setState({ data: res });
    };
    const onAdd = () => {
      if (this.state.AddName.length) {
        let user = {
          id: Date.now(),
          name: this.state.AddName,
          age: this.state.AddAge,
        };
        this.setState({
          data: [...this.state.data, user],
          AddName: "",
          AddAge: "",
        });
      }
    };
    const onEdit = (value) => {
      this.setState({ selected: value });
    };
    const onCancel = () => {
      this.setState({ selected: null });
    };
    const onSave = () => {
      let res = this.state.data.map((val) =>
        val.id === this.state.selected?.id
          ? {
              ...val,
              name: this.state.NewName,
              age: this.state.NewAge,
            }
          : val
      );
      this.setState({ data: res, selected: null });
    };
    return (
      <div>
        <h1>{this.state.AddAge}</h1>
        <h1>{this.state.AddName}</h1>
        <input onChange={onSearch} type="text" placeholder="Searching" />
        <button onClick={onSearch}>Search</button> <br />
        <input
          value={this.state.AddName}
          onChange={(e) => this.setState({ AddName: e.target.value })}
          type="text"
          placeholder="Add user"
        />
        <input
          value={this.state.AddAge}
          onChange={(e) => this.setState({ AddAge: e.target.value })}
          type="number"
          placeholder="Add Age"
        />
        <button onClick={onAdd}>Addd</button>
        <table border="1">
          <thead>
            <tr>
              <th>Id</th>
              <th>Name</th>
              <th>Age</th>
              <th>Action</th>
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
                          this.setState({ NewName: e.target.value })
                        }
                        type="text"
                        defaultValue={this.state.selected?.name}
                      />
                    ) : (
                      value.name
                    )}
                  </td>
                  <th>
                    {this.state.selected?.id === value.id ? (
                      <input
                        onChange={(e) =>
                          this.setState({ NewAge: e.target.value })
                        }
                        defaultValue={this.state.selected?.age}
                        type="number"
                      />
                    ) : (
                      value.age
                    )}
                  </th>
                  <th>
                    {this.state.selected?.id === value.id ? (
                      <>
                        <button onClick={onSave}>save</button>{" "}
                        <button onClick={onCancel}>cancel</button>
                      </>
                    ) : (
                      <>
                        <button onClick={() => onDelete(value.id)}>
                          delete
                        </button>
                        <button onClick={() => onEdit(value)}>edit</button>
                      </>
                    )}
                  </th>
                </tr>
              ))
            ) : (
              <tr>
                <h1>No data</h1>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    );
  }
}

export default Crud;
