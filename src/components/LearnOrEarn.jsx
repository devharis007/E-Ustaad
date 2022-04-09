import React, { Component } from "react";
import { Link } from "react-router-dom";
export class LearnOrEarn extends Component {
  render() {
    return (
      <div className="d-flex flex-column align-items-center mb-5 mt-3">
        <h1 className="text-clr-pprimary learnNEarn mb-5">Learn & Earn</h1>
        <div className="d-flex">
          <Link to="/registerAsStudent">
            <button
              type="button"
              className="btn clr-pprimary btn-primary btn-text p-5"
            >
              Register As Student
            </button>
          </Link>
        </div>
        <div className="learnOrEarn d-flex mt-5">
          <Link to="/registerAsTeacher">
            <button
              type="button"
              className="btn btn-text clr-pprimary btn-primary p-5"
            >
              Register As Teacher
            </button>
          </Link>
        </div>
      </div>
    );
  }
}
