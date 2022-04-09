import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import { faFacebookF } from "@fortawesome/free-brands-svg-icons";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import logo from "./images/logo.png";

import "./footer.css";

function Footer() {
  return (
    <footer className="text-center text-lg-start bg-light text-muted  ">
      <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom back-ground-color">
        <div className="me-5 d-none d-lg-block ">
          <span className="text-color-size">
            Get connected with us on social networks:
          </span>
        </div>
        <div>
          <a href="https://wwww.facebook.com/eustaad">
            <FontAwesomeIcon icon={faFacebookF} className="m-2 icon-color" />{" "}
          </a>

          <a href="https://wwww.twitter.com/eustaad">
            <FontAwesomeIcon icon={faTwitter} className="m-2 icon-color" />{" "}
          </a>

          <a href="https://wwww.instagram.com/eustaad">
            <FontAwesomeIcon icon={faInstagram} className="m-2 icon-color" />{" "}
          </a>

          <a href="https://www.github.com/eustaad">
            <FontAwesomeIcon icon={faGithub} className="m-2 icon-color" />{" "}
          </a>
        </div>
      </section>

      <section className="center-color">
        <div className="container text-center text-md-start mt-5 p-5">
          <div className="row mt-3">
            <div className="col-lg-4 col-xl-4">
              <img src={logo} alt="" className="logo" />
            </div>
            <div className="col-lg-3 col-xl-3  B1 mt-3">
              <h6 className="text-uppercase fw-bold mb-4 color-black-bold ">
                <div className="">E-Ustaad</div>
              </h6>
              <p className="color-black ">
                E-Ustaad is the E-learning platform Since 2021 . E-Ustaad is the
                platform for students and teachers where both connect with each
                other to learn more and earn more
              </p>
            </div>

            <div className="col-md-2 col-lg-3 col-xl-2 mb-4 mt-3 M">
              <h6 className="text-uppercase fw-bold mb-4 color-black-bold ">
                About Us
              </h6>
              <p>
                <a href="#!" className="text-reset color-black">
                  Story
                </a>
              </p>
              <p>
                <a href="#!" className="text-reset color-black">
                  Careers
                </a>
              </p>

              <p>
                <a href="#!" className="text-reset color-black">
                  Technologies
                </a>
              </p>
            </div>

            <div className="col-md-4 col-lg-4 col-xl-3 mx-auto mb-md-0 mb-4  mt-3 M1 ">
              <h6 className="text-uppercase fw-bold mb-4  color-black-bold">
                Contact{" "}
              </h6>
              <p className="color-black">
                <FontAwesomeIcon icon={faHome} className="margin-r" /> Valenica,
                Lahore, Punjab
              </p>
              <p className="color-black">
                <FontAwesomeIcon icon={faEnvelope} className="margin-r" />
                info@example.com
              </p>
              <p className="color-black">
                <FontAwesomeIcon icon={faPhone} className="margin-r" /> + 92 306
                4526 821
              </p>
            </div>
          </div>
        </div>
      </section>

      <div className="text-center p-4 last-bar-color">
        © 2021 Copyright :
        <a
          className="text-reset fw-bo ld text-white"
          href="https://E-ustaad.com/"
        >
          <span> E-Ustaad Technologies</span>
        </a>
      </div>
    </footer>
  );
}
export default Footer;
