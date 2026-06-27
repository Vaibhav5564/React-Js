import React, { useState } from "react";

export default function About() {
  const [btnText, setBtnText] = useState("Enable Dark Mode");
  const [myStyle, setMyStyle] = useState({
    color: "black",
    backgroundColor: "white",
    border: "1.5px grey solid",
    borderRadius: "10px",
  });

  let darkMode = () => {
    if (myStyle.color === "black" && myStyle.backgroundColor === "white") {
      setMyStyle({
        color: "white",
        backgroundColor: "black",
        border: "3px white solid",
        borderRadius: "10px",
      });

      setBtnText("Disable Dark Mode");

    } else {
      setMyStyle({
        color: "black",
        backgroundColor: "white",
        border: "3px grey solid",
        borderRadius: "10px",
      });
      setBtnText("Enable Dark Mode");
    }
  };
  return (
    <>
      <section className="container my-5" style={myStyle}>
        <div className="row align-items-center">
          <div className="col-md-3 mb-4 mb-md-0"></div>

          <div className="col-md-6">
            <h2 className="fw-bold text-primary my-2">About Us</h2>
            <p className="my-4">
              We are passionate about creating modern and user-friendly web
              applications. Our goal is to provide high-quality solutions using
              the latest technologies.
            </p>
            <p my-2>Contact On - vaibhavadsul1804@gmail.com</p>
            <button className="btn btn-danger mb-3 " onClick={darkMode}>
              {btnText}
            </button>
          </div>
        </div>
      </section>
    </>
  );
}
