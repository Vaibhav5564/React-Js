import React, { useState } from "react";

export default function TextForm(props) {
  const [text, setText] = useState("");
  const [result, setResult] = useState("");

  const handleUpClick = () => {
    setResult(text.toUpperCase());
  };

  const handleLoClick = () => {
    setResult(text.toLowerCase());
  };

  const handleOnChange = (event) => {
    setText(event.target.value);
  };

  const handleTilClick = () => {
    let newText = text
      .toLowerCase()
      .split(" ")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");

    setResult(newText);
  };

  const handleSnClick = () => {
    setResult(text.replaceAll(" ", "_"));
  };

  const handleClrClick = () => {
    setText("");
    setResult("");
  };

  return (
    <>
      <div className="container">
        <br />

        <h1 className="text-center text-primary fw-bold my-4">
          {props.heading}
        </h1>

        {/* Input Text Area */}
        <textarea
          className="form-control border-2"
          onChange={handleOnChange}
          value={text}
          placeholder="Enter Text Here"
          rows="8"
        />

        <br />

        <div className="d-flex gap-2 flex-wrap">
          <button
            className="btn btn-secondary me-3 flex-fill"
            onClick={handleLoClick}
          >
            LowerCase
          </button>

          <button
            className="btn btn-secondary me-3 flex-fill"
            onClick={handleUpClick}
          >
            Uppercase
          </button>

          <button
            className="btn btn-secondary me-3 flex-fill"
            onClick={handleTilClick}
          >
            TitleCase
          </button>

          <button
            className="btn btn-secondary me-3 flex-fill"
            onClick={handleSnClick}
          >
            SnakeCase
          </button>

          <button
            className="btn btn-secondary me-3 flex-fill"
            onClick={handleClrClick}
          >
            Clear
          </button>
        </div>
      </div>

      {/* Summary */}
      <div className="container mt-5">
        <h2>Your Summary</h2>

        <p>Characters - {text.length}</p>

        <p>
          Words - {text.trim() === "" ? 0 : text.trim().split(/\s+/).length}
        </p>
      </div>

      {/* Output Text Area */}
      <div className="container mt-4">
        <h2>Output</h2>

        <textarea
          className="form-control border-2"
          value={result}
          readOnly
          rows="8"
        />
      </div>
    </>
  );
}

