import React, { useState } from "react";

export default function TextForm(props) {
  const [text, setText] = useState("enter your text");
  function handleOnUpClick() {
    console.log("button clicked");
    let newText = text.toUpperCase();
    setText(newText);
  }
  function handleonlcClick() {
    console.log("clickedfdsf");
    let newText = text.toLowerCase();
    setText(newText);
  }
  function handleonClearClick() {
    setText("");
  }
  function HandleOnChange(event) {
    console.log("changed");
    setText(event.target.value);
  }

  return (
    <div>
      <h1>{props.header}</h1>
      <div className="mb-3">
        <textarea
          value={text}
          onChange={HandleOnChange}
          className="form-control"
          id="exampleFormControlTextarea1"
          rows="8"
        ></textarea>
        <button className="btn btn-primary mx-3 my-3" onClick={handleOnUpClick}>
          convert to uppercase
        </button>
        <button className="btn btn-primary mx-3" onClick={handleonlcClick}>
          convert to lowercase
        </button>
        <button className="btn btn-primary mx-3" onClick={handleonClearClick}>
          clear
        </button>
      </div>
      <div className="container">
        <h1>text summary</h1>
        <p>
          {text === `` ? 0 : text.split` `.length} words and {text.length + ` `}
          charcters
        </p>
        <h2>text preview</h2>
        <p>{text}</p>
      </div>
    </div>
  );
}
