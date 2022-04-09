import React, { Component } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF } from "@fortawesome/free-brands-svg-icons";
import { faStripeS } from "@fortawesome/free-brands-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faPhone } from "@fortawesome/free-solid-svg-icons";

export class StudentDashboard extends Component {
  render() {
    return (
      <>
        <div className="container-fluid pb-5">
          <div className="row content">
            <div className="col-sm-2 sidenav text-center gfg">
              <div className="well">
                <h3>Recents</h3>
                <p>.Lorem ipsum dolor sit amet</p>
                <p>.Lorem ipsum dolor sit amet</p>
                <p>.Lorem ipsum dolor sit amet</p>
                <p>.Lorem ipsum dolor sit amet</p>
                <p>.Lorem ipsum dolor sit amet</p>
                <p>.Lorem ipsum dolor sit amet</p>
                <p>.Lorem ipsum dolor sit amet</p>
                <p>.Lorem ipsum dolor sit amet</p>
                <p>.Lorem ipsum dolor sit amet</p>
                <p>.Lorem ipsum dolor sit amet</p>
                <p>.Lorem ipsum dolor sit amet</p>
                <p>.Lorem ipsum dolor sit amet</p>
                <p>.Lorem ipsum dolor sit amet</p>
                <p>.Lorem ipsum dolor sit amet</p>
                <p>.Lorem ipsum dolor sit amet</p>
                <p>.Lorem ipsum dolor sit amet</p>
                <p>.Lorem ipsum dolor sit amet</p>
              </div>
            </div>
            <div className="col-sm-10  text-center">
              <h1 className="text-clr-pprimary">
                Welcome To Student Dashboard
              </h1>
              <div className="row p-3">
                <div className="col-sm-3 offset-3">
                  <div className="">
                    <Link to="/postquery">
                      <button
                        type="button"
                        className="btn clr-pprimary btn-primary btn-text p-5"
                      >
                        Post Query
                      </button>
                    </Link>
                  </div>
                </div>
                <div class="col-sm-3">
                  <div className="">
                    <Link to="/registerAsStudent">
                      <button
                        type="button"
                        className="btn clr-pprimary btn-primary btn-text p-5"
                      >
                        Post Assesment
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
              <div class="row p-3">
                <div class="col-sm-3 offset-3">
                  <div className="">
                    <Link to="/registerAsStudent">
                      <button
                        type="button"
                        className="btn clr-pprimary btn-primary btn-text p-5"
                      >
                        Enroll Course
                      </button>
                    </Link>
                  </div>
                </div>
                <div class="col-sm-3">
                  <div className="">
                    <Link to="/registerAsStudent">
                      <button
                        type="button"
                        className="btn clr-pprimary btn-primary btn-text p-5"
                      >
                        Hire Teacher
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}
