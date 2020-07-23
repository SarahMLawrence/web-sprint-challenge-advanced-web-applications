import React from "react";
import { axiosWithAuth } from "../utils/axiosWithAuth";


class AddColor extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      color: "",
      code: { hex: "" },
    };
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    axiosWithAuth()
      .post("/api/colors", this.state)
      .then((res) => {
        console.log(res);
        this.props.history.push("/protected");
      })
      .catch((err) => console.log(err));
  };

  render() {
    return (
      <div className="add-color">
        <h1 className="title"> ADD A NEW COLOR</h1>
        <form actions="/protected" onSubmit={this.handleSubmit}>
          <label>Color: </label>
          <input
            type="text"
            name="color"
            onChange={this.handleChange}
            value={this.state.color}
            autoComplete="off"
          />

          <button className="addButton" type="submit">
            Add Color
          </button>
        </form>
      </div>
    );
  }
}

export default AddColor;
