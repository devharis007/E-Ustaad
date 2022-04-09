import React, { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
function PostQuery() {
  const [Title, setTitle] = useState("");
  const [Description, setDescription] = useState("");
  const [SkillsRequired, setSkillsRequired] = useState("");
  let StudentId = 0;
  const navigate = useNavigate();

  async function PostQuery() {
    let item = {
      Title,
      Description,
      SkillsRequired,
    };
    //console.warn(item);

    let result = await fetch("https://localhost:5001/api/PostQuery", {
      method: "POST",
      body: JSON.stringify(item),
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    });

    result = await result.json();
    if (result) {
      console.warn("Query", result);
      //localStorage.setItem("User-Info", JSON.stringify(result));
      //navigate("/learnOrEarn");
    }
  }

  return (
    <>
      <div className="signup-form form-width">
        <form>
          <h2 className="text-clr-pprimary">Add Query</h2>
          <p className="text-clr-pprimary">
            Please fill in this form to post your query!
          </p>
          <hr />
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              value={Title}
              onChange={(e) => setTitle(e.target.value)}
              name="title"
              placeholder="Title"
              required="required"
            />
          </div>
          <div class="form-group">
            <textarea
              class="form-control textarea-height"
              type="text"
              value={Description}
              onChange={(e) => setDescription(e.target.value)}
              rows="3"
              name="description"
              placeholder="Description"
              required="required"
            ></textarea>
          </div>
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              value={SkillsRequired}
              onChange={(e) => setSkillsRequired(e.target.value)}
              name="skillsrequired"
              placeholder="Skills Required"
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
              onClick={PostQuery}
            >
              Post Query
            </button>
          </div>
        </form>
      </div>
    </>
  );
}
export default PostQuery;
