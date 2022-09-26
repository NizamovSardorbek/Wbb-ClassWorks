import React, { Component } from "react";

export default class Add extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        {
          id: 1,
          name: "Sardor",
        },
        {
          id: 2,
          name: "Shoaziz",
        },
        {
          id: 3,
          name: "Odina",
        },
      ],
      Adduser: "",
      Searching: "",
      selected: null,
      NewName: "",
    };
  }
  render() {
    const Add = () => {
        if(this.state.Adduser.length ){

            let res = {
                id: this.state.data.length + 1,
                name: this.state.Adduser,
            };
            this.setState({ data: [...this.state.data, res] , Adduser : "" });
        }
    };
    const Ondelete = (ids) => {
      let res = this.state.data.filter((val) => val.id !== ids);
      this.setState({ data: res });
    };
    const Search = ({ target: { value } }) => {
      let res = this.state.data.filter((val) =>
        val.name.toLowerCase().includes(value.toLowerCase())
      );
      this.setState({ data: res });
    };
    const Edit = (value) => {
      this.setState({ selected: value });
    };
    const onCancel = () => {
      this.setState({ selected: null });
    };
    const onSave = () => {
      let res = this.state.data.map((value) =>
        value.id === this.state.selected?.id
          ? {
              ...value,
              name: this.state.NewName,
            }
          : value
      );
      this.setState({ data: res, selected: null });
    };
    return (
      <div>
        <input onChange={Search} type="text" placeholder="Searching" /> <br />{" "}
        <br />
        <input
          value={this.state.Adduser}
          onChange={(e) => this.setState({ Adduser: e.target.value })}
          type="text"
          placeholder="Add user"
        />{" "}
        <button onClick={Add}>Add</button>
        {this.state.data.map((value, index) => (
          <div>
            <table border="1">
              <th>{index + 1}</th>
              <th>
                {this.state.selected?.id === value.id ? (
                  <input
                    onChange={(e) => this.setState({ NewName: e.target.value })}
                    defaultValue={this.state.selected?.name}
                    type="text"
                  />
                ) : (
                  value.name
                )}
              </th>
              <th>
                {this.state.selected?.id === value.id ? (
                  <>
                    <button onClick={onSave}>save</button>
                    <button onClick={onCancel}>cancel</button>
                  </>
                ) : (
                  <>
                    <button onClick={() => Ondelete(value.id)}>delete</button>
                    <button onClick={() => Edit(value)}>edit</button>
                  </>
                )}
              </th>
            </table>
          </div>
        ))}
      </div>
    );
  }
}
