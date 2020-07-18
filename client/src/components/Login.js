import React from "react";
import { axiosWithAuth } from "../utils/axiosWithAuth";

class Login extends React.Component {
  state = {
    // isLoading: false,
    credentials: {
      username: "",
      password: "",
    },
  };

  handleChange = (e) => {
    this.setState({
      credentials: {
        ...this.state.credentials,
        [e.target.name]: e.target.value,
      },
    });
    console.log(this.state.credentials);
  };

  login = (e) => {
    e.preventDefault();
    this.setState({ ...this.state, isLoading: true });
    axiosWithAuth()
      .post("/api/login", this.state.credentials)
      .then((res) => {
        console.log(res);
        localStorage.setItem("token", res.data.payload);
        this.props.history.push("/protected");
      })
      .catch((err) => {
        console.log("Err is: ", err);
        alert("Can not sign in ");
        this.setState({ ...this.state, isLoading: false });
      });
  };

  render() {
    return (
      <div>
        <div>
          <form onSubmit={this.login}>
            <label>Username: </label>
            <input
              type="text"
              name="username"
              autoComplete="off"
              onChange={this.handleChange}
            />

            <label>Password: </label>
            <input
              type="password"
              name="password"
              autoComplete="off"
              onChange={this.handleChange}
            />

            <button>Log In</button>
          </form>
        </div>
      </div>
    );
  }
}

export default Login;
