import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

class Register extends Component {
  constructor() {
    super();
    this.state = {
      username: "",
      password1: "",
      password2: "",
      message: ""
    };
  }

  changeHandler = e => {
    const { name, value } = e.target;
    this.setState({ user: { ...this.state.user, [name]: value } });
  };

  submitHandler = e => {
    const { username, password1, password2 } = this.state;
    e.preventDefault();
    axios
      .post("https://insurance-risk-assesment.herokuapp.com/api/registration", { username, password1, password2 })
      .then(res => {
        if (res.status === 201) {
          this.setState({
            message: "Registration Successful",
            username: "",
            password1: "",
            password2: ""
          });
        } else {
          throw new Error();
        }
        this.props.history.push("/");
      })
      .catch(err => {
        this.setState({
          message: "registration failed, both passwords must match",
          username: "",
          password: ""
        });
      });
  };

  changeHandler = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  render() {
    return (
      <div className="login-container">
        <form onSubmit={this.submitHandler} className="login">
          <h1>Risk Assessment</h1>
          <h1>Register</h1>
          <input
            type="text"
            id="username"
            name="username"
            value={this.state.username}
            onChange={this.changeHandler}
            className="login-input"
            placeholder="Username"
          />
          <input
            type="password"
            id="password"
            name="password"
            value={this.state.password1}
            onChange={this.changeHandler}
            className="login-input"
            placeholder="Password"
          />
          <input
            type="password"
            id="password"
            name="password"
            value={this.state.password2}
            onChange={this.changeHandler}
            className="login-input"
            placeholder="password"
          />
          <button className="form-button">Register</button>
          <p>{this.state.message}</p>
          <Link className="rr-link " to="/">
            <p>back to login page</p>
          </Link>
        </form>
      </div>
    );
  }
}

export default Register;
