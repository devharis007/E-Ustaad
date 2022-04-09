import React, { Component, useState } from "react";
import { Variables } from "./Variables";
import { Navigate } from "react-router-dom";
import { useNavigate } from "react-router-dom";

import {
  BrowserRouter as Router,
  Route,
  Link,
  NavLink,
  Routes,
} from "react-router-dom";
import { LearnOrEarn } from "./LearnOrEarn";
export class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
      UserId: "",
      FirstName: "",
      LastName: "",
      Email: "",
      Password: "",
      ConfirmPassword: "",
      UserName: "",
    };
  }
  WithNavigate(props) {
    let navigate = useNavigate();
    return <MyComponent {...props} navigate={navigate} />;
  }
  changeFirstName = (e) => {
    this.setState({
      FirstName: e.target.value,
    });
  };
  changeLastName = (e) => {
    this.setState({
      LastName: e.target.value,
    });
  };
  changeEmail = (e) => {
    this.setState({
      Email: e.target.value,
    });
  };
  changeUserName = (e) => {
    this.setState({
      UserName: e.target.value,
    });
  };
  changePassword = (e) => {
    this.setState({
      Password: e.target.value,
    });
  };
  changeConfirmPassword = (e) => {
    this.setState({
      ConfirmPassword: e.target.value,
    });
  };
  SignUp() {
    let item = {
      FirstName: this.state.FirstName,
      LastName: this.state.LastName,
      Email: this.state.Email,
      Password: this.state.Password,
      UserName: this.state.UserName,
    };
    fetch(Variables.API_URL + "User", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(item),
    })
      .then((res) => res.json())
      .then(
        (result) => {
          //alert(result);
          //<Navigate element={<LearnOrEarn />} />;
        },
        (error) => {
          alert("Failed");
        }
      );
    sessionStorage.setItem("SignUp", JSON.stringify(item));
    console.log(item);
  }
  render() {
    const {
      users,
      FirstName,
      UserId,
      LastName,
      Email,
      Password,
      ConfirmPassword,
      UserName,
    } = this.state;
    return (
      <>
        <div className="signup-form">
          <form>
            <h2>Sign Up</h2>
            <p>Please fill in this form to create an account!</p>
            <hr />
            <div className="form-group">
              <div className="row">
                <div className="col">
                  <input
                    type="text"
                    className="form-control"
                    value={FirstName}
                    onChange={this.changeFirstName}
                    name="first_name"
                    placeholder="First Name"
                    required="required"
                  />
                </div>
                <div className="col">
                  <input
                    type="text"
                    className="form-control"
                    value={LastName}
                    onChange={this.changeLastName}
                    name="last_name"
                    placeholder="Last Name"
                    required="required"
                  />
                </div>
              </div>
            </div>
            <div className="form-group">
              <input
                type="email"
                className="form-control"
                value={Email}
                onChange={this.changeEmail}
                name="email"
                placeholder="Email"
                required="required"
              />
            </div>
            <div className="form-group">
              <input
                type="text"
                className="form-control"
                value={UserName}
                onChange={this.changeUserName}
                name="username"
                placeholder="username"
                required="required"
              />
            </div>
            <div className="form-group">
              <input
                type="password"
                className="form-control"
                value={Password}
                onChange={this.changePassword}
                name="password"
                placeholder="Password"
                required="required"
              />
            </div>
            <div className="form-group">
              <input
                type="password"
                className="form-control"
                value={ConfirmPassword}
                onChange={this.changeConfirmPassword}
                name="confirm_password"
                placeholder="Confirm Password"
                required="required"
              />
            </div>
            <div className="form-group">
              <label className="form-check-label">
                <input type="checkbox" required="required" /> I accept the{" "}
                <a href="#">Terms of Use</a> &amp;{" "}
                <a href="#">Privacy Policy</a>
              </label>
            </div>
            <div className="form-group">
              <button
                type="button"
                className="btn btn-primary btn-lg"
                onClick={() => this.SignUp()}
              >
                Sign Up
              </button>
            </div>
          </form>
          <div className="hint-text">
            Already have an account? <a href="#">Login here</a>
          </div>
        </div>
      </>
    );
  }
}
<div className="container">
  <div>
    <h1>Login Here</h1>
    <input
      type="text"
      onChange={(e) => {
        this.setState({ Username: e.target.value });
      }}
    />
    <br />
    <br />
    <input
      type="text"
      onChange={(e) => {
        this.setState({ Password: e.target.value });
      }}
    />
    <br />
    <br />
    <button onClick={() => this.login()}>Login</button>
  </div>
</div>;
