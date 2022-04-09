import React, { Component } from "react";
import { Link } from "react-router-dom";
import logo from "./images/logo.png"; // with import

export class Header extends Component {
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
            <div className="d-flex column-gap">
              <div className="navbar-nav">
                <Link to="/postquery" className="nav-item nav-link">
                  <button
                    className="btn btn-primary clr-pprimary"
                    type="submit"
                  >
                    Post query
                  </button>
                </Link>
              </div>
              <div className="navbar-nav">
                <Link to="/login" className="nav-item nav-link">
                  <button
                    className="btn btn-primary clr-pprimary"
                    type="submit"
                  >
                    Log in
                  </button>
                </Link>
              </div>
              <div className="navbar-nav">
                <Link to="/register" className="nav-item nav-link">
                  <button
                    className="btn btn-primary clr-pprimary"
                    type="submit"
                  >
                    Sign up
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </nav>
    );
  }
}
