import React, { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { LearnOrEarn } from "react-router-dom";
import emailjs from "emailjs-com";
function Register() {
  const [FirstName, setFirstName] = useState("");
  const [LastName, setLastName] = useState("");
  const [Email, setEmail] = useState("");
  const [UserName, setUserName] = useState("");
  const [Password, setPassword] = useState("");
  const [ConfirmPassword, setConfirmPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const navigate = useNavigate();
  const form = useRef();
  function sendEmail() {
    //e.preventDefault();

    emailjs
      .sendForm(
        "service_e8r05tb",
        "template_ua1zcpe",
        form.current,
        "vB9m6RqxuenJTKprn"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );

    //e.target.reset();
  }

  async function SignUp() {
    let item = {
      FirstName,
      LastName,
      Email,
      UserName,
      Password,
      ConfirmPassword,
    };
    //console.warn(item);

    let result = await fetch("https://localhost:5001/api/User", {
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
      localStorage.setItem("User-Info", JSON.stringify(result));
      //navigate("/learnOrEarn");
      sendEmail();
      setErrorMessage("Check Your Email To verify!");
    }
  }

  return (
    <>
      <div className="signup-form">
        <form ref={form}>
          <h2 className="text-clr-pprimary">Sign Up</h2>
          <p className="text-clr-pprimary">
            Please fill in this form to create an account!
          </p>
          <hr />
          <div className="form-group">
            <div className="row">
              <div className="col">
                <input
                  type="text"
                  className="form-control"
                  value={FirstName}
                  onChange={(e) => setFirstName(e.target.value)}
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
                  onChange={(e) => setLastName(e.target.value)}
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
              onChange={(e) => setEmail(e.target.value)}
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
              onChange={(e) => setUserName(e.target.value)}
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
              onChange={(e) => setPassword(e.target.value)}
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
              onChange={(e) => setConfirmPassword(e.target.value)}
              name="confirm_password"
              placeholder="Confirm Password"
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
              onClick={SignUp}
            >
              Sign Up
            </button>
          </div>
          <div className="form-group">
            {errorMessage && (
              <h4 className="error text-danger"> {errorMessage} </h4>
            )}
          </div>
        </form>
        <div className="hint-text">
          Already have an account? <a href="#">Login here</a>
        </div>
      </div>
    </>
  );
}
export default Register;
