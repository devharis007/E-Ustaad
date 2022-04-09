import React, { Component } from "react";
import { Link } from "react-router-dom";
import logo from "./images/logo.png"; // with import
export class LearnOrEarnNav extends Component {
  async isVerifiedUser() {
    let userDetail = JSON.parse(localStorage.getItem("User-Info"));
    let isVerified;
    let Id;
    let idData = userDetail.Id;
    let data = "Verified";
    let result = await fetch("https://localhost:5001/api/User", {
      method: "PUT",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        isVerified: data,
        Id: idData,
      }),
    });
    result = await result.json();
    if (result) {
      console.warn("result", result);
      //sessionStorage.setItem("User-Info", JSON.stringify(result));
      //navigate("/learnOrEarn");
      //sendEmail(e);
    }
  }

  logout = (e) => {
    e.preventDefault();
    localStorage.removeItem("Auth");
    localStorage.removeItem("User-Info");
    //navigate("/");
    console.log("clicked");
  };
  /*logout() {
    //const navigate = useNavigate();
    localStorage.removeItem("Auth");
    localStorage.removeItem("User-Info");
    //navigate("/");
    <Navigate to="/"></Navigate>;
  }*/
  getLoggedInUser() {
    let userDetail = JSON.parse(localStorage.getItem("User-Info"));
    let Auth = JSON.parse(localStorage.getItem("Auth"));
    let UserName;
    let AuthUser;

    this.isVerifiedUser();

    if (userDetail != null) {
      UserName = userDetail.FirstName + " " + userDetail.LastName;
      return UserName;
    } else {
      AuthUser = Auth.FirstName + " " + Auth.LastName;
      return AuthUser;
    }
    // console.log(UserName);
    // return UserName;
  }

  render() {
    return (
      <nav className="navbar navbar-expand-lg ">
        <div className="container-fluid">
          <Link to="#" className="navbar-brand">
            <img src={logo} height="150" alt="CoolBrand" />
          </Link>
          <button
            type="button"
            className="navbar-toggler"
            data-bs-toggle="collapse"
            data-bs-target="#navbarCollapse"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse justify-content-between"
            id="navbarSupportedContent"
          >
            <form className="d-flex">
              <input
                className="form-control search-bar me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button className="btn btn-outline-primary" type="submit">
                Search
              </button>
            </form>
            <div className="d-flex">
              <div className="btn-group">
                <button
                  type="button"
                  className="btn btn-primary clr-pprimary dropdown-toggle  dropdown-width"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  {this.getLoggedInUser()}
                </button>
                <ul className="dropdown-menu">
                  <li>
                    <a className="dropdown-item" href="#">
                      Profile
                    </a>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <a onClick={this.logout} className="dropdown-item" href="#">
                      Logout
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </nav>
    );
  }
}
