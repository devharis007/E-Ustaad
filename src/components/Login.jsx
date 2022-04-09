/*import React, { Component } from "react";
import { Navigate } from "react-router-dom";

export default class Login extends Component {
  login() {
    console.warn("State", this.state);

    fetch("https://localhost:5001/api/User/login", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(this.state),
    })
      .then((res) => res.json())
      .then(
        (result) => {
          if (result) {
            console.log(result);
            sessionStorage.setItem("Auth", JSON.stringify(result));
            <Navigate to="/learnOrEarn"></Navigate>;
          }
        },
        (error) => {
          console.log(error);
        }
      );
    //sessionStorage.setItem("SignUp", JSON.stringify(item));
    //console.log(item);
  }

  render() {
    return (
      <>
        <div className="signup-form">
          <form>
            <h2>Log In</h2>
            <p>Please fill in this form to Login</p>
            <hr />
            <div className="form-group">
              <input
                type="email"
                className="form-control"
                //value={Email}
                onChange={(e) => {
                  this.setState({ Username: e.target.value });
                }}
                name="email"
                placeholder="Email"
                required="required"
              />
            </div>
            <div className="form-group">
              <input
                type="password"
                className="form-control"
                //value={Password}
                onChange={(e) => {
                  this.setState({ Password: e.target.value });
                }}
                name="password"
                placeholder="Password"
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
                onClick={() => this.login()}
              >
                Login
              </button>
            </div>
          </form>
          <div className="hint-text">
            Dont have an account? <a href="#">SignUp here</a>
          </div>
        </div>
      </>
    );
  }
}*/

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { LearnOrEarn } from "react-router-dom";
//const [Error, setErrorMessage] = useState("");

function Login() {
  const [FirstName, setFirstName] = useState("");
  const [UserName, setUserName] = useState("");
  const [Password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  let Id = 0;
  const navigate = useNavigate();

  async function Login() {
    let item = {
      UserName,
      Password,
    };

    //console.warn(item);

    let result = await fetch("https://localhost:5001/api/User/login", {
      method: "POST",
      body: JSON.stringify(item),
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    });

    result = await result.json();
    if (result == "Unauthorized User") {
      console.warn("result", result);
      setErrorMessage("Login Failed!");
      //navigate("/register");
    } else {
      //result = await result.json();
      console.warn("result", result);
      localStorage.setItem("Auth", JSON.stringify(result));

      let user = JSON.parse(localStorage.getItem("Auth"));

      let Id2 = user.Id;

      let data = await fetch("https://localhost:5001/api/CheckStudent", {
        method: "POST",
        body: JSON.stringify({
          Id: Id2,
        }),
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      });
      data = await data.json();
      console.warn(data);
      if (data == "Student Exist") {
        console.warn("data", data);
        //alert("Hi");
        navigate("/studentdashboard");
      } else {
        navigate("/learnOrEarn");
      }
    }
  }

  return (
    <>
      <div className="signup-form">
        <form>
          <h2 className="text-clr-pprimary">Log In</h2>
          <p className="text-clr-pprimary">Please fill in this form to Login</p>
          <hr />
          <div className="form-group">
            <input
              type="email"
              className="form-control"
              value={UserName}
              onChange={(e) => setUserName(e.target.value)}
              name="email"
              placeholder="Email"
              required="required"
            />
          </div>
          <div className="form-group">
            <input
              type="password"
              className="form-control"
              value={Password}
              onChange={(e) => setPassword(e.target.value)}
              name="password"
              placeholder="Password"
              required="required"
            />
          </div>
          <div className="form-group">
            <label className="form-check-label">
              <input type="checkbox" required="required" /> I accept the{" "}
              <a href="#">Terms of Use</a> &amp; <a href="#">Privacy Policy</a>
            </label>
          </div>
          <div className="form-group">
            <button
              type="button"
              className="btn btn-primary btn-lg"
              onClick={Login}
            >
              Log In
            </button>
          </div>

          <div className="form-group">
            {errorMessage && (
              <h4 className="error text-danger"> {errorMessage} </h4>
            )}
          </div>
        </form>
        <div className="hint-text">
          Dont have an account? <a href="#">Register here</a>
        </div>
      </div>
    </>
  );
}
export default Login;
