import React, { Component } from "react";
import b1 from "./images/b1.jpg"; // with import
import b2 from "./images/b2.jpg"; // with import
import b3 from "./images/b3.jpg"; // with import
import b4 from "./images/b4.jpg"; // with import
import b5 from "./images/b3.jpg"; // with import

export class Index extends Component {
  render() {
    return (
      <>
        <div
          id="carouselExampleSlidesOnly"
          className="carousel slide mb-5 p-4"
          data-bs-ride="carousel"
        >
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img
                height="500px"
                width="700px"
                src={b2}
                className="d-block w-100"
                alt="..."
              />
            </div>
            <div className="carousel-item">
              <img
                height="500px"
                width="700px"
                src={b3}
                className="d-block w-100"
                alt="..."
              />
            </div>
            <div className="carousel-item">
              <img
                height="500px"
                width="700px"
                src={b5}
                className="d-block w-100"
                alt="..."
              />
            </div>
          </div>
        </div>
      </>
    );
  }
}
