/*import React, { Component } from "react";
import { Variables } from "./Variables";
export class Department extends Component {
  constructor(props) {
    super(props);
    this.state = {
      departments: [],
      modalTitle: "",
      DepartmentName: "",
      DepartmentId: 0,
    };
  }
  refreshList() {
    fetch(Variables.API_URL + "department")
      .then((response) => response.json())
      .then((data) => {
        this.setState({ departments: data });
      });
  }
  componentDidMount() {
    this.refreshList();
  }
  changeDepartmentName = (e) => {
    this.setState({ DepartmentName: e.target.value });
  };
  addClick() {
    this.setState({
      modalTitle: "Add Department",
      DepartmentId: 0,
      DepartmentName: "",
    });
  }
  editClick(dep) {
    this.setState({
      modalTitle: "Edit Department",
      DepartmentId: dep.DepartmentId,
      DepartmentName: dep.DepartmentName,
    });
  }
  createClick() {
    fetch(Variables.API_URL + "department", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        DepartmentName: this.state.DepartmentName,
      }),
    })
      .then((res) => res.json())
      .then(
        (result) => {
          alert(result);
          this.refreshList();
        },
        (error) => {
          alert("Failed");
        }
      );
  }
  updateClick() {
    fetch(Variables.API_URL + "department", {
      method: "PUT",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        DepartmentId: this.state.DepartmentId,
        DepartmentName: this.state.DepartmentName,
      }),
    })
      .then((res) => res.json())
      .then(
        (result) => {
          alert(result);
          this.refreshList();
        },
        (error) => {
          alert("Failed");
        }
      );
  }
  deleteClick(id) {
    if (window.confirm("Are you sure?")) {
      fetch(Variables.API_URL + "department/" + id, {
        method: "DELETE",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      })
        .then((res) => res.json())
        .then(
          (result) => {
            alert(result);
            this.refreshList();
          },
          (error) => {
            alert("Failed");
          }
        );
    }
  }

  render() {
    const { departments, modalTitle, DepartmentId, DepartmentName } =
      this.state;
    return (
      <div>
        <button
          type="button"
          className="btn btn-primary m-2 float-end"
          data-bs-toggle="modal"
          data-bs-target="#exampleModal"
          onClick={() => this.addClick()}
        >
          Add Department
        </button>
        <table className="table table-striped">
          <thead>
            <tr>
              <th>Department Id</th>
              <th>Department Name</th>
              <th>Options</th>
            </tr>
          </thead>
          <tbody>
            {departments.map((dep) => (
              <tr key={dep.DepartmentId}>
                <td>{dep.DepartmentId}</td>
                <td>{dep.DepartmentName}</td>
                <td>
                  <button
                    type="button"
                    className="btn btn-light mr-1"
                    data-bs-toggle="modal"
                    data-bs-target="#exampleModal"
                    onClick={() => this.editClick(dep)}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      className="bi bi-pencil-square"
                      viewBox="0 0 16 16"
                    >
                      <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z" />
                      <path
                        fillRule="evenodd"
                        d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"
                      />
                    </svg>
                  </button>

                  <button
                    type="button"
                    className="btn btn-light mr-1"
                    onClick={() => this.deleteClick(dep.DepartmentId)}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      className="bi bi-trash-fill"
                      viewBox="0 0 16 16"
                    >
                      <path d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0z" />
                    </svg>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        <div
          className="modal fade"
          id="exampleModal"
          tabIndex="-1"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-lg modal-dialog-centered">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">{modalTitle}</h5>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>

              <div className="modal-body">
                <div className="input-group mb-3">
                  <span className="input-group-text">DepartmentName</span>
                  <input
                    type="text"
                    className="form-control"
                    value={DepartmentName}
                    onChange={this.changeDepartmentName}
                  />
                </div>
                {DepartmentId == 0 ? (
                  <button
                    type="button"
                    className="btn btn-primary float-start"
                    onClick={() => this.createClick()}
                  >
                    Create
                  </button>
                ) : null}
                {DepartmentId != 0 ? (
                  <button
                    type="button"
                    className="btn btn-primary float-start"
                    onClick={() => this.updateClick()}
                  >
                    Update
                  </button>
                ) : null}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
////New System;
import React, { Component, useState } from "react";
import { Variables } from "./Variables";
import { Navigate } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
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
  onNavigateHome() {
    BrowserRouter.push("/learnorEarn");
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
    //sessionStorage.setItem("SignUp", JSON.stringify(item));
    //console.log(item);
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
*/
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { LearnOrEarn } from "react-router-dom";
function RegisterAsStudent() {
  //const [FirstName, setFirstName] = useState("");
  //const [LastName, setLastName] = useState("");
  //const [Email, setEmail] = useState("");
  //const [UserName, setUserName] = useState("");
  //const [Password, setPassword] = useState("");
  const [Contact, setContact] = useState("");
  const [JoinAs, setJoinAs] = useState("");
  const [Gender, setGender] = useState("");
  const [Picture, setPicture] = useState("");

  //const [ConfirmPassword, setConfirmPassword] = useState("");

  let GetFirstName;
  let GetLastName;
  let GetEmail;
  let GetUserName;
  let GetPassword;
  let UserId;

  let userDetail = JSON.parse(localStorage.getItem("User-Info"));
  let Auth = JSON.parse(localStorage.getItem("Auth"));

  let name;
  let AuthUser;

  if (userDetail != null) {
    UserId = userDetail.Id;
    GetFirstName = userDetail.FirstName;
    GetLastName = userDetail.LastName;
    GetEmail = userDetail.Email;
    GetUserName = userDetail.UserName;
    GetPassword = userDetail.Password;
    console.warn("Hi");
  } else if (Auth != null) {
    UserId = Auth.Id;
    GetFirstName = Auth.FirstName;
    GetLastName = Auth.LastName;
    GetEmail = Auth.Email;
    GetUserName = Auth.UserName;
    GetPassword = Auth.Password;
    console.warn("Hi");
  } else {
    console.warn("Nothing Found");
  }
  // console.log(UserName);
  // return UserName;

  const navigate = useNavigate();

  async function RegisterAsStudent() {
    let item = {
      //FirstName,
      //LastName,
      //Email,
      //UserName,
      //Password,
      //ConfirmPassword,
      Gender,
      Picture,
      JoinAs,
      Contact,
      UserId,
    };
    //console.warn(item);

    let result = await fetch("https://localhost:5001/api/student/register", {
      method: "POST",
      body: JSON.stringify(item),
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    });

    result = await result.json();
    if (result) {
      console.warn("result", result);
      //sessionStorage.setItem("Student Info", JSON.stringify(result));
      navigate("/studentdashboard");
    }
  }

  return (
    <div>
      <div className="signup-form">
        <form>
          <h2>Student Registration</h2>
          <p>Please fill in this form to register as student!</p>
          <hr />
          <div className="form-group">
            <div className="row">
              <div className="col">
                <input
                  type="text"
                  className="form-control"
                  value={GetFirstName}
                  //onChange={(e) => setFirstName(e.target.value)}
                  name="first_name"
                  placeholder="First Name"
                  required="required"
                  readOnly
                />
              </div>
              <div className="col">
                <input
                  type="text"
                  className="form-control"
                  value={GetLastName}
                  //onChange={(e) => setLastName(e.target.value)}
                  name="last_name"
                  placeholder="Last Name"
                  required="required"
                  readOnly
                />
              </div>
            </div>
          </div>
          <div className="form-group">
            <input
              type="email"
              className="form-control"
              value={GetEmail}
              //onChange={(e) => setEmail(e.target.value)}
              name="email"
              placeholder="Email"
              required="required"
              readOnly
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              value={GetUserName}
              //onChange={(e) => setUserName(e.target.value)}
              name="username"
              placeholder="username"
              required="required"
              readOnly
            />
          </div>
          <div className="form-group">
            <input
              type="password"
              className="form-control"
              value={GetPassword}
              // onChange={(e) => setPassword(e.target.value)}
              name="password"
              placeholder="Password"
              required="required"
              readOnly
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              value={Contact}
              onChange={(e) => setContact(e.target.value)}
              name="contact"
              placeholder="contact"
              required="required"
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              value={Gender}
              onChange={(e) => setGender(e.target.value)}
              name="Gender"
              placeholder="Gender"
              required="required"
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              value={JoinAs}
              onChange={(e) => setJoinAs(e.target.value)}
              name="JoinAs"
              placeholder="JoinAs"
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
              onClick={RegisterAsStudent}
            >
              Register
            </button>
          </div>
        </form>
        <div className="hint-text text-clr-pprimary">
          Already have an account?{" "}
          <a class="text-clr-pprimary" href="#">
            Login here
          </a>
        </div>
      </div>
    </div>
  );
}
export default RegisterAsStudent;
