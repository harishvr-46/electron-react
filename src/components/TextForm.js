import React, { useState } from "react";

export default function TextForm(props) {
  const handleUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
  };

  const handleLowClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
  };

  const handleOnChange = (event) => {
    setText(event.target.value);
  };
  const [text, setText] = useState("Click Here");

  const [myStyle, setmyStyle] = useState({
      color: 'black', 
      backgroundColor: 'white'
  })


  return (
    <>



      <div className="container" style={{backgroundColor : props.mode==='dark'?'black':'white', color: props.mode==='dark'?'white': 'black'}}>
        <div className="form-group">
          <label htmlFor="exampleInputEmail1">{props.heading}</label>
          <textarea
            className="form-control"
            id="myBox"
            value={text}
            onChange={handleOnChange}
            rows="6"
            style={{backgroundColor : props.mode==='dark'?'black':'white', color: props.mode==='dark'?'white': 'black'}}
          />
        </div>
        <button className="btn btn-warning my-3 mr3" onClick={handleUpClick}>
          Convert To UpperCase
        </button>
        <button className="btn btn-danger my-3 mx-3" onClick={handleLowClick}>
          Convert To Lower Case
        </button>
      </div>
      <div className="container my-3" style={{backgroundColor : props.mode==='dark'?'black':'white', color: props.mode==='dark'?'white': 'black'}}>
        <h1>Text Summary</h1>
        <p>Preview = {text.length===0?'Enter Your Text to See Preview':text}</p>
        <p>Total No. of Characters = {text.length}</p>
        <p>Total No. of Words = {text.split(" ").length - 1}</p>
        <p>Total No. of Sentences = {text.split(".").length - 1}</p>
        <p>
          Time to read = {((text.split(" ").length - 1) * 0.008).toFixed(2)}{" "}
          Minutes.
        </p>
      </div>
    </>
  );
}
